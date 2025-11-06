import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Listing from "./components/jobs/Listing";
import "./index.css";
import AppLayout from "./layout/AppLayout";
import NotFound from "./components/NotFound";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="listing/:job_id" element={<Listing />} />
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Analytics />
    </Router>
  );
}
export default App;
