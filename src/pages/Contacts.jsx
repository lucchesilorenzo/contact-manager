import { Link } from "react-router-dom";
import { useState } from "react";

import ContactCard from "../features/contacts/ContactCard";
import Spinner from "../ui/Spinner";

import { useContacts } from "../hooks/useContacts";

function Contacts() {
  const { contacts, isLoading } = useContacts();
  const [searchContact, setSearchContact] = useState("");

  const searchedContacts =
    searchContact.length > 0
      ? contacts.filter((contact) =>
          `${contact.name} ${contact.lastName}`
            .toLowerCase()
            .includes(searchContact.toLowerCase()),
        )
      : contacts;

  if (isLoading) return <Spinner />;

  return (
    <div>
      <h1 className="mb-1 text-3xl font-medium">Contacts</h1>
      <p className="mb-4 italic text-stone-500">
        Browse and manage your contact list. Click on a contact to view detailed
        information, edit, or delete the contact. Use the search bar to quickly
        find contacts.
      </p>

      <div className="mt-6 flex justify-center">
        <input
          className="rounded-full border border-stone-200 px-4 py-2 text-sm transition-all duration-300 focus:text-stone-700 focus:outline-none focus:ring focus:ring-stone-400"
          type="text"
          placeholder="Search contact"
          value={searchContact}
          onChange={(e) => setSearchContact(e.target.value)}
        />
      </div>

      <div className="mt-6 flex justify-center py-6">
        {contacts.length > 0 ? (
          <ul className="xl-grid-cols-4 grid grid-cols-2 place-content-center gap-2 sm:grid-cols-1 sm:gap-6 md:grid-cols-2 md:gap-4 lg:grid-cols-2 lg:gap-4 xl:grid-cols-4">
            {searchedContacts.map((contact) => (
              <ContactCard contact={contact} key={contact.id} />
            ))}
          </ul>
        ) : (
          <p className="text-xl font-semibold">No contacts found</p>
        )}
      </div>
      <div className="flex justify-center">
        <Link to="/contacts/new">
          <button className="ring:gray-200 mb-3 rounded-full bg-green-600 px-5 py-3 text-sm font-semibold text-stone-100 transition-all duration-300 hover:bg-green-700 hover:text-stone-200 focus:outline-none focus:ring focus:ring-green-800">
            Add contact
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Contacts;
