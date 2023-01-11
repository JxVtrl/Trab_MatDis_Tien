import React, { useEffect, useState } from "react";
import { Flex, Input, Button, Center, Divider, Text } from "@chakra-ui/react";
import { QuestionOutlineIcon, InfoIcon } from "@chakra-ui/icons";
import { VariableDisplay } from "../../components/VariableDisplay";
import { useApp } from "../../context";
import {
  expressionOrder,
  getVariables,
  decToBin,
  calculateExpression,
} from "../../helpers";

const MAX_VARS_TO_RENDER_TABLE = 10;

export const Main = ({ onOpen }) => {
  const [expression, setExpression] = useState("(A | B) & (!A) > B");
  const [isTautology, setIsTautology] = useState(undefined);

  const { setTableHeader, setTableRows } = useApp();

  const resetVariables = () => {
    setIsTautology(undefined);
    setTableRows([]);
    setTableHeader("");
  };

  const checkExpression = () => {
    resetVariables();

    const order = expressionOrder(expression);
    const varList = getVariables(order);

    // Numero de combinações
    const combinations = Math.pow(2, varList.length);

    // Prepare table header
    if (varList.length < MAX_VARS_TO_RENDER_TABLE) {
      let tableHtml = "<tr class='row'>";
      for (let i = 0; i < varList.length; i += 1)
        tableHtml += `<th>${varList[i]}</th>`;

      tableHtml += `<th>${expression}</th></tr>`;

      setTableHeader(tableHtml);
    }

    const vars = {};
    let row = "";

    // Check for all possible combinations
    for (let current = 0; current < combinations; current += 1) {
      let bin = decToBin(current, varList);

      // Create vars object with <varName>:<value> pairs
      for (let i = 0; i < varList.length; i += 1) {
        vars[varList[i]] = bin[i];
      }

      // Calculate the result
      let result = calculateExpression(order, vars);

      // Check if the expression is tautology
      if (isTautology && result === 0) setIsTautology(false);
      else setIsTautology(true);

      // Add result to the array
      if (varList.length < MAX_VARS_TO_RENDER_TABLE) {
        row += `<tr class='row'>${varList
          .map((varName) => {
            return `<td>${vars[varName]}</td>`;
          })
          .join("")}<td>${result}</td></tr>`;
      }
    }
    setTableRows(row);
  };

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
      {isTautology ? (
        <Flex
          borderRadius="10px"
          justify="center"
          p="20px"
          mt="50px"
          bgColor="#ccc"
          w="300px"
        >
          <Text fontWeight="500">A expressão digitada é uma tautologia.</Text>
        </Flex>
      ) : isTautology === false ? (
        <Flex borderRadius="10px"
        justify="center"
        p="20px"
        mt="50px"
        bgColor="#ccc"
        w="300px"><Text fontWeight="500">Não é uma tautologia.</Text></Flex>
      ) : null}
    </Flex>
  );
};
