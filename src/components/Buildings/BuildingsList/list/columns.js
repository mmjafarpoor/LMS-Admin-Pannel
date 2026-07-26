// ** React Imports
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
import { store } from '@store/store'
import EditBuilding from '../EditBuilding'
import { activeBuilding } from '../store'

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
    name: "نام و طبقه ساختمان",
    minWidth: '400px',
    sortable: true,
    sortField: "fName",
    cell: (row) => (
        <div className="fw-bold fs-5">{row.buildingName} طبقه {row.floor}</div>     
    ),
  },
  {
    name: "وضعیت",
    minWidth: '200px',
    sortable: true,
    sortField: "active",
    cell: (row) => (
      <Badge color={row.active ? "light-success px-1" : "light-danger px-1"} pill>
        {row.active ? "فعال" : "غیرفعال"}
      </Badge>
    ),
  },
  {
    name: "اقدام",
    minWidth: '150px',
    sortable: true,
    sortField: "fName",
    cell: (row) => <EditBuilding building={row}/>
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
            <DropdownItem  onClick={() => dispatch(activeBuilding({buildingId: row.id, active: !row.active}))}>
              <Edit size={14} className='me-50' />
              <span className='align-middle'>تغییر وضعیت</span>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    )
  }
]

