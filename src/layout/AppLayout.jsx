import { useMediaQuery } from "react-responsive";
import { Navigate, Outlet, useParams } from "react-router-dom";
import Header from "../components/Header";
import JobNotFound from "../components/JobNotFound";
import FetchingJobs from "../components/jobs/FetchingJobs";
import Jobs from "../components/jobs/Jobs";
import ScrollToTop from "../components/ScrollToTop";
import useJobs from "../hooks/useJobs";
import { useJobStore } from "../store/jobStore";

export default function Layout() {
  const { filter } = useJobStore((state) => state);
  const { job_id } = useParams();
  const isMobile = useMediaQuery({ maxWidth: 639 });
  const { jobs, isLoading, error } = useJobs();
  const filteredJobs = jobs.filter((job) =>
    job.job_title?.toLowerCase().includes(filter.toLowerCase()),
  );
  if (error) {
    return (
      <div className="text-center mt-20">
        <span className="text-2xl font-medium">{error}</span>
      </div>
    );
  }

  if (isLoading) return <FetchingJobs />;
  if (jobs.length === 0)
    return (
      <JobNotFound>
        No job available right now, please try again later.
      </JobNotFound>
    );

  if (isMobile) {
    if (job_id)
      return (
        <>
          <ScrollToTop />
          <Outlet />
        </>
      );

    return (
      <>
        <Header />
        {filteredJobs.length === 0 ? (
          <div className="text-2xl font-medium text-center mx-auto mt-10">
            No job available matching that criteria
          </div>
        ) : (
          <Jobs />
        )}
      </>
    );
  }

  if (!isMobile && !job_id && jobs.length > 0) {
    return <Navigate to={`/listing/${jobs[0].job_id}`} replace />;
  }
  return (
    <>
      <Header />
      <div className="flex gap-4 lg:gap-5 xl:gap-6 2xl:gap-8 justify-center px-4">
        {filteredJobs.length === 0 ? (
          <div className="flex text-2xl font-medium text-center mt-10">
            <span>No job available matching that criteria</span>
          </div>
        ) : (
          <Jobs />
        )}
        <Outlet />
      </div>
    </>
  );
}
