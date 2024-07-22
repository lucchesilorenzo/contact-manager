import { useParams } from "react-router-dom";
import { useContact } from "../hooks/useContact";

import Spinner from "../ui/Spinner";
import PageNotFound from "../ui/PageNotFound";

import { formatPhoneNumber } from "../utils/helpers";

function ViewContactInfo() {
  const { contactId } = useParams();
  const { contact = {}, isLoading, error } = useContact(contactId);
  const { name, lastName, phone, email, image, title, company } = contact;

  if (isLoading) return <Spinner />;
  if (error) return <PageNotFound />;

  return (
    <div>
      <h1 className="mb-1 text-3xl font-medium text-yellow-600">
        View Contact
      </h1>
      <p className="mb-4 italic text-stone-500">
        View detailed information about the contact. Here you can see all the
        stored details including name, phone number, email address, company, and
        title.
      </p>

      <div className="flex max-w-full flex-col items-center gap-8 rounded-lg border border-stone-200 bg-slate-50 px-6 py-4 sm:min-w-96 sm:max-w-[500px] sm:flex-row">
        <img
          className="sm:w-18 sm:h-18 h-32 w-32 rounded-full object-cover"
          src={image ? image : "/default-profile-picture.png"}
          alt={`${name} ${lastName}'s pfp`}
        />

        <div className="flex flex-1 flex-col divide-y-2 leading-relaxed">
          <p>
            Name: <span className="font-medium">{name}</span>
          </p>
          <p>
            Last name: <span className="font-medium">{lastName}</span>
          </p>
          <p>
            Phone:{" "}
            <span className="font-medium">{formatPhoneNumber(phone)}</span>
          </p>
          <p>
            Email: <span className="font-medium">{email}</span>
          </p>
          {company && (
            <p>
              Company: <span className="font-medium">{company}</span>
            </p>
          )}
          {title && (
            <p>
              Title: <span className="font-medium">{title}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ViewContactInfo;
