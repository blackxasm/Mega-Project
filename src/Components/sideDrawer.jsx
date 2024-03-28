import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
import Sidenav from './sideNav';


const SideDrawer = ({ isOpen, onClose, onOpen }) => {
    return (
        <>
            <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody>
                        <Sidenav />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}
export default SideDrawer;