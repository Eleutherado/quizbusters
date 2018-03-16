import React from 'react';
import Question from './question';

/*
QUIZ_STATUSES = [
  0- 'unstarted',
  1- 'started',
  2- 'correct',
  3- 'incorrect1',
  4- 'incorrect2',
  5- 'incorrect3',
  6- 'hint1',
  7- 'hint2',
  8- 'hint3',
  9- 'doneSolved',
  10- 'doneUnsolved'
]
*/

/*
<div className="slide a-1">

</div>
*/

const QuizSlide = props => {
  const possibleStatuses = props.possibleStatuses;

  switch (props.quizStatus) {
    case possibleStatuses[0]:
      return <div />;
      break;

    case possibleStatuses[1]:
      return <Question />;
      break;

    case possibleStatuses[2]:
      return <div />;
      break;

    case possibleStatuses[3]:
      return <div />;
      break;

    case possibleStatuses[4]:
      return <div />;
      break;

    case possibleStatuses[5]:
      return <div />;
      break;

    case possibleStatuses[6]:
      return <div />;
      break;

    case possibleStatuses[7]:
      return <div />;
      break;
    case possibleStatuses[8]:
      return <div />;
      break;

    case possibleStatuses[9]:
      return <div />;
      break;

    case possibleStatuses[10]:
      return <div />;
      break;

    default:
      throw 'undefined quiz state!';
  }
};

export default QuizSlide;
