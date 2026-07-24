// ** React Imports
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Select from "react-select";

// ** Table Columns
import { columns } from "./columns";

// ** Third Party Components
import ReactPaginate from "react-paginate";
import { ChevronDown, Grid, Bookmark, CreditCard } from "react-feather";
import DataTable from "react-data-table-component";

// ** Reactstrap Imports
import { Button, Input, Row, Col, Card, CardBody, Label } from "reactstrap";

// ** Store & Actions
import { getData } from "../store";
import { useDispatch, useSelector } from "react-redux";

// ** Styles

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
  handleFilter,
  value,
  handleStatusValue,
  statusValue,
  handlePerPage,
  rowsPerPage,
}) => {

  return (
    <div className="invoice-list-table-header w-100 py-2">
      <Row>
        <Col>
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
              cursor: "pointer",
            }}
          >
            <Grid size={21} />
            <span className="fs-5">همه دوره‌ها</span>
          </div>
        </Col>

        <Col>
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
              cursor: "pointer",
            }}
          >
            <Bookmark size={21} />
            <span className="fs-5">رزروها</span>
          </div>
        </Col>

        <Col>
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
              cursor: "pointer",
            }}
          >
            <CreditCard size={21} />
            <span className="fs-5">پرداخت‌شده‌ها</span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="6" className="d-flex align-items-center px-0 px-lg-1 mx-2">
          <div className="d-flex align-items-center me-2">
            <label className="fs-4" htmlFor="rows-per-page">
              نمایش
            </label>
            <Input
              type="select"
              id="rows-per-page"
              value={rowsPerPage}
              onChange={handlePerPage}
              className="form-control ms-50 pe-3"
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </Input>
          </div>
          <div className="d-flex align-items-center">
            <label className="fs-4" htmlFor="search-invoice"></label>
            <Input
              id="search-invoice"
              className="ms-50 me-2 w-100"
              type="text"
              value={value}
              onChange={(e) => handleFilter(e.target.value)}
              placeholder="جست‌وجو"
            />
          </div>
        </Col>

        <Col md="5">
          <Label className="form-label fs-5">وضعیت</Label>
          <Select
            theme={selectThemeColors}
            className="react-select"
            classNamePrefix="select"
            defaultValue={colourOptions[0]}
            options={colourOptions}
            isClearable={false}
          />
        </Col>
      </Row>
    </div>
  );
};

const InvoiceList = () => {
  // ** Store vars
  const dispatch = useDispatch();
  const store = useSelector((state) => state.courses);
  console.log(store);

  // ** States
  const [value, setValue] = useState("");
  const [sort, setSort] = useState("desc");
  const [sortColumn, setSortColumn] = useState("id");
  const [currentPage, setCurrentPage] = useState(1);
  const [statusValue, setStatusValue] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    dispatch(
      getData({
        sort,
        q: value,
        sortColumn,
        page: currentPage,
        perPage: rowsPerPage,
        status: statusValue,
      }),
    );
  }, [dispatch]);

  const handleFilter = (val) => {
    setValue(val);
    dispatch(
      getData({
        sort,
        q: val,
        sortColumn,
        page: currentPage,
        perPage: rowsPerPage,
        status: statusValue,
      }),
    );
  };

  const handlePerPage = (e) => {
    dispatch(
      getData({
        sort,
        q: value,
        sortColumn,
        page: currentPage,
        status: statusValue,
        perPage: parseInt(e.target.value),
      }),
    );
    setRowsPerPage(parseInt(e.target.value));
  };

  const handleStatusValue = (e) => {
    setStatusValue(e.target.value);
    dispatch(
      getData({
        sort,
        q: value,
        sortColumn,
        page: currentPage,
        perPage: rowsPerPage,
        status: e.target.value,
      }),
    );
  };

  const handlePagination = (page) => {
    dispatch(
      getData({
        sort,
        q: value,
        sortColumn,
        status: statusValue,
        perPage: rowsPerPage,
        page: page.selected + 1,
      }),
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

    if (store.data.length > 0) {
      return store.data;
    } else if (store.allData.length === 0 && isFiltered) {
      return [];
    } else {
      return store.allData.slice(0, rowsPerPage);
    }
  };

  const handleSort = (column, sortDirection) => {
    setSort(sortDirection);
    setSortColumn(column.sortField);
    dispatch(
      getData({
        q: value,
        page: currentPage,
        sort: sortDirection,
        status: statusValue,
        perPage: rowsPerPage,
        sortColumn: column.sortField,
      }),
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
            columns={columns(dispatch)}
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
                value={value}
                statusValue={statusValue}
                rowsPerPage={rowsPerPage}
                handleFilter={handleFilter}
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
