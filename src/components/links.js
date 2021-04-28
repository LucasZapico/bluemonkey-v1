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

export const LinkOne = (props) => {
  const { color, children, to = '', href = '', icon } = props;
  return (
    <Box color={color}>
      {href !== '' ? (
        <ChLink color={color} href={href}>
          {children}
        </ChLink>
      ) : (
        <Link to={to}>{children}</Link>
      )}
    </Box>
  );
};

export const LinkTwo = (props) => {
  const { children, to = '', href = '', icon, colortype = 'light' } = props;
  return (
    <Box
      {...props}
      color={colortype == 'light' ? 'brand.one' : 'brand.five'}
      border="2px"
      borderColor={colortype == 'light' ? 'brand.one' : 'brand.five'}
      py={4}
      px={4}
    >
      {href !== '' ? (
        <ChLink href={href}>
          <Center>{children}</Center>
        </ChLink>
      ) : (
        <Link to={to}>
          <Center>{children}</Center>
        </Link>
      )}
    </Box>
  );
};

export const BtnOne = (props) => {
  const {
    children,
    to = '',
    href = '',
    icon,
    colorType = 'light',
    IsDisabled,
  } = props;

  return (
    <Box
      minWidth="200px"
      opacity={IsDisabled ? 0.3 : 1}
      cursor={IsDisabled ? 'not-allowed' : 'pointer'}
      color={colorType == 'light' ? 'brand.one' : 'brand.five'}
      border="2px"
      borderColor={colorType == 'light' ? 'brand.one' : 'brand.five'}
      py={4}
      px={4}
      as="button"
    >
      <Center>{children}</Center>
    </Box>
  );
};

export const LinkThree = ({
  href = '',
  children,
  to = '',
  colortype = 'dark',
}) => {
  return (
    <>
      {href !== '' ? (
        <ChLink href={href} className={`box-btn ${colortype}`}>
          <span className="wall back">
            <span className="supports top" />
            <span className="supports bottom" />
          </span>
          <span className="wall front" />
          <div className="text">{children}</div>
        </ChLink>
      ) : (
        <Link to={to} className={`box-btn ${colortype}`}>
          <span className="wall back">
            <span className="supports top" />
            <span className="supports bottom" />
          </span>
          <span className="wall front" />
          <div className="text">{children}</div>
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
  const toast = useToast();

  return (
    <>
      {formatedPhone ? (
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
              m={0}
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
      ) : (
        <div></div>
      )}
    </>
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
      <ChLink color={color} href={`mailto:${children}`}>
        <EmailIcon mr={4} />
        {children}
      </ChLink>
      <Tooltip
        label={isCopied ? 'Copied' : 'copy to clipboard'}
        aria-label="copy to clipboard"
        placement="right"
      >
        <IconButton
          m={0}
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
