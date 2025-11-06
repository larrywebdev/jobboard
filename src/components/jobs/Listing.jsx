import { FaArrowLeftLong } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { useJobs } from "../../context/JobContext";
import BlueButton from "../Button";
import JobDescription from "./JobDescription";
import Interpunct from "../Interpunct";
import JobNotFound from "../JobNotFound";
export default function Listing() {
  const { job_id } = useParams();
  const { jobs, loading, error } = useJobs();
  const job = jobs.find((job) => job.job_id === job_id);

  if (loading) return null;
  if (error)
    return (
      <span className="font-medium text-2xl m-auto">Failed to fetch jobs</span>
    );

  if (!job) return <JobNotFound style="w-190">Job Not Found</JobNotFound>;
  return (
    <div className="w-190 h-min mr-5 mt-5 border-2 border-[#f4f3f4] p-7.5 pt-3.5 rounded text-sm">
      <Link
        to="/"
        className="flex items-center gap-0.5 text-blue-600 hover:text-blue-800 hover:underline w-max"
      >
        <FaArrowLeftLong /> <span>Go back</span>
      </Link>
      <h2 className="font-medium text-2xl mt-5">{job.job_title}</h2>
      <div className="flex gap-1.5 items-center my-3">
        {job.employer_logo && (
          <div className="w-15 h-15">
            <img
              src={job.employer_logo}
              alt={job.employer_name}
              className="border border-[#f4f4f4] rounded-full p-2.5 w-full h-full object-cover"
            />
          </div>
        )}
        <h5>{job.employer_name}</h5>
      </div>

      <span className="flex items-center gap-5">
        <span>{job.job_employment_type}</span>
        <Interpunct />
        <span>
          <strong>Remote:</strong> {job.job_is_remote ? "Yes" : "No"}
        </span>
        <Interpunct />
        <span>
          <strong>Posted:</strong> {job.job_posted_at}
        </span>
        <Interpunct />
        <span>
          <strong>Location:</strong> {job.job_city ? `${job.job_city},` : null}{" "}
          {job.job_state}
        </span>
      </span>

      <div className="my-10">
        <h4 className="text-lg font-medium mb-3">Job Description</h4>
        <JobDescription description={job.job_description} limit={290} />
      </div>

      <div className="mt-5 flex justify-between items-center">
        <Link to={job.job_apply_link} target="_blank" rel="noopener noreferrer">
          <BlueButton className="w-95 h-11">Apply here</BlueButton>
        </Link>
        {job.employer_website && (
          <Link
            to={job.employer_website}
            className="flex items-center gap-0.5 text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Visit company's website</span>
            <MdOutlineArrowOutward />
          </Link>
        )}
      </div>
    </div>
  );
}
