import { FaRegTrashAlt } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";
import { LuPencil } from "react-icons/lu";
import { Link } from "react-router-dom";

function ContactCard() {
  return (
    <li className="flex max-w-full flex-col items-center gap-4 rounded-lg border border-stone-200 bg-slate-50 p-4 sm:min-w-96 sm:max-w-96 sm:flex-row">
      <img
        className="sm:w-18 sm:h-18 h-24 w-24 rounded-full"
        src="default-profile-picture.png"
        alt=""
      />

      <div className="flex flex-1 flex-col gap-2.5 text-sm">
        <div className="flex items-center justify-between gap-2">
          <p>
            Name: <span className="font-medium">John Doe</span>
          </p>

          <Link to="#">
            <IoInformationCircle className="text-lg sm:text-xl" />
          </Link>
        </div>

        <div className="flex items-center justify-between gap-2">
          <p>
            Phone: <span className="font-medium">+123456789</span>
          </p>
          <Link to="#">
            <LuPencil className="text-lg sm:text-xl" />
          </Link>
        </div>

        <div className="flex items-center justify-between gap-2">
          <p>
            Email: <span className="font-medium">HjS3H@example.com</span>
          </p>

          <FaRegTrashAlt className="text-lg sm:text-xl" />
        </div>
      </div>
    </li>
  );
}

export default ContactCard;
