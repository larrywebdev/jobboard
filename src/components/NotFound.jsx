import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-2 mt-30">
      <span className="font-medium text-3xl">Oops...</span>
      <span className="font-medium text-2xl">Page Not Found</span>
      <Link
        to="/"
        className="flex items-center gap-0.5 text-blue-600 hover:text-blue-800 hover:underline w-max"
      >
        <IoHome /> <span>Homepage</span>
      </Link>
    </div>
  );
}
