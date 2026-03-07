export default function JobCardContent({ job }) {
  return (
    <div className="grid w-full">
      <h2 className="text-start font-medium text-lg/5 mb-2.5 hover:underline">
        {job.job_title}
      </h2>

      <span className="text-sm mb-1 text-gray-500">{job.employer_name}</span>

      <span className="text-sm mb-1 text-gray-500">
        {job.job_city || job.job_state}
      </span>

      {job.job_employment_type && (
        <span className="text-xs font-bold bg-gray-200 p-1.5 rounded-lg w-max">
          {job.job_employment_type}
        </span>
      )}
    </div>
  );
}
