import React from 'react';
import { Box, Center, Heading } from "@chakra-ui/react";

export default class Work extends React.Component {
    render() {
        return (
            <Box id="work" w='100%' p={[4,8]} h="100%" bg="white">
                <Center flexDirection="column">
                    <Heading as="h2" mb={12} size="2xl">RECENT <Box as="span" color="#aa1f00">WORK</Box></Heading>
                    <Box w="10%" mb={3} border='2px' borderColor='#aa1f00'/>
                </Center>
            </Box>
        )
    }
};