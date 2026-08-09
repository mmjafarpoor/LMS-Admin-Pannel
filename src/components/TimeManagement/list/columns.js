// ** React Imports
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { toShamsiDateTime } from "../../../utility/dateFormatter"

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
import { store } from '@store/store'

// ** Reactstrap Imports
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledTooltip,
  UncontrolledDropdown
} from 'reactstrap'

// ** Third Party Components
import {
  Eye,
  Send,
  Edit,
  Copy,
  Save,
  Info,
  Trash,
  PieChart,
  Download,
  TrendingUp,
  CheckCircle,
  MoreVertical,
  ArrowDownCircle
} from 'react-feather'

import { updateTimeLineStatus } from '../store'

// ** Vars
const invoiceStatusObj = {
  Sent: { color: 'light-secondary', icon: Send },
  Paid: { color: 'light-success', icon: CheckCircle },
  Draft: { color: 'light-primary', icon: Save },
  Downloaded: { color: 'light-info', icon: ArrowDownCircle },
  'Past Due': { color: 'light-danger', icon: Info },
  'Partial Payment': { color: 'light-warning', icon: PieChart }
}

// ** Table columns
export const columns = (dispatch) => [
  {
    name: "نام گروه",
    minWidth: '200px',
    sortable: true,
    sortField: "fName",
    cell: (row) => (
        <div className="fw-bold fs-5">{row.coursegroup.groupName}</div>     
    ),
  },
  {
    name: "ساعت شروع",
    minWidth: '150px',
    sortable: true,
    sortField: "fName",
    cell: (row) => (
        <div className="fw-bold fs-5">{row.startTime}</div>     
    ),
  },
  {
    name: "ساعت پایان",
    minWidth: '150px',
    sortable: true,
    sortField: "fName",
    cell: (row) => (
        <div className="fw-bold fs-5">{row.endTime}</div>     
    ),
  },
  {
    name: "تاریخ شروع",
    minWidth: '300px',
    sortable: true,
    sortField: "fName",
    cell: (row) => (
        <div className="fw-bold fs-5" style={{ direction: "ltr" }}>{toShamsiDateTime(row.startDate)}</div>
    ),
  },
  {
    name: "حالت حضور",
    minWidth: '100px',
    sortable: true,
    sortField: "active",
    cell: (row) => (
      <Badge color={row.AP ? "light-success px-1" : "light-danger px-1"} pill>
        {row.AP ? "می‌تواند" : "نمی‌تواند"}
      </Badge>
    ),
  },
  {
    name: 'عملیات',
    minWidth: '100px',
    cell: row => (
      <div className='column-action d-flex align-items-center'>
        <UncontrolledDropdown>
          <DropdownToggle tag='span'>
            <MoreVertical size={17} className='cursor-pointer' />
          </DropdownToggle>
          <DropdownMenu end>
            <DropdownItem className='w-100' onClick={() => dispatch(updateTimeLineStatus({id:row.id, active:!row.AP}))}>
              <Edit size={14} className='me-50' />
              <span className='align-middle'>تغییر وضعیت</span>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    )
  }
]

