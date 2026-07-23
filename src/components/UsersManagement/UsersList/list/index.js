import AddUser from "../AddUser";

// ** React Imports
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Select from "react-select";

// ** Table Columns
import { columns } from "./columns";

// ** Third Party Components
import ReactPaginate from "react-paginate";
import { ChevronDown } from "react-feather";
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

const rolesOptions = [
  { id: "", value: "all", label: "همه" },
  { id: 2, value: "student", label: "دانشجو" },
  { id: 3, value: "teacher", label: "استاد" },
  { id: 1, value: "admin", label: "ادمین" },
  { id: 10, value: "GOD", label: "GOD" },
];

const statusOptions = [
  { value: "", label: "همه" },
  { value: true, label: "فعال" },
  { value: false, label: "غیرفعال" },
];



const CustomHeader = ({
  role,
  handleRoleFilter,
  status,
  handleStatusFilter,
  handleFilter,
  value,
  handlePerPage,
  rowsPerPage,
}) => {

  return (
    <div className="invoice-list-table-header w-100 py-2">
      <Row>
        <Col className="mb-1" md="4" sm="12">
          <Label className="form-label fs-5">نقش</Label>
          <Select
            theme={selectThemeColors}
            className="react-select"
            classNamePrefix="select"
            options={rolesOptions}
            isClearable={false}
            defaultValue={rolesOptions[0]}
            onChange={
              selectedOption => {handleRoleFilter(selectedOption)}
            }
          />
        </Col>
        <Col className="mb-1" md="4" sm="12">
          <Label className="form-label fs-5">وضعیت</Label>
          <Select
            theme={selectThemeColors}
            className="react-select"
            classNamePrefix="select"
            options={statusOptions}
            isClearable={false}
            defaultValue={statusOptions[0]}
            onChange={selectedOption => handleStatusFilter(selectedOption)}
          />
        </Col>
      </Row>
      <Row>
        <Col lg="12" className="d-flex align-items-center px-0 px-lg-1">
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
          <AddUser />
        </Col>
      </Row>
    </div>
  );
};

const InvoiceList = () => {
  // ** Store vars
  const dispatch = useDispatch();
  const store = useSelector((state) => state.users_management);

  // ** States
  const [role, setRole] = useState({})
  const [status, setStatus] = useState({})
  const [value, setValue] = useState("");
  const [sort, setSort] = useState("desc");
  const [sortColumn, setSortColumn] = useState("id");
  const [currentPage, setCurrentPage] = useState(1);
  // const [statusValue, setStatusValue] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    dispatch(
      getData({
        sort,
        q: value,
        sortColumn,
        page: currentPage,
        perPage: rowsPerPage,
        roleId: role.id,
        isActiveUser: status.value
      }),
    );
    // console.log("store", store)
  }, [
    dispatch,
    currentPage,
    rowsPerPage,
    sort,
    sortColumn,
    value,
    role,
    status    
  ]);


  const handleRoleFilter = (roleOption) => {
    setRole(roleOption)
    console.log("role:", roleOption.id);
    dispatch(
      getData({
        sort,
        q: "",
        sortColumn,
        page: currentPage,
        perPage: rowsPerPage,
        roleId: roleOption.id,
        isActiveUser: status.value
      }),
    );
  };
  
  const handleStatusFilter = (statusOption) => {
    setStatus(statusOption)
    console.log("status:", statusOption.value);
    dispatch(
      getData({
        sort,
        q: "",
        sortColumn,
        page: currentPage,
        perPage: rowsPerPage,
        roleId: role.id,
        isActiveUser: statusOption.value
      }),
    );
  };

  const handleFilter = (val) => {
    setValue(val);
    dispatch(
      getData({
        sort,
        q: val,
        sortColumn,
        page: currentPage,
        perPage: rowsPerPage,
        roleId: role.id,
        isActiveUser: status.value
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
        perPage: parseInt(e.target.value),
        roleId: role.id,
        isActiveUser: status.value
      }),
    );
    setRowsPerPage(parseInt(e.target.value));
  };

  const handlePagination = (page) => {
    dispatch(
      getData({
        sort,
        q: value,
        sortColumn,
        perPage: rowsPerPage,
        page: page.selected + 1,
        roleId: role.id,
        isActiveUser: status.value
      }),
    );
    setCurrentPage(page.selected + 1);
  };

  const CustomPagination = () => {
    const count =  Math.ceil(store.total / rowsPerPage);

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
    };

    const isFiltered = Object.keys(filters).some(function (k) {
      return filters[k].length > 0;
    });

    if (store.data.length > 0) {
      return store.data;
    } else if (store.data.length === 0 && isFiltered) {
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
        perPage: rowsPerPage,
        sortColumn: column.sortField,
        roleId: role.id,
        isActiveUser: status.value
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
            columns={columns}
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
                rowsPerPage={rowsPerPage}
                handleRoleFilter={handleRoleFilter}
                handleStatusFilter={handleStatusFilter}
                handleFilter={handleFilter}
                handlePerPage={handlePerPage}
                role={role}
                status={status}
              />
            }
          />
        </div>
      </Card>
    </div>
  );
};

export default InvoiceList;
