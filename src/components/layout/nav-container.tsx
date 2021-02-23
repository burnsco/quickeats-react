import { chakra, useColorModeValue } from "@chakra-ui/react"
import HeaderContent from "./nav-content"

function Navbar() {
  const bg = useColorModeValue("whitesmoke", "#202020")
  return (
    <chakra.header
      id="navbar"
      pos="fixed"
      top="0"
      zIndex="1"
      bg={bg}
      left="0"
      right="0"
      boxShadow="base"
      transition="top 0.3s"
      width="full"
    >
      <HeaderContent />
    </chakra.header>
  )
}
export default Navbar
