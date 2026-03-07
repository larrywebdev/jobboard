import { useNavigate } from "react-router-dom";

export default function JobNotFound({ children, style }) {
  const navigate = useNavigate();

  return (
    <div className={`flex flex-col gap-5 items-center mt-20 ${style}`}>
      <span className="font-medium text-2xl">{children}</span>
      <button
        className="bg-black text-white text-sm font-bold py-3 rounded-full px-5"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
    </div>
  );
}
