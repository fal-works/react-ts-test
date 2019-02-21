import React from 'react';
import Tweet from './Tweet';
import './App.css';

class App extends React.Component {
  public render(): JSX.Element {
    return (
      <div>
        <Tweet
          icon="🌽"
          displayName="もろこし太郎"
          accountName="morokoshi"
          content="今日も1日もろこしがうまい"
        />
        <Tweet
          icon="🦐"
          displayName="エビデンス"
          accountName="evidence"
          content="かにみそたべたい"
        />
      </div>
    );
  }
}

export default App;
