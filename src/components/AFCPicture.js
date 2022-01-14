import React from 'react';
import Cards from './Cards';

export default function AFCPicture(props) {
  const rounds = ['Wildcard', 'Divisional', 'AFC Championship', 'Superbowl'];
  const { seed1, seed2, seed3, seed4, seed5, seed6, seed7 } = props.AFC;

  return rounds.map((round) => {
    return (
      <Cards
        key={round}
        title={round}
        teamTop={`${seed7.city} ${seed7.name}`}
        teamBottom={`${seed2.city} ${seed2.name}`}
      />
    );
  });
}
