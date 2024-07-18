function CreateFormContact() {
  return (
    <>
      <h1 className="mb-1 text-3xl font-medium text-green-600">
        Create contact
      </h1>
      <p className="mb-4 italic text-stone-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ipsam
        aliquam est id animi. Cum debitis molestiae suscipit, incidunt, officia
        aperiam tempora ullam rem consequuntur maiores ut, odit provident illum.
      </p>

      <form className="flex max-w-96 flex-col space-y-2">
        <div>
          <label htmlFor="name">Name</label>
          <input
            className="w-full rounded-lg border border-stone-200 px-4 py-2 text-sm transition-all duration-300 focus:text-stone-700 focus:outline-none focus:ring focus:ring-stone-300"
            type="text"
            id="name"
          />
        </div>

        <div>
          <label htmlFor="lastName">Last name</label>
          <input
            className="w-full rounded-lg border border-stone-200 px-4 py-2 text-sm transition-all duration-300 focus:text-stone-700 focus:outline-none focus:ring focus:ring-stone-300"
            type="text"
            id="lastName"
          />
        </div>

        <div>
          <label htmlFor="phone">Phone</label>
          <input
            className="w-full rounded-lg border border-stone-200 px-4 py-2 text-sm transition-all duration-300 focus:text-stone-700 focus:outline-none focus:ring focus:ring-stone-300"
            type="text"
            id="phone"
          />
        </div>

        <div>
          <label htmlFor="email">E-mail</label>
          <input
            className="w-full rounded-lg border border-stone-200 px-4 py-2 text-sm transition-all duration-300 focus:text-stone-700 focus:outline-none focus:ring focus:ring-stone-300"
            type="text"
            id="email"
          />
        </div>

        <div>
          <label htmlFor="company">Company</label>
          <input
            className="w-full rounded-lg border border-stone-200 px-4 py-2 text-sm transition-all duration-300 focus:text-stone-700 focus:outline-none focus:ring focus:ring-stone-300"
            type="text"
            id="company"
          />
        </div>

        <div>
          <label htmlFor="title">Title</label>
          <input
            className="w-full rounded-lg border border-stone-200 px-4 py-2 text-sm transition-all duration-300 focus:text-stone-700 focus:outline-none focus:ring focus:ring-stone-300"
            type="text"
            id="title"
          />
        </div>

        <div>
          <label htmlFor="photo">Photo</label>
          <input
            className="mb-4 w-full file:rounded-full file:border-0 file:border-stone-200 file:bg-stone-200 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-stone-700 file:transition-all file:duration-300 hover:file:bg-stone-100"
            type="file"
            accept="image/*"
            id="photo"
          />
        </div>
        <div>
          <button className="ring:gray-200 rounded-full bg-green-600 px-4 py-2 font-semibold text-stone-100 transition-all duration-300 hover:bg-green-700 hover:text-stone-200 focus:outline-none focus:ring focus:ring-green-800 disabled:cursor-not-allowed">
            Create
          </button>
        </div>
      </form>
    </>
  );
}

export default CreateFormContact;
