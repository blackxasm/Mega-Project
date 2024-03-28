import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import { LiaInfoCircleSolid } from "react-icons/lia";
import { GiReceiveMoney } from "react-icons/gi";
import { LiaDonateSolid } from "react-icons/lia";


const PortofolioSection = () => {
	return (
		<HStack justify="space-between"
			borderRadius="xl" p="6"
			align={{
				base: "flex-start",
				xl: "center"
			}}
			boxShadow={{
				base: "none",
				lg: "lg",
			}}
			w={{
				base: "fit-content",
				xl: "auto"
			}}
			flexDir={{
				base: "column",
				xl: 'row'
			}}
			spacing={{
				base: 10,
				xl: 0
			}}>
			<HStack
				spacing={{ base: 0, xl: 16 }}
				align={{ base: "flex-start", xl: "center" }}
				flexDir={{ base: "column", xl: "row" }}>
				{/* HStack close */}

				<Stack>
					<HStack
						color="black.80">
						<Text
							fontSize="sm">Total Portofolio Value</Text>
						<Icon as={LiaInfoCircleSolid} />
					</HStack>
					<Text textStyle="h2" fontWeight="medium">
						112, 312.24
					</Text>
				</Stack>

				<Stack>
					<HStack color="black.80">
						<Text fontSize="sm">Wallet Balances</Text>
					</HStack>
					<HStack spacing={2} align={{ base: "flex-start", sm: "row" }} flexDir={{ base: "column", sm: "row" }}>
						<HStack>
							<Text textStyle="h2" fontWeight="medium"> 22.4245200</Text>{" "}
							<Tag colorScheme="gray" fontWeight="medium">
								BTC
							</Tag>
						</HStack>
						<HStack>
							<Text textStyle="h2" fontWeight="medium">
								1,200.00
							</Text>{" "}
							<Tag colorScheme="gray">INR</Tag>
						</HStack>
					</HStack>
				</Stack>
			</HStack>


			<HStack justify="space-around">
				<Button leftIcon={<Icon as={LiaDonateSolid}/>} >Deposit</Button>
				<Button leftIcon={<Icon as={GiReceiveMoney} />}>Withdraw</Button>
			</HStack>
		</HStack>

	)
}
export default PortofolioSection;
