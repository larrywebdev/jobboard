import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useJobs } from "../context/JobContext";
export default function JobNotFound({ children, style }) {
  const { setFilter } = useJobs();
  const navigate = useNavigate();
  const handleClick = () => {
    setFilter("");
    navigate(-1);
  };
  return (
    <div className={`flex flex-col items-center mt-20 ${style}`}>
      <span className="font-medium text-2xl">{children}</span>
      <Link
        className="flex items-center gap-0.5 text-blue-600 hover:text-blue-800 w-max mx-auto mt-2.5"
        onClick={handleClick}
      >
        <FaArrowLeftLong /> <span>Go back</span>
      </Link>
    </div>
  );
}
