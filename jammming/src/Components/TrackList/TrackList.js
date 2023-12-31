import React from 'react';
import styles from './TrackList.module.css';
import Track from '../Track/Track';

class TrackList extends React.Component {
  render() {
    return (
      <div className={styles.TrackList}>
        {/* <!-- You will add a map method that renders a set of Track components  --> */}
        {this.props.tracks.map(
          track => <Track key={track.id} track={track} onAdd={this.props.onAdd} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval} />
        )}
      </div>
    );
  }
}

export default TrackList;