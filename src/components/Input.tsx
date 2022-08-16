import { FormControl, FormLabel, Input as ChakraInput, InputProps } from "@chakra-ui/react"

interface Props extends InputProps {
  name: string
  label?: string
}

export const Input = ({ name, label, ...rest }: Props) => {
  return (
    <FormControl>
      {!!label && (
        <FormLabel htmlFor={name}>
          {label}
        </FormLabel>
      )}

      <ChakraInput
        id={name}
        name={name}
        focusBorderColor="orange.400"
        bgColor="gray.50"
        {...rest}
      />
    </FormControl>
  )
}
