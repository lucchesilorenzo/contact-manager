import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteContact as deleteContactApi } from "../services/apiContacts";
import toast from "react-hot-toast";

export function useDeleteContact() {
  const queryClient = useQueryClient();

  const { mutate: deleteContact, isLoading: isDeleting } = useMutation({
    mutationFn: deleteContactApi,
    onSuccess: () => {
      toast.success("Contact deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteContact, isDeleting };
}
