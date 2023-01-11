import React from "react";
import { Flex, Input, Button, useToast } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
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
  const toast = useToast();
  const {
    setTableHeader,
    setTableRows,
    expression,
    setExpression,
    resetVariables,
  } = useApp();

  const checkExpression = () => {
    resetVariables();

    let row = "",
      header = "",
      tautology = undefined;

    const vars = {};
    const order = expressionOrder(expression);
    const varList = getVariables(order);

    // Numero de combinações
    const combinations = Math.pow(2, varList.length);

    // Table header
    if (varList.length < MAX_VARS_TO_RENDER_TABLE) {
      header = "<tr class='row'>";
      for (let i = 0; i < varList.length; i += 1)
        header += `<th>${varList[i]}</th>`;

      header += `<th>${expression}</th></tr>`;
    }
    setTableHeader(header);

    /// Table body
    for (let current = 0; current < combinations; current += 1) {
      let bin = decToBin(current, varList);

      // Create vars object with <varName>:<value> pairs
      for (let i = 0; i < varList.length; i += 1) vars[varList[i]] = bin[i];

      // Calculate the result
      let result = calculateExpression(order, vars);

      // Check if the expression is tautology
      tautology = !!result;

      // Add result to the array
      if (varList.length < MAX_VARS_TO_RENDER_TABLE)
        row += `<tr class='row'>${varList
          .map((varName) => {
            return `<td>${vars[varName]}</td>`;
          })
          .join("")}<td>${result}</td></tr>`;
    }
    setTableRows(row);

    handleTautology(tautology);
  };

  const handleTautology = (isTautology) => {
    toast(
      isTautology
        ? {
            title: "Tautologia",
            description: "A expressão digitada é uma tautologia.",
            status: "success",
          }
        : {
            title: "Não é Tautologia",
            description: "A expressão digitada não é uma tautologia.",
            status: "error",
          }
    );
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
    </Flex>
  );
};
