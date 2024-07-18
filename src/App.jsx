import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import Contacts from "./pages/Contacts";
import CreateFormContact from "./pages/CreateFormContact";
import ContactFullInfo from "./pages/ContactFullInfo";
import EditContact from "./pages/EditContact";

import AppLayout from "./ui/AppLayout";
import PageError from "./ui/PageError";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <PageError />,
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
        element: <ContactFullInfo />,
      },
      {
        path: "/contacts/edit/:contactId",
        element: <EditContact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
