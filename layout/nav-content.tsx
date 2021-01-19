import {
  Flex,
  IconButton,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react"
import Link from "next/link"
import { FaMoon, FaSun } from "react-icons/fa"

const sections = [
  { id: 1, title: "test", href: "/test" },
  { id: 2, title: "haa", href: "/haa" },
  { id: 3, title: "art", href: "/art" },
  { id: 4, title: "car", href: "/car" }
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
