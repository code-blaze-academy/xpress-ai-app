import { Button } from "@chakra-ui/react";
import { forwardRef } from "react";

const CustomButton = forwardRef(
  (
    {
      title,
      leftIcon,
      rightIcon,
      children,
      onClick,
      ...rest // Accepts all Button props
    },
    ref
  ) => {
    return (
      <Button
        ref={ref}
        bgGradient="linear(to-r, #173685 0%, rgba(23, 54, 133, 0.50) 50%, #718517 100%)"
        color="white"
        _hover={{
          bgGradient:
            "linear(to-r, #173685 0%, rgba(23, 54, 133, 0.70) 50%, #718517 100%)",
        }}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        onClick={onClick}
        {...rest}
      >
        {title || children}
      </Button>
    );
  }
);


CustomButton.displayName = "CustomButton";

export default CustomButton;
