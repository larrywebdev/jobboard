import ReactMarkdown from "react-markdown";
import { Link, useNavigate, useParams } from "react-router-dom";
import remarkGfm from "remark-gfm";
import useJobs from "../../hooks/useJobs";
import Interpunct from "../Interpunct";
import JobNotFound from "../JobNotFound";

export default function Listing() {
  const navigate = useNavigate();
  const { job_id } = useParams();
  const { jobs, isLoading, error } = useJobs();
  const job = jobs.find((job) => job.job_id === job_id);

  if (isLoading)
    return <div className="text-xl font-bold m-auto">Loading...</div>;
  if (error)
    return (
      <span className="font-medium text-2xl m-auto">
        No listing available right now, please try again later.
      </span>
    );

  if (!job)
    return (
      <JobNotFound style="w-190">This Job Is No Longer Available</JobNotFound>
    );
  return (
    <div className="flex flex-col w-full lg:w-165 xl:w-200 2xl:w-300 sm:mt-5 sm:border-2 sm:border-gray-400 p-4 rounded-3xl text-sm sm:sticky sm:top-3 sm:h-[calc(100vh-25px)] sm:max-h-137.5 sm:overflow-auto">
      <button
        className="bg-black/80 py-3 px-7 text-white text-sm font-bold rounded-full sm:hidden self-start"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
      <h2 className="font-medium text-2xl mt-5">{job.job_title}</h2>
      <div className="flex gap-3 items-center my-3">
        {job.employer_logo && (
          <div className="w-11 h-9 shrink-0">
            <img
              src={job.employer_logo}
              alt={job.employer_name}
              className="rounded-xl w-full h-full object-cover"
            />
          </div>
        )}
        {job.employer_website ? (
          <Link
            to={job.employer_website}
            className="underline text-sm sm:text-base hover:text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            {job.employer_name}
          </Link>
        ) : (
          job.employer_name
        )}
      </div>

      <span className="flex items-center gap-5 mb-5">
        <span className="bg-gray-300 p-2 rounded-xl font-bold text-xs">
          {job.job_employment_type}
        </span>
        {job.job_is_remote && <Interpunct />}
        {job.job_is_remote ? <strong>Remote</strong> : null}
        {(job.job_city || job.job_state) && <Interpunct />}
        {(job.job_city || job.job_state) && (
          <span className="font-bold">{job.job_city || job.job_state}</span>
        )}
        {job.job_posted_at && <Interpunct />}
        <span className="text-sm sm:text-base">{job.job_posted_at}</span>
      </span>
      <Link
        to={job.job_apply_link}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:inline"
      >
        <div className="p-2.5 w-30 h-11 text-sm text-white font-bold bg-blue-700 rounded-full flex justify-center items-center">
          Apply now
        </div>
      </Link>
      <div className="mt-5 sm:overflow-auto border-t-2 border-gray-300 pt-5 ">
        <h4 className="text-lg font-bold mb-3">Job Details:</h4>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ children }) => (
              <h1 className="text-3xl font-bold mb-4">{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-xl font-semibold mt-8 mb-3 pb-2">
                {children}
              </h2>
            ),
            p: ({ children }) => (
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                {children}
              </p>
            ),
            ul: ({ children }) => (
              <ul className="list-disc pl-6 space-y-2 mb-4">{children}</ul>
            ),
            li: ({ children }) => (
              <li className="my-1 leading-relaxed list-disc">{children}</li>
            ),
            strong: ({ children }) => (
              <strong className="font-semibold text-gray-900">
                {children}
              </strong>
            ),
          }}
        >
          {job.job_description}
        </ReactMarkdown>
        <Link
          to={job.job_apply_link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline sm:hidden sticky bottom-0"
        >
          <div className="sm:p-2.5 py-6 w-full sm:w-30 h-11 text-sm text-white font-bold bg-blue-700 rounded-xl flex justify-center items-center">
            Apply now
          </div>
        </Link>
      </div>
    </div>
  );
}
