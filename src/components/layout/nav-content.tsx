import {
  chakra,
  HStack,
  Icon,
  IconButton,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react"
import NextChakraLink from "@components/common/NextChakraLink"
import CartDrawer from "@components/drawer/CartDrawer"
import { FaMoon, FaSun } from "react-icons/fa"
import { GiFireDash } from "react-icons/gi"
import NavMenu from "./nav-menu"

export const sections = [
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
    <HStack
      spacing={[2, 4]}
      aria-label="Primary Navigation"
      as="nav"
      justifyContent="space-evenly"
      p={[1, 2, 3]}
    >
      <NextChakraLink
        data-testid="nav-logo"
        textDecoration="mediumslateblue"
        fontSize={{ base: "lg", md: "2xl" }}
        letterSpacing="wide"
        fontWeight="bold"
        fontFamily="Anton"
        color="yellow.400"
        href="/"
        aria-label="Home Page Link"
      >
        <Icon as={GiFireDash} boxSize="1.8em" mr={2} />
        <chakra.span fontStyle="italic" color="mediumorchid">
          QUICK
        </chakra.span>
        EATS
      </NextChakraLink>

      <NavMenu />

      <CartDrawer />

      <IconButton
        size="md"
        fontSize="lg"
        aria-label={`Switch to ${text} mode`}
        variant="ghost"
        color="current"
        onClick={toggleMode}
        icon={<SwitchIcon />}
      />
    </HStack>
  )
}
