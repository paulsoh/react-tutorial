import React from 'react';

class WordDescriptionPage extends React.Component {
  render = () => {
    const word = this.props.match.params.word;

    return (
      <div className="container">
        <br />
        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">{word}</h3>
              </div>
              <div className="panel-body">
                <h5>
                  <span className="label label-primary">
                    단어 정의
                  </span>
                  &nbsp;단어 설명 주루룩
                </h5>
                <p>
                  <span className="label label-success">
                    단어 정의
                  </span>
                  &nbsp;예문 주루룩
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default WordDescriptionPage;
