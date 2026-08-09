// ** React Imports
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { toShamsiDateTime } from "../../../../utility/dateFormatter"

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
import { store } from '@store/store'
import { activeNews } from '../store'

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
    name: "عنوان",
    minWidth: '230px',
    sortable: true,
    sortField: "fName",
    cell: (row) => (
      <div className='d-flex justify-content-left align-items-center'>
        <Avatar className='me-50' width='32' height='32' img={row.currentImageAddress} /> 
        <div className="fw-bold fs-5">{row.title}</div>     
      </div>
    ),
  },
  {
    name: "آخرین آپدیت",
    minWidth: '250px',
    sortable: true,
    sortField: "userRoles",
    cell: (row) => (
        <div className="fw-bold fs-5" style={{ direction: "ltr" }}>{toShamsiDateTime(row.updateDate)}</div>
    ),
  },
  {
    name: "دسته بندی",
    minWidth: '120px',
    sortable: true,
    sortField: "profileCompletionPercentage",
    cell: (row) => row.newsCatregoryName,
  },
  {
    name: "تعداد بازدید",
    minWidth: '120px',
    sortable: true,
    sortField: "profileCompletionPercentage",
    cell: (row) => row.currentView,
  },
  {
    name: "وضعیت",
    minWidth: '110px',
    sortable: true,
    sortField: "active",
    cell: (row) => (
      <Badge color={row.active ? "light-success px-1" : "light-danger px-1"} pill>
        {row.active ? "فعال" : "غیرفعال"}
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
            <DropdownItem onClick={() => dispatch(activeNews({newsId: row.id, active: !row.active}))} className='w-100'>
              <Edit size={14} className='me-50' />
              <span className='align-middle'>تغییر وضعیت</span>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    )
  }
]

