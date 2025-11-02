import Span from "../Span";
import { Link } from "react-router-dom";
import BlueButton from "../Button";
import Interpunct from "../Interpunct";

export default function JobCard({ job }) {
  return (
    <div
      className="relative border-2 border-[#f4f3f4] p-2.5 rounded h-50 w-100 mt-5 mr-5 ml-7.5"
      key={job.job_id}
    >
      <div className="w-15 h-15 absolute left-3.5 top-7.5 ">
        {job.employer_logo ? (
          <img
            className="border border-[#f4f4f4] rounded-full p-2.5 w-full h-full object-cover"
            src={job.employer_logo}
            alt={job.employer_name}
          />
        ) : null}
      </div>
      <div className="w-75 absolute top-5 right-2.5">
        <h2 className="font-medium text-lg">{job.job_title}</h2>
        <Span>{job.employer_name}</Span> <Interpunct />
        {job.job_city || job.job_state ? (
          <Span>
            {job.job_city}
            {job.job_city ? "," : ""} {job.job_state}
          </Span>
        ) : (
          <Span>Not Specified</Span>
        )}
        <br />
        <Span>{job.job_employment_type}</Span>
        <br />
        <Link to={`/listing/${job.job_id}`}>
          <BlueButton
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            View Details
          </BlueButton>
        </Link>
      </div>
    </div>
  );
}
