import React from "react";

const Logo = (props: any) => {
  return (
    <svg
      {...props}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_ddi_2_8349)">
        <rect
          x="3"
          y="2"
          width="30"
          height="30"
          rx="15"
          fill="#5F57FF"
        />
        <rect
          x="3"
          y="2"
          width="30"
          height="30"
          rx="15"
          fill="url(#paint0_linear_2_8349)"
          fillOpacity="0.15"
        />
        <rect
          x="3.5"
          y="2.5"
          width="29"
          height="29"
          rx="14.5"
          stroke="url(#paint1_linear_2_8349)"
          strokeOpacity="0.2"
        />
        <g clipPath="url(#clip0_2_8349)">
          <mask
            id="mask0_2_8349"
            maskUnits="userSpaceOnUse"
            x="10"
            y="9"
            width="16"
            height="16"
          >
            <path
              d="M26 9H10V25H26V9Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_2_8349)">
            <g filter="url(#filter1_dd_2_8349)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 10.76C18 9.78798 17.212 9 16.24 9H11.76C10.788 9 10 9.78798 10 10.76V15.2976C10 16.2696 10.788 17.0575 11.76 17.0575H16.24C17.212 17.0575 18 17.8455 18 18.8175V23.24C18 24.212 18.788 25 19.76 25H24.24C25.212 25 26 24.212 26 23.24V18.7024C26 17.7304 25.212 16.9424 24.24 16.9424H19.76C18.788 16.9424 18 16.1545 18 15.1824V10.76Z"
                fill="url(#paint2_linear_2_8349)"
                shapeRendering="crispEdges"
              />
              <path
                d="M16.24 9.25C17.074 9.25 17.75 9.92605 17.75 10.76V15.1824C17.75 16.2925 18.6499 17.1924 19.76 17.1924H24.24C25.0739 17.1924 25.75 17.8685 25.75 18.7024V23.24C25.75 24.0739 25.0739 24.75 24.24 24.75H19.76C18.9261 24.75 18.25 24.0739 18.25 23.24V18.8175C18.25 17.7075 17.3501 16.8075 16.24 16.8075H11.76C10.926 16.8075 10.25 16.1315 10.25 15.2976V10.76C10.25 9.92605 10.9261 9.25 11.76 9.25H16.24Z"
                stroke="url(#paint3_linear_2_8349)"
                strokeOpacity="0.5"
                strokeWidth="0.5"
                shapeRendering="crispEdges"
              />
            </g>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_ddi_2_8349"
          x="0"
          y="-2"
          width="36"
          height="38"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood
            floodOpacity="0"
            result="BackgroundImageFix"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite
            in2="hardAlpha"
            operator="out"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0509804 0 0 0 0 0.0509804 0 0 0 0 0.0705882 0 0 0 0.04 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2_8349"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite
            in2="hardAlpha"
            operator="out"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0509804 0 0 0 0 0.0509804 0 0 0 0 0.0705882 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_2_8349"
            result="effect2_dropShadow_2_8349"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_2_8349"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite
            in2="hardAlpha"
            operator="arithmetic"
            k2="-1"
            k3="1"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect3_innerShadow_2_8349"
          />
        </filter>
        <filter
          id="filter1_dd_2_8349"
          x="7"
          y="7"
          width="22"
          height="22"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood
            floodOpacity="0"
            result="BackgroundImageFix"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite
            in2="hardAlpha"
            operator="out"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0509804 0 0 0 0 0.0509804 0 0 0 0 0.0705882 0 0 0 0.04 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2_8349"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite
            in2="hardAlpha"
            operator="out"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0509804 0 0 0 0 0.0509804 0 0 0 0 0.0705882 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_2_8349"
            result="effect2_dropShadow_2_8349"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_2_8349"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2_8349"
          x1="18"
          y1="2"
          x2="18"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop
            offset="1"
            stopColor="white"
            stopOpacity="0"
          />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2_8349"
          x1="18"
          y1="2"
          x2="18"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop
            offset="1"
            stopColor="white"
            stopOpacity="0"
          />
        </linearGradient>
        <linearGradient
          id="paint2_linear_2_8349"
          x1="18"
          y1="9"
          x2="18"
          y2="25"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop
            offset="1"
            stopColor="white"
            stopOpacity="0"
          />
        </linearGradient>
        <linearGradient
          id="paint3_linear_2_8349"
          x1="18"
          y1="9"
          x2="18"
          y2="25"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop
            offset="1"
            stopColor="white"
            stopOpacity="0"
          />
        </linearGradient>
        <clipPath id="clip0_2_8349">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(10 9)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Logo;
