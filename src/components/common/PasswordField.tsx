import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text
} from "@chakra-ui/react"
import { useField } from "formik"
import { useState } from "react"

type ChakraFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string
  label: string
  helperText?: string
  size?: string
}

const PasswordField: React.FC<ChakraFieldProps> = ({
  label,
  type,
  size,
  helperText,
  ...props
}) => {
  const [field, { error, touched }] = useField(props)

  const [didFocus, setDidFocus] = useState(false)
  const [show, setShow] = useState(false)
  const handleFocus = () => setDidFocus(true)
  const handleClick = () => setShow(!show)
  const showFeedback = (!!didFocus && field.value.trim().length > 2) || touched

  return (
    <FormControl isInvalid={!!error}>
      <FormLabel fontSize={`${size}` || "sm"} htmlFor={props.name || props.id}>
        {label}{" "}
        {showFeedback ? (
          <Text
            fontSize="md"
            aria-live="polite"
            id={`${props.id}-feedback`}
            ml={2}
            display="inline"
            color="greenyellow"
          >
            {!error && field.value.trim().length > 6 && "✓"}
          </Text>
        ) : null}
      </FormLabel>
      <InputGroup size="sm">
        <Input
          {...field}
          {...props}
          focusBorderColor="red.300"
          aria-describedby={`${props.id}-feedback ${props.id}-help`}
          type={show ? "text" : "password"}
          onFocus={handleFocus}
          id={field.name}
          placeholder={props.placeholder}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>

      {helperText && <FormHelperText>{helperText}</FormHelperText>}

      {error && touched ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  )
}

export default PasswordField
