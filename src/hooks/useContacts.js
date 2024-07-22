import { useQuery } from "@tanstack/react-query";
import { getContacts } from "../services/apiContacts";

export function useContacts() {
  const {
    data: contacts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["contacts"],
    queryFn: getContacts,
  });

  return { contacts, isLoading, error };
}
