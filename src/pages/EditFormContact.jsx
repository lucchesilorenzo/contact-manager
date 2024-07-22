import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Spinner from "../ui/Spinner";
import PageNotFound from "../ui/PageNotFound";

import { useUpdateContact } from "../hooks/useUpdateContact";
import { useContact } from "../hooks/useContact";
import { contactSchema } from "../schemas/contactSchema";

function EditFormContact() {
  const { contactId } = useParams();
  const {
    contact: { name, lastName, phone, email, title, company } = {},
    isLoading,
    error,
  } = useContact(contactId);
  const { updateContact, isUpdating } = useUpdateContact(contactId);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });
  const isWorking = isUpdating || isSubmitting;

  if (isLoading) return <Spinner />;
  if (error) return <PageNotFound />;

  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const image = typeof data.image === "string" ? data.image : data.image[0];

    updateContact({ newContactData: { ...data, image }, contactId });
  }

  return (
    <>
      <h1 className="mb-1 text-3xl font-medium text-blue-600">Edit contact</h1>
      <p className="mb-4 italic text-stone-500">
        Use this form to update the contact's information. Make sure all
        required fields are filled out correctly. You can also update the
        contact's profile picture if needed.
      </p>

      <form
        className="flex max-w-96 flex-col space-y-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            className="w-full rounded-lg border border-stone-200 px-4 py-2 text-sm transition-all duration-300 focus:text-stone-700 focus:outline-none focus:ring focus:ring-stone-300"
            type="text"
            id="name"
            disabled={isWorking}
            defaultValue={name}
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
            defaultValue={lastName}
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
            defaultValue={phone}
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
            defaultValue={email}
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
            defaultValue={company}
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
            defaultValue={title}
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
          <button className="ring:gray-200 rounded-full bg-blue-600 px-4 py-2 font-semibold text-stone-100 transition-all duration-300 hover:bg-blue-700 hover:text-stone-200 focus:outline-none focus:ring focus:ring-blue-800">
            {isSubmitting ? "Updating..." : "Update"}
          </button>
        </div>
      </form>
    </>
  );
}

export default EditFormContact;
