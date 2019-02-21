import React from 'react';
import { TweetProps } from './Tweet';
import Timeline from './Timeline';
import './App.css';

class App extends React.Component {
  public render(): JSX.Element {
    const tweets: TweetProps[] = [
      {
        key: 0,
        icon: '🌽',
        displayName: 'もろこし太郎',
        accountName: 'morokoshi',
        content: '今日も1日もろこしがうまい'
      },
      {
        key: 1,
        icon: '🦐',
        displayName: 'エビデンス',
        accountName: 'evidence',
        content: 'かにみそたべたい'
      }
    ];

    return (
      <div>
        <Timeline tweets={tweets} />
      </div>
    );
  }
}

export default App;
