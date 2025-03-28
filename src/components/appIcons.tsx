type IconProps = {
    width?: number;
    height?: number;
    fill?: string;
  };

export const DisLikeIcon = ({ width = 116, height = 117 }: IconProps) => {
    return (
      <svg width={width} height={height} viewBox="0 0 116 117" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_2191_3082)">
          <circle cx="52.5" cy="47.0106" r="36" fill="#EA7376" />
        </g>
        <g clipPath="url(#clip0_2191_3082)">
          <path
            d="M63.5002 36.5272C62.8502 35.8772 61.8002 35.8772 61.1502 36.5272L53.0002 44.6606L44.8502 36.5106C44.2002 35.8606 43.1502 35.8606 42.5002 36.5106C41.8502 37.1606 41.8502 38.2106 42.5002 38.8606L50.6502 47.0106L42.5002 55.1606C41.8502 55.8106 41.8502 56.8606 42.5002 57.5106C43.1502 58.1606 44.2002 58.1606 44.8502 57.5106L53.0002 49.3606L61.1502 57.5106C61.8002 58.1606 62.8502 58.1606 63.5002 57.5106C64.1502 56.8606 64.1502 55.8106 63.5002 55.1606L55.3502 47.0106L63.5002 38.8606C64.1335 38.2272 64.1335 37.1606 63.5002 36.5272Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_2191_3082"
            x="0.66"
            y="0.930559"
            width="115.2"
            height="115.2"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="5.76" dy="11.52" />
            <feGaussianBlur stdDeviation="10.8" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.94902 0 0 0 0 0.231373 0 0 0 0 0.333333 0 0 0 0.2 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2191_3082" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2191_3082" result="shape" />
          </filter>
          <clipPath id="clip0_2191_3082">
            <rect width="40" height="40" fill="white" transform="translate(33 27.0106)" />
          </clipPath>
        </defs>
      </svg>
    );
  };
  
  export const LikeIcon = ({ width = 116, height = 117 }: IconProps) => {
    return (
      <svg width={width} height={height} viewBox="0 0 116 117" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_2191_3088)">
          <circle cx="52.5" cy="47.0106" r="36" fill="#BBDD76" />
        </g>
        <g clipPath="url(#clip0_2191_3088)">
          <path
            d="M55.2498 61.5606C53.9831 62.7106 52.0331 62.7106 50.7664 61.5439L50.5831 61.3772C41.8331 53.4606 36.1164 48.2772 36.3331 41.8106C36.4331 38.9772 37.8831 36.2606 40.2331 34.6606C44.6331 31.6606 50.0664 33.0606 52.9998 36.4939C55.9331 33.0606 61.3664 31.6439 65.7664 34.6606C68.1164 36.2606 69.5664 38.9772 69.6664 41.8106C69.8998 48.2772 64.1664 53.4606 55.4164 61.4106L55.2498 61.5606Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_2191_3088"
            x="0.66"
            y="0.930559"
            width="115.2"
            height="115.2"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="5.76" dy="11.52" />
            <feGaussianBlur stdDeviation="10.8" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.231373 0 0 0 0 0.94902 0 0 0 0 0.432314 0 0 0 0.2 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2191_3088" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2191_3088" result="shape" />
          </filter>
          <clipPath id="clip0_2191_3088">
            <rect width="40" height="40" fill="white" transform="translate(33 28.0106)" />
          </clipPath>
        </defs>
      </svg>
    );
  };