"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const session_store_1 = require("jda-catman-react-utils/dist/session-store");
const create_store_1 = __importDefault(require("jda-catman-redux-dynamic/dist/create-store"));
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const react_redux_1 = require("react-redux");
const App_1 = __importDefault(require("./App"));
require("./index.css");
require("./styles/all.css");
const store = (0, create_store_1.default)();
const accessToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IkNENjZBOTIyQkI4RjM0MDQ1RDU3MURFMEREMEIyN0YwRjE3RUVCNTIiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJ6V2FwSXJ1UE5BUmRWeDNnM1FzbjhQRi02MUkifQ.eyJuYmYiOjE1NzgzOTkwNTcsImV4cCI6MTU3ODQwMjY1NywiaXNzIjoiaHR0cDovL3ZkbWkta2t1bWFyMjo3NTAwL0lBTSIsImF1ZCI6WyJodHRwOi8vdmRtaS1ra3VtYXIyOjc1MDAvSUFNL3Jlc291cmNlcyIsIkRvY3VtZW50cyIsIkZsb29ycGxhbnMiLCJQbGFub2dyYW1zIiwiUHJvZHVjdHMiLCJTdG9yZXMiLCJTeXN0ZW0iLCJVc2VycyJdLCJjbGllbnRfaWQiOiJSZXNPd25lckNsaWVudCIsInN1YiI6ImNrYmFkbWluIiwiYXV0aF90aW1lIjoxNTc4Mzk5MDU1LCJpZHAiOiJsb2NhbCIsIm5hbWUiOiJja2JhZG1pbiIsInJvbGUiOlsiaXhfZ3JwX2FkbWluIiwiaXhfcm9sZV9laWFwcm9qZWN0X2FkbWluIiwiaXhfcm9sZV9hc3NvcnRtZW50X2FkbWluIiwiaXhfcm9sZV9jbHVzdGVyX2FkbWluIiwiaXhfcm9sZV9mbG9vcnBsYW5fYWRtaW4iLCJpeF9yb2xlX3BsYW5vZ3JhbV9hZG1pbiIsIml4X3JvbGVfcHJvZHVjdF9hZG1pbiIsIml4X3JvbGVfc3RvcmVfYWRtaW4iLCJpeF9yb2xlX3N5c3RlbV9hZG1pbiIsIml4X3JvbGVfcHJvbmV0X2FkbWluIl0sInNjb3BlIjpbIkRvY3VtZW50cyIsIkZsb29ycGxhbnMiLCJQbGFub2dyYW1zIiwiUHJvZHVjdHMiLCJTdG9yZXMiLCJTeXN0ZW0iLCJVc2VycyJdLCJhbXIiOlsiY3VzdG9tIl19.MtVXea0bf9YuM8PYrrKUFSPKMJyqtsGrA0MYWtOX1MEBWOodIUJ05wdnHvBh0gnq-SPYAM0b0o5bsjiklveJLA6SbD22yzEzaxOwkXyntOnKlcAAb3iX15hImFz-0fWsHSwAj1M8uuoM0jY_9VzYVBXAzr66gK7JGjsvgXOBH4NSgB52J4Cxw6u47yu2L2NiFVStiYjb82J_O6-uFcN9jv1qjkuCSd87CeqrUfIj50Kn-N6oB0cKUNE9vcbGcEEVp-XxOdZ84IarnmKq-FvNwXxRv78r_thk-nFm_gBx96luVtJ-tS1OQz6Lx2gYpJqC8xyDRca99lncmRLfMdGtQw";
(0, session_store_1.AddItemToStore)("access_token", accessToken);
let gatewayUrl = "http://vdmi-kkumar2:7500";
(0, session_store_1.AddItemToStore)("gatewayUrl", gatewayUrl);
react_dom_1.default.render(<react_redux_1.Provider store={store}>
        <App_1.default />
    </react_redux_1.Provider>, document.getElementById('root'));
