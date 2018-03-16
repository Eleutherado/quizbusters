import React, { Component } from 'react';

export default class QuestionSlide {
  constructor() {}

  render() {
    return (
      <div class="slide a-1">
        <h3>Why does the pan need to be above 120 celcius?</h3>
        <form>
          <input type="radio" name="quiz" value="1" />1. Because cooking
          releases water from the food, and we want the water to leave the pan
          quickly.<br />
          <input type="radio" name="quiz" value="2" />2. Because the water
          molecule keeps the food hot for a while.<br />
          <input type="radio" name="quiz" value="3" />3. Because otherwise the
          pan won't conduct heat.<br />
          <input type="radio" name="quiz" value="4" />4. Because the stove gets
          damaged otherwise.<br />
          <input type="submit" value="submit" />
          <button type="button">I have no idea</button>
        </form>
      </div>
    );
  }
}
