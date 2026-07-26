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
import { getCourseUsers } from './store'

const CourseUsers = ({courseId}) => {
  const [show, setShow] = useState(false)
  const dispatch = useDispatch()
  const store = useSelector((state) => state.courses);
  // console.log(store)

  useEffect(() => {
    dispatch(getCourseUsers(courseId));
  }, [dispatch]);

  return (
    <Fragment>
      <Button className="fs-5 w-100" color='primary' onClick={() => setShow(true)}>
        لیست کاربران
      </Button>
      <Modal isOpen={show} toggle={() => setShow(!show)} className='modal-dialog-centered modal-lg'>
        <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
        <ModalBody className='px-sm-5 mx-50 pb-4 '>
          <h1 className='text-start mb-1'>لیست کاربران دوره</h1>          
          <p className='fw-bolder pt-50 mt-2 fs-4'>{store.studentsCount} کاربر</p>
          <ListGroup flush className='mb-2'>
            {store.allStudents.map(item => {
              return (
                <ListGroupItem key={item.id} className='d-flex align-items-start border-0 px-0'>
                  <Avatar className='me-75' img={item.user.currentPictureAddress} imgHeight={38} imgWidth={38} />
                  <div className='d-flex align-items-center justify-content-between w-100'>
                    <div className='me-1'>
                      <h5 className='mb-25'>{item.user.fName} {item.user.lName}</h5>
                      <span>{item.user.userName}</span>
                    </div>   
                  </div>
                </ListGroupItem>
              )
            })}
          </ListGroup>
          
        </ModalBody>
      </Modal>
    </Fragment>
  )
}

export default CourseUsers
