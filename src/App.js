import * as React from 'react'
import Contact from "./Contact";
import Intro from "./Intro";
import Resume from "./Resume";
import Work from "./Work";
import ReactFullpage from '@fullpage/react-fullpage';

const App = () => (
    <ReactFullpage
      //fullpage options
      licenseKey = {null}
      navigation={true}
      anchors={['intro', 'resume', 'work', 'contact']}
      scrollingSpeed = {1000} /* Options here */
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section"><Intro /></div>
            <div className="section"><Resume /></div>
            <div className="section"><Work /></div>
            <div className="section"><Contact /></div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );

  export default App;