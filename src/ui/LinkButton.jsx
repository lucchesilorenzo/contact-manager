import { useNavigate } from "react-router-dom";

function LinkButton({ children }) {
  const navigate = useNavigate();

  return (
    <button
      className="rounded-full bg-blue-600 px-4 py-2 text-xl text-stone-100 transition-all duration-300 hover:bg-blue-700"
      onClick={() => navigate(-1)}
    >
      {children}
    </button>
  );
}

export default LinkButton;
