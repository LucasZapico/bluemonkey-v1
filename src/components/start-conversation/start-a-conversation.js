import React, { useState, useEffect } from 'react';
import { Box, Heading, Flex, Container } from '@chakra-ui/react';
import { BtnOne } from '../links';
import { useForm } from 'react-hook-form';
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';
import AddEmail from './add-email';
import AddName from './add-name';
import AddNotes from './add-notes';
import AddEnthusiasm from './add-enthusiasm';

const steps = ['email', 'name', 'notes', 'enthusiasm'];

const StartAConversation = () => {
  const [current, setCurrent] = useState([0, steps[0]]);
  const [store, setStore] = useState({});
  const handleNext = () => {
    if (current[0] !== steps.length - 1) {
      setCurrent((prev) => {
        return [prev[0] + 1, steps[prev[0] + 1]];
      });
    }
  };
  const handleBack = () => {
    if (current[0] !== 0) {
      setCurrent((prev) => {
        return [prev[0] - 1, steps[prev[0] - 1]];
      });
    }
  };

  useEffect(() => {
    console.log(`
    current: ${current}, 
    `);
    console.log('store:', store);
  });

  const onSubmit = (data) => {
    console.log('on submit ran', data);
    // setStore({
    //   ...store,
    //   data,
    // });
  };

  const onSubmitAll = () => {
    console.log('submit all', store);
  };

  useEffect(() => {
    console.log('store', store);
  }, [store]);

  return (
    <Box width="100%" py={20}>
      <Container maxW="container.xl">
        <Box>
          <Heading size="3xl" fontFamily="montas-semibold" mb={6}>
            Start A Conversation
          </Heading>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          flexDirection="column"
          height="350px"
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
            }}
            name="start-a-conversation"
          >
            <Box>
              Step {current[0] + 1} of {steps.length}
            </Box>
            <Box>
              {current[1] === 'email' ? (
                <AddEmail
                  onSubmit={onSubmit}
                  store={store}
                  handleNext={handleNext}
                />
              ) : (
                <div></div>
              )}
              {current[1] === 'name' ? (
                <AddName
                  onSubmit={onSubmit}
                  store={store}
                  handleNext={handleNext}
                  handleBack={handleBack}
                />
              ) : (
                <div></div>
              )}
              {current[1] === 'notes' ? (
                <AddNotes
                  onSubmit={onSubmit}
                  store={store}
                  handleNext={handleNext}
                  handleBack={handleBack}
                />
              ) : (
                <div></div>
              )}
              {current[1] === 'enthusiasm' ? (
                <AddEnthusiasm
                  onSubmit={onSubmit}
                  store={store}
                  handleBack={handleBack}
                  handleSubmitAll={handleSubmitAll}
                />
              ) : (
                <div></div>
              )}
            </Box>

            <Flex>
              {current[0] !== 0 ? (
                <BtnOne
                  colortype="dark"
                  mr={4}
                  onClick={() => handleBack()}
                  mt={6}
                  width="200px"
                >
                  Back
                  <ArrowBackIcon />
                </BtnOne>
              ) : (
                <div></div>
              )}
              {/* {current[0] !== steps.length - 1 ? (
                <BtnOne
                  colortype="dark"
                  mt={6}
                  width="200px"
                  onKeyPress={(e) => {
                    if (e.keyCode === 13) {
                      handleNext();
                    }
                  }}
                  onClick={() => handleNext()}
                >
                  Next
                  <ArrowForwardIcon />
                </BtnOne>
              ) : (
                <div></div>
              )} */}

              {current[0] === steps.length - 1 ? (
                <BtnOne
                  colortype="dark"
                  onKeyPress={(e) => {
                    if (e.keyCode === 13) {
                      onSubmitAll();
                    }
                  }}
                  mt={6}
                  width="200px"
                >
                  Submit
                  <ArrowForwardIcon />
                </BtnOne>
              ) : (
                <div></div>
              )}
            </Flex>
          </div>
        </Box>
      </Container>
    </Box>
  );
};

export default StartAConversation;