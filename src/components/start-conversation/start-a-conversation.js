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
    console.log('next');
    if (current[0] !== steps.length - 1) {
      setCurrent((prev) => {
        return [prev[0] + 1, steps[prev[0] + 1]];
      });
    }
  };
  const handleBack = () => {
    console.log('back');
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
    setStore({
      ...store,
      ...data,
    });
    if (current[0] === steps.length - 1) {
      onSubmitAll();
    }
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
        <Box className="start-conversation">
          <Box>
            Step {current[0] + 1} of {steps.length}
          </Box>
          <Box height="100%">
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
                handleSubmitAll={onSubmitAll}
              />
            ) : (
              <div></div>
            )}
          </Box>

          <Flex>
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
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default StartAConversation;
