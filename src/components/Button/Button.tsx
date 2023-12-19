import { Button as ChakraButton } from "@chakra-ui/react";
import { ReactNode } from "react";
import { PRIMARY_COLOR } from "../../style/chakra-theme";

type Props = {
  children: ReactNode;
  color?: string;
  type: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  width?: string;
  handleClick?: () => void;
};

const Button = ({ children, color, type, disabled, width, handleClick }: Props) => {
  return (
    <ChakraButton
      backgroundColor={PRIMARY_COLOR}
      isDisabled={disabled}
      type={type}
      colorScheme={color}
      w={width}
      onClick={handleClick}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
