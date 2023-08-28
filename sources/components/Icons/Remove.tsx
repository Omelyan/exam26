import React, { memo } from 'react';
import { Path, Svg } from 'react-native-svg';

export default memo(() => {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20">
      <Path
        d="M 15.515 2.788 L 17.212 4.485 L 11.697 10 L 17.212 15.515 L 15.515 17.212 L 10 11.697 L 4.485 17.212 L 2.788 15.515 L 8.303 10 L 2.788 4.485 L 4.485 2.788 L 10 8.303 L 15.515 2.788 Z"
        fill="white"
      />
    </Svg>
  );
});
