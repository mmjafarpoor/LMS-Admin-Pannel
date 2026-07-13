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
import ClassListFromApi from "../../components/CoursesManagement/ClassList/list/index";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../components/CoursesManagement/ClassList/store";

const ClassList = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.courses_class_list);
  const CoursesClassList = store.allData;

  console.log(CoursesClassList);

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
      <ClassListFromApi />
    </div>
  );
};

export default ClassList;

