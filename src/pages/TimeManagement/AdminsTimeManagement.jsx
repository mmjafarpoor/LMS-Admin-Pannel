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
import AdminTimeLineFromApi from "../../components/TimeManagement/list";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getData } from "../../components/Buildings/BuildingsList/store";

const AdminsTimeManagement = () => {
  // const dispatch = useDispatch();
  // const store = useSelector((state) => state.timeLine);
  // const DepartmentList = store.allData;

  // console.log(DepartmentList);

  // useEffect(() => {
  //   dispatch(getData());
  // }, [dispatch]);

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
      <AdminTimeLineFromApi />
    </div>
  );
};

export default AdminsTimeManagement;
AdminsTimeManagement