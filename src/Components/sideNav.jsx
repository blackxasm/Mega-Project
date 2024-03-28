import {
    Box, Stack, Heading, HStack, Link, Text, Icon
} from "@chakra-ui/react"
import { MdDashboard } from "react-icons/md";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { MdAccountBalance } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";





const Sidenav = () => {
    const navLinks = [
        {
            icon: MdDashboard,
            text: "dashboard",
            link: '/'
        },
        {
            icon: MdAccountBalance,
            text: "Wallet",
            link: "/wallet"
        },
        {
            icon: GrTransaction,
            text: 'Transactions',
            link: '/transactions'
        },
        {
            icon: RiAccountPinCircleLine,
            text: "Profile",
            link: "/profile"
        },
    ]

    return (
        <Stack
            bg="white"
            justify="space-between"
            alignItems="center"
            boxShadow={{
                base: "none",
                lg: "none",
            }}
            w={{
                base: "full",
                lg: "16rem",
            }}
            h="100vh"
        >

            <Box>
                {/* <Heading textAlign="top" fontSize="25px" as="h2" pt="2.5rem" pb="2rem">
                    MediaTek
                </Heading> */}


                <Box mt="120" mx="3">
                    {navLinks.map((nav) => (
                        <Link to={nav.link} key={nav.text}>
                            <HStack
                                borderRadius="10px"
                                py="4"
                                px="4"
                                gap="20px"
                                _hover={{
                                    bg: "#F3F3F7",
                                    color: "#171717",
                                }}
                            >
                                <Icon as={nav.icon} />
                                <Text fontSize="16px" fontWeight="bold">
                                    {nav.text}
                                </Text>
                            </HStack>
                        </Link>
                    ))}
                </Box>
            </Box>

            <Box pb="2rem">
                <Link to="/support">
                    <HStack
                        borderRadius="10px"
                        py="3"
                        px="4"
                        _hover={{
                            bg: "#F3F3F7",
                            color: "#171717",
                        }}
                    >
                        <Icon as="{MdSupportAgent}" />
                        <Text fontSize="16px" fontWeight="bold">
                            Support
                        </Text>
                    </HStack>
                </Link>
            </Box>
        </Stack>
    )
}
export default Sidenav;