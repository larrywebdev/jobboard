import { useJobs } from "../../context/JobContext";
import NotFound from "../NotFound";
import Pagination from "../Pagination";
import JobCard from "./JobCard";

export default function Jobs({ filter, setFilter }) {
  const { jobs, loading, error } = useJobs();
  const filteredJobs = jobs.filter((job) =>
    job.job_title.toLowerCase().includes(filter.toLowerCase())
  );
  if (loading)
    return (
      <span className="font-medium text-2xl mx-auto mt-30">
        Loading jobs...
      </span>
    );
  if (error)
    return (
      <span className="font-medium text-2xl m-auto">Failed to fetch jobs</span>
    );
  if (filteredJobs.length === 0)
    return <NotFound setFilter={setFilter}>No Jobs Found</NotFound>;
  return (
    <div className="grid max-w-6xl">
      <Pagination
        items={filteredJobs}
        itemsPerPage={2}
        renderCard={(job) => <JobCard job={job} />}
      />
    </div>
  );
}
