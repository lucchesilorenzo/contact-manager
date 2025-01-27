import { useForm } from "react-hook-form";
import { useCreateContact } from "../hooks/useCreateContact";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../schemas/contactSchema";

function CreateFormContact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const { createContact, isCreating } = useCreateContact();
  const isWorking = isCreating || isSubmitting;

  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const image = data.image[0];

    createContact(
      { ...data, image },
      {
        onSuccess: () => reset(),
      },
    );
  }

  return (
    <>
      <h1 className="mb-1 text-3xl font-medium text-green-600">
        Create contact
      </h1>
      <p className="mb-4 italic text-stone-500">
        Use this form to add a new contact to your directory. Fill in the
        necessary details such as name, phone number, and email address.
        Optionally, you can also add a company and title.
      </p>

      <form
        className="flex max-w-96 flex-col space-y-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            className="disabled: w-full rounded-lg border border-stone-200 px-4 py-2 text-sm transition-all duration-300 focus:text-stone-700 focus:outline-none focus:ring focus:ring-stone-300"
            type="text"
            id="name"
            disabled={isWorking}
            {...register("name")}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="lastName">Last name</label>
          <input
            className="w-full rounded-lg border border-stone-200 px-4 py-2 text-sm transition-all duration-300 focus:text-stone-700 focus:outline-none focus:ring focus:ring-stone-300"
            type="text"
            id="lastName"
            disabled={isWorking}
            {...register("lastName")}
          />
          {errors.lastName && (
            <p className="text-red-500">{errors.lastName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone">Phone</label>
          <input
            className="w-full rounded-lg border border-stone-200 px-4 py-2 text-sm transition-all duration-300 focus:text-stone-700 focus:outline-none focus:ring focus:ring-stone-300"
            type="tel"
            id="phone"
            disabled={isWorking}
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-red-500">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            className="w-full rounded-lg border border-stone-200 px-4 py-2 text-sm transition-all duration-300 focus:text-stone-700 focus:outline-none focus:ring focus:ring-stone-300"
            type="email"
            id="email"
            disabled={isWorking}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="company">Company</label>
          <input
            className="w-full rounded-lg border border-stone-200 px-4 py-2 text-sm transition-all duration-300 focus:text-stone-700 focus:outline-none focus:ring focus:ring-stone-300"
            type="text"
            id="company"
            disabled={isWorking}
            {...register("company")}
          />
        </div>

        <div>
          <label htmlFor="title">Title</label>
          <input
            className="w-full rounded-lg border border-stone-200 px-4 py-2 text-sm transition-all duration-300 focus:text-stone-700 focus:outline-none focus:ring focus:ring-stone-300"
            type="text"
            id="title"
            disabled={isWorking}
            {...register("title")}
          />
        </div>

        <div>
          <label htmlFor="image">Photo</label>
          <input
            className="mb-4 w-full file:rounded-full file:border-0 file:border-stone-200 file:bg-stone-200 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-stone-700 file:transition-all file:duration-300 hover:file:bg-stone-100"
            type="file"
            accept="image/*"
            id="image"
            {...register("image")}
          />
        </div>
        <div>
          <button className="ring:gray-200 rounded-full bg-green-600 px-4 py-2 font-semibold text-stone-100 transition-all duration-300 hover:bg-green-700 hover:text-stone-200 focus:outline-none focus:ring focus:ring-green-800">
            {isSubmitting ? "Creating..." : "Create"}
          </button>
        </div>
      </form>
    </>
  );
}

export default CreateFormContact;
