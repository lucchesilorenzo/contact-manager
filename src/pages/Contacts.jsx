import { Link } from "react-router-dom";
import ContactCard from "../features/contacts/ContactCard";

function Contacts() {
  return (
    <div>
      <h1 className="mb-1 text-3xl font-medium">Phone Directory</h1>
      <p className="mb-4 italic text-stone-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ipsam
        aliquam est id animi. Cum debitis molestiae suscipit, incidunt, officia
        aperiam tempora ullam rem consequuntur maiores ut, odit provident illum.
      </p>

      <form className="space-x-2">
        <input
          className="rounded-full border border-stone-200 px-4 py-2 text-sm transition-all duration-300 focus:text-stone-700 focus:outline-none focus:ring focus:ring-stone-400"
          type="text"
          placeholder="Search contact"
        />
        <button className="ring:gray-200 rounded-full bg-gray-200 px-4 py-2 text-sm font-semibold text-stone-700 transition-all duration-300 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-400 disabled:cursor-not-allowed">
          Search
        </button>
      </form>

      <div className="flex justify-center py-6">
        <ul className="xl-grid-cols-4 mt-6 grid grid-cols-2 place-content-center gap-2 sm:grid-cols-1 sm:gap-6 md:grid-cols-2 md:gap-4 lg:grid-cols-2 lg:gap-4 xl:grid-cols-4">
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
        </ul>
      </div>
      <Link className="flex justify-center" to="/contacts/new">
        <button className="ring:gray-200 rounded-full bg-green-600 px-5 py-3 text-sm font-semibold text-stone-100 transition-all duration-300 hover:bg-green-700 hover:text-stone-200 focus:outline-none focus:ring focus:ring-green-800 disabled:cursor-not-allowed">
          Add contact
        </button>
      </Link>
    </div>
  );
}

export default Contacts;
