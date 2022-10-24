import { Box, Container } from "@chakra-ui/react"

const barStyles = {
  width: 35,
  height: 5,
  backgroundColor: "#333",
  margin: "6px 0",
  transition: "0.4s"
}

const MenuIconLine = () => <Box sx={barStyles} />

export default function MenuIcon() {
  return (
    <Container>
      <MenuIconLine />
      <MenuIconLine />
      <MenuIconLine />
    </Container>
  )
}
