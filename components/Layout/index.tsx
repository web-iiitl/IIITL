import React, { useRef, useState } from 'react'
import Navbarr from '../Navbar'
import Footer from '../Footer'
import localFont from 'next/font/local'
import Zoom from 'react-reveal/Zoom';
import Marque from '../Marque';
import Heading from '../Heading';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Script from 'next/script'
import axios from 'axios';

const myFont = localFont({ src: '../../public/Poppins-Regular.ttf' })




let gumStream = null;
let recorder = null;
let audioContext = null;

declare global {
  interface Window {
    Recorder: any;
  }
}
const index = ({ children }) => {


  const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#003b68',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#003b68',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };
  const audioRef = useRef(null);
  const [audioBlob, setAudioBlob] = useState(null);

  const [isHolding, setIsHolding] = useState(false);

  let holdTimeout;



  const startHold = () => {
    // Set a timeout for the hold duration (e.g., 1 second)
    // holdTimeout = setTimeout(() => {
    console.log('Button held!');
    startRecording()
    // }, 1000*60);
    setIsHolding(true);
  };

  const endHold = () => {
    // Clear the timeout to prevent the hold action if the button is released before the timeout
    console.log('Left the button during hold!');
    stopRecordingAndSubmit()
    // clearTimeout(holdTimeout);
    setIsHolding(false);
  };

  const leaveButton = () => {
    // Handle the case when the mouse leaves the button during the hold
    // clearTimeout(holdTimeout);
    setIsHolding(false);
  };







  const startRecording = () => {
    let constraints = {
      audio: true,
      video: false,
    };
    console.log("hello")

    audioContext = new window.AudioContext();
    console.log('sample rate: ' + audioContext.sampleRate);

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function (stream) {
        console.log('initializing Recorder.js ...');

        gumStream = stream;

        let input = audioContext.createMediaStreamSource(stream);

        recorder = new window.Recorder(input, {
          numChannels: 1,
        });

        recorder.record();
        console.log('Recording started');
      })
      .catch(function (err) {
        // enable the record button if getUserMedia() fails
        console.log(err);
      });
  };

  const stopRecordingAndSubmit = () => {
    console.log('stopButton clicked');
    
    if(recorder!=null){
      
    
    recorder.stop(); // stop microphone access
    gumStream.getAudioTracks()[0].stop();

    recorder.exportWAV((blob) => {
      onStop(blob);
      setAudioBlob(blob); // store the audio blob in state

      // Send the recorded audio to the backend and play the returned audio
      if (blob) {
        let data = new FormData();
        data.append('audio', blob, 'recording.mp3');

        axios.post('https://test.pranavg.me/api/v1/sts', data)
          .then(response => {
            // Handle the response from the backend
            const { completion, transcript, audio } = response.data;

            // You can use completion, transcript as needed
            console.log('Completion:', completion);
            console.log('Transcript:', transcript);

            // Play the returned audio
            const returnedAudioUrl = `data:audio/mp3;base64,${audio}`;
            audioRef.current.src = returnedAudioUrl;
            audioRef.current.play();
          })
          .catch(error => {
            console.error('Error sending audio to the backend:', error);
          });
      }
    });
  }
  };


  const onStop = (blob) => {
    console.log('uploading...');

    let data = new FormData();

    data.append('text', 'this is the transcription of the audio file');
    data.append('wavfile', blob, 'recording.wav');

    const config = {
      headers: { 'content-type': 'multipart/form-data' },
    };

    // axios.post('http://localhost:8080/asr/', data, config);
  };

  return (
    <div className={myFont.className}>


      <Script src="https://cdn.rawgit.com/mattdiamond/Recorderjs/08e7abd9/dist/recorder.js" />
      <div className='bg-[#f7f7f7] max-w-[2200px] m-auto'>
        <div className=' scale-75 z-50 bottom-0 right-0 fixed'>
          {/* <ThemeProvider theme={theme}>
            <ChatBot
              headerTitle="IIIT Lucknow Chatbot"
              steps={[
                {
                  id: '1',
                  message: 'What is your name?',
                  trigger: '2',
                },
                {
                  id: '2',
                  user: true,
                  trigger: '3',
                },
                {
                  id: '3',
                  message: 'Hi {previousValue}, nice to meet you!',
                  end: true,
                },
              ]} />
          </ThemeProvider> */}
        </div>

        <Zoom>
          <div className='flex fixed flex-col top-[400px] z-50'>
            <div className='w-12 h-fit hover:bg-black p-2  bg-[#4267B2]'>
              <a href="https://www.facebook.com/iiitlucknow/" target={'__blank'} className='cursor-pointer '>
                <svg viewBox="-5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>facebook [#176]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-385.000000, -7399.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z" id="facebook-[#176]"> </path> </g> </g> </g> </g></svg>
              </a>
            </div>
            <div className=' w-12  h-fit hover:bg-black p-2  bg-[#1DA1F2]'>
              <a className='cursor-pointer ' target={'__blank'} href="https://twitter.com/iiit_lucknow?lang=en">
                <svg viewBox="0 -2 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>twitter [#000000154]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-60.000000, -7521.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705" id="twitter-[#000000154]"> </path> </g> </g> </g> </g></svg>
              </a>
            </div>
            <div className='w-12  h-fit hover:bg-black p-2  bg-[#E1306C] from-[#833AB4] via-[#E1306C] to-[#F56040]'>
              <a className='cursor-pointer ' target={'__blank'} href="https://www.instagram.com/iiitlucknow/">
                <svg fill="#ffffff" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M160,128a32,32,0,1,1-32-32A32.03667,32.03667,0,0,1,160,128Zm68-44v88a56.06353,56.06353,0,0,1-56,56H84a56.06353,56.06353,0,0,1-56-56V84A56.06353,56.06353,0,0,1,84,28h88A56.06353,56.06353,0,0,1,228,84Zm-52,44a48,48,0,1,0-48,48A48.05436,48.05436,0,0,0,176,128Zm16-52a12,12,0,1,0-12,12A12,12,0,0,0,192,76Z"></path> </g></svg>
              </a>
            </div>
            <div className='w-12  h-fit hover:bg-black p-2  bg-[#0072b1]'>
              <a className='cursor-pointer ' target={'__blank'} href="https://www.linkedin.com/school/iiitl">
                <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>linkedin [#161]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-180.000000, -7479.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z" id="linkedin-[#161]"> </path> </g> </g> </g> </g></svg>
              </a>
            </div>
          </div>
        </Zoom>
        <Marque />
        <Heading />
        <Navbarr />
        <div className=''>
          <div>
            <button className='hover:scale-110 z-50 cursor-pointer  fixed bottom-10 right-[50px]  ' 
              onMouseDown={startHold}
              onMouseUp={endHold}
              onMouseLeave={leaveButton} type="button">
              <img className='w-20  hover:scale-110 h-20 rounded-full' src="https://img.freepik.com/premium-vector/robot-icon-bot-sign-design-chatbot-symbol-concept-voice-support-service-bot-online-support-bot-vector-stock-illustration_100456-34.jpg" alt="" />
             </button>
           
            <audio className='hidden' ref={audioRef} controls />
          </div>
          {children}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default index
