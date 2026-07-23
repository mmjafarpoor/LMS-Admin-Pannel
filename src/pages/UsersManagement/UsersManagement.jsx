import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

import {
  Eye,
  FileText,
  User,
  Users,
  UserX,
  Heart,
  Award,
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
} from "react-feather";

import StatsHorizontal from "../../components/_Global/StatsHorizontal";
import StatsVertical from "../../components/_Global/StatsVertical";
import UsersList from "../../components/UsersManagement/UsersList/list/index";

import { getUsers } from "../../core/services/usersManagementApi";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../components/UsersManagement/UsersList/store";

// const [perPage, setPerPage] = useState(10)

const UsersManagement = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.users_management);
  const usersList = store.allData;
  const totalCount = store.total;

  const completePercentage = usersList.filter(
    (user) => user.profileCompletionPercentage <= 20,
  ).length;

  const teachers = usersList.filter((user) =>
    user.roles.includes("teacher"),
  ).length;

  const students = usersList.filter((user) =>
    user.roles.includes("student"),
  ).length;

  console.log(usersList);
  console.log(completePercentage);
  console.log(teachers);
  console.log(students);

  useEffect(() => {
    dispatch(
      getData({
        page: 1,
        perPage: 10,
      }));
  }, []);

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
        <Col lg="3" sm="3">
          <StatsHorizontal
            icon={<Users size={21} />}
            color="info"
            stats={totalCount}
            statTitle="تعداد کاربران"
          />
        </Col>
        <Col lg="3" sm="3">
          <StatsHorizontal
            icon={<UserX size={21} />}
            color="warning"
            stats={completePercentage}
            statTitle="کاربران با اطلاعات ناقص"
          />
        </Col>
        <Col lg="3" sm="3">
          <StatsHorizontal
            icon={<Award size={21} />}
            color="success"
            stats={teachers}
            statTitle="اساتید"
          />
        </Col>
        <Col lg="3" sm="3">
          <StatsHorizontal
            icon={<User size={21} />}
            color="primary"
            stats={students}
            statTitle="دانشجویان"
          />
        </Col>
      </Row>
      <UsersList />
    </div>
  );
};

export default UsersManagement;
