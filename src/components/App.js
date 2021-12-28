import { jsx as _jsx } from "react/jsx-runtime";
import Pizza from "./Pizza";
import pizzas from "../data/pizzas.json";
const App = () => {
    return (_jsx("ul", { children: pizzas.map((pizza) => {
            return _jsx(Pizza, { pizza: pizza }, pizza.id);
        }) }, void 0));
};
export default App;
//# sourceMappingURL=App.js.map