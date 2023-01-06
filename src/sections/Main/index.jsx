import React, { useEffect, useState } from "react";
import { Flex, Input, Button, Center, Divider, Text } from "@chakra-ui/react";
import { QuestionOutlineIcon, InfoIcon } from "@chakra-ui/icons";
import { VariableDisplay } from "../../components/VariableDisplay";
import { useApp } from "../../context";
import {
  convertToRpn,
  getVariables,
  convertToJsx,
  decToBin,
  calculateExpression,
} from "../../helpers";

const MAX_VARS_TO_RENDER_TABLE = 10;

export const Main = ({ onOpen }) => {
  const { setTableHeader, setTableRows } = useApp();
  const [expression, setExpression] = useState("(A | B) & (!A) > B");
  const [showTable, setShowTable] = useState(false);
  const [isTautology, setIsTautology] = useState(undefined);

  useEffect(() => {
    const resetVariables = () => {
      setShowTable(false);
      setIsTautology(undefined);
    };

    return () => {
      resetVariables();
    };
  }, [expression]);

  const checkExpression = () => {
    setShowTable(true);

    const rpn = convertToRpn(expression);
    const varList = getVariables(rpn);

    // Numero de combinações
    const combinations = Math.pow(2, varList.length);

    // Prepare table header
    if (varList.length < MAX_VARS_TO_RENDER_TABLE) {
      let tableHtml = '<tr class="title">';
      for (let i = 0; i < varList.length; i += 1) {
        tableHtml += `<th>${varList[i]}</th>`;
      }

      tableHtml += "<th>Resultado</th></tr>";
      setTableHeader(convertToJsx(tableHtml));
    } else {
      setTableHeader("");
    }

    // Check for all possible combinations
    let isTautology = true;
    const vars = {};
    let bin;
    let result;
    let row;
    let resultCell;

    for (let current = 0; current < combinations; current += 1) {
      bin = decToBin(current, varList);

      // Create vars object with <varName>:<value> pairs
      for (let i = 0; i < varList.length; i += 1) {
        vars[varList[i]] = bin[i];
      }

      // Calculate the result
      result = calculateExpression(rpn, vars);

      // Check if the expression is tautology
      if (isTautology && result === 0) {
        isTautology = false;
      }

      console.log("vars", vars);
      console.log("result", result);
      console.log("isTautology", isTautology);

      // Add result to the array
      if (varList.length < MAX_VARS_TO_RENDER_TABLE) {
        row = (
          <tr>
            {varList.map((varName) => (
              <td>{vars[varName]}</td>
            ))}
            <td className="result">{result}</td>
          </tr>
        );

        setTableRows((prev) => [...prev, row]);
      }
    }

    if (isTautology) setIsTautology(true);
    else setIsTautology(false);
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
