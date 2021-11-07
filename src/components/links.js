import React, { useState } from 'react';
import {
  Box,
  IconButton,
  useToast,
  Tooltip,
  Button,
  Center,
  Flex,
  Link as ChLink,
} from '@chakra-ui/react';
import { Link } from 'gatsby';
import useClipboard from 'react-use-clipboard';
import {
  ArrowForwardIcon,
  CopyIcon,
  PhoneIcon,
  EmailIcon,
} from '@chakra-ui/icons';
import { formatePhone, formatePhoneBot } from '../helpers/index';
import LongArrow from '../assets/long-arrow.svg';



// export const LinkPhone = (props) => {
//   const { children, color } = props;
//   const formatedPhone = formatePhone(children);
//   const formatedPhoneBot = formatePhoneBot(children);
//   const [isCopied, setCopied] = useClipboard(children, {
//     successDuration: 1000,
//   });
//   const toast = useToast();

//   return (
//     <>
//       {formatedPhone ? (
//         <Flex
//           {...props}
//           display="inline"
//           alignItems="center"
//           justifyContent="space-between"
//           minWidth="180px"
//         >
//           <ChLink
//             color={color}
//             fontWeight="semibold"
//             href={`tel:+1${formatedPhoneBot}`}
//           >
//             <PhoneIcon mr={4} />
//             {formatedPhone}
//           </ChLink>
//           <Tooltip
//             label={isCopied ? 'Copied' : 'copy to clipboard'}
//             aria-label="copy to clipboard"
//             placement="right"
//           >
//             <IconButton
//               variant="none"
//               aria-label="copy to clipboard"
//               icon={<CopyIcon opacity="0.5" />}
//               m={0}
//               onClick={() => {
//                 setCopied();
//                 return toast({
//                   title: 'Copied to Clipboard',
//                   description: `${children} copied to clipboard`,
//                   status: 'info',
//                   variant: 'top-accent',
//                   duration: 2000,
//                   isClosable: true,
//                 });
//               }}
//             />
//           </Tooltip>
//         </Flex>
//       ) : (
//         <div></div>
//       )}
//     </>
//   );
// };

// export const LinkEmail = (props) => {
//   const { children, color } = props;

//   const [isCopied, setCopied] = useClipboard(children, {
//     successDuration: 1000,
//   });

//   const toast = useToast();
//   return (
//     <Flex
//       {...props}
//       display="inline"
//       alignItems="center"
//       justifyContent="space-between"
//       minWidth="180px"
//     >
//       <ChLink color={color} href={`mailto:${children}`}>
//         <EmailIcon mr={4} />
//         {children}
//       </ChLink>
//       <Tooltip
//         label={isCopied ? 'Copied' : 'copy to clipboard'}
//         aria-label="copy to clipboard"
//         placement="right"
//       >
//         <IconButton
//           m={0}
//           variant="none"
//           aria-label="copy to clipboard"
//           icon={<CopyIcon opacity="0.5" />}
//           onClick={() => {
//             setCopied();
//             return toast({
//               title: 'Copied to Clipboard',
//               description: `${children} copied to clipboard`,
//               status: 'info',
//               variant: 'top-accent',
//               duration: 2000,
//               isClosable: true,
//             });
//           }}
//         />
//       </Tooltip>
//     </Flex>
//   );
// };
