import React from 'react';
import YouTube from 'react-youtube';

const START_QUIZ_TIME = 10; //seconds
const JUMP_TO_TIME_WHEN_CORRECT = 200; // seconds

export default class Player extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTime: 0
    };
  }

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
      }
    };

    return (
      <YouTube
        videoId="2g811Eo7K8U"
        opts={opts}
        onReady={this._onReady.bind(this)}
        onPlay={this._onPlay.bind(this)}
      />
    );
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
    console.log('ready');
  }

  _onPlay(event) {
    setInterval(() => this.checkStartQuiz(event), 1000); // check to start quiz every second
  }

  checkStartQuiz(event) {
    this.updateTime();
    console.log(this.state.currentTime);
    if (this.state.currentTime >= START_QUIZ_TIME) {
      event.target.pauseVideo();
      //TODO Start Quiz.
    }
  }
  updateTime() {
    this.setState(prevState => ({
      currentTime: prevState.currentTime + 1
    }));
  }

  startQuiz() {}
}
/*
const START_QUIZ_TIME = 193; //seconds
const JUMP_TO_TIME_WHEN_CORRECT = 200; // seconds

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'Pa0z7iAeyZ8',
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  });
  //document.getElementById('player').style['z-index'] = -10;
  //document.getElementById('player').style['-webkit-transform'] =
  //  'translateZ(0)';
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
  setInterval(checkStartQuiz, 1000); // check to start quiz every second
}

function checkStartQuiz() {
  if (player.getCurrentTime() >= START_QUIZ_TIME) {
    startQuiz();
    //TODO Start Quiz.
  }
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.

function onPlayerStateChange(event) {}

function startQuiz() {
  player.pauseVideo();
}
*/
