import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function NotFound({ children, setFilter }) {
  return (
    <div className="inline items-center mx-auto mt-20">
      <span className="font-medium text-2xl">{children}</span>
      <Link
        to="/"
        className="flex items-center gap-0.5 text-blue-600 hover:text-blue-800 w-max mx-auto mt-2.5"
        onClick={() => setFilter("")}
      >
        <FaArrowLeftLong /> <span>Back to listing</span>
      </Link>
    </div>
  );
}
