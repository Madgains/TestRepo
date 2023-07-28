import { AddItemToStore } from "jda-catman-react-utils/dist/session-store";
import createStore from "jda-catman-redux-dynamic/dist/create-store";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from './App';
import './index.css';
import "./styles/all.css";

const store: any = createStore();

const accessToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IkNENjZBOTIyQkI4RjM0MDQ1RDU3MURFMEREMEIyN0YwRjE3RUVCNTIiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJ6V2FwSXJ1UE5BUmRWeDNnM1FzbjhQRi02MUkifQ.eyJuYmYiOjE1NzgzOTkwNTcsImV4cCI6MTU3ODQwMjY1NywiaXNzIjoiaHR0cDovL3ZkbWkta2t1bWFyMjo3NTAwL0lBTSIsImF1ZCI6WyJodHRwOi8vdmRtaS1ra3VtYXIyOjc1MDAvSUFNL3Jlc291cmNlcyIsIkRvY3VtZW50cyIsIkZsb29ycGxhbnMiLCJQbGFub2dyYW1zIiwiUHJvZHVjdHMiLCJTdG9yZXMiLCJTeXN0ZW0iLCJVc2VycyJdLCJjbGllbnRfaWQiOiJSZXNPd25lckNsaWVudCIsInN1YiI6ImNrYmFkbWluIiwiYXV0aF90aW1lIjoxNTc4Mzk5MDU1LCJpZHAiOiJsb2NhbCIsIm5hbWUiOiJja2JhZG1pbiIsInJvbGUiOlsiaXhfZ3JwX2FkbWluIiwiaXhfcm9sZV9laWFwcm9qZWN0X2FkbWluIiwiaXhfcm9sZV9hc3NvcnRtZW50X2FkbWluIiwiaXhfcm9sZV9jbHVzdGVyX2FkbWluIiwiaXhfcm9sZV9mbG9vcnBsYW5fYWRtaW4iLCJpeF9yb2xlX3BsYW5vZ3JhbV9hZG1pbiIsIml4X3JvbGVfcHJvZHVjdF9hZG1pbiIsIml4X3JvbGVfc3RvcmVfYWRtaW4iLCJpeF9yb2xlX3N5c3RlbV9hZG1pbiIsIml4X3JvbGVfcHJvbmV0X2FkbWluIl0sInNjb3BlIjpbIkRvY3VtZW50cyIsIkZsb29ycGxhbnMiLCJQbGFub2dyYW1zIiwiUHJvZHVjdHMiLCJTdG9yZXMiLCJTeXN0ZW0iLCJVc2VycyJdLCJhbXIiOlsiY3VzdG9tIl19.MtVXea0bf9YuM8PYrrKUFSPKMJyqtsGrA0MYWtOX1MEBWOodIUJ05wdnHvBh0gnq-SPYAM0b0o5bsjiklveJLA6SbD22yzEzaxOwkXyntOnKlcAAb3iX15hImFz-0fWsHSwAj1M8uuoM0jY_9VzYVBXAzr66gK7JGjsvgXOBH4NSgB52J4Cxw6u47yu2L2NiFVStiYjb82J_O6-uFcN9jv1qjkuCSd87CeqrUfIj50Kn-N6oB0cKUNE9vcbGcEEVp-XxOdZ84IarnmKq-FvNwXxRv78r_thk-nFm_gBx96luVtJ-tS1OQz6Lx2gYpJqC8xyDRca99lncmRLfMdGtQw";
AddItemToStore("access_token", accessToken);

let gatewayUrl = "http://vdmi-kkumar2:7500";
AddItemToStore("gatewayUrl", gatewayUrl);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
