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
import CoursesLevelsFromApi from "../../components/CoursesManagement/LevelsList/list/index";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../components/CoursesManagement/LevelsList/store";

const CoursesLevel = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.courses_status);
  const levelsList = store.allData;

  console.log(levelsList);

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
      
      <CoursesLevelsFromApi />
    </div>
  );
};

export default CoursesLevel;
