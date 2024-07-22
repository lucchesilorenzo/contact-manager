import { Link } from "react-router-dom";
import { MdContactPage } from "react-icons/md";

function Header() {
  return (
    <header className="bg-stone-900 px-3 py-3 text-xl text-stone-50">
      <Link to="/" className="flex items-center gap-2">
        <MdContactPage className="h-8 w-8 text-yellow-400" />
        Contact
        <span className="text-yellow-300">Manager</span>
      </Link>
    </header>
  );
}

export default Header;
