import { Button,HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <HStack p={"4"} shadow={"base"} bgColor={"whiteAlpha.700"}>
      <Button variant={"unstyled"} color={"blackAlpha.800"}>
        <Link to="/">Home</Link>
      </Button>
      <Button variant={"unstyled"} color={"blackAlpha.800"}>
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button variant={"unstyled"} color={"blackAlpha.800"}>
        <Link to="/coins">Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;
