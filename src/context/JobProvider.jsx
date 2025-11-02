import axios from "axios";
import { useEffect, useState } from "react";
import { JobContext } from "./JobContext";

export default function JobProvider({ children }) {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const getJSON = async () => {
      const options = {
        method: "GET",
        url: "https://jsearch.p.rapidapi.com/search",
        params: {
          query: "developer jobs in nigeria",
          page: "1",
          num_pages: "50",
          country: "ng",
          date_posted: "3days",
          job_requirements: "under_3_years_experience",
        },
        headers: {
          "x-rapidapi-key":
            "fa8e3da03cmshaa71d28c83592ddp151e09jsnf049b23ccb56",
          "x-rapidapi-host": "jsearch.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        const jobsJSON = response.data.data;
        setJobs(jobsJSON);
      } catch (error) {
        console.error(error);
      }
    };

    getJSON();
  }, []);
  return <JobContext.Provider value={{ jobs }}>{children}</JobContext.Provider>;
}
