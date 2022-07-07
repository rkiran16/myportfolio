import React from 'react';
import { Heading, Container, Box, Divider, Flex, Center, Spacer, Text,Link } from '@chakra-ui/react';
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
                            <Link size='md' mb={12} height='60px' bg="white" 
                                borderRadius="34px"
                                p={4}
                                target="_blank"
                                href="https://ogimg.s3.us-east-1.amazonaws.com/Resume.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMSJHMEUCIDJtn4RNwkfBPYkRVZhbLYZc83kREB6MSRgGPvgrom%2F0AiEA344CHOZ39eH2lvt5vmMGu%2Bk1JO%2FPV9z7rxT%2FSxLffv0q8QII3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARABGgwwNTE0MjY1OTM1MDkiDFPnbUUjK6K75S%2BeoirFApkl50c9wuBeRc0vKzfv9kUiLRvm6W9baXHm8fnogkE%2FQolz%2FHag3m2FWZhm6e8rxc13d%2FldBI8VBRcW4%2Fy5%2Bi4ABa1n2zTV8y7tt14wgB2IKUoOXfluiCuYsG%2FEkQ05HzHwR1TZ%2FlWIVTX7GN3yr9qiwJdzjE0KCEN7VLz6YTg7YkYOZiVlmC9drX4HqvV8QWDf3%2BfnTY9acqbVeieZGsITJ3%2F%2B9kJNnnxfj%2BotMXP5Ce%2FEq1YWoADw%2FgAZRHwE9woMF9%2FFf37h2iisk8lbL02jthrXessm3B4NRnCnUKPZKLdYRtswVVlEBrWZuraPHOdiZQyrvfkMmEecenzMQGjfOH2qujf79dSkKtMgXJVTMqFW0dBQAwvBvDt9AhOPFraOEikEWZB%2BC1bXIhCUfBhYo3t0ygyVWK4qz%2BHflNWM9Nw9I%2BwwsIWdlgY6swKIKh6O8oRYK%2FBxOY7jY5GIzgQHUpXnkvYKJDglwclyMMiyOzAfvQT%2F%2BL%2BG%2Be9dfDuzLlOppfUVi6abIDf26gp2i6Bvjoi3j2swY1rYSeS9bbeyw3sCuitDiSoCc%2F%2FRWUoGbFh0%2BaQvDPWprSIEjKUsfTxOYh7lx%2BnSaEGxRj5ci8G%2FSET5EuuZ2Z1Nx0zbwdCukXqeMN79KKkR2CBMLSglreTIbBx75utYpHRcnKykyHgRckyGEmgqbhxeT8cRRtBvpgI1fCwvqYbgbqN99WTfYhDL93cic1GI89WHkDBL2CQWe%2FTh2AF24O6gYztYPUAwuw7knyCvmX%2FTacWD1enduvbN%2BlcE9IEE3RHHwPDjOLr%2FIqKVwzblDf04xWBsl85lOjigLGR%2FuiAQkMiZbhmKLorJ&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220707T233030Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQX6KDRLSXFBKGS7S%2F20220707%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8e15368b41794299635fa18da40204cab873d58197369944b68244b591da4ca9"
                                color="#aa1f00" width='200px' border='4px'
                                borderColor='#aa1f00'>
                                DOWNLOAD RESUME
                            </Link>
                        </Box>
                    </Flex>
                </Container>
            </Box>
        )
    }
}