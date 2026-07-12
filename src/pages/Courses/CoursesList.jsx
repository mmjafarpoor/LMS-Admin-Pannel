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
  Grid,
  Bookmark,
  CreditCard,
} from "react-feather";

import StatsHorizontal from "../../components/_Global/StatsHorizontal";
import CoursesListFromApi from "../../components/CoursesManagement/list/index";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../components/CoursesManagement/store";

const NewsList = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.courses);
  const usersList = store.allData;
  const totalCount = store.total;

  console.log(usersList);

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
        <div
          style={{
            border: "",
            width: "100%",
            padding: "10px",
            background: "#645CCF",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            marginBottom: "10px",
            cursor: "pointer"
          }}
        >
          <Grid size={21} />
          <span className="fs-5">همه دوره‌ها</span>
        </div>

        <div
          style={{
            border: "1px solid #645CCF",
            width: "100%",
            padding: "10px",
            background: "",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            marginBottom: "10px",
            cursor: "pointer"
          }}
        >
          <Bookmark size={21} />
          <span className="fs-5">رزروها</span>
        </div>

        <div
          style={{
            border: "1px solid #645CCF",
            width: "100%",
            padding: "10px",
            background: "",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            marginBottom: "30px",
            cursor: "pointer"
          }}
        >
          <CreditCard size={21} />
          <span className="fs-5">پرداخت‌شده‌ها</span>
        </div>

        <StatsHorizontal
          icon={<CheckCircle size={21} />}
          color="success"
          stats={11}
          statTitle="دوره‌های فعال"
        />
        <StatsHorizontal
          icon={<Circle size={21} />}
          color="info"
          stats={12}
          statTitle="مجموع دوره‌ها"
        />
        <StatsHorizontal
          icon={<XCircle size={21} />}
          color="danger"
          stats={11}
          statTitle="دوره‌های غیرفعال"
        />
      </Col>
      <CoursesListFromApi />
    </div>
  );
};

export default NewsList;
