
import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import { animated, config, useSpring } from 'react-spring';
import { Box } from '@chakra-ui/react';

import { useScroll } from '../../hooks';

export const AnimatedFadeUpBox = ({
  showOffset = 100,
  children,
  ...rest
}) => {
  const [show, setShow] = useState(false);
  const action = useSpring({
    opacity: show ? 1 : 0,
    transform: show ? 'scale3d(1, 1)' : 'scale3d(0.3,0.3)',
    config: config.slow,
  });

  const ourRef = useRef(null);

  useLayoutEffect(() => {
    const scrollPositionInit = window.scrollY + window.innerHeight;
    const topPosition = (item) => item.getBoundingClientRect().top;
    const itemPostion = topPosition(ourRef.current);

    if (scrollPositionInit > itemPostion + 100) {
      setShow((prev) => true);
    }

    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;

      console.log('test', itemPostion, scrollPosition);
      if (itemPostion < scrollPosition - showOffset) {
        console.log('show', ourRef);
        setShow((prev) => true);
      }
    };
    const onLoad = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
    };
    window.addEventListener('load', onLoad);

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const AnimatedBox = animated(Box);
  return (
    <AnimatedBox {...rest} style={action} ref={ourRef}>
      {children}
    </AnimatedBox>
  );
};

// export const AnimatedScrollBox = ({
//   showOffset = 100,
//   children,
//   ...rest
// }) => {
//   const [show, setShow] = useState(false);
//   const action = useSpring({
//     opacity: show ? 1 : 0,
//     transform: show ? 'scale3d(1, 1)' : 'scale3d(0.3,0.3)',
//     config: config.slow,
//   });

//   const ourRef = useRef(null);

//   useLayoutEffect(() => {
//     const scrollPositionInit = window.scrollY + window.innerHeight;
//     const topPosition = (item) => item.getBoundingClientRect().top;
//     const itemPostion = topPosition(ourRef.current);

//     if (scrollPositionInit > itemPostion + 100) {
//       setShow((prev) => true);
//     }

//     const onScroll = () => {
//       const scrollPosition = window.scrollY + window.innerHeight;

//       console.log('test', itemPostion, scrollPosition);
//       if (itemPostion < scrollPosition - showOffset) {
//         console.log('show', ourRef);
//         setShow((prev) => true);
//       }
//     };
//     const onLoad = () => {
//       const scrollPosition = window.scrollY + window.innerHeight;
//     };
//     window.addEventListener('load', onLoad);

//     window.addEventListener('scroll', onScroll);
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);





export const ScrollAniMonkey = ({ children, props, inOn = 0, outOn = 0 }) => {
  const [show, setShow] = useState(false);
  const action = useSpring({
    opacity: show ? 1 : 0,
  });

  const ourRef = useRef(null);

  const onScroll = () => {
    const topPosition = (item) => item?.getBoundingClientRect().top;
    const itemPosition = topPosition(ourRef.current);
    const offset = window.pageYOffset - itemPosition;

    const scrollPosition = window.scrollY + window.innerHeight;
    if (offset > inOn && offset < outOn) {
      setShow((prev) => true);
    } else if (offset > outOn) {
      setShow((prev) => false);
    } else {
      setShow((prev) => false);
    }
  };

  useEffect(() => {
    const scrollPositionInit = window.scrollY + window.innerHeight;
    const onLoad = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
    };
    window.addEventListener('load', onLoad);
  }, []);
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  });
  const AnimatedBox = animated(Box);
  return (
    <AnimatedBox style={action} ref={ourRef}>
      {children}
    </AnimatedBox>
  );
};
