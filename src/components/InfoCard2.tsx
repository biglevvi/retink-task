import { Box, Divider, GridItem, Image, Stack, Text } from "@chakra-ui/react";

const InfoCard2 = ({
  src,
  heading,
  text,
}: {
  src: string;
  heading: string;
  text: string;
}) => {
  return (
    <GridItem
      as={Stack}
      p='2'
      align='center'
      // bgColor='red'
      h='full'
      w='full'
      colSpan={[3,3,1]}
      justifyContent='center'>
      <Box
      // w='253px'
      // h='143px'
      // bgImage={`url(${src})`}
      // backgroundSize='cover'
      // bgColor='red'
      >
        <Image src={src} rounded='20px' flex='1' w='253px' h='143px' />
      </Box>
      <Text fontSize='18px' textAlign='start' w='full'>
        {heading}
      </Text>
      <Divider borderColor='#7E1CFE' borderWidth='2px' rounded='lg' w='100px' alignSelf='start' />
      <Text fontSize='15px' textAlign='start' w='full'>
        {text}
      </Text>
    </GridItem>
  );
};

export default InfoCard2;
