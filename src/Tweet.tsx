import React from 'react';
import PropTypes from 'prop-types';

interface TweetProps {
  content: string;
  icon: string;
  displayName: string;
  accountName: string;
}

const Tweet: React.FC<TweetProps> = (props): JSX.Element => {
  const [liked, setLike] = React.useState(false);
  const toggleLike = React.useCallback(() => setLike(prev => !prev), [setLike]);

  return (
    <div className="tweet">
      <div className="icon-container">{props.icon}</div>
      <div className="body-container">
        <div className="status-display">
          <span className="display-name">{props.displayName}</span>
          <span className="account-name">@{props.accountName}</span>
        </div>
        <div className="content">{props.content}</div>
        <div className="status-action">
          <span onClick={toggleLike}>{liked ? '❤️' : '♡'}</span>
        </div>
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

export default Tweet;
