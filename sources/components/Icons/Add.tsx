import React, { memo } from 'react';
import { Path, Svg } from 'react-native-svg';

export default memo(() => {
  return (
    <Svg width={25} height={25} viewBox="0 0 20 20">
      <Path
        d="M 8.8 0 L 11.2 0 L 11.2 8.8 L 20 8.8 L 20 11.2 L 11.2 11.2 L 11.2 20 L 8.8 20 L 8.8 11.2 L 0 11.2 L 0 8.8 L 8.8 8.8 Z"
        fill="white"
      />
    </Svg>
  );
});
