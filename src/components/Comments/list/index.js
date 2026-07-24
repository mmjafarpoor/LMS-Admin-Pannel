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

const statusOptions = [
  { value: "", label: "همه" },
  { value: true, label: "تایید شده" },
  { value: false, label: "تایید نشده" },
];

const CustomHeader = ({
  value,
  status,
  handleStatusFilter,
  handlePerPage,
  rowsPerPage,
}) => {

  return (
    <div className="invoice-list-table-header w-100 py-2">
      <div style={{display: "flex", flexFlow: "row", justifyContent: "space-between"}}>
        <Col md="6">
          <Label className="form-label fs-5">وضعیت</Label>
          <Select
            theme={selectThemeColors}
            className="react-select"
            classNamePrefix="select"
            defaultValue={statusOptions[0]}
            options={statusOptions}
            isClearable={false}
            onChange={selectedOption => handleStatusFilter(selectedOption)}
          />
        </Col>

        <Col md="2" className="d-flex align-items-center px-0 px-lg-1 mt-2">
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
        </Col>
      </div>
        
        
    </div>
  );
};

const InvoiceList = () => {
  // ** Store vars
  const dispatch = useDispatch();
  const store = useSelector((state) => state.comments);

  // ** States
  const [value, setValue] = useState("");
  const [sort, setSort] = useState("desc");
  const [sortColumn, setSortColumn] = useState("id");
  const [currentPage, setCurrentPage] = useState(1);
  const [status, setStatus] = useState({})
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    dispatch(
      getData({
        page: currentPage,
        perPage: rowsPerPage,
        status: status.value
      }),
    );
  }, [dispatch]);

  const handleStatusFilter = (statusOption) => {
      setStatus(statusOption)
      console.log("status:", statusOption.value);
      dispatch(
        getData({
          page: currentPage,
          perPage: rowsPerPage,
          status: statusOption.value
        }),
      );
    };

  const handlePerPage = (e) => {
    dispatch(
      getData({
        page: currentPage,
        perPage: parseInt(e.target.value),
        status: status.value
      }),
    );
    setRowsPerPage(parseInt(e.target.value));
  };

  const handlePagination = (page) => {
    dispatch(
      getData({
        perPage: rowsPerPage,
        page: page.selected + 1,
        status: status.value
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
    };

    const isFiltered = Object.keys(filters).some(function (k) {
      return filters[k].length > 0;
    });

    if (store.allData.length > 0) {
      return store.allData;
    } else if (store.total === 0 && isFiltered) {
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
        page: currentPage,
        perPage: rowsPerPage,
        status: status.value
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
                status={status}
                handleStatusFilter={handleStatusFilter}
                rowsPerPage={rowsPerPage}
                handlePerPage={handlePerPage}
              />
            }
          />
        </div>
      </Card>
    </div>
  );
};

export default InvoiceList;