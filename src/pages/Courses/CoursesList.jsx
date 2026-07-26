import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  TabContent,
  TabPane
} from "reactstrap";

import {
  Eye,
  FileText,
  Truck,
  Server,
  Activity,
  ShoppingBag,
  AlertOctagon,
  MessageSquare,
  Circle,
  CheckCircle,
  XCircle,
  Mail,
  Grid,
  Bookmark,
  CreditCard,
} from "react-feather";

import StatsHorizontal from "../../components/_Global/StatsHorizontal";
import AllCoursesListFromApi from "../../components/CoursesManagement/CoursesList/AllCourseList/index";
import CoursesReserveListFromApi from "../../components/CoursesManagement/CoursesList/CourseReserve/index";
import CoursesPayListFromApi from "../../components/CoursesManagement/CoursesList/CoursePay/index";
import Tabs from "../../components/CoursesManagement/CoursesList/Tabs";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../components/CoursesManagement/CoursesList/AllCourseList/store";

const NewsList = () => {
  const [activeTab, setActiveTab] = useState('1')
  const toggleTab = tab => {
    setActiveTab(tab)
  }

  return (
    <div
      style={{
        height: "auto",
        width: "100%",
        display: "flex",
        flexFlow: "column",
      }}
    >
      
      <Row>
        <Col xs={12}>
          <Tabs className='mb-2' activeTab={activeTab} toggleTab={toggleTab} />
          <TabContent activeTab={activeTab}>
            <TabPane tabId='1'>
              <AllCoursesListFromApi />
            </TabPane>
            <TabPane tabId='2'>
              <CoursesReserveListFromApi/>
            </TabPane>
            <TabPane tabId='3'>
              <CoursesPayListFromApi />
            </TabPane>
          </TabContent>
        </Col>
      </Row>
    </div>
  );
};

export default NewsList;
