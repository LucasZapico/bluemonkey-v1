import { CopyIcon, EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import {
  Box,
  Center,
  Link,
  Flex,
  IconButton,
  Tooltip,
  useToast,
} from '@chakra-ui/react'
import React, { useState } from 'react'

import useClipboard from 'react-use-clipboard'


export const formatePhone = (phoneNumberString) => {
  const cleaned = `${phoneNumberString}`.replace(/\D/g, '')

  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`
  }
  return null
}

export const formatePhoneBot = (phoneNumberString) => {
  const cleaned = `${phoneNumberString}`.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return `${match[1]}-${match[2]}-${match[3]}`
  }
  return null
}

export const LinkOne = ({ children, content, icon, ...rest }) => (
  <Link {...rest}>
    {children || content}

    {icon}
  </Link>
)

export const BoxButton = ({ children, colorType = 'dark', ...rest }) => {
  return (
    <Link {...rest} className={`box-btn ${colorType}`} fontWeight="medium">
      <span className="wall back">
        <span className="supports top" />
        <span className="supports bottom" />
      </span>
      <span className="wall front" />
      <div className="text">{children}</div>
    </Link>
  )
}

export const LinkPhone = ({ children, ...rest }) => {
  const formatedPhone = formatePhone(children)
  const formatedPhoneBot = formatePhoneBot(children)
  const [isCopied, setCopied] = useClipboard(children, {
    successDuration: 1000,
  })
  const toast = useToast()

  return (
    <>
      {formatedPhone ? (
        <Flex
          
          display="inline"
          alignItems="center"
          justifyContent="space-between"
          minWidth="180px"
          wrap="nowrap"
        >
          <Link
          {...rest}
            fontWeight="semibold"
            transition="all 0.4s ease-in-out"
            href={`tel:+1${formatedPhoneBot}`}
          >
            <PhoneIcon />
            &nbsp;
            {formatedPhone}
          </Link>
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
                setCopied()
                return toast({
                  title: 'Copied to Clipboard',
                  description: `${children} copied to clipboard`,
                  status: 'info',
                  variant: 'top-accent',
                  duration: 2000,
                  isClosable: true,
                })
              }}
            />
          </Tooltip>
        </Flex>
      ) : (
        <div />
      )}
    </>
  )
}

export const LinkEmail = ({ children, ...rest }) => {
  const [isCopied, setCopied] = useClipboard(children, {
    successDuration: 1000,
  })

  const toast = useToast()
  return (
    <Flex
      display="inline"
      alignItems="center"
      justifyContent="space-between"
      minWidth="180px"
      wrap="nowrap"
    >
      <Link {...rest} transition="all 0.4s ease-in-out" href={`mailto:${children}`}>
        <EmailIcon />
        &nbsp;
        {children}
      </Link>
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
            setCopied()
            return toast({
              title: 'Copied to Clipboard',
              description: `${children} copied to clipboard`,
              status: 'info',
              variant: 'top-accent',
              duration: 2000,
              isClosable: true,
            })
          }}
        />
      </Tooltip>
    </Flex>
  )
}




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
        <Link href={href}>
          <Center>{children}</Center>
        </Link>
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