import { useRouteError } from "react-router-dom";
import BackButton from "../Buttons/BackButton";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page" className="customGrid">
      <h1>Unable to Load</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <BackButton />
    </div>
  );
}
