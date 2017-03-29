import React from 'react';
import VocabItem from './VocabItem';

class VocabList extends React.Component {
  render = () => {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="list-group">
            <VocabItem />
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
    );
  }
}

export default VocabList;

