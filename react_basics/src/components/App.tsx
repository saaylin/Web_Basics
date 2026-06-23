import { Routes, Route } from "react-router-dom";
import Page1 from "./components/09_react/Page1";
import Page2 from "./components/09_react/Page2";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </div>
  );
}
