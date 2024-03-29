import {
  Box,
  Button,
  chakra,
  Flex,
  HStack,
  Icon,
  IconButton,
  LinkBox,
  LinkOverlay,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Spacer,
  Stack,
  useColorMode,
  useColorModeValue,
  useToast
} from "@chakra-ui/react"
import CartDrawer from "@components/drawer/CartDrawer"
import LoginDrawer from "@components/drawer/LoginDrawer"
import RegisterDrawer from "@components/drawer/RegisterDrawer"
import firebaseClient from "@config/firebaseClient"
import { useAuth } from "@hooks/auth"
import router from "next/router"
import { FaMoon, FaSun, FaUserCircle } from "react-icons/fa"
import { GiFireDash } from "react-icons/gi"
import { MdSettings } from "react-icons/md"

export const sections = [
  { id: "home-link", title: "home", href: "/" },
  { id: "burgers-link", title: "Burgers", href: "/shop/burgers" },
  { id: "chicken-link", title: "Chicken", href: "/shop/chicken" },
  { id: "pizza-link", title: "Pizza", href: "/shop/pizza" },
  { id: "shop-link", title: "shop", href: "/shop/" },
  { id: "sushi-link", title: "Sushi", href: "/shop/sushi" },
  { id: "sandwiches-link", title: "Sandwiches", href: "/shop/sandwiches" }
]

const NavbarLogoSection = () => (
  <div className="container px-2">
    <LinkBox
      data-testid="nav-logo"
      textDecoration="mediumslateblue"
      fontSize={{ base: "md", md: "large", lg: "2xl" }}
      letterSpacing="wide"
      fontWeight="bold"
      fontFamily="Anton"
      color="yellow.400"
      aria-label="Home Page Link"
    >
      <LinkOverlay href="/">
        <HStack>
          <Icon as={GiFireDash} boxSize="1.8em" />
          <Box>
            <chakra.span fontStyle="italic" color="mediumorchid">
              QUICK
            </chakra.span>
            EATS
          </Box>
        </HStack>
      </LinkOverlay>
    </LinkBox>
  </div>
)

export default function NavbarContent() {
  const bg = useColorModeValue("whitesmoke", "#202020")
  const { user } = useAuth()
  const toast = useToast()
  const { toggleColorMode: toggleMode } = useColorMode()
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)
  const text = useColorModeValue("dark", "light")

  function UserMenu() {
    return (
      <Menu>
        <MenuButton as={Button}>{user?.email}</MenuButton>
        <MenuList opacity="0.7" bg={bg}>
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
                } catch (error: any) {
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
        w="full"
        spacing={2}
        direction="row"
        justify="center"
        align="center"
      >
        {user && user.email ? (
          <UserMenu />
        ) : (
          <>
            <RegisterDrawer />
            <LoginDrawer />
          </>
        )}
      </Stack>
    )
  }

  return (
    <Flex
      aria-label="Primary Navigation"
      as="nav"
      align="center"
      px={[0, 3, 6]}
      w="full"
      h="full"
    >
      <NavbarLogoSection />
      <Spacer />
      <NavBarUserSection />
      <CartDrawer />
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
