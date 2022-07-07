import React, { Component, Fragment } from 'react';
import { Box } from '@chakra-ui/react';
import Lottie from 'react-lottie'
import animationData from './webDev.json'
import  './lottie.scss'

class UncontrolledLottie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        }
    }

    componentDidMount() {
        this.timerHandle = setTimeout(() => this.setState({ loading: false }), 5500);
    }

    componentWillUnmount(){
        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
            this.timerHandle = 0;
        }
    }

    render(){
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };

        return(
            <Fragment>
                { this.state.loading && <Box bgGradient="linear(to-r, orange.600, #aa1f00)" className="lottieWrapper">
                    <Lottie options={defaultOptions}
                            height={400}
                            width={400}
                    />
                </Box> }
            </Fragment>
        )
    }
}

export default UncontrolledLottie;