import React from 'react';
import { data } from '../data.js';

export default function Cards() {
  console.log(data);
  return (
    <div className="card">
      <div className="card-title">Wildcard</div>
      <div className="team-top">team-top</div>
      <div className="team-bottom">team-bottom</div>
    </div>
  );
}
