// ** React Imports
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
import { store } from '@store/store'
// import { deleteInvoice } from '../store'

import EditDepartment from "../EditDepartment"

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
export const columns = [
  {
    name: "عنوان",
    minWidth: '200px',
    sortable: true,
    sortField: "fName",
    cell: (row) => (
        <div className="fw-bold fs-5">{row.depName}</div>     
    ),
  },
  {
    name: "ساختمان",
    minWidth: '300px',
    sortable: true,
    sortField: "userRoles",
    cell: (row) => `${row.building.buildingName} طبقه ${row.building.floor}`
  },
  {
    name: 'اقدام',
    minWidth: '150px',
    cell: row => (
      <div className='column-action d-flex align-items-center'>
        <EditDepartment department={row}/>
      </div>
    )
  }
]

