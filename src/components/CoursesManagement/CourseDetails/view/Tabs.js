// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'

// ** Icons Imports
import { User, Lock, Bookmark, Bell, Link, MessageSquare, BookOpen, Book } from 'react-feather'

// ** User Components
import UserProjectsList from './UserProjectsList'
import MoreDetails from './MoreDetails'

const UserTabs = ({ active, toggleTab, selectedCourse }) => {
  return (
    <Fragment>
      <Nav pills className='mb-2'>
        <NavItem>
          <NavLink active={active === '1'} onClick={() => toggleTab('1')}>
            <User className='font-medium-3 me-50' />
            <span className='fw-bold fs-5'>سایر اطلاعات دوره</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '2'} onClick={() => toggleTab('2')}>
            <MessageSquare className='font-medium-3 me-50' />
            <span className='fw-bold fs-5'>نظرات</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '3'} onClick={() => toggleTab('3')}>
            <BookOpen className='font-medium-3 me-50' />
            <span className='fw-bold fs-5'>دوره‌ها</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={active === '4'} onClick={() => toggleTab('4')}>
            <Book className='font-medium-3 me-50' />
            <span className='fw-bold fs-5'>دوره‌های رزور شده</span>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={active}>
        <TabPane tabId='1'>
          <MoreDetails selectedCourse={selectedCourse}/>    
        </TabPane>
        <TabPane tabId='2'>
          <UserProjectsList />
        </TabPane>
        <TabPane tabId='3'>
          <UserProjectsList />
        </TabPane>
        <TabPane tabId='4'>
          <UserProjectsList />
        </TabPane>
      </TabContent>
    </Fragment>
  )
}
export default UserTabs
