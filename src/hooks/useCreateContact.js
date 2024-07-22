import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createContact as createContactApi } from "../services/apiContacts";
import toast from "react-hot-toast";

export function useCreateContact() {
  const queryClient = useQueryClient();

  const { mutate: createContact, isLoading: isCreating } = useMutation({
    mutationFn: createContactApi,
    onSuccess: () => {
      toast.success("Contact created successfully");
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createContact, isCreating };
}
