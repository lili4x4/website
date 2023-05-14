import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "../App";
import About from "../pages/About";
import Events from "../pages/Events";
import Coding from "../pages/Coding";

export default function Router() {
return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />}>
        <Route index element={<App/>} />
        <Route path="about" element={<About />} />
        <Route path="events" element={<Events />} />
        <Route path="coding" element={<Coding />} />
        </Route>
    </Routes>
    </BrowserRouter>
);
}