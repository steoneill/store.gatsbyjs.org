import React from 'react';
import { css } from 'react-emotion';
import { colors } from '../../utils/styles';

const iconStyles = css`
  display: inline-block;
  height: 27px;
  width: 20px;
`;

export default () => (
  <svg
    className={iconStyles}
    viewBox="0 0 34 30"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="cart" fill={colors.textLight} fillRule="nonzero">
        <g id="Group" transform="translate(0.000000, 0.251771)">
          <path
            d="M0.789473645,0.142997368 C0.353447329,0.142997368 -3.9473684e-08,0.496444737 -3.9473684e-08,0.932471053 C-3.9473684e-08,1.36849737 0.353447329,1.72194474 0.789473645,1.72194474 L4.88486842,1.72194474 L9.04192105,21.3600789 C9.14277632,21.84525 9.46685526,22.2533289 9.86842105,22.2482368 L29.6052632,22.2482368 C30.0223421,22.2541579 30.4070526,21.8758816 30.4070526,21.4587632 C30.4070526,21.0416447 30.0223421,20.6633684 29.6052632,20.6692895 L10.5098684,20.6692895 L6.30347368,0.759773684 C6.22519737,0.410826316 5.88390789,0.139957895 5.52631579,0.142997368 L0.789473645,0.142997368 Z M8.68421053,4.87983947 L11.0526316,16.7219605 L30.3947368,16.7219605 L33.1578947,4.87983947 L8.68421053,4.87983947 Z M13.8157895,23.8271842 C12.2897763,23.8271842 11.0526316,25.0642895 11.0526316,26.5903421 C11.0526316,28.1163947 12.2897763,29.3535 13.8157895,29.3535 C15.3418421,29.3535 16.5789474,28.1163947 16.5789474,26.5903421 C16.5789474,25.0642895 15.3418421,23.8271842 13.8157895,23.8271842 Z M25.6578947,23.8271842 C24.1318816,23.8271842 22.8947368,25.0642895 22.8947368,26.5903421 C22.8947368,28.1163947 24.1318816,29.3535 25.6578947,29.3535 C27.1839474,29.3535 28.4210526,28.1163947 28.4210526,26.5903421 C28.4210526,25.0642895 27.1839474,23.8271842 25.6578947,23.8271842 Z"
            id="Shape"
          />
        </g>
      </g>
    </g>
  </svg>
);
