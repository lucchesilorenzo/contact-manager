import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-stone-900 px-3 py-3 text-xl uppercase tracking-wide text-stone-50">
      <Link to="/" className="flex items-center gap-2">
        <FaPhoneAlt />
        Contact Manager
      </Link>
    </header>
  );
}

export default Header;
