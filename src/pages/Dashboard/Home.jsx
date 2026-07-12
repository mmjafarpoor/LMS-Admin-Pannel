import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardLink,
  Row,
  Col,
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

import { ThemeColors } from "@src/utility/context/ThemeColors";
import { useContext } from "react";

import CardCongratulations from "../../components/Dashboard/CardCongratulations";
import CoursesAnalytics from "../../components/Dashboard/coursesAnalytics";
import Customers from "../../components/Dashboard/Customers";
import StatsHorizontal from "../../components/_Global/StatsHorizontal";
import StatsVertical from "../../components/_Global/StatsVertical";

const Home = () => {
  const { colors } = useContext(ThemeColors);

  return (
    <div
      style={{
        height: "auto",
        width: "100%",
        display: "flex",
        flexFlow: "row",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          height: "auto",
          width: "49%",
          display: "flex",
          flexFlow: "column",
        }}
      >
        <CardCongratulations />
        <CoursesAnalytics success={colors.success.main} />
        <Customers
          primary={colors.primary.main}
          warning={colors.warning.main}
          danger={colors.danger.main}
        />
      </div>
      <div
        style={{
          height: "auto",
          width: "49%",
          display: "flex",
          flexFlow: "column",
        }}
      >
        <Row>
          <Col lg="6" sm="6">
            <StatsHorizontal
              icon={<Users size={21} />}
              color="info"
              stats="86%"
              statTitle="تعداد کاربران"
            />
          </Col>
          <Col lg="6" sm="6">
            <StatsHorizontal
              icon={<UserX size={21} />}
              color="warning"
              stats="1.2gb"
              statTitle="کاربران با اطلاعات ناقص"
            />
          </Col>
        </Row>
        <Row>
          <Col lg="6" sm="6">
            <StatsHorizontal
              icon={<Award size={21} />}
              color="success"
              stats="0.1%"
              statTitle="اساتید"
            />
          </Col>
          <Col lg="6" sm="6">
            <StatsHorizontal
              icon={<User size={21} />}
              color="primary"
              stats="13"
              statTitle="دانشجویان"
            />
          </Col>
        </Row>
        <Row>
          <Col lg="12" sm="12">
            <StatsHorizontal
              icon={<FileText size={21} />}
              color="dark"
              stats="13"
              statTitle="اخبار و مقالات"
            />
          </Col>
        </Row>
        <Row>
          <Col lg="4" sm="4">
            <StatsVertical
              icon={<CheckCircle size={21} />}
              color="success"
              stats="0.1%"
              statTitle="دوره‌های درحال برگزاری"
            />
          </Col>
          <Col lg="4" sm="4">
            <StatsVertical
              icon={<Circle size={21} />}
              color="info"
              stats="13"
              statTitle="کل دوره‌ها"
            />
          </Col>
          <Col lg="4" sm="4">
            <StatsVertical
              icon={<XCircle size={21} />}
              color="danger"
              stats="0.1%"
              statTitle="دوره‌های منقضی شده"
            />
          </Col>
        </Row>
        <Row>
          <Col lg="6" sm="6">
            <StatsVertical
              icon={<MessageSquare size={21} />}
              color="warning"
              stats="13"
              statTitle="نظرات"
            />
          </Col>
          <Col lg="6" sm="6">
            <StatsVertical
              icon={<Mail size={21} />}
              color="warning"
              stats="13"
              statTitle="پیام‌ها"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
