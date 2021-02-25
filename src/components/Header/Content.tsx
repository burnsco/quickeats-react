import {
  Box,
  Button,
  chakra,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Spacer,
  Stack,
  useToast
} from "@chakra-ui/react"
import NextChakraLink from "@components/common/NextChakraLink"
import CartDrawer from "@components/drawer/CartDrawer"
import LoginDrawer from "@components/user/LoginDrawer"
import RegisterDrawer from "@components/user/RegisterDrawer"
import firebaseClient from "@config/firebaseClient"
import router from "next/router"
import React from "react"
import { FaUserCircle } from "react-icons/fa"
import { GiFireDash } from "react-icons/gi"
import { MdSettings } from "react-icons/md"
import { useAuth } from "../../hooks/auth"
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

export default function NavbarContent() {
  const { user } = useAuth()
  const toast = useToast()

  function UserMenu() {
    return (
      <Menu>
        <MenuButton as={Button}>{user?.email}</MenuButton>

        <MenuList opacity="0.7" bg="#202020">
          <MenuGroup title="user">
            <MenuDivider />
            <MenuItem onClick={() => router.push("/user/profile")}>
              <FaUserCircle />
              <Box ml={3}>Profile</Box>
            </MenuItem>
            <MenuItem onClick={() => router.push("/user/account")}>
              <MdSettings />
              <Box ml={3}>Account</Box>
            </MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup>
            <MenuItem
              mr={2}
              onClick={async () => {
                try {
                  await firebaseClient.auth().signOut()
                  toast({
                    id: "success-signing-out",
                    title: `Congrats`,
                    description: "You were signed out successfully.",
                    status: "success",
                    duration: 2000,
                    isClosable: true
                  })
                } catch (error) {
                  toast({
                    id: "warning-cannot-sign-out",
                    title: `hmmmmm`,
                    description: `${error.message}`,
                    status: "warning",
                    duration: 3000,
                    isClosable: true
                  })
                }
              }}
            >
              <Box ml={3}>Logout</Box>
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    )
  }

  function NavBarUserSection() {
    return (
      <Stack
        spacing={2}
        direction="row"
        align="center"
        border="1px solid green"
      >
        {user && user.email ? (
          <UserMenu />
        ) : (
          <>
            <RegisterDrawer />
            <LoginDrawer />
          </>
        )}
        <CartDrawer />
      </Stack>
    )
  }

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

      <NavbarMenu />

      <Spacer />
      <NavBarUserSection />
    </Flex>
  )
}
