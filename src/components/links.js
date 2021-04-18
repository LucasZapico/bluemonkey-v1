import React, { useState } from 'react';
import {
  Box,
  IconButton,
  useToast,
  Tooltip,
  Button,
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

export const LinkOne = (props) => {
  const { children, to = '', href = '', icon } = props;
  return (
    <Box {...props} fontWeight="bold" color="brand.four">
      {href !== '' ? (
        <ChLink href={href}>{children}</ChLink>
      ) : (
        <Link to={to}>
          {children}
          {}
          <ArrowForwardIcon />
        </Link>
      )}
    </Box>
  );
};

export const LinkTwo = (props) => {
  const { children, to = '', href = '', icon } = props;
  return (
    <Box fontWeight="bold" color="brand.four">
      {href !== '' ? (
        <ChLink href={href}>{children}</ChLink>
      ) : (
        <Link to={to}>{children}</Link>
      )}
    </Box>
  );
};

export const LinkThree = ({ href = '', children, to = '' }) => {
  return (
    <>
      {href !== '' ? (
        <ChLink href={href} className="box-btn">
          <span className="wall back">
            <span className="supports top" />
            <span className="supports bottom" />
          </span>
          <span className="wall front" />
          <span className="text">{children}</span>
        </ChLink>
      ) : (
        <Link to={to} className="box-btn">
          <span className="wall back">
            <span className="supports top" />
            <span className="supports bottom" />
          </span>
          <span className="wall front" />
          <span className="text">{children}</span>
        </Link>
      )}
    </>
  );
};

export const LinkPhone = (props) => {
  const { children, color } = props;
  const formatedPhone = formatePhone(children);
  const formatedPhoneBot = formatePhoneBot(children);
  const [isCopied, setCopied] = useClipboard(children, {
    successDuration: 1000,
  });
  console.log(`phone, 
  formatedphone: ${formatedPhone}
  formatedphonebot: ${formatedPhoneBot}
    `);
  const toast = useToast();

  return (
    <Flex
      {...props}
      display="inline"
      alignItems="center"
      justifyContent="space-between"
      minWidth="180px"
    >
      <ChLink
        color={color}
        fontWeight="semibold"
        mr={4}
        href={`tel:+1${formatedPhoneBot}`}
      >
        <PhoneIcon mr={4} />
        {formatedPhone}
      </ChLink>
      <Tooltip
        label={isCopied ? 'Copied' : 'copy to clipboard'}
        aria-label="copy to clipboard"
        placement="right"
      >
        <IconButton
          variant="none"
          aria-label="copy to clipboard"
          icon={<CopyIcon opacity="0.5" />}
          onClick={() => {
            setCopied();
            return toast({
              title: 'Copied to Clipboard',
              description: `${children} copied to clipboard`,
              status: 'info',
              variant: 'top-accent',
              duration: 2000,
              isClosable: true,
            });
          }}
        />
      </Tooltip>
    </Flex>
  );
};

export const LinkEmail = (props) => {
  const { children, color } = props;

  const [isCopied, setCopied] = useClipboard(children, {
    successDuration: 1000,
  });

  const toast = useToast();
  return (
    <Flex
      {...props}
      display="inline"
      alignItems="center"
      justifyContent="space-between"
      minWidth="180px"
    >
      <ChLink
        color={color}
        fontWeight="semibold"
        mr={4}
        href={`mailto:${children}`}
      >
        <EmailIcon mr={4} />
        {children}
      </ChLink>
      <Tooltip
        label={isCopied ? 'Copied' : 'copy to clipboard'}
        aria-label="copy to clipboard"
        placement="right"
      >
        <IconButton
          variant="none"
          aria-label="copy to clipboard"
          icon={<CopyIcon opacity="0.5" />}
          onClick={() => {
            setCopied();
            return toast({
              title: 'Copied to Clipboard',
              description: `${children} copied to clipboard`,
              status: 'info',
              variant: 'top-accent',
              duration: 2000,
              isClosable: true,
            });
          }}
        />
      </Tooltip>
    </Flex>
  );
};
