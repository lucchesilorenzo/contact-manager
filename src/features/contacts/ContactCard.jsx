import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";
import { LuPencil } from "react-icons/lu";

import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

import { useDeleteContact } from "../../hooks/useDeleteContact";
import { formatPhoneNumber } from "../../utils/helpers";

function ContactCard({ contact }) {
  const { id, name, lastName, phone, email, image } = contact;
  const { deleteContact, isDeleting } = useDeleteContact();

  return (
    <li className="flex max-w-full flex-col items-center gap-4 rounded-lg border border-stone-200 bg-slate-50 p-4 sm:min-w-96 sm:max-w-full sm:flex-row">
      <img
        className="sm:w-18 sm:h-18 h-24 w-24 rounded-full object-cover"
        src={image ? image : "/default-profile-picture.png"}
        alt={`${name} ${lastName}'s pfp`}
      />

      <div className="flex flex-1 flex-col gap-2.5 text-sm">
        <div className="flex items-center justify-between gap-2">
          <p>
            Name: <span className="font-medium">{`${name} ${lastName}`}</span>
          </p>

          <Link to={`/contacts/${id}`} title="View full contact">
            <IoInformationCircle className="text-lg sm:text-xl" />
          </Link>
        </div>

        <div className="flex items-center justify-between gap-2">
          <p>
            Phone:{" "}
            <span className="font-medium">{formatPhoneNumber(phone)}</span>
          </p>
          <Link to={`/contacts/edit/${id}`} title="Edit contact">
            <LuPencil className="text-lg sm:text-xl" />
          </Link>
        </div>

        <div className="flex items-center justify-between gap-2">
          <p>
            Email: <span className="font-medium">{email}</span>
          </p>

          <Modal>
            <Modal.Open opens="delete">
              <button title="Delete contact">
                <FaRegTrashAlt className="text-lg sm:text-xl" />
              </button>
            </Modal.Open>
            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="contact"
                onConfirm={() => deleteContact(id)}
                disabled={isDeleting}
              />
            </Modal.Window>
          </Modal>
        </div>
      </div>
    </li>
  );
}

export default ContactCard;
