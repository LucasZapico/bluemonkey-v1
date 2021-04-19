import React, { useState, useEffect, useRef } from 'react';
import Img from 'gatsby-image';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { useSpring, animated as a } from 'react-spring';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons';

const SliderOne = ({ slides }) => {
  const slideContainer = useRef(null);
  const sliderContainer = useRef(null);
  const [slidesLen, setSlidesLen] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [current, setCurrent] = useState(1);
  const [props, set] = useSpring(() => ({
    transform: 'translateX(0px)',
  }));
  // passable element for custom button
  const config = {
    button: true,
    draggable: true,
    interval: {
      hasInterval: false,
      period: 1000,
    },
  };

  useEffect(() => {
    if (slideContainer.current) {
      setSlidesLen(slideContainer.current.children.length);
      setSlideWidth(sliderContainer.current.clientWidth);
    }
    console.log(`
    INIT
    slide leng: ${slidesLen}
    currnet: ${current}
    moveby: ${current * slideWidth}
    sliderWidth: ${slideWidth}
  `);
  }, [slideWidth, slidesLen]);

  useEffect(() => {
    console.log(`
    From transform
    slide leng: ${slidesLen}
    currnet: ${current}
    moveby: ${current * slideWidth}
    sliderWidth: ${slideWidth}
  `);
  }, [current, setCurrent]);

  const handleBack = () => {
    console.log('current in back', current);
    if (current === 1) {
      set({ transform: `translateX(-${slideWidth * (slidesLen - 1)}px)` });
      console.log('slides Len', slidesLen);
      setCurrent((prev) => {
        return slidesLen;
      });
    } else {
      console.log('back by one ', current - 1);
      set({ transform: `translateX(-${slideWidth * (current - 2)}px)` });

      setCurrent((prev) => {
        return prev - 1;
      });
    }
  };
  const handleForward = () => {
    console.log('current in forward', current);
    if (current > slidesLen - 1) {
      set({ transform: `translateX(0px)` });
      setCurrent((prev) => {
        return 1;
      });
    } else {
      console.log('forward', slideWidth * current);
      set({ transform: `translateX(-${slideWidth * current}px)` });
      setCurrent((prev) => {
        return prev + 1;
      });
    }
  };

  return (
    <Box ref={sliderContainer} overflow="hidden">
      <a.div
        style={{
          ...props,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          position: 'relative',
        }}
        ref={slideContainer}
      >
        {slideWidth &&
          slides.map((slide, i) => (
            <div
              style={{
                height: '400px',
                minWidth: slideWidth,
                flexBasis: slideWidth,
              }}
              key={slide.node.id}
            >
              <Img
                fit="cover"
                width={slideWidth}
                fluid={slide.node.childImageSharp.fluid}
              />
            </div>
          ))}
      </a.div>
      {config.button && slideContainer.current ? (
        <Flex align="flex-end" position="relative">
          <Heading
            as="h6"
            opacity=".6"
            size="3xl"
            fontFamily="montas-semibold"
            position="absolute"
          >
            {current}
          </Heading>
          <ArrowLeftIcon w={6} h={6} ml={6} onClick={() => handleBack()} />
          <ArrowRightIcon w={6} h={6} ml={6} onClick={() => handleForward()} />
        </Flex>
      ) : (
        <div />
      )}
    </Box>
  );
};

export default SliderOne;
