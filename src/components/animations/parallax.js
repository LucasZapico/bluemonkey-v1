import { useRef, useEffect } from "react";
import { useSpring, animated } from "react-spring";



const calcOne = (o) => `translateY(${o * (0.5 * +2)}px)`;
const calcTwo = (o) => `translateY(${o * (0.5 * -3)}px)`;

const calcBgOne = (o) => `translateY(${o * (0.5 * -1)}px)`;
const calcBgTwo = (o) => `translateY(${o * (0.3 * -1)}px)`;
const calcBgThree = (o) => `translateY(${o * (0.2 * -1)}px)`;
const calcBgFour = (o) => `translateY(${o * (0.1 * -1)}px)`;

const Parallax = () => {
  const ref = useRef();
  const mtRef = useRef();
  const [{ offset }, set] = useSpring(() => ({ offset: 10 }));

  const handleScroll = () => {
    const posY = ref.current.getBoundingClientRect().top;
    const offset = window.pageYOffset - posY;
    console.log(offset);
    set({ offset });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
const AnimatedBox = animated(Box)

  return (
    <Box >
      
        <Box ref={ref}>
          <AnimatedBox style={{ transform: offset.interpolate(calcBgFour) }}>
            blablba
          </AnimatedBox>
          {/* <AnimatedBox style={{ transform: offset.interpolate(calcBgThree) }}>
            <img style={bgImg} src={bgThree} />
          </AnimatedBox>
           */}
        </Box>
      
    </Box>
  );
};
export default Parallax;
