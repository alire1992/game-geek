import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import NavBar from "../components/NavBar";

export default function Layout() {
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
}
