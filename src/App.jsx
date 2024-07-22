import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

import AppLayout from "./ui/AppLayout";
import Contacts from "./pages/Contacts";
import CreateFormContact from "./pages/CreateFormContact";
import ViewContactInfo from "./pages/ViewContactInfo";
import EditFormContact from "./pages/EditFormContact";
import PageNotFound from "./ui/PageNotFound";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <Navigate to="/contacts" />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/contacts/new",
        element: <CreateFormContact />,
      },
      {
        path: "/contacts/:contactId",
        element: <ViewContactInfo />,
        errorElement: <PageNotFound />,
      },
      {
        path: "/contacts/edit/:contactId",
        element: <EditFormContact />,
        errorElement: <PageNotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
