import React, { Component } from 'react';
import Header from './Header';
import TabBar from './TabBar';
import AddVocabInput from './AddVocabInput';
import VocabList from './VocabList';
import { connect } from 'react-redux';
import {
  addWordToStore,
  markWordAsLearned,
  markWordAsNeedToLearn,
} from './actions';

class App extends Component {
  state = {
    activeTab: 'all',
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
    this.props.addWordToVocabList(word)
  }

  markVocabAsLearned = (word) => {
    this.props.markWordAsLearned(word)
  }

  markVocabAsNeedToLearn = (word) => {
    this.props.markWordAsNeedToLearn(word)
  }

  changeTabHandler = (tab) => {
    console.log(tab);
    this.setState({
      activeTab: tab,
    });
  }

  render() {
    console.log("Rendered!!")
    const vocabList = this.props.vocabList;
    return (
      <div className="container">
        <Header />
        <br />
        <TabBar
          allWordsCount={vocabList.length}
          learnedWordsCount={vocabList.filter((vocab) => {
            return vocab.isLearned
          }).length}
          toLearnWordsCount={vocabList.filter((vocab) => {
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
          vocabList={vocabList}
          markVocabAsLearnedHandler={this.markVocabAsLearned}
          markVocabAsNeedToLearnHandler={this.markVocabAsNeedToLearn}
          activeTab={this.state.activeTab}
        />
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      vocabList: state.vocabList,
    }
  }, {
    addWordToVocabList: addWordToStore,
    markWordAsLearned: markWordAsLearned,
    markWordAsNeedToLearn: markWordAsNeedToLearn,
  }
)(App);
