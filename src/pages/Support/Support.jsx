import DashboardLayout from "../../Components/DashboardLayout"
import { Stack } from "@chakra-ui/react";
import SupportCard from "./components/supportcard";
import ContactCard from "./components/contactcard"
import { IoMdMail } from "react-icons/io";
import { AiTwotoneMessage } from "react-icons/ai";
import AdditionalInfo from "../Dashboard/AdditionalInfo";

const SupportPage = () => {
    return (
        <DashboardLayout title="Support">
            <Stack>
                <SupportCard
                    icon={IoMdMail}
                    leftComponent={<ContactCard />}
                    title="Contact Us"
                    text="Have a question or just want to know more ? feel freee to reach out to us."
                />
            </Stack>
        </DashboardLayout>
    )
}
export default SupportPage;