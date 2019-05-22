import React from 'react';
import './App.css';
import SideProject from './SideProject.js';

function App() {




  return (
    <div className="App">

      <div className="intro">
        <div className="textOverPic">
        </div>

        <div className="introText">
          <p id="introText1">
            Hey, <br></br>
            Good to see you here.<br></br>
            This is Chenlan or Ellen.<br></br>
            A freshman from NYUSH.<br></br>
            Learning website creating. <br></br>
          </p>
          <p id="introText2">Creator | Gastronome | DayDreamer</p>
        </div>

        <img id="introPic" src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/bd741178882377.5cb314eca99a5.jpg"></img>
      </div>

{/* ///////////////////////////////// */}

      <div className="sideProject">
        <div className="left1">
          <div className="textBackground1">
          </div>

          <div className="sideProjectText">
            <p className="projectTitle">Title</p>
            <div className="sideProjectExp">
            Yes, the name of this side project is Title
            (Not because I'm too lazy to give it a name). Nowadays people 
            are busy with labeling others with some definitions. 
            These tagging words are often libelous and harmful. Also, 
            fashion brands are keen on making box pattern shirts (like 
            what Supreme did first). By getting inspiration from fashion 
            trends and Barbara Kruger, an American conceptual artist and 
            collagist, I want to create an application both artistic and 
            a little bit ironic to show my kind of 'disrespect' for both 
            the tagging trend in society and the widespread box fashion 
            trend. <br></br><br></br>
            In this application, users can compose titles and subtitles to a 
            image. By dragging and dropping the titles into the picture,
            a new image with titles will be created. Users can then save this
            'personal customized' image.<br></br><br></br>
            After introducing my project and my research process,
            I will then focus on my working process. The paper prototype 
            shows great difference with the final demo of my project. At 
            the very beginning I want to create a kind of social media 
            where user can post their photo with tags. I had not done any 
            research and did not have any thought of making something 
            ironic until I talked with Cindy and done research about 
            Kruger. Finally I decided to make a kind of tagging 'game'.
            I want to thank everyone in the IMA lab who helped me a lot, no matter by  
            technical instruction or ideal inspiration. From a complicated 
            version to the final simple pattern, my idea and thoughts on 
            application design changed a lot, just as the contradiction. 
            between my prototype and the final demo.<br></br><br></br>
            In the future, I want to expand this tagging game to a public
            platform where users can upload their own photo (maybe anonymously)
            , as a combination to my paper prototype. By the same time, I don't think
            my current project can express a satirical feeling towards current trend of
            titling and tagging, so I will keep working on this and make it
            clearer and more interesting.

            </div>
          </div>
        </div>

        <div className="right1">
          <div className="prototype1">
            <p className="paperPrototype">Paper Prototype</p>
            <img className="paperProtoImg" src="https://wx3.sinaimg.cn/mw1024/6e88b3fcgy1g3ad1rmwmxj22io19caph.jpg"></img>
          </div>

          <div className="sideProjectLink">
            <p className="paperPrototype">Click it and Try?</p>
            <a href="https://title-sideproject1.herokuapp.com/">
              <img className="sideProjectLink" src="https://wx1.sinaimg.cn/mw690/6e88b3fcgy1g3ae94evd4j21z40wuhdt.jpg"></img>
            </a>
          </div>
        </div>
      </div>

{/* /////////////////////////// */}
      <div className="groupProject">
        <div className="left2">
          <div className="textBackground2">
          </div>

          <div className="groupProjectText">
            <p className="groupTitle">P+R</p>
            <div className="groupProjectExp">
            Our group chose "Technology+Commerce" as our topic and built a WeChat mini-program
            named P+R (representing producers and retailers) which offers a platform to narrow the distance between producers and retailers.
            In this mini-program, retailers can get information about current trend and communicate
            directly with producers to either ask questions before making payment or give feedback
            after purchasing.<br></br>
            <br></br>
            By doing research, we found out that now it is easy for consumers to communicate with retailers
            but difficult for retailers to find proper producers. At the same time, WeChat is greatly
            needed in building relationship with each other now, but many private information would
            be known if one only need to keep the relationship on a business level. We discovered These
            incongruities and started to create a third-party board where businessmen can easily find
            relationship without having some deeper or further friendship.<br></br>
            <br></br>
            In the whole process, Candy contributed most of the coding part to build the mini-program. 
            Other 3 of us, including myself, covered most about the thoughts and the presentation parts.
            We finished this project together and in each process we separate our jobs respectively.
            I contributed to the existing problem thinking (source of innovation), paper prototype making,
            and our future business model building part in the final pitch.<br></br>
            <br></br>
            Our prototype is quite similar to the final version of mini-program, which are both shown
            on the right.<br></br>
            <br></br>
            For the future, we are going to further complete and perfect our interface by having some
            icons specially designed and doing some customer tests to get feedbacks. 
            </div>
          </div>
        </div>

        <div className="right2">
          <p className="paperPrototype">Paper Protytpe</p>
          <video width="300px" src="https://files.slack.com/files-pri/TFZ7FRRGU-FJ2E80BT8/download/file_from_ios.mov"controls></video>
        </div>

        <div className="groupProjectVideo">
          <p className="paperPrototype">Final Demo</p>
          <video width="300px" src="https://files.slack.com/files-pri/TFZ7FRRGU-FJZ820LT0/download/file_from_ios.mp4" controls></video>
        </div>
      
      </div>

{/* //////////////////////// */}
      <div className="contactMe">
        <p>Contact Me</p>
        <p>Email: cy1315@nyu.edu | WeChat: 18017812308</p>
      </div>

    </div>
  );
}

export default App;
