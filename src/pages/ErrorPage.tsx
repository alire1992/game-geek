import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Heading, Text, Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading marginY={3}>Oops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "Page not found ⛔"
            : "something went wrong 😞"}
        </Text>
      </Box>
    </>
  );
}
