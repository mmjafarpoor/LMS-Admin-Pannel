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
import UsersList from "../components/UsersManagement/invoice/list/index"


const UsersManagement = () => {
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
            stats="86%"
            statTitle="تعداد کاربران"
          />
        </Col>
        <Col lg="3" sm="3">
          <StatsHorizontal
            icon={<UserX size={21} />}
            color="warning"
            stats="1.2gb"
            statTitle="کاربران با اطلاعات ناقص"
          />
        </Col>
        <Col lg="3" sm="3">
          <StatsHorizontal
            icon={<Award size={21} />}
            color="success"
            stats="0.1%"
            statTitle="اساتید"
          />
        </Col>
        <Col lg="3" sm="3">
          <StatsHorizontal
            icon={<User size={21} />}
            color="primary"
            stats="13"
            statTitle="دانشجویان"
          />
        </Col>
      </Row>
      {/* <SelectReact/> */}
      <UsersList/>
    </div>
  );
};

export default UsersManagement;
