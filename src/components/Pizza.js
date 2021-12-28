import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Pizza = ({ pizza }) => {
    const { name, description, price } = pizza;
    return (_jsx("div", { children: _jsxs("ul", { children: [_jsx("h2", { children: name }, void 0), _jsx("p", { children: description }, void 0), _jsx("p", { children: price }, void 0)] }, void 0) }, void 0));
};
export default Pizza;
//# sourceMappingURL=Pizza.js.map