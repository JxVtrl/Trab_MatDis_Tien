import React from "react";
import { Flex, Table, Thead, Tbody, TableContainer } from "@chakra-ui/react";
import { useApp } from "../../context";
import "./styles.css";

function VariableDisplay() {
  const { tableHeader, tableRows } = useApp();
  return (
    <Flex w="100%" px="10px" borderRadius="10px">
      <TableContainer w="100%">
        <Table variant="striped" w="100%" className="table">
          <Thead dangerouslySetInnerHTML={{ __html: tableHeader }} />
          <Tbody dangerouslySetInnerHTML={{ __html: tableRows }} />
        </Table>
      </TableContainer>
    </Flex>
  );
}

export default VariableDisplay;
