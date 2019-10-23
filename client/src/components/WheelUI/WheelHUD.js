import React from 'react';
import ScoreDisplay from './ScoreDisplay'
import DataEntry from './DataEntry'
const WheelHUD = () => {
  return (<div>
    <ScoreDisplay></ScoreDisplay>

    <DataEntry></DataEntry>
    <ScoreDisplay></ScoreDisplay>
  </div>);
}

export default WheelHUD