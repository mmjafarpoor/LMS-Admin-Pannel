// ** React Imports
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
import { store } from '@store/store'
import { deleteInvoice } from '../store'

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
  // Sent: { color: 'light-secondary', icon: Send },
  Paid: { color: 'light-success', icon: CheckCircle },
  Draft: { color: 'light-primary', icon: Save },
  Downloaded: { color: 'light-info', icon: ArrowDownCircle },
  'Past Due': { color: 'light-danger', icon: Info },
  'Partial Payment': { color: 'light-warning', icon: PieChart }
}

// ** renders client column
const renderClient = row => {
  const stateNum = Math.floor(Math.random() * 6),
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
    color = states[stateNum]

  // if (row.avatar.length) {
  //   return <Avatar className='me-50' img={row.avatar} width='32' height='32' />
  // } else {
  //   return <Avatar color={color} className='me-50' content={row.client ? row.client.name : 'John Doe'} initials />
  // }
}

// ** Table columns
export const columns = [
  {
    name: 'کاربر',
    sortable: true,
    minWidth: '250px',
    sortField: 'client.name',
    // selector: row => row.client.name,
    cell: row => {
      const name = row.client ? row.client.name : 'John Doe',
        email = row.client ? row.client.companyEmail : 'johnDoe@email.com'
      return (
        <div className='d-flex justify-content-left align-items-center'>
          {renderClient(row)}
          <div className='d-flex flex-column'>
            <h6 className='user-name text-truncate mb-0'>{name}</h6>
            {/* <small className='text-truncate text-muted mb-0'>{email}</small> */}
          </div>
        </div>
      )
    }
  },
  {
    name: 'عنوان نظر',
    sortable: true,
    minWidth: '150px',
    sortField: 'total',
    // selector: row => row.total,
    cell: row => <span>${row.total || 0}</span>
  },
  {
    name: 'توضیحات نظر',
    sortable: true,
    minWidth: '150px',
    sortField: 'total',
    // selector: row => row.total,
    cell: row => <span>${row.total || 0}</span>
  },
  {
    sortable: true,
    minWidth: '150px',
    name: 'نام دوره',
    sortField: 'dueDate',
    cell: row => row.dueDate
    // selector: row => row.dueDate
  },
  {
    sortable: true,
    name: 'وضعیت',
    minWidth: '164px',
    sortField: 'balance',
    // selector: row => row.balance,
    cell: row => {
      return  (
        <Badge className="fs-5 px-1" color='light-success' pill>
          تایید شده
        </Badge>
      )
    }
  },
  {
    sortable: true,
    minWidth: '150px',
    name: 'پاسخ‌ها',
    sortField: 'dueDate',
    cell: row => row.dueDate
    // selector: row => row.dueDate
  },
  {
    name: 'عملیات',
    minWidth: '110px',
    cell: row => (
      <div className='column-action d-flex align-items-center'>
        <Link to={`/apps/invoice/preview/${row.id}`} id={`pw-tooltip-${row.id}`}>
          <Eye size={17} className='mx-1' />
        </Link>
        <UncontrolledTooltip placement='top' target={`pw-tooltip-${row.id}`}>
          Preview Invoice
        </UncontrolledTooltip>
        <UncontrolledDropdown>
          <DropdownToggle tag='span'>
            <MoreVertical size={17} className='cursor-pointer' />
          </DropdownToggle>
          <DropdownMenu end>
            <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
              <Download size={14} className='me-50' />
              <span className='align-middle'>Download</span>
            </DropdownItem>
            <DropdownItem tag={Link} to={`/apps/invoice/edit/${row.id}`} className='w-100'>
              <Edit size={14} className='me-50' />
              <span className='align-middle'>Edit</span>
            </DropdownItem>
            <DropdownItem
              tag='a'
              href='/'
              className='w-100'
              onClick={e => {
                e.preventDefault()
                store.dispatch(deleteInvoice(row.id))
              }}
            >
              <Trash size={14} className='me-50' />
              <span className='align-middle'>Delete</span>
            </DropdownItem>
            <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
              <Copy size={14} className='me-50' />
              <span className='align-middle'>Duplicate</span>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    )
  }
]
