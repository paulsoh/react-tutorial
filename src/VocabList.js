import React from 'react';
import VocabItem from './VocabItem';

class VocabList extends React.Component {
  render = () => {
    let vocabListToRender = [];

    if (this.props.activeTab === 'learned') {
      vocabListToRender = this.props.vocabList.filter((vocab) => {
        return vocab.isLearned;
      })
    } else if (this.props.activeTab === 'toLearn') {
      vocabListToRender = this.props.vocabList.filter((vocab) => {
        return !vocab.isLearned;
      })
    } else {
      vocabListToRender = this.props.vocabList;
    }

    const vocabList = vocabListToRender.map((vocab) => {
      return (
        <VocabItem
          word={vocab.word}
          isLearned={vocab.isLearned}
          markVocabAsNeedToLearnHandler={() => this.props.markVocabAsNeedToLearnHandler(vocab.word)}
          markVocabAsLearnedHandler={() => this.props.markVocabAsLearnedHandler(vocab.word)}
        />
      )
    })
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="list-group">
            {vocabList}
          </div>
        </div>
      </div>
    );
  }
}

export default VocabList;

