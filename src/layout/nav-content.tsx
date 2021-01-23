import {
  Flex,
  IconButton,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react"
import Link from "next/link"
import { FaMoon, FaSun } from "react-icons/fa"

const sections = [
  { id: "home-link", title: "home", href: "/" },
  { id: "burgers-link", title: "burgers", href: "/shop/burgers" },
  { id: "chicken-link", title: "chicken", href: "/shop/chicken" },
  { id: "pizza-link", title: "pizza", href: "/shop/pizza" },
  { id: "shop-link", title: "shop", href: "/shop/" },
  { id: "sushi-link", title: "sushi", href: "/shop/sushi" },
  { id: "sandwiches-link", title: "sandwiches", href: "/shop/sandwiches" }
]

export default function NavbarContent() {
  const { toggleColorMode: toggleMode } = useColorMode()
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)
  const text = useColorModeValue("dark", "light")

  return (
    <Flex
      aria-label="Primary Navigation"
      as="nav"
      justifyContent="space-evenly"
      alignItems="center"
      p={[1, 2, 3]}
    >
      {sections.map(sec => (
        <Link href={sec.href} aria-label={`Page ${sec.id}`} key={sec.id}>
          {sec.title}
        </Link>
      ))}

      <IconButton
        size="md"
        fontSize="lg"
        aria-label={`Switch to ${text} mode`}
        variant="ghost"
        color="current"
        ml={{ base: "0", md: "3" }}
        onClick={toggleMode}
        icon={<SwitchIcon />}
      />
    </Flex>
  )
}
