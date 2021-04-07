import React, { useLayoutEffect, useRef, useState } from 'react';
import { useSpring, animated as a } from 'react-spring';

const ScrollAnimation = ({ children, props }) => {
  const [show, setShow] = useState(false);
  const action = useSpring({
    opacity: show ? 1 : 0,
    transform: show ? 'scale3d(1, 1)' : 'scale3d(0.3,0.3)',
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
      console.log('load scroll post', scrollPosition);
      if (itemPostion < scrollPosition - 100) {
        setShow((prev) => true);
      }
    };
    const onLoad = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      console.log('load scroll post', scrollPosition);
    };
    window.addEventListener('load', onLoad);

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <a.div style={action} ref={ourRef}>
      {/* <div
        className="test"
        style={{ width: '100%', height: '2px', backgroundColor: 'red' }}
      /> */}
      {children}
    </a.div>
  );
};

export default ScrollAnimation;
