import { Box } from "@chakra-ui/react"
import Container from "@components/container"
import Footer from "@components/Footer"
import * as React from "react"
import PageTransition from "./page-transition"

const PageContainer: React.FC<{ children: React.ReactNode }> = ({
  children
}) => (
  <Container as="main" className="main-content">
    <Box display={{ base: "block", md: "flex" }}>
      <div style={{ flex: 1 }}>
        <Box
          id="content"
          pt={3}
          px={5}
          mt="6rem"
          mx="auto"
          maxW="72rem"
          minH="76vh"
        >
          <PageTransition>{children}</PageTransition>

          <Footer />
        </Box>
      </div>
    </Box>
  </Container>
)

export default PageContainer
