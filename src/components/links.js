import React from 'react';
import { Box } from '@chakra-ui/react';
import { Link } from 'gatsby';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import LongArrow from '../assets/long-arrow.svg';

export const LinkOne = (props) => {
  const { children, to = '', href = '', icon } = props;
  return (
    <Box {...props} fontWeight="bold" color="brand.four">
      {href !== '' ? (
        <a href={href}>{children}</a>
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
        <a href={href}>{children}</a>
      ) : (
        <Link to={to}>{children}</Link>
      )}
    </Box>
  );
};

export const LinkThree = ({ href, children }) => {
  return (
    <Link href={href} className="box-btn">
      <span className="wall back">
        <span className="supports top" />
        <span className="supports bottom" />
      </span>
      <span className="wall front" />
      <span className="text">{children}</span>
    </Link>
  );
};
