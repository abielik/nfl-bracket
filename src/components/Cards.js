import React from 'react';

export default function Cards(props) {
  const { title, teamTop, teamBottom } = props;

  return (
    <div className="card">
      <div className="card-title">{title}</div>
      <div className="team-top">{teamTop}</div>
      <div className="team-bottom">{teamBottom}</div>
    </div>
  );
}
