import { BrowserRouter, Routes, Route } from "react-router-dom";
import Today from "./pages/Today";
import Journal from "./pages/Journal";
import Archive from "./pages/Archive";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Today />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </BrowserRouter>
  );
}
