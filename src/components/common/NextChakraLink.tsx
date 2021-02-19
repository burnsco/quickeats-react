import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps
} from "@chakra-ui/react"
import { LinkProps as NextLinkProps } from "next/dist/client/link"
import NextLink from "next/link"
import { PropsWithChildren } from "react"

export type NextChakraLinkProps = PropsWithChildren<
  NextLinkProps & Omit<ChakraLinkProps, "as">
>

//  Has to be a new component because both chakra and next share the `as` keyword
const NextChakraLink = ({
  href,
  as,
  replace,
  scroll,
  shallow,
  children,
  ...chakraProps
}: NextChakraLinkProps) => (
  <NextLink
    passHref
    href={href}
    as={as}
    replace={replace}
    scroll={scroll}
    shallow={shallow}
    prefetch={false}
  >
    <ChakraLink {...chakraProps}>{children}</ChakraLink>
  </NextLink>
)

export default NextChakraLink
