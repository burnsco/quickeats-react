import { Box, chakra, Flex, Icon, Spacer, Stack } from "@chakra-ui/react"
import NextChakraLink from "@components/common/NextChakraLink"
import CartDrawer from "@components/drawer/CartDrawer"
import LoginDrawer from "@components/user/LoginDrawer"
import RegisterDrawer from "@components/user/RegisterDrawer"
import { GiFireDash } from "react-icons/gi"
import NavbarMenu from "./NavMenu"

export const sections = [
  { id: "home-link", title: "home", href: "/" },
  { id: "burgers-link", title: "burgers", href: "/shop/burgers" },
  { id: "chicken-link", title: "chicken", href: "/shop/chicken" },
  { id: "pizza-link", title: "pizza", href: "/shop/pizza" },
  { id: "shop-link", title: "shop", href: "/shop/" },
  { id: "sushi-link", title: "sushi", href: "/shop/sushi" },
  { id: "sandwiches-link", title: "sandwiches", href: "/shop/sandwiches" }
]

// TODO separate each section of header into smaller containers
// TODO load the containers based on user login

const NavbarLogoSection = () => (
  <Box border="1px solid white">
    <NextChakraLink
      data-testid="nav-logo"
      textDecoration="mediumslateblue"
      fontSize={{ base: "md", md: "large", lg: "2xl" }}
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
  </Box>
)

const NavbarUserSection = () => (
  <Stack spacing={2} direction="row" align="center" border="1px solid green">
    <RegisterDrawer />
    <LoginDrawer />
    <CartDrawer />
  </Stack>
)

export default function NavbarContent() {
  return (
    <Flex
      aria-label="Primary Navigation"
      as="nav"
      align="center"
      px={[1, 3, 6]}
      w="full"
      h="full"
    >
      <NavbarLogoSection />
      <Spacer />
      <Box border="1px solid orange">
        <NavbarMenu />
      </Box>
      <Spacer />
      <NavbarUserSection />
    </Flex>
  )
}
