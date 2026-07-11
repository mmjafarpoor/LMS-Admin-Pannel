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

import StatsHorizontal from "../components/_Global/StatsHorizontal";
import StatsVertical from "../components/_Global/StatsVertical";
// import SelectReact from "../components/UsersManagement/SelectReact";
import UsersList from "../components/UsersManagement/invoice/list/index";

import { getUsers } from "../core/services/usersManagementApi";

import { useEffect, useState } from "react";

// const [perPage, setPerPage] = useState(10)

const UsersManagement = () => {
  const [totalCount, setTotalCount] = useState(0);
  const [usersList, setUsersList] = useState([]);
  const [completePercentage, setCompletePercentage] = useState(0);
  const [teachers, setTeachers] = useState(0);
  const [students, setStudents] = useState(0);

  const setDataFromApi = (data) => {
    setTotalCount(data.totalCount);
    setUsersList(data.listUser);

    const count = data.listUser.filter(
      (user) => user.profileCompletionPercentage <= 20,
    ).length;
    setCompletePercentage(count);

    const teachersCount = data.listUser.filter((user) =>
      user.roles.includes("teacher"),
    ).length;
    setTeachers(teachersCount);

    const studentsCount = data.listUser.filter((user) =>
      user.roles.includes("student"),
    ).length;
    setStudents(studentsCount);

    console.log(usersList);
    console.log(completePercentage);
    console.log(teachers)
    console.log(students)
    // setTotalCount(data.totalCount)
  };

  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      setDataFromApi(response.data);
      console.log("data:", response.data);
    } catch (error) {
      console.error("fetch error:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [completePercentage, teachers, students]);

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
      {/* <SelectReact/> */}
      <UsersList />
    </div>
  );
};

export default UsersManagement;
