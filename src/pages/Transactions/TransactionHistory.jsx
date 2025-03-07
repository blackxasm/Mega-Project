import { TabList, Tabs, Tab, Flex, Input, Button, Icon, Card, HStack, Tag, TabPanels, TabPanel, InputLeftElement, InputGroup } from "@chakra-ui/react";
import DashboardLayout from "../../Components/DashboardLayout";
import { AiOutlineDownload } from "react-icons/ai";
import TransactionTable from "./component/TransactionPage";
import { BsSearch } from "react-icons/bs";

const TransactionHistory = () => {
    const tabs = [
        {
            name: "All",
            count: 349,
        },
        {
            name: "Deposit",
            count: 114,
        },
        {
            name: "Widthdraw",
            count: 55,
        },
        {
            name: "Trade",
            count: 50,
        },
    ];
    return (
        <><DashboardLayout title="Transactoins">
            <Flex justify="end" mt="6" mb="3">
                <Button leftIcon={<Icon as={AiOutlineDownload} />}>
                    Export CSV
                </Button>
            </Flex>

            <Card borderRadius="1rem">
                <Tabs>
                    <TabList pt="4" display="flex" w="full" justifyContent="space-between">
                        <HStack>
                            {
                                tabs.map((tab) => (
                                    <Tab key={tab.name} display="flex" gap="2" pb="4">
                                        {tab.name}{" "}
                                        <Tag colorScheme="gray" borderRadius="full">{tab.count}</Tag>
                                    </Tab>
                                ))}
                        </HStack>

                        <InputGroup maxW="200px" pr="6">
                            <InputLeftElement pointerEvents="none">
                                <Icon as={BsSearch} />
                            </InputLeftElement>
                            <Input type="tel" placeholder="Search..." />
                        </InputGroup>

                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <TransactionTable />
                        </TabPanel>
                        <TabPanel>
                            <TransactionTable />
                        </TabPanel>
                        <TabPanel>
                            <TransactionTable />
                        </TabPanel>
                        <TabPanel>
                            <TransactionTable />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Card>
        </DashboardLayout></>
    )

}
export default TransactionHistory;