import supabase, { supabaseUrl } from "./supabase";

export async function getContact(id) {
  const { data: contact, error } = await supabase
    .from("contacts")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error("Failed to get contact");

  return contact;
}

export async function getContacts() {
  const { data: contacts, error } = await supabase.from("contacts").select("*");

  if (error) throw new Error("Failed to get contacts");

  return contacts;
}

export async function createContact(newContact) {
  const imageName =
    newContact.image &&
    `${Math.random()}-${newContact.image.name}`.replaceAll("/", "");

  const imagePath = newContact.image
    ? `${supabaseUrl}/storage/v1/object/public/profile-pictures/${imageName}`
    : `${supabaseUrl}/storage/v1/object/public/profile-pictures/default-profile-picture.png`;

  const { data: contacts, error } = await supabase
    .from("contacts")
    .insert([{ ...newContact, image: imagePath }])
    .select()
    .single();

  if (error) throw new Error("Failed to create contact");

  if (!newContact.image) return contacts;

  const { error: storageError } = await supabase.storage
    .from("profile-pictures")
    .upload(imageName, newContact.image);

  if (storageError) {
    await supabase.from("contacts").delete().eq("id", contacts.id);
    throw new Error("Failed to upload image");
  }

  return contacts;
}

export async function updateContact(updatedContact, id) {
  const imageName =
    updatedContact.image &&
    `${Math.random()}-${updatedContact.image.name}`.replaceAll("/", "");

  const imagePath = updatedContact.image
    ? `${supabaseUrl}/storage/v1/object/public/profile-pictures/${imageName}`
    : updatedContact.image;

  const { error } = await supabase
    .from("contacts")
    .update({ ...updatedContact, image: imagePath })
    .eq("id", id)
    .single();

  if (error) throw new Error("Failed to update contact");

  if (!imageName) return;

  const { error: storageError } = await supabase.storage
    .from("profile-pictures")
    .upload(imageName, updatedContact.image);

  if (storageError) throw new Error("Failed to upload image");
}

export async function deleteContact(id) {
  const { error } = await supabase.from("contacts").delete().eq("id", id);

  if (error) throw new Error("Failed to delete contact");
}
