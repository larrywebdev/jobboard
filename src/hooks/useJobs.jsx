import { useQuery } from "@tanstack/react-query";

const getJobs = async () => {
  const res = await fetch(`/api/searchJobs?query=developer+jobs+in+nigeria`);
  if (!res.ok) {
    throw new Error("No Jobs available right now");
  }
  const data = await res.json();
  return data.data || [];
};

export default function useJobs() {
  const {
    data: jobs = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["jobListings"],
    queryFn: getJobs,
  });

  return {
    jobs,
    isLoading,
    error,
  };
}
