import React from 'react';
import { Link } from 'react-router-dom';

class VocabItem extends React.Component {
  render = () => {
    const renderWord = this.props.isLearned ? this.props.word : (
      <b>{this.props.word}</b>
    )

    return (
      <div className="list-group-item">
        {renderWord}
        <div className="pull-right">
          <div className="btn-group btn-group-xs" role="group" aria-label="...">
            <Link
              type="button"
              className="btn btn-success"
              to={`/word/${this.props.word}`}
            >
              설명 보기
            </Link>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.props.markVocabAsLearnedHandler}
            >
              학습 완료
            </button>
            <button
              type="button"
              className="btn btn-warning"
              onClick={this.props.markVocabAsNeedToLearnHandler}
            >
              학습 필요
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default VocabItem;


