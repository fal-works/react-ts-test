import React from 'react';
import { TweetProps } from './Tweet';
import Timeline from './Timeline';
import TweetInput from './TweetInput';
import './App.css';

const App: React.FC = (): JSX.Element => {
  const [initialTweets, setTweets] = React.useState<TweetProps[]>([
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

  const addTweet = React.useCallback<(tweet: TweetProps) => void>(
    tweet => setTweets(prev => [tweet, ...prev]),
    [setTweets]
  );

  return (
    <div>
      <TweetInput addTweet={addTweet} />
      <Timeline tweets={initialTweets} />
    </div>
  );
};

export default App;
