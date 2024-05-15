import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import GHProjects from "./components/Projects/Github/Projects";
import Footer from "./components/Footer";
import Blocked from "./components/Blocked";
import Resume from "./components/Resume/ResumeNew";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import Minionframes from "./MinionFrames";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Analytics from "./components/Analytics";
import io from "socket.io-client";
import Modal from "react-bootstrap/Modal";
import { useRef } from "react";
import Particle from "./components/Particle";
// import useAckee from "use-ackee"
import * as ackeeTracker from 'ackee-tracker'
import Contact from "./components/Contact/Contact";
const querys = new URLSearchParams(window.location.search);
function App() {
  const [load, upadateLoad] = useState(true);
  const [isBlocked, updateBlocked] = useState(false);
  const [socket, setSocket] = useState(null);
  const [socketConnected, setSocketConnected] = useState(false);
  const [isModelOpen, setModelOpen] = React.useState(false);
  const [recorded, setRecorded] = useState(false);
const effectRef = useRef({})
  const showModal = () => {
    setModelOpen(true);
  };

  const hideModal = () => {
    setModelOpen(false);
  };

useEffect(() => {
 const interval = setInterval(()=> {
  if(window.activated) {
    showModal();
  } else {
    hideModal();
  }
 })
 return ()  => clearInterval(interval)
})

 //ackee
//  useAckee(window.location.pathname, {
// 	server: 'https://ackee.saahild.com',
// 	domainId: 'c082bd15-f9d8-414f-aa10-926e1d66a5d6'
// }, {
// 	detailed: false,
// 	ignoreLocalhost: true,
// 	ignoreOwnVisits: true
// })

// const ackee = ackeeTracker.create('https://ackee.saahild.com', {
//   detailed: true,
//   ignoreLocalhost: true,
//   ignoreOwnVisits: false
// })

// useEffect(() => {
//   if(!recorded) {
//     setRecorded(true)
   
//    setTimeout(() => {
  
//     fetch('https://freeipapi.com/api/json').then(r => r.json()).then((json) => {
//       const ip = json.ipAddress
//      //  console.log('gimmie the ip', ip)
//      if(recorded) return;

//        ackee.record('c082bd15-f9d8-414f-aa10-926e1d66a5d6', {
//          ...ackeeTracker.attributes(true),
//          siteLocation: window.location.href, 
//         //  ip 
//        })
//        const loadTime = window.performance.timing.domContentLoadedEventEnd- window.performance.timing.navigationStart;
//        ackee.action('a44e901e-1708-47c3-b13d-2dc9ab1d10ca', { 
//          key: ip,
//          value: 1
//        })
//        ackee.action('798e5262-76ab-4077-93f4-f5771247ea2a', { 
//         key: `${(loadTime/1000).toFixed(2)}s`,
//         value: 1
//       })
//      })
//    }, 500)
//   } 
// }, [recorded])
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad("done");
    }, 1200);
   
    return () => clearTimeout(timer);
  }, []);
useEffect(async () => {
 
const play = async () => {
  if(! effectRef.current) return;
  for (var i = 0; i < Minionframes.length; i++) {
    effectRef.current.innerHTML = Minionframes[i]
     await new Promise(r => setTimeout(r, 40));
 }
play()
}
play();
})
  return (
    <>
      <Router>
        <Preloader load={load} />

        <div className="App" id={load !== "done" ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />
          <Modal show={isModelOpen} style={{ width: "100vh", height: "100vh" }} centered >
      <Modal.Header>Happy Halloween</Modal.Header>
      <Modal.Body>
<pre ref={effectRef}> </pre>     
                      </Modal.Body>
      <Modal.Footer>
      <button onClick={hideModal}>Cancel</button>
      </Modal.Footer>
    </Modal>
          <Routes>
            {isBlocked ? (
              <Route path="*" element={<Blocked reason={isBlocked} />} />
            ) : (
              <>
                {" "}
                
                <Route path="/" element={<Home />} />
                <Route path="/project" element={<Projects />} />
          {/*      <Route path="/ghproject" element={<GHProjects />} /> */}
               <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/particles" element={<Particle />} />
                {querys.get("password") === process.env.REACT_APP_PASSWORD ? (
                  <Route path="/analytics" element={<Analytics />} />
                ) : null}
                <Route path="*" element={<Navigate to="/" />} />
              </>
            )}
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
