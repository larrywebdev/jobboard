import { useEffect, useState } from "react";
import { JobContext } from "./JobContext";

export default function JobProvider({ children }) {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const filteredJobs = jobs.filter((job) =>
    job.job_title.toLowerCase().includes(filter.toLowerCase())
  );
  useEffect(() => {
    const getJobs = async () => {
      try {
        const res = await fetch(
          `/api/searchJobs?query=developer+jobs+in+nigeria`
        );
        const data = await res.json();
        setJobs(data.data || []);
      } catch {
        setError("Failed to load jobs");
      } finally {
        setLoading(false);
      }
    };
    getJobs();
  }, []);

  return (
    <JobContext.Provider
      value={{ jobs, filter, filteredJobs, loading, error, setFilter }}
    >
      {children}
    </JobContext.Provider>
  );
}
