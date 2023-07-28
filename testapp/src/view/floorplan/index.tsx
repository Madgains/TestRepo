import StatusFilter from "jda-catman-react-data-controls/dist/status-filter";
import ObjectDataGrid from "jda-catman-react-grid/dist/object-data-grid";
import { getStatusFilter } from "jda-catman-react-utils/dist/helper";
import { default as React, Fragment, ReactElement, useState } from "react";

const FloorplanView = (): ReactElement<any> => {

  const [filterData, setFilterData] = useState("");
  const [clearColumnFilter, setClearColumnFilter] = useState(false);

  const columns: any[] = [
    { "field": "DBCurrentUser", "title": "Lock", "columnType": "image", "isFilterable": false, "headerImage": "locked" },
    { "field": "dbstatus", "title": "Status", "columnType": "image", "isFilterable": false, "headerImage": "dbstatus" },
    { "field": "name", "title": "Name", "filter": "text", "isFilterable": true },
    { "field": "width", "title": "Width", "filter": "numeric", "isFilterable": true },
    { "field": "depth", "title": "Depth", "filter": "numeric", "isFilterable": true }
  ]

  const statusChange = (keys: number[]) => {
    setClearColumnFilter(true);
    setFilterData("");
    getFilterString(keys);
  };

  const getFilterString = (keys: number[]) => {
    let filterString: string = "";
    if (getStatusFilter(keys)) {
      filterString = filterString + getStatusFilter(keys) + " and ";
    }

    filterString = filterString.substring(0, filterString.length - 5);
    setFilterData(filterString);
  };

  return (
    <Fragment>
      <StatusFilter
        applicationName={"ckb"}
        moduleName={"floorplans"}
        viewName={"default"}
        width={200}
        onStatusChange={statusChange} />

      <ObjectDataGrid
        applicationName={"ckb"}
        objectType={"floorplans"}
        moduleName={"floorplans"}
        viewName={"default"}
        apiUrl={"floorplans"}
        filterData={filterData}
        selectList={"Name, Width, Depth, DBKey, DBCurrentUser, dbstatus"}
        keyColumn={"DBKey"}
        dbParentAccountKey={0}
        staticFilter={""}
        clearColumnFilter={clearColumnFilter}
        gridSelectionLimit={1000}
        paging={true}
        pageSize={20}
        pageDropdown={[10, 30, 50, 100]}
        columns={columns}
        multiSelect={true}
        headerCheckboxDropDown={true}
        tableName={"ix_flr_floorplan"}
      />
    </Fragment>
  );
};

export default FloorplanView;