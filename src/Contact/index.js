import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Box, Heading, Flex, Stack, Text, Container } from '@chakra-ui/react';
import Lottie from 'react-lottie';
import animationData from './webDev.json'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

export default class Contact extends Component {

    render() {
        return (
            <Box w="100%" display="flex" justifyContent="center" h="100%"  p={[4,4,24]} bg="gray.100">
                <Container maxW="8xl">
                    <Flex w="100%" h="100%" flexDirection={["column-reverse", "column-reverse", "row"]} >
                        <Flex w="60%" flexDirection="column" justifyContent="center" alignItems={["center", "center", "baseline"]}>
                            <Box>
                                <Heading as="h2" mb={10} size="2xl"><Box as="span" color="#aa1f00">Get In</Box> Touch</Heading>
                            </Box>
                            <Stack spacing={4}>
                                <Stack spacing={1}>
                                    <Text fontWeight="bold" fontSize='lg'>EMAIL ADDRESS</Text>
                                    <Text ><a href="mailto:ravikancula@gmail.com">ravikancula@gmail.com</a></Text>
                                </Stack>
                                <Stack spacing={2}>
                                    <Text fontWeight="bold" fontSize='lg'>SOCIAL</Text>
                                    <Flex>
                                    <Box mr={4}>
                                            <a href="https://www.linkedin.com/in/ravikancula/"  target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon className="white" icon={faLinkedin} size="2x"/>
                                            </a>
                                    </Box> 
                                    <Box>
                                            <a href="https://github.com/rkiran16" target="_blank" rel="noopener noreferrer">
                                                <FontAwesomeIcon icon={faGithub} size="2x"/>
                                            </a>
                                    </Box>
                                </Flex>
                                </Stack>
                          </Stack>    
                        </Flex>
                        <Flex alignItems="center"> 
                             <Lottie options={defaultOptions} height={400}   width={400} />
                        </Flex>
                    </Flex>
                </Container>
            </Box>
        )
    }
}