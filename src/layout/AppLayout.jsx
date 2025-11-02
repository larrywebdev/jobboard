import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Jobs from "../components/jobs/Jobs";
import { useState } from "react";

export default function Layout() {
  const [filter, setFilter] = useState("");
  return (
    <>
      <Header setFilter={setFilter} />
      <div className="flex justify-between mb-20">
        <Jobs filter={filter} setFilter={setFilter} />
        <Outlet />
      </div>
    </>
  );
}
