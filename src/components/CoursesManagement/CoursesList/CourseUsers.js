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

// ** Avatars
import avatar1 from '@src/assets/images/avatars/1-small.png'
import avatar2 from '@src/assets/images/avatars/3-small.png'
import avatar3 from '@src/assets/images/avatars/5-small.png'
import avatar4 from '@src/assets/images/avatars/7-small.png'
import avatar5 from '@src/assets/images/avatars/9-small.png'
import avatar6 from '@src/assets/images/avatars/11-small.png'

// ** Portraits
import portrait1 from '@src/assets/images/portrait/small/avatar-s-9.jpg'
import portrait2 from '@src/assets/images/portrait/small/avatar-s-3.jpg'
import portrait3 from '@src/assets/images/portrait/small/avatar-s-5.jpg'
import portrait4 from '@src/assets/images/portrait/small/avatar-s-7.jpg'
import portrait5 from '@src/assets/images/portrait/small/avatar-s-11.jpg'
import portrait6 from '@src/assets/images/portrait/small/avatar-s-10.jpg'
import portrait7 from '@src/assets/images/portrait/small/avatar-s-8.jpg'
import portrait8 from '@src/assets/images/portrait/small/avatar-s-6.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { getCourseUsers } from './store'

const options = [
  { value: 'Donna Frank', label: 'Donna Frank', avatar: avatar1 },
  { value: 'Jane Foster', label: 'Jane Foster', avatar: avatar2 },
  { value: 'Gabrielle Robertson', label: 'Gabrielle Robertson', avatar: avatar3 },
  { value: 'Lori Spears', label: 'Lori Spears', avatar: avatar4 },
  { value: 'Sandy Vega', label: 'Sandy Vega', avatar: avatar5 },
  { value: 'Cheryl May', label: 'Cheryl May', avatar: avatar6 }
]

const data = [
  {
    img: portrait1,
    type: 'Can Edit',
    name: 'Lester Palmer',
    username: 'pe@vogeiz.net'
  },
  {
    img: portrait2,
    type: 'Owner',
    name: 'Mittie Blair',
    username: 'peromak@zukedohik.gov'
  },
  {
    img: portrait3,
    type: 'Can Comment',
    name: 'Marvin Wheeler',
    username: 'rumet@jujpejah.net'
  },
  {
    img: portrait4,
    type: 'Can View',
    name: 'Nannie Ford',
    username: 'negza@nuv.io'
  },
  {
    img: portrait5,
    type: 'Can Edit',
    name: 'Julian Murphy',
    username: 'lunebame@umdomgu.net'
  },
  {
    img: portrait6,
    type: 'Can View',
    name: 'Sophie Gilbert',
    username: 'ha@sugit.gov'
  },
  {
    img: portrait7,
    type: 'Can Comment',
    name: 'Chris Watkins',
    username: 'zokap@mak.org'
  },
  {
    img: portrait8,
    type: 'Can Edit',
    name: 'Adelaide Nichols',
    username: 'ujinomu@jigo.com'
  }
]



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
