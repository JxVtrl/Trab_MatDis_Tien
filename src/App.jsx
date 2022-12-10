import React, { useState } from "react";
import { Flex, useDisclosure } from "@chakra-ui/react";
import { QuestionOutlineIcon } from "@chakra-ui/icons";

import { Header, Main } from "./sections";
import { ModalRules, HelperDrawer } from "./components";
import { useApp } from "./context";

function App() {
  const { setHelpDrawer, helpDrawer } = useApp();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex w="100vw" h="100vh" flexDir="column">
      <Header />
      <Main onOpen={onOpen} />
      <QuestionOutlineIcon
        cursor="pointer"
        onClick={() => setHelpDrawer(!helpDrawer)}
        size="md"
        boxSize="6"
        position="fixed"
        bottom="20px"
        right="20px"
      />
      <HelperDrawer />
      <ModalRules isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
}

export default App;
