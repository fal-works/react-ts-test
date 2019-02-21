import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

interface TweetProps {
  content: string;
  icon: string;
  displayName: string;
  accountName: string;
}

const Tweet: React.FunctionComponent<TweetProps> = (props): JSX.Element => {
  return (
    <div className="tweet">
      <div className="icon-container">{props.icon}</div>
      <div className="body-container">
        <div className="status-display">
          <span className="display-name">{props.displayName}</span>
          <span className="account-name">@{props.accountName}</span>
        </div>
        <div className="content">{props.content}</div>
      </div>
    </div>
  );
};
Tweet.propTypes = {
  content: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  accountName: PropTypes.string.isRequired
};

class App extends React.Component {
  public render(): JSX.Element {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
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
