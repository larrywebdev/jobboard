import Header from "../components/Header";
import JobNotFound from "../components/JobNotFound";
import FetchingJobs from "../components/jobs/FetchingJobs";
import { useJobs } from "../context/JobContext";
import JobsLayout from "./JobsLayout";
export default function Layout() {
  const { filteredJobs, loading, error } = useJobs();
  if (error)
    return (
      <div className="text-center mt-20">
        <span className="text-2xl font-medium">{error}</span>
      </div>
    );
  return (
    <>
      <Header />
      {loading ? (
        <FetchingJobs />
      ) : filteredJobs.length === 0 ? (
        <JobNotFound>No Jobs Found</JobNotFound>
      ) : (
        <JobsLayout />
      )}
    </>
  );
}
