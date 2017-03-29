import React from 'react';

class WordDescriptionPage extends React.Component {
  render = () => {
    return (
      <div>
        Hello, 당신이 찾아보신 단어는 {`${this.props.match.params.word}`} 입니다! 
      </div>
    )
  }
}

export default WordDescriptionPage;
