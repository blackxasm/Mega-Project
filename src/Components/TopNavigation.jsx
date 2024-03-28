import {
    Box,
    Button,
    Container,
    Flex,
    HStack,
    Heading,
    Icon,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from "@chakra-ui/react";
import { FaUserTie } from "react-icons/fa";
import { MdOutlineMenuOpen } from "react-icons/md";

const TopNavigation = ({ title, isOpen, onOpen }) => {
    return (
        <Box px="4" boxShadow={{
            base: "none",
            lg: "lg",
        }}>
            <HStack maxW="70rem" h="16" justifyContent="space-between" mx="auto">
                <Icon as={MdOutlineMenuOpen}
                    onClick={onOpen}
                    fontSize="30px"
                    m="10"
                    display={{
                        base: "block",
                        lg: "block"
                    }} />
                <Heading fontWeight="medium" fontSize="28px">
                    {title}
                </Heading>


                <Menu>
                    <MenuButton>
                        <Icon as={FaUserTie} fontSize="1.5rem" />
                    </MenuButton>
                    <MenuList>
                        <MenuItem>
                            Logout
                        </MenuItem>
                        <MenuItem>
                            Support
                        </MenuItem>
                    </MenuList>
                </Menu>
            </HStack>
        </Box>
    )
}
export default TopNavigation;