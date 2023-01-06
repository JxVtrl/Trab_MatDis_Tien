import React, { useEffect } from "react";
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
  const { tableHeader, tableRows } = useApp();

  useEffect(() => {
    console.log("tableHeader", tableHeader);
    console.log("tableRows", tableRows);
  },[tableHeader, tableRows])

  return (
    <Flex w="100%" px="10px" borderRadius="10px">
      <TableContainer w="100%">
        <Table variant="striped" w="100%">
          <Thead>
            {"tableHeader: " + tableHeader}
          </Thead>
          <Tbody>
            {tableRows.map((row) => (
              <Tr key={row.id}>
                <Td>{row.id}</Td>
                <Td>{row.type}</Td>
                <Td>{row.expression}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
}

export default VariableDisplay;
