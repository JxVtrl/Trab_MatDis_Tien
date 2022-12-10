import React from "react";
import {
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { useApp } from "../../context";

function VariableDisplay() {

  return (
    <Flex w="100%" px="10px" borderRadius="10px">
      <TableContainer w="100%">
        <Table variant="striped" w="100%">
          <Thead>
            <Tr>
              <Th textAlign="center">Expressão originária</Th>
              <Th textAlign="center">Nome da Variável</Th>
              <Th textAlign="center">Valor atribuído</Th>
            </Tr>
          </Thead>
          <Tbody>
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
}

export default VariableDisplay;
