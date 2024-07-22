import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateContact as updateContactApi } from "../services/apiContacts";
import toast from "react-hot-toast";

export function useUpdateContact(id) {
  const queryClient = useQueryClient();

  const { mutate: updateContact, isLoading: isUpdating } = useMutation({
    mutationFn: ({ newContactData, contactId }) =>
      updateContactApi(newContactData, contactId),
    onSuccess: () => {
      toast.success("Contact updated successfully");
      queryClient.invalidateQueries({ queryKey: ["contact", id] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateContact, isUpdating };
}
