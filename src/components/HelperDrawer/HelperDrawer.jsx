import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Td,
  useToast,
} from "@chakra-ui/react";
import { useApp } from "../../context";
import { CopyToClipboard } from "react-copy-to-clipboard"; // import ExampleTable from "../ExampleTable/ExampleTable";
const exampleList = [
  {
    id: 0,
    type: "Atribuição Number 01",
    expression: "$exemplo /= {2+3}",
  },
  {
    id: 1,
    type: "Atribuição Number 02",
    expression: "$exemplo /= 2+3",
  },
  {
    id: 2,
    type: "Atribuição String 01",
    expression: "$exemplo /= {'Exemplo'}",
  },
  {
    id: 3,
    type: "Atribuição String 02",
    expression: "$exemplo /= 'Exemplo'",
  },
  {
    id: 4,
    type: "Atribuição String 03",
    expression: "$exemplo /= '3 + 5'",
  },
  {
    id: 5,
    type: "Definição de um Paragrafo 01",
    expression: "/P{bold|'Exemplo'}",
  },
  {
    id: 6,
    type: "Definição de um Paragrafo 02",
    expression: "/P{italic|'Exemplo'}",
  },
  {
    id: 7,
    type: "Definição de um Paragrafo 03",
    expression: "/P{underline|'Exemplo'}",
  },
];

function HelperDrawer() {
  const toast = useToast()
  const { helpDrawer, setHelpDrawer } = useApp();
  return (
    <Drawer
      onOverlayClick={() => setHelpDrawer(false)}
      isOpen={helpDrawer}
      placement="left"
      onClose={() => setHelpDrawer(false)}
      size="xl"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Exemplos p/ copiar</DrawerHeader>
        <DrawerBody>
          <TableContainer w="100%">
            <Table variant="striped" w="100%">
              <Thead>
                <Tr>
                  <Th textAlign="center">Expressão originária</Th>
                  <Th textAlign="center">Valor atribuído</Th>
                </Tr>
              </Thead>
              <Tbody>
                {exampleList.map((item) => (
                  <Tr key={item.id}>
                    <Td textAlign="center">{item.type}</Td>
                    <CopyToClipboard text={item.expression}>
                      <Td
                        textAlign="center"
                        onClick={() => {
                          setHelpDrawer(false);
                          return toast({
                            title: "Expressão copiada.",
                            description:
                              "Expressão copiada com sucesso para a área de transferência.",
                            status: "success",
                            duration: 1200,
                            isClosable: true,
                          });
                        }}
                        cursor="pointer"
                        transition="all 0.3s linear"
                        _hover={{
                          backgroundColor: "#c6c6c6 !important",
                          fontWeight: 600,
                        }}
                      >
                        {item.expression}
                      </Td>
                    </CopyToClipboard>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default HelperDrawer;
