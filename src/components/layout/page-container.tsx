import { Box } from "@chakra-ui/react"
import Container from "@components/common/container"
import Footer from "@components/layout/Footer"
import * as React from "react"
import PageTransition from "./page-transition"

const PageContainer: React.FC<{ children: React.ReactNode }> = ({
  children
}) => (
  <Container as="main" className="main-content">
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
  </Container>
)

export default PageContainer
