/* this file controls the flow of the app.
   It is aware of the video status and tells the quiz to render
   and to react to user input
*/
import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './quiz';
import Player from './player';

var globalState = {
  quiz: 'unstarted'
};

function quizStart() {
  globalState.quiz = 'started';
}

const App = () => (
  <div>
    <Player />
    <Greeting />
  </div>
);

ReactDOM.render(<App />, document.getElementById('player'));
