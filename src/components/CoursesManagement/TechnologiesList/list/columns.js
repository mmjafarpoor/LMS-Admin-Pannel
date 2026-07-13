// ** React Imports
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
import { store } from '@store/store'
// import { deleteInvoice } from '../store'

import EditTech from "../EditTech"

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
    minWidth: '100px',
    sortable: true,
    sortField: "fName",
    cell: (row) => (
      <div className='d-flex justify-content-left align-items-center gap-1'>
        <Avatar className='me-50' width='32' height='32' img={row.iconAddress} /> 
        <div className="fw-bold fs-5">{row.techName}</div>     
      </div>
    ),
  },
  {
    name: "توضیحات",
    minWidth: '500px',
    sortable: true,
    sortField: "userRoles",
    cell: (row) => row.describe,
  },
  {
    name: 'اقدام',
    minWidth: '100px',
    cell: row => (
      <div className='column-action d-flex align-items-center'>
        <EditTech/>
      </div>
    )
  }
]

