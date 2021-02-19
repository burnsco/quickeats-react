import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Text,
  Textarea
} from "@chakra-ui/react"
import { useField } from "formik"
import { useState } from "react"

type ChakraFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string
  textarea?: boolean
  label: string
  helperText?: string
  size?: string
}

const ChakraField: React.FC<ChakraFieldProps> = ({
  label,
  type,
  size,
  textarea = false,
  helperText,
  ...props
}) => {
  const [field, { error, touched }] = useField(props)
  const [didFocus, setDidFocus] = useState(false)
  const handleFocus = () => setDidFocus(true)
  const showFeedback = (!!didFocus && field.value.trim().length > 2) || touched

  return (
    <FormControl isInvalid={!!error}>
      <FormLabel fontSize={`${size}` || "sm"} htmlFor={props.name}>
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
      {textarea ? (
        <Textarea
          {...field}
          focusBorderColor="red.300"
          aria-describedby={`${props.id}-feedback ${props.id}-help`}
          type={type}
          onFocus={handleFocus}
          id={field.name}
          placeholder={props.placeholder}
        />
      ) : (
        <Input
          {...field}
          {...props}
          focusBorderColor="red.300"
          aria-describedby={`${props.id}-feedback ${props.id}-help`}
          type={type}
          onFocus={handleFocus}
          id={field.name}
          placeholder={props.placeholder}
        />
      )}

      {helperText && <FormHelperText>{helperText}</FormHelperText>}

      {error && touched ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  )
}

export default ChakraField
