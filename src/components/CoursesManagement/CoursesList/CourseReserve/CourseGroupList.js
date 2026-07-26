// ** React Imports
import { Fragment, useEffect, useState } from 'react'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Reactstrap Imports
import {
  Card,
  Button,
  Label,
  Modal,
  CardBody,
  CardText,
  CardTitle,
  ListGroup,
  ModalBody,
  ModalHeader,
  DropdownMenu,
  DropdownItem,
  ListGroupItem,
  DropdownToggle,
  UncontrolledDropdown
} from 'reactstrap'

// ** Third Party Components
import Select, { components } from 'react-select'
import { FileText, Users, Link } from 'react-feather'

// ** Utils
import { selectThemeColors } from '@utils'

import { useDispatch, useSelector } from 'react-redux'
import { addCourseReserve } from './store'

const CourseGroupList = ({studentId, courseId, groupList}) => {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  
  return (
    <div style={{position: "relative"}}>
      <Button className="fs-5 w-100" color='primary' onClick={() => setShow(true)}>
        لیست کاربران
      </Button>
      {show && (<div 
          className="d-flex align-items-center justify-content-center"
          style={{width: "500px", position: "absolute", top: "0px", left: "150px", backgroundColor: '#161D31', borderRadius: "20px", zIndex: 1000 }}
          onClick={() => setShow(false)}
        >
        <ModalHeader className='bg-transparent'></ModalHeader>
        <ModalBody className='px-sm-5 mx-50 pb-4 '>
          <h1 className='text-start my-3'>لیست گروه‌ها</h1>          
          <p className='fw-bolder pt-50 mt-2 fs-4'>{groupList?.totalCount} گروه</p>
          <ListGroup flush className='mb-2'>
            
            {groupList?.courseGroupDtos?.map(item => {
              return (
                <ListGroupItem key={item?.id} style={{border: "1px solid #7367F0", marginBottom: "10px", borderRadius: "20px"}} className='d-flex align-items-start px-2'>
                  <div className='d-flex align-items-center justify-content-between w-100'>
                    <div className='me-1'>
                      <h5 className='mb-25 fs-3'>{item?.groupName}</h5>
                      <span className='fs-5'>ظرفیت: {item?.groupCapacity}</span>
                    </div>
                    <button style={{backgroundColor: '#655CD0', padding: "5px 10px", borderRadius: "5px", color: "#ffffff"}} onClick={() => {dispatch(addCourseReserve({studentId: parseInt(studentId), courseId: courseId, courseGroupId: item?.id}))}} >انتخاب</button>   
                  </div>
                </ListGroupItem>
              )
            })}
          </ListGroup>
          
        </ModalBody>
      </div>)}
      {/* {show && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050 }}
          onClick={() => setShow(false)}
        >
          <div 
            className="bg-white rounded-3 shadow-lg p-3 w-100 position-relative"
            style={{ maxWidth: '800px', maxHeight: '90vh', overflowY: 'auto' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              type="button" 
              className="btn-close position-absolute top-0 end-0 m-3" 
              onClick={() => setShow(false)}
            ></button>

            <ModalBody className='px-sm-5 mx-50 pb-4 '>
            </ModalBody>

          </div>
        </div>
      )} */}

    </div>
  )
}

export default CourseGroupList
