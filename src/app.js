/* this file controls the flow of the app.
   It is aware of the video status and tells the quiz to render
   and to react to user input
*/
import React from 'react';
import ReactDOM from 'react-dom';
import QuizSlide from './quiz';
import Player from './altPlayer';

const QUIZ_STATUSES = [
  'unstarted',
  'started',
  'correct',
  'incorrect1',
  'incorrect2',
  'incorrect3',
  'hint1',
  'hint2',
  'hint3',
  'doneSolved',
  'doneUnsolved'
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quizStatus: QUIZ_STATUSES[0],
      possibleStatuses: QUIZ_STATUSES
    };
  }

  render() {
    return (
      <div>
        <div>
          <Player onQuizStart={() => this.handleQuizStatus(1)} />
        </div>
        <QuizSlide
          quizStatus={this.state.quizStatus}
          possibleStatuses={this.state.possibleStatuses}
        />
      </div>
    );
  }

  handleQuizStatus(status) {
    console.log('called with ' + status);
    this.setState({ quizStatus: QUIZ_STATUSES[status] });
    console.log('status: ' + this.state.quizStatus);
  }
}

ReactDOM.render(<App />, document.getElementById('player'));
