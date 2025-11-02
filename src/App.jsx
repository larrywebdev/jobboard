import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Listing from "./components/jobs/Listing";
import "./index.css";
import AppLayout from "./layout/AppLayout";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="listing/:job_id" element={<Listing />} />
        </Route>
        <Route path="*" element={<h1>Page Not Found</h1>}></Route>
      </Routes>
    </Router>
  );
}
export default App;
