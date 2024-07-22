import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function PageNotFound() {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[120px] font-extrabold text-gray-700">
        {error.status || 404}
      </h1>
      <p className="mb-6 text-2xl font-medium text-gray-600">Page Not Found</p>
      <LinkButton>&larr; Go back</LinkButton>
    </div>
  );
}

export default PageNotFound;
