import { jsx as _jsx } from "react/jsx-runtime";
import ReactDom from "react-dom";
const HelloWorld = () => {
    return _jsx("h1", { children: "Hello World!" }, void 0);
};
alert("hello World!");
ReactDom.render(_jsx(HelloWorld, {}, void 0), document.getElementById("root"));
