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

import StatsHorizontal from "../../components/_Global/StatsHorizontal";
import CommentsList from "../../components/Comments/list/index";

// import { getComments } from "../../core/services/commentsApi";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../components/Comments/store";

const Comments = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.comments);
  const commentsList = store.allData;
  const totalCount = store.total;

  const acceptCount = commentsList?.filter(
    (user) => user.accept === true,
  ).length;

  const notAcceptCount = commentsList?.filter(
    (user) => user.accept === false,
  ).length;

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

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
            stats={acceptCount}
            statTitle="نظرات تایید شده"
          />
        </Col>
        <Col lg="4" sm="3">
          <StatsHorizontal
            icon={<Circle size={21} />}
            color="info"
            stats={totalCount}
            statTitle="کل نظرات"
          />
        </Col>
        <Col lg="4" sm="3">
          <StatsHorizontal
            icon={<XCircle size={21} />}
            color="danger"
            stats={notAcceptCount}
            statTitle="نظرات تایید نشده"
          />
        </Col>
      </Row>
      <CommentsList/>
    </div>
  );
};

export default Comments;
