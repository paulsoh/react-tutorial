import React, { Component } from 'react';

class App extends Component {
  state = {
    hello: 'world',
  }

  componentWillMount = () => {
    console.log("Will Mount!!");
  }

  componentDidMount = () => {
    console.log("Did Mounted!!");
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log("Will Update: " + this.state.hello + "-->" + nextState.hello);
  }

  componentDidUpdate = (prevProps, prevState) => {
    console.log("Did Update: " + prevState.hello + "-->" + this.state.hello);
  }

  render() {
    console.log("Rendered!!")
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1>단어장 튜토리얼</h1>
          </div>
        </div>
        <br />
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
                  <span className="badge">12</span>
                </a>
              </li>
              <li>
                <a>
                  학습완료한 단어
                  <span className="badge">2</span>
                </a>
              </li>
              <li>
                <a>
                  학습중인 단어
                  <span className="badge">10</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-lg-6">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search for..." />
              <span className="input-group-btn">
                <button className="btn btn-default" type="button">단어 추가</button>
              </span>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-lg-12">
            <div className="list-group">
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
              <a className="list-group-item">
                hackneyed
                <div className="pull-right">
                  <div className="btn-group btn-group-xs" role="group" aria-label="...">
                    <button type="button" className="btn btn-success">설명 보기</button>
                    <button type="button" className="btn btn-primary">학습 완료</button>
                    <button type="button" className="btn btn-warning">학습 필요</button>
                  </div>
                </div>
              </a>
              <a className="list-group-item">
                diffident
                <div className="pull-right">
                  <div className="btn-group btn-group-xs" role="group" aria-label="...">
                    <button type="button" className="btn btn-success">설명 보기</button>
                    <button type="button" className="btn btn-primary">학습 완료</button>
                    <button type="button" className="btn btn-warning">학습 필요</button>
                  </div>
                </div>
              </a>
              <a className="list-group-item">
                plucky
                <div className="pull-right">
                  <div className="btn-group btn-group-xs" role="group" aria-label="...">
                    <button type="button" className="btn btn-success">설명 보기</button>
                    <button type="button" className="btn btn-primary">학습 완료</button>
                    <button type="button" className="btn btn-warning">학습 필요</button>
                  </div>
                </div>
              </a>
              <a className="list-group-item">
                meek
                <div className="pull-right">
                  <div className="btn-group btn-group-xs" role="group" aria-label="...">
                    <button type="button" className="btn btn-success">설명 보기</button>
                    <button type="button" className="btn btn-primary">학습 완료</button>
                    <button type="button" className="btn btn-warning">학습 필요</button>
                  </div>
                </div>
              </a>
              <a className="list-group-item">
                insidious
                <div className="pull-right">
                  <div className="btn-group btn-group-xs" role="group" aria-label="...">
                    <button type="button" className="btn btn-success">설명 보기</button>
                    <button type="button" className="btn btn-primary">학습 완료</button>
                    <button type="button" className="btn btn-warning">학습 필요</button>
                  </div>
                </div>
              </a>
              <a className="list-group-item">
                embellishment
                <div className="pull-right">
                  <div className="btn-group btn-group-xs" role="group" aria-label="...">
                    <button type="button" className="btn btn-success">설명 보기</button>
                    <button type="button" className="btn btn-primary">학습 완료</button>
                    <button type="button" className="btn btn-warning">학습 필요</button>
                  </div>
                </div>
              </a>
              <a className="list-group-item">
                forthcoming
                <div className="pull-right">
                  <div className="btn-group btn-group-xs" role="group" aria-label="...">
                    <button type="button" className="btn btn-success">설명 보기</button>
                    <button type="button" className="btn btn-primary">학습 완료</button>
                    <button type="button" className="btn btn-warning">학습 필요</button>
                  </div>
                </div>
              </a>
              <a className="list-group-item">
                subvert
                <div className="pull-right">
                  <div className="btn-group btn-group-xs" role="group" aria-label="...">
                    <button type="button" className="btn btn-success">설명 보기</button>
                    <button type="button" className="btn btn-primary">학습 완료</button>
                    <button type="button" className="btn btn-warning">학습 필요</button>
                  </div>
                </div>
              </a>
              <a className="list-group-item">
                esoteric
                <div className="pull-right">
                  <div className="btn-group btn-group-xs" role="group" aria-label="...">
                    <button type="button" className="btn btn-success">설명 보기</button>
                    <button type="button" className="btn btn-primary">학습 완료</button>
                    <button type="button" className="btn btn-warning">학습 필요</button>
                  </div>
                </div>
              </a>
              <a className="list-group-item">
                unassailable
                <div className="pull-right">
                  <div className="btn-group btn-group-xs" role="group" aria-label="...">
                    <button type="button" className="btn btn-success">설명 보기</button>
                    <button type="button" className="btn btn-primary">학습 완료</button>
                    <button type="button" className="btn btn-warning">학습 필요</button>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
