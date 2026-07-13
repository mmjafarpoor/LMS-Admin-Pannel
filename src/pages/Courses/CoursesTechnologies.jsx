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
import CoursesTechnologiesFromApi from "../../components/CoursesManagement/TechnologiesList/list/index";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../components/CoursesManagement/TechnologiesList/store";

const CoursesTechnologies = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.courses_technologies);
  const TechnologiesList = store.allData;

  console.log(TechnologiesList);

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
      <CoursesTechnologiesFromApi />
    </div>
  );
};

export default CoursesTechnologies;

