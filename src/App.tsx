import { useState } from "react";
import logo from "../public/Logo.png";
import explainerVideo from "../public/Screenshot.png";
import InfoCard from "./components/InfoCard";
import InfoCard2 from "./components/InfoCard2";
import {
  ArtificialInteligence,
  DirectCustomer,
  FaceBookIcon,
  GroupSvg,
  InfoIcon,
  InstagramIcon,
  LinkedInIcon,
  PinterestIcon,
  TwitterIcon,
  Vector2,
  YouTubeIcon,
} from "./components/Svgs";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

import avatar from "../public/Retink-avatar1.png";
import image1 from "../public/image1.png";
import image2 from "../public/unsplash_HOrhCnQsxnQ.png";
import image3 from "../public/unsplash_I6wCDYW6ij8.png";
import image4 from "../public/unsplash_MrWOCGKFVDg.png";
import image5 from "../public/unsplash_niUkImZcSP8logos.png";
import image6 from "../public/unsplash_QRKJwE6yfJo.png";
import "@fontsource/poppins";

function App() {
  return (
    <>
      <Stack align='center' w='full' maxW='1440px'>
        <Flex w='full' px={["5", "5", "28"]} pos='relative' pb='28'>
          <Stack spacing='7' pt={10} w={["full", "full", "620px"]}>
            <Image src={logo} w='170px' />
            <Flex
              align='end'
              pt='10'
              pb='4'
              fontSize={["30px", "30px", "40px"]}>
              <Stack>
                <Heading size='lg' fontWeight={800} fontSize='inherit'>
                  Get Advanced AI{" "}
                </Heading>
                <Heading size='lg' fontSize='inherit' whiteSpace='nowrap'>
                  + Expert Created
                </Heading>
              </Stack>
              <Heading ml='1' fontSize='inherit' size='lg' color='#793EF5'>
                Logos
              </Heading>
            </Flex>
            <Text
              w={["full", "full", "550px"]}
              fontSize='20px'
              lineHeight='170%'>
              Boost your sales{" "}
              <span style={{ color: "#7E1CFE", fontWeight: "600" }}>
                10x faster
              </span>{" "}
              with content customized by our unique partners of{" "}
              <span style={{ color: "#7E1CFE", fontWeight: "600" }}>
                human creativity and AI optimization
              </span>
            </Text>
            <Heading
              size='sm'
              textAlign={["center", "center", "start"]}
              color='#7E1CFE'
              fontSize='24px'>
              SIGN UP FOR THE BETA!
            </Heading>
            <Flex
              w='full'
              fontSize='15px'
              fontWeight={600}
              align='end'
              pb='7'
              flexWrap='wrap'>
              <Input
                variant='flushed'
                fontSize='inherit'
                placeholder='Business Name'
                borderBottomWidth={2}
                borderBottomColor='gray.600'
                p={0}
                size='xs'
                w={["full", "full", "130px"]}
                _placeholder={{ color: " #7E1CFE", textAlign: "center" }}
                color=' #7E1CFE'
              />
              <Text fontSize='inherit' py='1' whiteSpace='nowrap'>
                would like a beta invite sent to{" "}
              </Text>
              <Input
                variant='flushed'
                fontSize='inherit'
                type='email'
                placeholder='email address'
                borderBottomWidth={2}
                borderBottomColor='gray.600'
                p={0}
                size='xs'
                w={["full", "full", "130px"]}
                _placeholder={{ color: " #7E1CFE", textAlign: "center" }}
                color=' #7E1CFE'
              />
              <Text fontSize='inherit' py='1' whiteSpace='nowrap'>
                {" "}
                when i'ts ready!
              </Text>
            </Flex>

            <Stack
              spacing={["20px", "20px", "50px"]}
              justify='space-betwwen'
              direction={["column", "column", "row"]}>
              <Button
                size='lg'
                rounded='16px'
                bgColor='#7E1CFE'
                variant='solid'
                fontSize='18px'
                h='58px'
                px='10'
                color='#FFFFFF'>
                Notify me
              </Button>
              <Button
                size='lg'
                rounded='16px'
                borderColor='#7E1CFE'
                color='#0085FF'
                variant='outline'
                fontSize='18px'
                // w='223px'
                h='58px'
                px='10'>
                Sign up as a freelance partner
              </Button>
            </Stack>
          </Stack>
          <Image
            display={["none", "none", "unset"]}
            src={avatar}
            position='absolute'
            top='0'
            right='0'
            w='613px'
            h='778px'
          />
        </Flex>

        <Stack bgColor='white' w='full' pt='5' align='center'>
          <Heading
            textAlign='center'
            fontSize='28px'
            color='#7E1CFE'
            lineHeight='170px'>
            EXPLAINER VIDEO
          </Heading>
          <Image src={explainerVideo} w='737px' />
          <Grid
            p='20'
            gridTemplateColumns='repeat(auto-fill,minmax(300px,1fr))'
            gridAutoRows='350px'
            gridColumnGap='10'
            gridRowGap='10'>
            <InfoCard
              heading='MakeAI-assisted Content Choices'
              text='Access and Order from an extensive catalogue in any language and on your budget’s terms. If unsure, our AI guides you to the best.'>
              <ArtificialInteligence />
            </InfoCard>

            <InfoCard
              heading='Upload and Maintain your Brand Identity'
              text='Add your preferences and brand assets to ensure the contents is consistent with your brand identity. No brand asset? We can make for you!'>
              <GroupSvg />
            </InfoCard>

            <InfoCard
              heading='Be informed as we create'
              text='Your details are translated and sent to the AI, FP, or both (per your choice) as you relax and receive continuous updates.'>
              <InfoIcon />
            </InfoCard>

            <InfoCard
              heading='Receive and Review'
              text='The finished content is delivered and you can make corrections that we will effect to satisfy your requirements.'>
              <DirectCustomer />
            </InfoCard>

            <InfoCard
              heading='Publish and Monitor your contents’ progress'
              text='The finished content is delivered and you can make corrections that we will effect to satisfy your requirements.'>
              <Vector2 boxSize={20} />
            </InfoCard>
          </Grid>

          <Heading fontSize='28px' color='#7E1CFE' textAlign='center'>
            Transform your Creation Process
          </Heading>
          <Text
            fontSize='20px'
            textAlign='center'
            w={["full", "full", "800px"]}
            lineHeight='170%'>
            With a new approach toordering content, you can now stop juggling
            multiple documents and meetings and start publishing content faster
            and on demand
          </Text>
          <Heading fontSize='28px' textAlign='center' color='#7E1CFE' pt='12'>
            Activate your business growth with RetinkContent.
          </Heading>
          <Text
            fontSize='20px'
            w={["full", "full", "800px"]}
            textAlign='center'
            lineHeight='170%'>
            Save time and maintain your brand identity within your budget range
            or sign up for affordable plans and still access multiple content
            services like:
          </Text>

          <Grid
            maxW='1000px'
            p='10'
            gridTemplateColumns='repeat(3,1fr)'
            // gridAutoRows='2006px'
            gridColumnGap='3'
            gridRowGap='3'>
            <InfoCard2
              heading='Logos'
              text='Have a unique & creative logo designed to express and represent your brand identity'
              src={image1}
            />

            <InfoCard2
              heading='Blog Writing'
              text='Write SEO enriched blog posts as long or short articles on any topic of your choice.'
              src={image2}
            />

            <InfoCard2
              heading='Animated Videos'
              text='Bring animated characters to life to keep your viewers engaged and  entertained.'
              src={image3}
            />

            <InfoCard2
              heading='Product Demo'
              text='Introduce your product to potential customers in a clear and creative video.'
              src={image4}
            />

            <InfoCard2
              heading='Copywriting'
              text='Have creative and compelling copies written to boost your product, brand, service or company.'
              src={image5}
            />

            <InfoCard2
              heading='Social Media Ads'
              text='Boost sales and awareness with tailor made ads from experts.'
              src={image6}
            />
          </Grid>

          <Stack
            spacing={4}
            align='center'
            py='20'
            w={["full", "full", "582px"]}>
            <Heading color='#7E1CFE' p='5' fontSize='26px'>
              Sign Up For The BETA to see more
            </Heading>
            <Stack direction={["column", "column", "row"]}>
              <Button
                size='lg'
                rounded='16px'
                color='#7E1CFE'
                variant='outline'
                fontSize='20px'
                h='58px'
                w='full'
                px='20'>
                Business Name
              </Button>
              <Button
                size='lg'
                rounded='16px'
                color='#7E1CFE'
                variant='outline'
                fontSize='20px'
                h='58px'
                w='full'
                px='20'>
                Email
              </Button>
            </Stack>

            <Button
              size='lg'
              rounded='16px'
              bgColor='#7E1CFE'
              variant='solid'
              fontSize='20px'
              px='10'
              h='58px'
              color='#FFFFFF'>
              Notify me
            </Button>

            <Button
              size='lg'
              rounded='16px'
              color='#0085FF'
              variant='outline'
              fontSize='18px'
              h='58px'
              px='20'>
              Sign up as a freelance partner
            </Button>
          </Stack>
        </Stack>
      </Stack>

      <Stack
        bgColor='#D0D0D0'
        w='full'
        h={["full", "full", "356px"]}
        justify='space-between'
        p='16'>
        <Flex justify='space-between' w='full' flexWrap='wrap'>
          <Image src={logo} w='150px' h='35px' />

          <Box p={["7", "7", "0"]}>
            <Text fontSize='24px'>Connect with Us</Text>
            <HStack spacing='5' pt='4'>
              <FaceBookIcon />
              <TwitterIcon />
              <InstagramIcon />
              <LinkedInIcon />
              <YouTubeIcon />
              <PinterestIcon />
            </HStack>
          </Box>
        </Flex>

        <HStack
          // justify='start'
          flexWrap='wrap'
          spacing='20'
          // align='start'
          alignSelf={["center", "center", "start"]}
          // bgColor='red'
          fontSize={["18px", "18px", "24px"]}
          maxW={["full", "full", "700px"]}>
          <Heading p='3' fontSize='inherit' textAlign='start'>
            Product by Retink Media UG
          </Heading>
          <Heading p='3' fontSize='inherit' textAlign='start'>
            Get Early Access
          </Heading>
          <Heading p='3' fontSize='inherit' textAlign='start'>
            Bonn, Germany
          </Heading>
          <Heading p='3' fontSize='inherit' textAlign='start'>
            Provide Feedback
          </Heading>
        </HStack>

        {/* <Box>
          
        </Box> */}
      </Stack>

      <Flex
        bgColor='#000000'
        h='118px'
        justify='space-between'
        align='center'
        px={["2", "3", "40"]}>
        <Text color='#FFFFFF' fontSize='16px'>
          Copyright © 2021 Retink
        </Text>
        <HStack>
          <Text color='#FFFFFF' fontSize='16px'>
            Privacy Policy
          </Text>
          <Text color='#FFFFFF' fontSize='16px'>
            Terms of Service
          </Text>
        </HStack>
      </Flex>
    </>
  );
}

export default App;
