import React from 'react';
import { Heading, Container, Box, Divider, Flex, Center, Spacer, Text, Button } from '@chakra-ui/react';
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
  } from '@chakra-ui/react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBriefcase} from '@fortawesome/free-solid-svg-icons'
import {faReact, faCss3, faHtml5, faJs, faServicestack } from "@fortawesome/free-brands-svg-icons";

const style = { background: '#F7FAFC', color: 'BlackAlpha 800', border: '1px solid #aa1f00' };
const iconStyle = { background: '#F7FAFC', color: '#aa1f00'}
const arrowStyle = { borderRight: '7px solid #aa1f00' };

const TimeLineElement = ({children,date, icon}) => {
    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={style} contentArrowStyle={arrowStyle}
            date={date} iconStyle={iconStyle}
            icon={icon} >
                {children} 
        </VerticalTimelineElement>
    )
}

const Skill = ({skill,percentage,icon}) => {
    return (
        <Box mb={6}>
            <Flex>
                <Text>{skill}</Text>
                <Spacer/>
                <Text>{`${percentage}%`}</Text>
            </Flex>  
            <Slider aria-label='slider-ex-2'  defaultValue={percentage}>
                <SliderTrack>
                    <SliderFilledTrack bg="#aa1f00" />
                </SliderTrack>
                <SliderThumb boxSize={8}>
                  <Box color="#aa1f00">{icon}</Box>
                </SliderThumb>
            </Slider>
      </Box> 
    )
}

export default class Resume extends React.Component {
    render() {
        return(
            <Box w='100%' p={[4,8]} bg="gray.50">
                <Center flexDirection="column">
                    <Heading as="h2" mb={12} size="2xl"><Box as="span" color="#aa1f00">My</Box> Resume</Heading>
                    <Box w="10%" mb={3} border='2px' borderColor='#aa1f00'/>
                </Center>
                <Container maxW='8xl' mt={12}>
                    <Flex flexDirection={["column-reverse", "column-reverse", "row"]}>
                        <Box h="100%" width={["100%", "100%", "50%"]}>
                            <Heading as="h3" mb={12} size="lg">Experience</Heading>
                            <VerticalTimeline layout="1-column-left" lineColor="#aa1f00">
                                <TimeLineElement date="2017 - Present" icon={<FontAwesomeIcon icon={faBriefcase}/>}>
                                    <Box>
                                        <Heading as="h3" size="md">Sr Application Developer @ IBM IX</Heading>
                                        <Heading as="h4" size="sm">San Francisco, CA</Heading>
                                        <Divider height="10px"/>
                                        <p>React, React Native,Node.js,Redux, Vanilla JS , AEM , Sketch, Invision.</p>
                                    </Box>
                                </TimeLineElement>
                                <TimeLineElement date="2014 - 2017" icon={<FontAwesomeIcon icon={faBriefcase}/>}>
                                    <Box>
                                        <Heading as="h3" size="md">Front End Developer @ Resource Ammirati</Heading>
                                        <Heading as="h4" size="sm">Columbus, OH</Heading>
                                        <Divider height="10px"/>
                                        <p>React, HTML, SCSS, Vanilla JS, Atomic design Methodology, Sketch, Adobe PhotoShop.</p>
                                    </Box>
                                </TimeLineElement>
                                <TimeLineElement date="2012 - 2014" icon={<FontAwesomeIcon icon={faBriefcase}/>}>
                                    <Box>
                                        <Heading as="h3" size="md">Web Developer @ ICC</Heading>
                                        <Heading as="h4" size="sm">Columbus, OH</Heading>
                                        <Divider height="10px"/>
                                        <p>Flex, As3, Robotlegs, HTML, SCSS, Vanilla JS.</p>
                                    </Box>
                                </TimeLineElement>
                                <TimeLineElement date="2010-2012" icon={<FontAwesomeIcon icon={faBriefcase}/>}>
                                    <Box>
                                        <Heading as="h3" size="md">Web Developer @ Smart Solutions</Heading>
                                        <Heading as="h4" size="sm">San Francisco, CA</Heading>
                                        <Divider height="10px"/>
                                        <p>Flex, As3, Cairnogram.</p>
                                    </Box>
                                </TimeLineElement>
                            </VerticalTimeline>
                        </Box>
                        <Box w={["100%", "100%", "80%"]} ml={[0,0,24]}>
                            <Heading as="h3" mb={12} size="lg">My Work Skills</Heading>
                            <Skill skill="HTML" percentage="90" icon={<FontAwesomeIcon icon={faHtml5} size="1x" />} />
                            <Skill skill="Javascript" percentage="70" icon={<FontAwesomeIcon icon={faJs} size="1x" />} />
                            <Skill skill="CSS" percentage="80" icon={<FontAwesomeIcon icon={faCss3} size="1x" />} />
                            <Skill skill="React" percentage="75" icon={<FontAwesomeIcon icon={faReact} size="1x" />} />
                            <Skill skill="Server Side" percentage="58" icon={<FontAwesomeIcon icon={faServicestack} size="1x" />} />
                            <Button size='md' mb={12} height='60px' bg="white" 
                                borderRadius="34px"
                                p={4}
                                color="#aa1f00" width='200px' border='4px'
                                borderColor='#aa1f00'>
                                DOWNLOAD RESUME
                            </Button>
                        </Box>
                    </Flex>
                </Container>
            </Box>
        )
    }
}