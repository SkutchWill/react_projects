import React, { Component } from 'react';
import RuleRow from './RuleRow';
import './ScoreTable.css';
import { ones, twos, threes, fours, fives, sixes, threeOfKind, fourOfKind, fullHouse, smallStraight, largeStraight, yahtzee, chance } from './Rules';


class ScoreTable extends Component {
  static defaultProps = {
    scoreDescriptions: {
      ones: 'Score 1 for every 1',
      twos: 'Score 2 for every 2',
      threes: 'Score 3 for every 3',
      fours: 'Score 4 for every 4',
      fives: 'Score 5 for every 5',
      sixes: 'Score 6 for every 6',
      threeOfKind: 'If 3+ of one value, score sum of all dice (otherwise, score 0)',
      fourOfKind: 'If 4+ of one value, score sum of all dice (otherwise, score 0)',
      fullHouse: 'If 3 of one value and 2 of another, score 25 (otherwise, score 0)',
      smallStraight: 'If 4+ values in sequential order, score 30 (otherwise, score 0)',
      largeStraight: 'If 5 values in sequential order, score 40 (otherwise, score 0)',
      yahtzee: 'If all values match, score 50 (otherwise, score 0)',
      chance: 'Score sum of all dice'
    }
  };
  getTotalScore() {
    let total = 0;
    const {scores} = this.props;
    for(let key in scores) {
      if(scores[key]) total += scores[key];
    }
    return total;
  }
  render() {
    const { scores, doScore } = this.props;
    return (
      <div className="ScoreTable">
        <section className="ScoreTable-section">
          <h2>Upper</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow name="Ones" score={scores.ones} doScore={evt => doScore("ones", ones.evalRoll)} description={this.props.scoreDescriptions.ones} />
              <RuleRow name="Twos" score={scores.twos} doScore={evt => doScore("twos", twos.evalRoll)} description={this.props.scoreDescriptions.twos} />
              <RuleRow name="Threes" score={scores.threes} doScore={evt => doScore("threes", threes.evalRoll)} description={this.props.scoreDescriptions.threes} />
              <RuleRow name="Fours" score={scores.fours} doScore={evt => doScore("fours", fours.evalRoll)} description={this.props.scoreDescriptions.fours} />
              <RuleRow name="Fives" score={scores.fives} doScore={evt => doScore("fives", fives.evalRoll)} description={this.props.scoreDescriptions.fives} />
              <RuleRow name="Sixes" score={scores.sixes} doScore={evt => doScore("sixes", sixes.evalRoll)} description={this.props.scoreDescriptions.sixes} />
            </tbody>
          </table>
        </section>
        <section className="ScoreTable-section ScoreTable-section-lower">
          <h2>Lower</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow name="Three of Kind" score={scores.threeOfKind} doScore={evt => doScore("threeOfKind", threeOfKind.evalRoll)} description={this.props.scoreDescriptions.threeOfKind} />
              <RuleRow name="Four of Kind" score={scores.fourOfKind} doScore={evt => doScore("fourOfKind", fourOfKind.evalRoll)} description={this.props.scoreDescriptions.fourOfKind} />
              <RuleRow name="Full House" score={scores.fullHouse} doScore={evt => doScore("fullHouse", fullHouse.evalRoll)} description={this.props.scoreDescriptions.fullHouse} />
              <RuleRow name="Small Straight" score={scores.smallStraight} doScore={evt => doScore("smallStraight", smallStraight.evalRoll)} description={this.props.scoreDescriptions.smallStraight} />
              <RuleRow name="Large Straight" score={scores.largeStraight} doScore={evt => doScore("largeStraight", largeStraight.evalRoll)} description={this.props.scoreDescriptions.largeStraight} />
              <RuleRow name="Yahtzee" score={scores.yahtzee} doScore={evt => doScore("yahtzee", yahtzee.evalRoll)} description={this.props.scoreDescriptions.yahtzee} />
              <RuleRow name="Chance" score={scores.chance} doScore={evt => doScore("chance", chance.evalRoll)} description={this.props.scoreDescriptions.chance} />
            </tbody>
          </table>
          <h2 className="ScoreTable-total">Total Score: {this.getTotalScore()}</h2>
        </section>
      </div>
    )
  }
}

export default ScoreTable;