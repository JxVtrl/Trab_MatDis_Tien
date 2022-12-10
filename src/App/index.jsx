import React, { useState } from "react";
import { Flex } from "@chakra-ui/react";
import { Header, Main } from "../sections";

function App() {
  return (
    <Flex w="100vw" h="100vh" flexDir="column">
      <Header />
      <Main />
    </Flex>
  );
}

export default App;
