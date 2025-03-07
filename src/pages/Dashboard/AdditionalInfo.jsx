import CustomCard from "../../chakra/CustomCard";
import { Tag, Text } from "@chakra-ui/react";

const AdditionalInfo = ({ imgUrl, text, tagText, inverted }) => {
    return (
        <CustomCard
            bgColor={inverted ? "p.purple" : "white"}
            bgImage={imgUrl}
            bgSize="cover"
            bgRepeat="no-repeat">
            <Tag color={inverted ? "p.purple" : "white"}
                bg={inverted ? "white" : "p.purple"}
                borderRadius="full">
                {tagText}
            </Tag>
            <Text
                mt="4"
                fontWeight="medium"
                textStyle="h5"
                color={inverted ? "white" : "black"}>
                {text}
            </Text>
        </CustomCard>
    )
}
export default AdditionalInfo;