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


// ** Vars
const invoiceStatusObj = {
  Sent: { color: 'light-secondary', icon: Send },
  Paid: { color: 'light-success', icon: CheckCircle },
  Draft: { color: 'light-primary', icon: Save },
  Downloaded: { color: 'light-info', icon: ArrowDownCircle },
  'Past Due': { color: 'light-danger', icon: Info },
  'Partial Payment': { color: 'light-warning', icon: PieChart }
}

import { deleteCourseReserve } from './store'
import CourseGroupList from './CourseGroupList'

// ** Table columns
export const columns = (dispatch, groupList) => [
  {
    name: "عنوان",
    minWidth: '200px',
    sortable: true,
    sortField: "fName",
    cell: (row) => (
        <div className="fw-bold fs-5">{row?.studentName}</div>     
    ),
  },
  {
    name: "نام دوره",
    minWidth: '120px',
    sortable: true,
    sortField: "profileCompletionPercentage",
    cell: (row) => (<div style={{ maxHeight: "50px" , fontSize: "1rem" , overflow: "hidden" , textOverflow: "ellipsis" }}>{row?.courseName}</div>),
  },
  {
    name: "وضعیت",
    minWidth: '90px',
    sortable: true,
    sortField: "active",
    cell: (row) => (
      <Badge color={row?.accept ? "light-success px-1" : "light-danger px-1"} pill>
        {row?.accept ? "فعال" : "غیرفعال"}
      </Badge>
    ),
  },

  {
    name: 'اقدام',
    minWidth: '80px',
    cell: row => (
      <div className='column-action d-flex align-items-center'>
        <UncontrolledDropdown>
          <DropdownToggle tag='span'>
            <MoreVertical size={17} className='cursor-pointer' />
          </DropdownToggle>
          <DropdownMenu end>
            <CourseGroupList studentId={row?.studentId} courseId={row?.courseId} groupList={groupList}/>
            {/* <DropdownItem className='w-100' >
              <Edit size={14} className='me-50' />
              <span className='align-middle'>تغییر وضعیت</span>
            </DropdownItem> */}
            <DropdownItem className='w-100' onClick={() => dispatch(deleteCourseReserve(row.id))}>
              <Trash size={14} className='me-50'/>
              <span className='align-middle'>حذف رزرو</span>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    )
  }
]


