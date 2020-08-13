import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

const Progress = ({ ratio }) => {
  const progressQueue = cx({
    progressQueue: true,
    progressQueueComplete: ratio[0] === ratio[1],
  });

  return (
    <div className={styles.progress}>
      <div className={styles.progressVisual}>
        <div
          className={progressQueue}
          style={{
            width: `${(ratio[0] / ratio[1]) * 100}%`,
          }}
        />
      </div>
      <div className={styles.progressHint}>{`${ratio[0]} / ${ratio[1]}`}</div>
    </div>
  );
};

Progress.propTypes = {
  ratio: PropTypes.array.isRequired,
};

export default React.memo(Progress);
