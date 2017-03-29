import React, { Component } from 'react';
import Header from './Header';
import TabBar from './TabBar';
import AddVocabInput from './AddVocabInput';
import VocabList from './VocabList';
import find from 'lodash/find';

class App extends Component {
  state = {
    activeTab: 'all',
    vocabList: [
      {
        word: 'prevaricate',
        isLearned: true,
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
    console.log("Will Update: " + this.state.activeTab + "-->" + nextState.activeTab);
  }

  componentDidUpdate = (prevProps, prevState) => {
    console.log("Did Update: " + prevState.activeTab + "-->" + this.state.activeTab);
  }

  addVocabHandler = (word) => {
    const newVocabList = [
      ...this.state.vocabList,
    ];

    newVocabList.push({
      word: word,
      isLearned: false,
    });

    this.setState({
      vocabList: newVocabList,
    })
  }

  markVocabAsLearned = (word) => {
    const oldVocabList = [
      ...this.state.vocabList,
    ];

    const newVocabList = oldVocabList.map((vocab) => {
      if (vocab.word === word) {
        return {
          word: word,
          isLearned: true,
        }
      } else {
        return vocab;
      }
    });

    this.setState({
      vocabList: newVocabList,
    })
  }

  markVocabAsNeedToLearn = (word) => {
    const oldVocabList = [
      ...this.state.vocabList,
    ];

    const newVocabList = oldVocabList.map((vocab) => {
      if (vocab.word === word) {
        return {
          word: word,
          isLearned: false,
        }
      } else {
        return vocab;
      }
    });

    this.setState({
      vocabList: newVocabList,
    })
  }

  changeTabHandler = (tab) => {
    console.log(tab);
    this.setState({
      activeTab: tab,
    });
  }

  render() {
    console.log("Rendered!!")
    return (
      <div className="container">
        <Header />
        <br />
        <TabBar
          allWordsCount={this.state.vocabList.length}
          learnedWordsCount={this.state.vocabList.filter((vocab) => {
            return vocab.isLearned
          }).length}
          toLearnWordsCount={this.state.vocabList.filter((vocab) => {
            return !vocab.isLearned
          }).length}
          changeTabHandler={this.changeTabHandler}
          activeTab={this.state.activeTab}
        />
        <br />
        <AddVocabInput
          addVocabHandler={this.addVocabHandler}
        />
        <br />
        <VocabList
          vocabList={this.state.vocabList}
          markVocabAsLearnedHandler={this.markVocabAsLearned}
          markVocabAsNeedToLearnHandler={this.markVocabAsNeedToLearn}
        />
      </div>
    );
  }
}

export default App;
