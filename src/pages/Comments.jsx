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
import UsersList from "../components/Comments/invoice/list/index"

const Comments = () => {
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
        <Col lg="4" sm="3">
          <StatsHorizontal
            icon={<CheckCircle size={21} />}
            color="success"
            stats="23"
            statTitle="نظرات تایید شده"
          />
        </Col>
        <Col lg="4" sm="3">
          <StatsHorizontal
            icon={<Circle size={21} />}
            color="info"
            stats="45"
            statTitle="کل نظرات"
          />
        </Col>
        <Col lg="4" sm="3">
          <StatsHorizontal
            icon={<XCircle size={21} />}
            color="danger"
            stats="22"
            statTitle="نظرات تایید نشده"
          />
        </Col>
      </Row>
      {/* <UsersList/> */}
    </div>
  );
};

export default Comments;
