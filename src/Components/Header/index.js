import React from 'react';
import { Container, Box, Image } from '@chakra-ui/react';
// images
import Logo from './logo.png';

const Header = () => {
	return (
			<Container maxW='8xl'>
				<Box p={3} display="flex">
					<Image  boxSize='50px' objectFit='cover' src={Logo} alt="Portfolio Logo"/>
				</Box>
			</Container>
	)
}

export default Header;