import React, { Component } from 'react';
import Header from './Header';
import TabBar from './TabBar';
import AddVocabInput from './AddVocabInput';
import VocabList from './VocabList';

class App extends Component {
  state = {
    vocabList: [
      {
        word: 'prevaricate',
        isLearned: false,
      },
      {
        word: 'hackneyed',
        isLearned: false,
      },
      {
        word: 'diffident',
        isLearned: false,
      },
      {
        word: 'plucky',
        isLearned: false,
      },
    ],
  }

  componentWillMount = () => {
    console.log("Will Mount!!");
  }

  componentDidMount = () => {
    console.log("Did Mounted!!");
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log("Will Update: " + this.state.hello + "-->" + nextState.hello);
  }

  componentDidUpdate = (prevProps, prevState) => {
    console.log("Did Update: " + prevState.hello + "-->" + this.state.hello);
  }

  render() {
    console.log("Rendered!!")
    return (
      <div className="container">
        <Header />
        <br />
        <TabBar />
        <br />
        <AddVocabInput />
        <br />
        <VocabList
          vocabList={this.state.vocabList}
        />
      </div>
    );
  }
}

export default App;
