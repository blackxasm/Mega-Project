import TopNavigation from "./TopNavigation";
import SideDrawer from "./sideDrawer";
import Sidenav from "./sideNav"
import { Box, Flex, Container, useDisclosure } from "@chakra-ui/react"

const DashboardLayout = ({ title, children }) => {

    const { isOpen, onClose, onOpen } = useDisclosure();

    return (
        <Flex>
            <Box display={{
                base: "none",
                lg: "none",
            }}>
                <Sidenav />
            </Box>
            <SideDrawer isOpen={isOpen} onClose={onClose}></SideDrawer>
            <Box flexGrow={1}>
                <TopNavigation title={title} onOpen={onOpen} />
                <Container
                    overflowX="hidden"
                    overflowY="auto"
                    h="calc(100vh-88px)"
                    mt="6"
                    maxW="70rem">
                    {children}
                </Container>
            </Box>
        </Flex>
    )
}
export default DashboardLayout;