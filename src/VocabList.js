import React from 'react';
import VocabItem from './VocabItem';

class VocabList extends React.Component {
  render = () => {
    const vocabList = this.props.vocabList.map((vocab) => {
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

