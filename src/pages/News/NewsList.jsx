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

import StatsVertical from "../../components/_Global/StatsVertical";
import NewsListFromApi from "../../components/News/list/index";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../components/News/store";

const NewsList = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.news);
  const usersList = store.allData;
  const totalCount = store.total;

  const activeCount = usersList.filter((user) =>
    user.active,
  ).length;

  const notActiveCount = totalCount - activeCount

  console.log(usersList);
  console.log(activeCount);
  console.log(notActiveCount);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <div
      style={{
        height: "auto",
        width: "100%",
        display: "flex",
        flexFlow: "row",
        justifyContent: "space-around",
        gap: "7px",
      }}
    >
      <Col lg="2">
        <StatsVertical
          icon={<CheckCircle size={21} />}
          color="success"
          stats={activeCount}
          statTitle="اخبار و مقالات فعال"
        />

        <StatsVertical
          icon={<Circle size={21} />}
          color="info"
          stats={totalCount}
          statTitle="تعداد کل اخبار و مقالات"
        />

        <StatsVertical
          icon={<XCircle size={21} />}
          color="danger"
          stats={notActiveCount}
          statTitle="اخبار و مقالات غیرفعال"
        />
      </Col>
      <NewsListFromApi />
    </div>
  );
};

export default NewsList;
