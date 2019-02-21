import React from 'react';
import Timeline from './Timeline';
import TweetInput from './TweetInput';
import './App.css';

const App: React.FC = (): JSX.Element => {
  const [tweets, setTweets] = React.useState([
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
  ]);

  const addTweet = React.useCallback(
    tweet => setTweets(prev => [tweet, ...prev]),
    [setTweets]
  );

  return (
    <div>
      <TweetInput addTweet={addTweet} />
      <Timeline tweets={tweets} />
    </div>
  );
};

export default App;
