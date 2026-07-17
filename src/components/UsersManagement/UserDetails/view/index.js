// ** React Imports
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

// ** Store & Actions
import { getUserData } from '../store'
import { useSelector, useDispatch } from 'react-redux'

// ** Reactstrap Imports
import { Row, Col, Alert } from 'reactstrap'

// ** User View Components
import UserTabs from './Tabs'
import UserInfoCard from './UserInfoCard'

// ** Styles
import '@styles/react/apps/app-users.scss'

const UserView = ({UserId}) => {
  // ** Store Vars
  const store = useSelector(state => state.user_details)
  const dispatch = useDispatch()

  // ** Hooks

  // ** Get suer on mount
  useEffect(() => {
    dispatch(getUserData(parseInt(UserId)))
  }, [dispatch])

  const [active, setActive] = useState('1')

  const toggleTab = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }

  return (
    <div>
      <Row>
        <Col xl='4' lg='5' xs={{ order: 1 }} md={{ order: 0, size: 5 }}>
          <UserInfoCard selectedUser={store.allData} />
        </Col>
        <Col xl='8' lg='7' xs={{ order: 0 }} md={{ order: 1, size: 7 }}>
          <UserTabs active={active} toggleTab={toggleTab} selectedUser={store.allData}/>
        </Col>
      </Row>
    </div>
  )
  // : (
  //   <Alert color='danger'>
  //     <h4 className='alert-heading'>User not found</h4>
  //     <div className='alert-body'>
  //       User with UserId: {"UserId"} doesn't exist. Check list of all Users: <Link to='/apps/user/list'>Users List</Link>
  //     </div>
  //   </Alert>
  // )
}
export default UserView
