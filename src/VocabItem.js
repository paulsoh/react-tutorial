import React from 'react';

class VocabItem extends React.Component {
  render = () => {
    return (
      <a className="list-group-item">
        prevaricate
        <div className="pull-right">
          <div className="btn-group btn-group-xs" role="group" aria-label="...">
            <button type="button" className="btn btn-success">설명 보기</button>
            <button type="button" className="btn btn-primary">학습 완료</button>
            <button type="button" className="btn btn-warning">학습 필요</button>
          </div>
        </div>
      </a>
    );
  }
}

export default VocabItem;


