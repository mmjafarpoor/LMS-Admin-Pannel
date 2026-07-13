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

import StatsVertical from "../../components/_Global/StatsVertical";
import CoursesListFromApi from "../../components/CoursesManagement/CoursesList/list/index";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../components/CoursesManagement/CoursesList/store";

const NewsList = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.courses);
  const CoursesList = store.allData;
  const totalCount = store.total;

  const activeCount = CoursesList.filter((course) => course.active).length;
  const notActiveCount = totalCount - activeCount;

  console.log(NewsList);

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
        gap: "15px",
      }}
    >
      <Col lg="2">
        <StatsVertical
          icon={<CheckCircle size={21} />}
          color="success"
          stats={activeCount}
          statTitle="ترم‌های فعال"
        />

        <StatsVertical
          icon={<Circle size={21} />}
          color="info"
          statTitle="تعداد کل ترم‌ها"
          stats={totalCount}
        />

        <StatsVertical
          icon={<XCircle size={21} />}
          color="danger"
          stats={notActiveCount}
          statTitle="ترم‌های منقضی شده"
        />
      </Col>

      <CoursesListFromApi />
    </div>
  );
};

export default NewsList;
