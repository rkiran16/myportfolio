import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import "./intro.scss";
import { Box, Image, Text, Stack,Flex,Heading,Button,Hide } from '@chakra-ui/react';
import ProfilePic from "./profile.jpg";
import Logo from "./logo.png";

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 75 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #000}";
    document.body.appendChild(css);
};

const Intro = () => {
    return (
        <Flex w="100%" h="100%" flexDirection={['column', 'column', 'row']}>
             <Flex w={["100%", "100%","30%"]} 
             minH="25%" flexDirection={['row', 'row','column']} 
             justifyContent={["center","center","space-between"]} bg=" #aa1f00" p={[4,8]}>
                 <Box>
                    <Image src={Logo} boxSize='150px'/>
                 </Box>   
                 <Hide below="md">
                    <Box w="100%">
                        <Stack spacing={4}>
                            <Stack spacing={1}>
                                <Text color="white" fontWeight="bold" fontSize='lg'>EMAIL ADDRESS</Text>
                                <Text color="gray.200"><a href="mailto:ravikancula@gmail.com">ravikancula@gmail.com</a></Text>
                            </Stack>
                            <Stack spacing={2}>
                                <Text color="white" fontWeight="bold" fontSize='lg'>SOCIAL</Text>
                                <Flex>
                                <Box mr={4} color='gray.200'>
                                        <a href="https://www.linkedin.com/in/ravikancula/"  target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon className="white" icon={faLinkedin} size="2x"/>
                                        </a>
                                </Box> 
                                <Box color="gray.200">
                                        <a href="https://github.com/rkiran16" target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={faGithub} size="2x"/>
                                        </a>
                                </Box>
                            </Flex>
                            </Stack>
                        </Stack>
                    </Box>  
                 </Hide>
             </Flex>
             <Flex w={["100%", "100%","70%"]} p={4} maxW="6xl" 
                   alignItems="center" flexDirection={["column", "column", "row"]}
                   bg="white">
                 <Box boxShadow='dark-lg' className="profile-pic">
                    <Image objectFit='cover'  boxSize='lg' src={ProfilePic} />
                 </Box>
                 <Box p={[4,10]}>
                        <Box w="20" mb={3} border='4px' borderColor='#aa1f00'/>
                        <Heading as="h1" size="2xl" mb={4}>RAVI KANCULAKUNTA</Heading>
                        <Heading as="h2" size="md" mb={4}>
                            <a href="/" class="typewrite" data-period="2000" data-type='[ "IM A FRONT END DEVELOPER", "BASE IN SAN FRANCISCO" ]'>
                                <span class="wrap"></span>
                            </a>
                        </Heading>
                        <Text fontSize="sm" maxW="lg" mb={6} noOfLines={6}>
                            I enjoy creating smart user interface and imagine useful interaction, developing rich web experiences & web applications.
                            I am interested in building applications from ground up that are pixel-perfect, intuitive, dynamic experiences .
                        </Text>
                        <Button size='md' height='60px' bg="white" 
                                borderRadius="34px"
                                p={4}
                                color="#aa1f00" width='200px' border='4px'
                                borderColor='#aa1f00'>
                            MY RESUME
                        </Button>
                 </Box>
             </Flex>
        </Flex>
    )
}

export default Intro;