import React from 'react';
import { Flex, Heading, Container,Image, Box } from "@chakra-ui/react";
import Profile from "./avatar-2.jpg";

export default class About extends React.Component {
    render() {
        return (
            <Container maxW="7xl" p={[4,8]} border="1px">
                <Heading>About Me</Heading>
                <Flex>
                    <Box>
                        <Image objectFit='cover' src={Profile} boxSize="md" />
                    </Box>
                </Flex>
            </Container>
        )
    }
};