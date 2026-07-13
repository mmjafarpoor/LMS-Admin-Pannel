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
import TermsListFromApi from "../../components/CoursesManagement/TermsList/list/index";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../components/CoursesManagement/TermsList/store";

const Terms = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.courses_terms);
  const termsList = store.allData;
  console.log(termsList)

  const termsCount = termsList.length
  const termsActiveCount = termsList.filter(
    (term) => !term.expire
  ).length;

  const termsNotActiveCount = termsCount - termsActiveCount;

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
          stats={termsActiveCount}
          statTitle="ترم‌های فعال"
        />

        <StatsVertical
          icon={<Circle size={21} />}
          color="info"
          statTitle="تعداد کل ترم‌ها"
          stats={termsCount}
        />

        <StatsVertical
          icon={<XCircle size={21} />}
          color="danger"
          stats={termsNotActiveCount}
          statTitle="ترم‌های منقضی شده"
        />
      </Col>
      <TermsListFromApi />
    </div>
  );
};

export default Terms;

