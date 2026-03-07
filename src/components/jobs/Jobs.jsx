import useJobs from "../../hooks/useJobs";
import { useJobStore } from "../../store/jobStore";
import PaginatedCards from "../PaginatedCards";
import JobCard from "./JobCard";

export default function Jobs() {
  const { jobs } = useJobs();
  const { filter } = useJobStore((state) => state);
  const filteredJobs = jobs.filter((job) =>
    job.job_title?.toLowerCase().includes(filter.toLowerCase()),
  );
  return (
    <div className="grid max-w-6xl h-max px-4 sm:px-0">
      <PaginatedCards
        items={filteredJobs}
        itemsPerPage={15}
        renderCard={(job) => <JobCard job={job} />}
      />
    </div>
  );
}
