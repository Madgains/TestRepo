"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const status_filter_1 = __importDefault(require("jda-catman-react-data-controls/dist/status-filter"));
const object_data_grid_1 = __importDefault(require("jda-catman-react-grid/dist/object-data-grid"));
const helper_1 = require("jda-catman-react-utils/dist/helper");
const react_1 = __importStar(require("react"));
const FloorplanView = () => {
    const [filterData, setFilterData] = (0, react_1.useState)("");
    const [clearColumnFilter, setClearColumnFilter] = (0, react_1.useState)(false);
    const columns = [
        { "field": "DBCurrentUser", "title": "Lock", "columnType": "image", "isFilterable": false, "headerImage": "locked" },
        { "field": "dbstatus", "title": "Status", "columnType": "image", "isFilterable": false, "headerImage": "dbstatus" },
        { "field": "name", "title": "Name", "filter": "text", "isFilterable": true },
        { "field": "width", "title": "Width", "filter": "numeric", "isFilterable": true },
        { "field": "depth", "title": "Depth", "filter": "numeric", "isFilterable": true }
    ];
    const statusChange = (keys) => {
        setClearColumnFilter(true);
        setFilterData("");
        getFilterString(keys);
    };
    const getFilterString = (keys) => {
        let filterString = "";
        if ((0, helper_1.getStatusFilter)(keys)) {
            filterString = filterString + (0, helper_1.getStatusFilter)(keys) + " and ";
        }
        filterString = filterString.substring(0, filterString.length - 5);
        setFilterData(filterString);
    };
    return (<react_1.Fragment>
      <status_filter_1.default applicationName={"ckb"} moduleName={"floorplans"} viewName={"default"} width={200} onStatusChange={statusChange}/>

      <object_data_grid_1.default applicationName={"ckb"} objectType={"floorplans"} moduleName={"floorplans"} viewName={"default"} apiUrl={"floorplans"} filterData={filterData} selectList={"Name, Width, Depth, DBKey, DBCurrentUser, dbstatus"} keyColumn={"DBKey"} dbParentAccountKey={0} staticFilter={""} clearColumnFilter={clearColumnFilter} gridSelectionLimit={1000} paging={true} pageSize={20} pageDropdown={[10, 30, 50, 100]} columns={columns} multiSelect={true} headerCheckboxDropDown={true} tableName={"ix_flr_floorplan"}/>
    </react_1.Fragment>);
};
exports.default = FloorplanView;
