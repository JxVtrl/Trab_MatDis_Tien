import React, { useState } from "react";
import { Flex, Input, Button, Center, Divider, Text } from "@chakra-ui/react";
import { QuestionOutlineIcon, InfoIcon } from "@chakra-ui/icons";
import { VariableDisplay } from "../../components/VariableDisplay";
import { useApp } from "../../context";

export const Main = ({ onOpen }) => {
  const [expression, setExpression] = useState("(A v B) ^ A' -> B");

  // (A v B) ^ A' = VERDADEIRO
  // B = FALSO   

  // (A v B) = VERDADEIRO  
  // A' = VERDADEIRO 
  
  // Logo é uma tautologia


  const checkExpression = () => {
    // verificar se a expressão é válida
    // se for, mostrar o resultado
    // se não for, mostrar mensagem de erro

    const noSpaceExpression = expression.replace(/\s/g, "");

    if (noSpaceExpression.includes(separateExpression[0] || separateExpression[1])) {
      const expressionArray = noSpaceExpression.split(
        separateExpression[0] || separateExpression[1]
      );

      const expressionValue1 = expressionArray[0];
      const expressionValue2 = expressionArray[1];

      
    }
  };

  const separateSimbols = ['v', '^', '=>', '<=>', '(', ')', '[', ']'];
  const separateExpression = ['->', '<->']

  // (A v B) ^ A' -> B --> Exemplo de expressão

  return (
    <Flex w="100%" h="100%" flexDir="column" align="center">
      <Flex align="center" gap="20px">
        <Button onClick={() => onOpen()}>
          <InfoIcon />
        </Button>
        <Flex>
          <Input
            value={expression}
            onChange={(e) => setExpression(e.target.value)}
            justify="center"
            w="200px"
            variant="flushed"
            placeholder="Expressão esperada"
          />
          <Button
            isDisabled={!expression}
            onClick={() => checkExpression()}
            variant="ghost"
          >
            Analisar
          </Button>
        </Flex>
      </Flex>
      <Flex mt="50px">
        <VariableDisplay />
      </Flex>
    </Flex>
  );
};
