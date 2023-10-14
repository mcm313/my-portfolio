import { useRouteError } from "react-router-dom";
import BackButton from "../Buttons/BackButton";
import { Container, Typography } from "@mui/material";
import "../Main.css";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <Container id="error-page" id="error-page" className="customGrid">
      <Typography variant="h3" component="h1">
        Unable to Load
      </Typography>
      <Typography variant="body1" component="p">
        Sorry, an unexpected error has occurred.
      </Typography>
      <br />
      <Typography variant="body1" component="p">
        <i>{error.statusText || error.message}</i>
      </Typography>
      <BackButton />
    </Container>
  );
}
