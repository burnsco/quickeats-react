import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react"
import React from "react"
import { FaCanadianMapleLeaf, FaGithub, FaTelegram } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

type FooterLinkProps = {
  icon?: React.ElementType
  href?: string
  label?: string
}

const FooterLink: React.FC<FooterLinkProps> = ({ icon, href, label }) => (
  <Link display="inline-block" href={href} aria-label={label} isExternal>
    <Icon as={icon} fontSize="xl" color="gray.400" />
  </Link>
)

const links = [
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/burnsco"
  },
  {
    icon: FaTelegram,
    label: "Telegram",
    href: "https://telegram.com/coreyburns"
  },
  {
    icon: MdEmail,
    label: "Email",
    href: "mailto:corey.burns@mailfenc.com"
  }
]

export const Footer = () => (
  <Box as="footer" mt={12} textAlign="center">
    <Text fontSize="sm">
      Proudly made in
      <Icon
        as={FaCanadianMapleLeaf}
        display="inline-block"
        mx="3"
        h="16px"
        w="auto"
        verticalAlign="middle"
      />
      by Corey Burns
    </Text>
    <Stack mt={4} direction="row" spacing="12px" justify="center">
      {links.map(link => (
        <FooterLink key={link.href} {...link} />
      ))}
    </Stack>
  </Box>
)

export default Footer
