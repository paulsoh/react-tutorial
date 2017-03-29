import React from 'react';

class TabBar extends React.Component {
  render = () => {
    const {
      allWordsCount,
      learnedWordsCount,
      toLearnWordsCount,
    } = this.props;

    return (
      <div className="row">
        <div className="col-lg-12">
          <ul className="nav nav-tabs">
            <li className="active">
              <a
                onClick={() => {
                  this.setState({
                    hello: 'linewalks',
                  })
                }}
              >
                모든 단어
                <span className="badge">{allWordsCount}</span>
              </a>
            </li>
            <li>
              <a>
                학습완료한 단어
                <span className="badge">{learnedWordsCount}</span>
              </a>
            </li>
            <li>
              <a>
                학습중인 단어
                <span className="badge">{toLearnWordsCount}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default TabBar;
