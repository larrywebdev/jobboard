import { Link, useParams } from "react-router-dom";
import JobCardContent from "./JobCardContent";

export default function JobCard({ job }) {
  const { job_id } = useParams();

  return (
    <Link
      to={`/listing/${job.job_id}`}
      className={`border p-4 pl-5 rounded-3xl h-max mt-5 sm:w-60 md:w-65 lg:w-70 xl:w-80 2xl:w-100 w-full ${job_id === job.job_id ? "border-blue-800" : "border-gray-300"} block`}
    >
      <JobCardContent job={job} />
    </Link>
  );
}
