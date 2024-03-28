import CustomCard from "../../../chakra/CustomCard";
import { Flex, HStack, Stack, Text, Button, Icon, Tabs, Image, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import { TbCircleArrowUpRightFilled } from "react-icons/tb";


const  CurrencyPrice = () => {
    const timeStamps = ["7:15 PM", "7:55 PM", "8:55 PM", "9:55 PM", "10:55 PM"];
    return (
        <CustomCard>
            <Flex justify="space-between" align="start">
                <Stack>
                    <HStack color="black">
                        <Text>Wallet Balances</Text>
                    </HStack>
                    <HStack spacing={2}
                        align={{ base: "flex-start", sm: "center" }}
                        flexDir={{ base: "column", sm: "row" }}>
                        <HStack>
                            <Text textStyle="h2" fontWeight="medium">22.2391000</Text>{" "}
                            <HStack fontWeight="medium" color="green">
                                <Icon as={TbCircleArrowUpRightFilled} />
                                <Text fontSize="sm" fontWeight="medium">22%</Text>
                            </HStack>{" "}
                        </HStack>
                    </HStack>
                </Stack>
                <HStack>
                    <Button>Buy</Button>
                    <Button>Sell</Button>
                </HStack>
            </Flex>

            <Tabs variant="soft-rounded">
                <Flex justify="end">
                    <TabList p="5px" color="#e3e3e7" bg="#E3E3E7" borderRadius="10"> {["1H", "1D", "1M", "6M", "1Y", "3Y", "5Y", "MAX"].map((tab) => (
                        <Tab _selected={{ bg: "white" }} key={tab} fontSize="sm" p="8px" borderRadius="10px">{tab}</Tab>
                    ))}</TabList>
                </Flex>

                <TabPanels>
                    <TabPanel>
                        <Image w="100%" src="/graph.svg" mt="3rem" />
                        <HStack justify="space-between">
                            {timeStamps.map((timeStamp) => {
                                <Text key={timeStamp} fontSize="sm" color="black">{timeStamp}</Text>
                            })}
                        </HStack>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </CustomCard>
    )
}
export default CurrencyPrice;