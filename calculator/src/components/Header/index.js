"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = Header;
const jsx_runtime_1 = require("react/jsx-runtime");
require("./style.css");
const react_router_dom_1 = require("react-router-dom");
function Header() {
    const test = "test";
    return ((0, jsx_runtime_1.jsxs)("header", { children: ["this is the header. ", (0, jsx_runtime_1.jsx)("br", {}), test, (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/", children: "test link" })] }));
}
