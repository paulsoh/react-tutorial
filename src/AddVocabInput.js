import React from 'react';

class AddVocabInput extends React.Component {
  render = () => {
    return (
      <div className="row">
        <div className="col-lg-6">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="추가할 단어를 입력하세요" />
            <span className="input-group-btn">
              <button className="btn btn-default" type="button">단어 추가</button>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default AddVocabInput;

