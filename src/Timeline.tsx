import React from 'react';
import Tweet, { TweetProps } from './Tweet';

interface TimelineProps {
  tweets: TweetProps[];
}

const Timeline: React.FC<TimelineProps> = (props): JSX.Element => {
  // propsからTweetのリストを作る
  const tweetList = props.tweets.map(tw => (
    <Tweet
      key={tw.key}
      icon={tw.icon}
      displayName={tw.displayName}
      accountName={tw.accountName}
      content={tw.content}
    />
  ));

  // 表示する
  return <div className="timeline">{tweetList}</div>;
};

export default Timeline;
