// ** React Imports
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
import { store } from '@store/store'
// import { deleteInvoice } from '../store'

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
  CheckSquare,
  Users,
  PieChart,
  Download,
  TrendingUp,
  CheckCircle,
  MoreVertical,
  ArrowDownCircle
} from 'react-feather'
import formatPrice from '../../../../utility/priceFormatter'

// ** Vars
const invoiceStatusObj = {
  Sent: { color: 'light-secondary', icon: Send },
  Paid: { color: 'light-success', icon: CheckCircle },
  Draft: { color: 'light-primary', icon: Save },
  Downloaded: { color: 'light-info', icon: ArrowDownCircle },
  'Past Due': { color: 'light-danger', icon: Info },
  'Partial Payment': { color: 'light-warning', icon: PieChart }
}

import { deleteCourse, activeCourse } from './store'
import CourseUsers from './CourseUsers'

// ** Table columns
export const columns = (dispatch) => [
  {
    name: "عنوان",
    minWidth: '200px',
    sortable: true,
    sortField: "fName",
    cell: (row) => (
      <div className='d-flex justify-content-left align-items-center gap-1'>
        <Avatar className='me-50' width='32' height='32' img={row.imageAddress} /> 
        <div className="fw-bold fs-5" style={{ overflow : "hidden" , maxHeight : "50px" }}>{row.title}</div>     
      </div>
    ),
  },
  {
    name: "توضیح مختصر",
    minWidth: '300px',
    sortable: true,
    sortField: "userRoles",
    cell: (row) =>(<div style={{ overflow : "hidden" , maxHeight : "50px" , fontSize : "1rem" }}>{row.miniDescribe}</div>),
  },
  {
    name: "قیمت",
    minWidth: '100px',
    sortable: true,
    sortField: "userRoles",
    cell: (row) => (<div style={{ overflow : "hidden" , maxHeight : "50px" , fontSize : "1rem" }}>{formatPrice(row.cost)}</div>),
  },
  {
    name: "تکنولوژی",
    minWidth: '230px',
    sortable: true,
    sortField: "profileCompletionPercentage",
    cell: (row) => (<div style={{ overflow : "hidden" , maxHeight : "50px" , fontSize : "1rem" }}>{row.technologyList}</div>),
  },
  {
    name: "استاد",
    minWidth: '120px',
    sortable: true,
    sortField: "profileCompletionPercentage",
    cell: (row) => (<div style={{ overflow : "hidden" , maxHeight : "50px" , fontSize : "1rem" }}>{row.teacherName}</div>),
  },
  {
    name: "وضعیت",
    minWidth: '90px',
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
    minWidth: '80px',
    cell: row => (
      <div className='column-action d-flex align-items-center'>
        <Link to={`/courses-management/${row.courseId}/${row.googleTitle.replaceAll(" ", "-")}`} id={`pw-tooltip-${row.courseId}`}>
          <Eye size={17} className='mx-1' />
        </Link>
        <UncontrolledTooltip placement='top' target={`pw-tooltip-${row.courseId}`}>
          جزئیات دوره
        </UncontrolledTooltip>
        <UncontrolledDropdown>
          <DropdownToggle tag='span'>
            <MoreVertical size={17} className='cursor-pointer' />
          </DropdownToggle>
          <DropdownMenu end>
            <CourseUsers courseId={row.courseId}/>
            <DropdownItem className='w-100' onClick={() => dispatch(activeCourse({courseId: row.courseId, active: !row.active}))}>
              <Edit size={14} className='me-50' />
              <span className='align-middle'>تغییر وضعیت</span>
            </DropdownItem>
            <DropdownItem className='w-100' onClick={() => dispatch(deleteCourse(row.courseId))} >
              <Trash size={14} className='me-50' />
              <span className='align-middle'>حذف دوره</span>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    )
  }
]

