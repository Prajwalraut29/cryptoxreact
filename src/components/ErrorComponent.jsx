import { Alert, AlertIcon } from "@chakra-ui/react";
import { transform } from "framer-motion";
import React from "react";

const ErrorComponent = ({ message }) => {
  return (
    <Alert
      status="error"
      position={"fixed"}
      bottom={"4"}
      left={"50%"}
      transform={"translateX(-50%)"}
      w={"container.lg"}
    >
      <AlertIcon />
    </Alert>
  );
};

export default ErrorComponent;
