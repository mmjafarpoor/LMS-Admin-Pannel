// ** React Imports
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Select from "react-select";

// ** Table Columns
import { columns } from "./columns";
import AddBuilding from "../AddBuilding";

// ** Third Party Components
import ReactPaginate from "react-paginate";
import { ChevronDown, Grid, Bookmark, CreditCard } from "react-feather";
import DataTable from "react-data-table-component";

// ** Reactstrap Imports
import { Button, Input, Row, Col, Card, CardBody, Label } from "reactstrap";

// ** Store & Actions
import { getBuildingData } from "../store";
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
}) => {

  return (
    <div className="invoice-list-table-header w-100 py-2">
      <AddBuilding/>
    </div>
  );
};

const InvoiceList = () => {
  // ** Store vars
  const dispatch = useDispatch();
  const store = useSelector((state) => state.buildings);
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
      getBuildingData({
        sort,
        q: value,
        sortColumn,
        page: currentPage,
        perPage: rowsPerPage,
        status: statusValue,
      }),
    );
  }, []);

  const handleStatusValue = (e) => {
    setStatusValue(e.target.value);
    dispatch(
      getBuildingData({
        sort,
        q: value,
        sortColumn,
        page: currentPage,
        perPage: rowsPerPage,
        status: e.target.value,
      }),
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

    if (store.allData.length > 0) {
      return store.allData;
    } else if (store.allData.length === 0 && isFiltered) {
      return [];
    } else {
      return store.allData.slice(0, rowsPerPage);
    }
  };

  return (
    <div className="invoice-list-wrapper" style={{ width: "100%" }}>
      <Card>
        <div className="invoice-list-dataTable react-dataTable">
          <DataTable
            noHeader
            subHeader={true}
            columns={columns(dispatch)}
            responsive={true}
            data={dataToRender()}
            sortIcon={<ChevronDown />}
            className="react-dataTable"
            defaultSortField="invoiceId"
            subHeaderComponent={
              <CustomHeader/>
            }
          />
        </div>
      </Card>
    </div>
  );
};

export default InvoiceList;
