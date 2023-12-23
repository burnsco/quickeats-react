import { useColorModeValue } from "@chakra-ui/react"
import HeaderContent from "./Content"

function Navbar() {
  const bg = useColorModeValue("whitesmoke", "#202020")
  return (
    <header
      id="navbar"
      className="fixed border-2 top-0 p-1 z-10 left-0 right-0 max-w-screen-xl"
    >
      <HeaderContent />
    </header>
  )
}
export default Navbar
