import React from 'react';
import YouTube from 'react-youtube';

const START_QUIZ_TIME = 193; //seconds
const JUMP_TO_TIME_WHEN_CORRECT = 200; // seconds

export default class Player extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTime: 0,
      playing: false
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
        videoId="Pa0z7iAeyZ8"
        opts={opts}
        onReady={this._onReady.bind(this)}
        onPlay={this._onPlay.bind(this)}
        onPause={this._onPause.bind(this)}
        playtime={this.props.player.youtubePlayer.getCurrentTime()}
      />
    );
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
    console.log('ready');
  }

  _onPlay(event) {
    this.setState({ playing: true });
    setInterval(() => this.checkStartQuiz(event), 1000); // check to start quiz every second
  }

  _onPause(event) {
    this.setState({ playing: false });
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
    if (this.state.playing) {
      this.setState(prevState => ({
        currentTime: prevState.currentTime + 1
      }));
    }
  }

  startQuiz() {}
}
