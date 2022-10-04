import { GridItem, Heading, Stack, Text } from "@chakra-ui/react";
import { ReactElement } from "react";

const InfoCard = ({
  children,
  heading,
  text,
}: {
  children: ReactElement;
  heading: string;
  text: string;
}) => {
  return (
    <GridItem as={Stack} align='center' rounded='20px' boxShadow='lg' p='10'>
      {children}
      <Heading textAlign='center' py='4' fontSize='20px'>
        {heading}
      </Heading>
      <Text fontSize='15px' textAlign='center' >{text}</Text>
    </GridItem>
  );
};

export default InfoCard;
