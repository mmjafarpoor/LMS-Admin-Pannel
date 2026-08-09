// ** React Imports
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { toShamsiDateTime } from '../../../../utility/dateFormatter'

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
  CheckSquare,
  Users,
  PieChart,
  Download,
  TrendingUp,
  CheckCircle,
  MoreVertical,
  ArrowDownCircle
} from 'react-feather'

// ** Table columns
export const columns = (dispatch) => [
  {
    name: "عنوان",
    minWidth: '200px',
    sortable: true,
    sortField: "fName",
    cell: (row) => (
        <div className='d-flex justify-content-left align-items-center gap-1'>
        <Avatar className='me-50' width='32' height='32' img={row?.student?.currentPictureAddress} /> 
        <div className="fw-bold fs-5">{row?.student?.fName} {row?.student?.lName}</div>     
      </div> 
    ),
  },
  {
    name: "تاریخ پرداخت",
    minWidth: '200px',
    sortable: true,
    sortField: "profileCompletionPercentage",
    cell: (row) => ( <div style={{ direction : "ltr" }}>{toShamsiDateTime(row?.PeymentDate)}</div>),
  },
  {
    name: "شناسه پرداخت",
    minWidth: '150px',
    sortable: true,
    sortField: "profileCompletionPercentage",
    cell: (row) => row?.PaymentInvoiceNumber,
  },
  {
    name: "مبلغ پرداخت",
    minWidth: '100px',
    sortable: true,
    sortField: "profileCompletionPercentage",
    cell: (row) => row?.Paid,
  },
  {
    name: "وضعیت",
    minWidth: '90px',
    sortable: true,
    sortField: "active",
    cell: (row) => (
      <Badge color={row?.peymentDone ? "light-success px-1" : "light-danger px-1"} pill>
        {row?.peymentDone ? "تایید شده" : "تایید نشده"}
      </Badge>
    ),
  },

  // {
  //   name: 'اقدام',
  //   minWidth: '80px',
  //   cell: row => (
  //     <div className='column-action d-flex align-items-center'>
  //       <UncontrolledDropdown>
  //         <DropdownToggle tag='span'>
  //           <MoreVertical size={17} className='cursor-pointer' />
  //         </DropdownToggle>
  //         <DropdownMenu end>
  //           <CourseGroupList studentId={row?.studentId} courseId={row?.courseId} groupList={groupList}/>
  //           {/* <DropdownItem className='w-100' >
  //             <Edit size={14} className='me-50' />
  //             <span className='align-middle'>تغییر وضعیت</span>
  //           </DropdownItem> */}
  //           <DropdownItem className='w-100' onClick={() => dispatch(deleteCourseReserve(row.id))}>
  //             <Trash size={14} className='me-50'/>
  //             <span className='align-middle'>حذف رزرو</span>
  //           </DropdownItem>
  //         </DropdownMenu>
  //       </UncontrolledDropdown>
  //     </div>
  //   )
  // }
]


