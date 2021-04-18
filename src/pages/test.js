import React, { useEffect, useRef } from 'react';
import { useSpring, animated as a } from 'react-spring';
import { StarIcon } from '@chakra-ui/icons';
import useClipboard from 'react-use-clipboard';

const calc = (o) => `translateY(${o * 0.3}px)`;

const container = {
  position: 'relative',
  height: '500px',
  marginTop: '200px',
  backgroundColor: '#6b7b94',
};

const para = {
  width: '100vw',
  position: 'absolute',
  backgroundColor: '#f6a091',
};

const icon = { fontSize: '5rem' };

export default function testpage() {
  const ref = useRef();
  const [{ offset }, set] = useSpring(() => ({ offset: 0 }));

  const handleScroll = () => {
    const posY = ref.current.getBoundingClientRect().top;
    const offset = window.pageYOffset - posY;
    console.log(offset);
    set({ offset });
  };
  const [isCopied, setCopied] = useClipboard('Text to copy', {
    // `isCopied` will go back to `false` after 1000ms.
    successDuration: 1000,
  });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return (
    <div className="App" style={{ textAlign: 'center', height: '200vh' }}>
      <h1>Hello CodeSandbox</h1>
      <button onClick={setCopied}>
        Was it copied? {isCopied ? 'Yes! 👍' : 'Nope! 👎'}
      </button>
      <div style={container} ref={ref}>
        <a.div style={{ ...para, transform: offset.to(calc) }}>
          <StarIcon style={icon} />
        </a.div>
      </div>
    </div>
  );
}
