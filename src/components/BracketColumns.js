import React, { useState } from 'react';
import AFCPicture from './AFCPicture';
import NFCPicture from './NFCPicture';
import SuperbowlPicture from './SuperbowlPicture';

export default function BracketColumns(props) {
  const { AFC, NFC } = props;

  return (
    <div className="round-container">
      <AFCPicture AFC={AFC} />
      <NFCPicture NFC={NFC} />
      <SuperbowlPicture />
    </div>
  );
}
