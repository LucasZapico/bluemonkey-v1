// import React from 'react';
// import { graphql } from 'gatsby';
// import { Heading, Flex, Box, Text, Container } from '@chakra-ui/react';
// import Img from 'gatsby-image';
// import { AnimatedFadeUpBox } from '../../components';
// import GatsbyLogo from '../../assets/Gatsby-Logo.svg';

// import {
//   IoIosArrowRoundBack,
//   IoIosArrowRoundForward,
//   IoIosOpen,
// } from 'react-icons/io';

// const caseTemplate = (props, location) => {
//   console.log('props', props);
//   const { pageContext } = props;
//   const { pageContext } = props;
//   const { pageContent, links } = pageContext;

//   console.log('page', pageContent);

//   return (
//     <Box py={40}>
//       {/* <Container maxW="container.md">
//         <Heading
//           as="h1"
//           fontFamily="montas-semibold"
//           bgGradient="linear(to-b, brand.three, brand.five)"
//           bgClip="text"
//           size="2xl"
//           lineHeight="base"
//           mb={16}
//         >
//           {contentData.title}
//         </Heading>

//         <Flex flexWrap="wrap">
//           <Box flexBasis={{ base: '100%', md: '70%' }}>
//             <Heading
//               fontFamily="montas-semibold"
//               as="h3"
//               size="3xl"
//               mt={16}
//               mb={6}
//             >
//               Summary
//             </Heading>
//             <Text pr={6} fontSize="2xl">
//               {contentData.summary}
//             </Text>
//           </Box>
//           <Box flexBasis={{ base: '100%', md: '30%' }}>
//             <Heading fontFamily="montas-semibold" mb={6} mt={16} as="h4">
//               Services
//             </Heading>
//             {contentData.services.map((s, i) => s)}
//           </Box>
//         </Flex>
//         <Box>
//           <Heading
//             fontFamily="montas-semibold"
//             as="h3"
//             size="3xl"
//             mt={16}
//             mb={6}
//           >
//             Branding
//           </Heading>
//           <Text pr={6} fontSize="2xl">
//             {contentData.branding}
//           </Text>
//           <AnimatedFadeUpBox>
//             <Box height="auto" overflow="hidden" my={16}>
//               <Img fluid={caseImages.nodes[0].childImageSharp.fluid} alt="" />
//             </Box>
//           </AnimatedFadeUpBox>
//         </Box>
//         <Box>
//           <Heading
//             fontFamily="montas-semibold"
//             as="h3"
//             size="3xl"
//             mt={16}
//             mb={6}
//           >
//             Web Design
//           </Heading>
//           <Text pr={6} fontSize="2xl">
//             {contentData['web-design']}
//           </Text>
//           <AnimatedFadeUpBox>
//             <Box height="auto" overflow="hidden" my={16}>
//               <Img fluid={caseImages.nodes[1].childImageSharp.fluid} alt="" />
//             </Box>
//           </AnimatedFadeUpBox>
//           <AnimatedFadeUpBox>
//             <Box height="auto" overflow="hidden" my={16}>
//               <Img fluid={caseImages.nodes[2].childImageSharp.fluid} alt="" />
//             </Box>
//           </AnimatedFadeUpBox>
//         </Box>
//         <Box>
//           <Heading
//             fontFamily="montas-semibold"
//             as="h3"
//             size="3xl"
//             mt={16}
//             mb={6}
//           >
//             Development
//           </Heading>
//           <Text pr={6} fontSize="2xl">
//             {contentData.development}
//           </Text>
//           <Box width="300px" my={6}>
//             <GatsbyLogo />
//           </Box>
//         </Box>
//         <Box>
//           <Heading
//             fontFamily="montas-semibold"
//             as="h3"
//             size="3xl"
//             mt={16}
//             mb={6}
//           >
//             Business Integrations
//           </Heading>
//           <Text pr={6} fontSize="2xl">
//             {contentData['business-integration']}
//           </Text>
//         </Box>
//       </Container> */}
//     </Box>
//   );
// };

// export default caseTemplate;
