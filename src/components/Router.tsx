import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "../App";
import About from "../pages/About";
import Resume from "../pages/Resume";
import Portfolio from "../pages/Portfolio";

export default function Router() {
return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />}>
        <Route index element={<App/>} />
        <Route path="about" element={<About />} />
        <Route path="resume" element={<Resume />} />
        <Route path="portfolio" element={<Portfolio/>} />
        </Route>
    </Routes>
    </BrowserRouter>
);
}