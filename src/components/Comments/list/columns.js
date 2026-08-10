// ** React Imports
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

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
  CheckSquare,
  Trash,
  MoreVertical,
} from 'react-feather'

// import { useDispatch } from 'react-redux'
import { deleteComment, acceptComment } from '../store'

// ** Table columns
export const columns = (dispatch) => [
  {
    name: "کاربر",
    minWidth: '250px',
    sortable: true,
    sortField: "fName",
    cell: (row) => (
      <div className='d-flex justify-content-left align-items-center'>
        <Avatar className='me-50' img={row.pictureAddress} width='32' height='32' />
        <div className="fw-bold fs-5">{row.author}</div>
      </div>
    ),
  },
  {
    name: "عنوان نظر",
    sortable: true,
    sortField: "userRoles",
    cell: (row) => <div className='fw-bold' style={{ maxHeight: "50px" , fontSize: "1rem" , overflow : "hidden" , textOverflow : "ellipsis" }}>{row.title}</div>
  },
  {
    name: "توضیحات نظر",
    minWidth: '250px',
    sortable: true,
    sortField: "profileCompletionPercentage",
    cell: (row) => <div className='fw-bold'
    style={{ maxHeight: "50px" , fontSize: "1rem" , overflow : "hidden" , textOverflow : "ellipsis" }}>{row.describe}</div>
  },
  {
    name: "عنوان دوره",
    minWidth: '200px',
    sortable: true,
    sortField: "active",
    cell: (row) => <div className='fw-bold' style={{ maxHeight: "50px" , fontSize: "1rem" , overflow : "hidden" , textOverflow : "ellipsis" }}>{row.courseTitle}</div>
  },

  {
    name: "وضعیت",
    minWidth: '150px',
    sortable: true,
    sortField: "userRoles",
    cell: (row) => (
      <Badge color={row.accept ? "light-success fs-6" : "light-warning fs-6"} pill>
        {row.accept ? "تایید شده" : "تایید نشده"}
      </Badge>
    ),
  },
  {
    name: "پاسخ‌ها",
    minWidth: '100px',
    sortable: true,
    sortField: "profileCompletionPercentage",
    cell: (row) => <div className='fw-bold fs-5'>{row.replyCount}</div>
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
            {!row.accept
            ? <DropdownItem className='w-100' onClick={() => dispatch(acceptComment(row.id))}>
                <CheckSquare size={14} className='me-50' />
                <span className='align-middle'>تایید نظر</span>
              </DropdownItem>
            : <></>
            }
            <DropdownItem className='w-100' onClick={() => dispatch(deleteComment(row.id))} >
              <Trash size={14} className='me-50' />
              <span className='align-middle'>حذف نظر</span>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    )
  }
]

