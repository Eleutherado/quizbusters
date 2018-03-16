/*code adapted from https://time2hack.com/2017/11/easiest-way-to-integrate-youtube-iframe-api-in-angular-and-react/
*/
import React from 'react';

const START_QUIZ_TIME = 193; //seconds
const JUMP_TO_TIME_WHEN_CORRECT = 200; // seconds

export default class MyAppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.init();
    this.video = 'Pa0z7iAeyZ8'; //video id

    window['onYouTubeIframeAPIReady'] = e => {
      this.YT = window['YT'];
      this.player = new window['YT'].Player('video', {
        videoId: this.video,
        height: '390',
        width: '640',
        events: {
          onStateChange: this.onPlayerStateChange.bind(this),
          onError: this.onPlayerError.bind(this)
        }
      });
    };
  }
  render() {
    return <div id="video" />;
  }

  init() {
    var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  onPlayerStateChange(event) {
    console.log(event);
    switch (event.data) {
      case window['YT'].PlayerState.PLAYING:
        if (this.cleanTime() == 0) {
          console.log('started ' + this.cleanTime());
          this.onPlayerStart(event);
        } else {
          console.log('playing ' + this.cleanTime());
        }
        break;
      case window['YT'].PlayerState.PAUSED:
        if (this.player.getDuration() - this.player.getCurrentTime() != 0) {
          console.log('paused' + ' @ ' + this.cleanTime());
        }
        break;
      case window['YT'].PlayerState.ENDED:
        console.log('ended ');
        break;
    }
  }

  onPlayerStart(event) {
    setInterval(() => this.checkStartQuiz(event), 1000); // check to start quiz every second
  }

  checkStartQuiz(event) {
    if (this.cleanTime() >= START_QUIZ_TIME) {
      event.target.pauseVideo();
      this.props.onQuizStart();
    }
  }
  //utility
  cleanTime() {
    return Math.round(this.player.getCurrentTime());
  }

  onPlayerError(event) {
    switch (event.data) {
      case 2:
        console.log('' + this.video);
        break;
      case 100:
        break;
      case 101 || 150:
        break;
    }
  }
}
