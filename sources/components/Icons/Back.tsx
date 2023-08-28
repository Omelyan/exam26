import React, { memo } from 'react';
import { Path, Svg } from 'react-native-svg';

export default memo(() => {
  return (
    <Svg width={24} height={20} viewBox="0 0 24 20">
      <Path
        d="M 0.3 9.909 L 10.199 0.01 L 11.926 1.736 L 2.026 11.635 L 0.3 9.909 Z M 0.3 9.909 L 2 8.212 L 11.897 18.111 L 10.199 19.808 L 0.3 9.909 Z M 3.621 8.709 L 23.621 8.709 L 23.621 11.109 L 3.621 11.109 L 3.621 8.709 Z"
        fill="#121224"
      />
    </Svg>
  );
});
