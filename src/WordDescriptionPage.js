import React from 'react';

class WordDescriptionPage extends React.Component {
  state = {
    word: '',
    definition: [],
    isDefinitionEmpty: true,
  }

  componentDidMount() {
    const word = this.props.match.params.word;

    this.setState({
      word,
    });

    fetch(`http://api.pearson.com/v2/dictionaries/entries?headword=${word}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({
          definition: data.results && data.results[0],
          isDefinitionEmpty: data.results.length === 0,
        })
      })
  }

  render = () => {
    return (
      <div className="container">
        <br />
        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">{this.state.word}</h3>
              </div>
              <div className="panel-body">
                {this.state.isDefinitionEmpty ? (
                  <h5>
                    <span className="label label-primary">
                      단어 없음
                    </span>
                    &nbsp;{this.state.word}에 대한 정의는 없습니다
                  </h5>
                ) : (
                  <div>
                    <h5>
                      <span className="label label-primary">
                        단어 정의
                      </span>
                      &nbsp;{this.state.definition.senses[0].definition}
                    </h5>
                    <p>
                      <span className="label label-success">
                        단어 정의
                      </span>
                      &nbsp;{this.state.definition.senses[0].examples[0].text}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default WordDescriptionPage;
