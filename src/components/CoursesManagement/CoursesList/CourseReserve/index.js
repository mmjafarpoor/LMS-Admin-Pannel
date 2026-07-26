import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Select from "react-select";

import { columns } from "./columns";

import ReactPaginate from "react-paginate";
import { ChevronDown, Grid, Bookmark, CreditCard, Circle, CheckCircle, XCircle } from "react-feather";
import DataTable from "react-data-table-component";

import { Button, Input, Row, Col, Card, CardBody, Label, TabContent, TabPane } from "reactstrap";

import { getReservedData, getCourseGroupData } from "./store";
import { useDispatch, useSelector } from "react-redux";
import StatsHorizontal from "../../../_Global/StatsHorizontal";


import "@styles/react/apps/app-invoice.scss";
import "@styles/react/libs/tables/react-dataTable-component.scss";
import { selectThemeColors } from "@utils";

const colourOptions = [
  { value: "ocean", label: "Ocean" },
  { value: "blue", label: "Blue" },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red" },
  { value: "orange", label: "Orange" },
];

const CustomHeader = ({
  totalCount,
  activeCount,
  notActiveCount,
  value,
  handleStatusValue,
  statusValue,
  handlePerPage,
  rowsPerPage,
}) => {

  return (
    <div className="invoice-list-table-header w-100 py-2">
      <Row md="3" className="d-flex justify-content-start">
        
        <StatsHorizontal
          icon={<CheckCircle size={21} />}
          color="success"
          stats={activeCount}
          statTitle="رزروهای تایید شده"
        />

        <StatsHorizontal
          icon={<Circle size={21} />}
          color="info"
          statTitle="کل رزورها"
          stats={totalCount}
        />

        <StatsHorizontal
          icon={<XCircle size={21} />}
          color="danger"
          stats={notActiveCount}
          statTitle="رزروهای تایید نشده"
        />
      </Row>
      
    </div>
  );
};

const InvoiceList = () => {
  // ** Store vars
  const dispatch = useDispatch();
  const store = useSelector((state) => state.reserved_courses);
  const groupList = store?.courseGroupAllData
  const CoursesList = store.reservedAllData;
  const totalCount = store.reservedAllData.length;
  const activeCount = CoursesList.filter((course) => course.accept).length;
  const notActiveCount = CoursesList.filter((course) => !course.accept).length;

  // console.log(store);

  const [value, setValue] = useState("");
  const [sort, setSort] = useState("desc");
  const [sortColumn, setSortColumn] = useState("id");
  const [currentPage, setCurrentPage] = useState(1);
  const [statusValue, setStatusValue] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    console.log("store", store)
    dispatch(getReservedData())
    dispatch(getCourseGroupData())
  }, [dispatch]);

  const handlePerPage = (e) => {
    dispatch(
      getReservedData(),
    );
    setRowsPerPage(parseInt(e.target.value));
  };

  const handleStatusValue = (e) => {
    setStatusValue(e.target.value);
    dispatch(
      getReservedData(),
    );
  };

  const handlePagination = (page) => {
    dispatch(
      getReservedData(),
    );
    setCurrentPage(page.selected + 1);
  };

  const CustomPagination = () => {
    const count = Number((store.total / rowsPerPage).toFixed(0));

    return (
      <ReactPaginate
        nextLabel=""
        breakLabel="..."
        previousLabel=""
        pageCount={count || 1}
        activeClassName="active"
        breakClassName="page-item"
        pageClassName={"page-item"}
        breakLinkClassName="page-link"
        nextLinkClassName={"page-link"}
        pageLinkClassName={"page-link"}
        nextClassName={"page-item next"}
        previousLinkClassName={"page-link"}
        previousClassName={"page-item prev"}
        onPageChange={(page) => handlePagination(page)}
        forcePage={currentPage !== 0 ? currentPage - 1 : 0}
        containerClassName={"pagination react-paginate justify-content-end p-1"}
      />
    );
  };

  const dataToRender = () => {
    const filters = {
      q: value,
      status: statusValue,
    };

    const isFiltered = Object.keys(filters).some(function (k) {
      return filters[k].length > 0;
    });

    if (store.reservedAllData.length > 0) {
      return store.reservedAllData;
    } else if (store.reservedAllData.length === 0 && isFiltered) {
      return [];
    } else {
      return store.reservedAllData.slice(0, rowsPerPage);
    }
  };

  const handleSort = (column, sortDirection) => {
    setSort(sortDirection);
    setSortColumn(column.sortField);
    dispatch(
      getReservedData(),
    );
  };

  return (
    <div className="invoice-list-wrapper">
      <Card>
        <div className="invoice-list-dataTable react-dataTable">
          <DataTable
            noHeader
            pagination
            sortServer
            paginationServer
            subHeader={true}
            columns={columns(dispatch, groupList)}
            responsive={true}
            onSort={handleSort}
            data={dataToRender()}
            sortIcon={<ChevronDown />}
            className="react-dataTable"
            defaultSortField="invoiceId"
            paginationDefaultPage={currentPage}
            paginationComponent={CustomPagination}
            subHeaderComponent={
              <CustomHeader
                totalCount={totalCount}
                activeCount={activeCount}
                notActiveCount={notActiveCount}
                value={value}
                statusValue={statusValue}
                rowsPerPage={rowsPerPage}
                handlePerPage={handlePerPage}
                handleStatusValue={handleStatusValue}
              />
            }
          />
        </div>
      </Card>
    </div>
  );
};

export default InvoiceList;
