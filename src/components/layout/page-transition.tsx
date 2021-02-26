import { Box } from "@chakra-ui/react"
import { HTMLMotionProps, motion } from "framer-motion"

const MotionPage = motion(Box)

const PageTransition = (props: HTMLMotionProps<"div">) => (
  <MotionPage
    initial={{ y: -16, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    {...props}
  />
)

export default PageTransition
