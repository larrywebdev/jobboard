import { Outlet } from "react-router-dom";
import { useJobs } from "../context/JobContext";
import Jobs from "../components/jobs/Jobs";
export default function JobsLayout() {
  const { loading, error } = useJobs();
  if (loading)
    return (
      <span className="font-medium text-2xl mx-auto mt-30">
        Loading jobs...
      </span>
    );
  if (error)
    return (
      <span className="font-medium text-2xl mx-auto mt-30">
        Failed to fetch jobs
      </span>
    );
  return (
    <div className="flex mb-20">
      <Jobs />
      <Outlet />
    </div>
  );
}
