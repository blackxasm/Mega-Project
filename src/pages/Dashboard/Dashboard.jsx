import { GridItem, Grid } from "@chakra-ui/react";
import DashboardLayout from "../../Components/DashboardLayout";
import PortofolioSection from "./component/PortofolioSection";
import CurrencyPrice from "./component/CurrencyRate";
import Transactions from "./component/TransactionHistory";


const Dashboard = ({ title, children }) => {
    return (

        <DashboardLayout title="Coin DCX" >
            <Grid gridTemplateColumns={{
                base: "repeat(!,1fr)",
                xl: "repeat(2,1fr)",
            }}
                gap='6'>
                <GridItem colSpan={{ base: 1, xl: 2 }}>
                    <PortofolioSection />
                </GridItem>
                <GridItem colSpan={1}>
                    <CurrencyPrice />
                </GridItem>
                <GridItem colSpan={1}>
                    <Transactions />
                </GridItem>
            </Grid>

        </DashboardLayout>
    )
}
export default Dashboard;