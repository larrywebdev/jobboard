import { useJobs } from "../../context/JobContext";
import PaginatedCards from "../PaginatedCards";
import JobCard from "./JobCard";

export default function Jobs() {
  const { filteredJobs } = useJobs();

  return (
    <div className="grid max-w-6xl">
      <PaginatedCards
        items={filteredJobs}
        itemsPerPage={2}
        renderCard={(job) => <JobCard job={job} />}
      />
    </div>
  );
}
