import { useQuery } from "@tanstack/react-query";
import { getContact } from "../services/apiContacts";

export function useContact(id) {
  const {
    data: contact,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["contact", id],
    queryFn: () => getContact(id),
  });

  return { contact, isLoading, error };
}
