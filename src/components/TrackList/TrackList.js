import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends  React.Component {
    componentWillMount(){
        console.log('testing tracks prop: ', this.props.tracks[0]);
      }


    render() {
      return (
          <div className="TrackList">
         {/*this.props.tracks.map(track => {return <Track  key={track.id} onAdd={this.props.onAdd} onRemove={this.props.onRemove}/>})*/}


</div>
      )

    }

}
 export default TrackList;
