import React from 'react'

export const BlurBlobOne = ({ ...rest }) => (
  <svg
    {...rest}
    width="2373"
    height="1455"
    viewBox="0 0 2373 1455"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_f)">
      <ellipse cx="1187" cy="624" rx="339" ry="267" 
      // fill="#8CE1F9"
      fill="#A3BCCF"
       />
    </g>
    <defs>
      <filter
        id="filter0_f"
        x="648"
        y="157"
        width="2000"
        height="2000"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur" />
      </filter>
    </defs>
  </svg>
)

export const BlurBlobTwo = () => (
  <svg
    width="2373"
    height="1455"
    viewBox="0 0 2373 1455"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0)">
      <g filter="url(#filter0_f)">
        <ellipse cx="1186.5" cy="727.5" rx="303.5" ry="277.5" 
        // fill="#8CE1F9"
        fill="#2C3142" 
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_f"
        x="383"
        y="-50"
        width="2000"
        height="2000"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur" />
      </filter>
      <clipPath id="clip0">
        <rect width="2373" height="1455" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export const BlurBlobThree = ({ ...rest }) => (
  <svg
    width="2373"
    height="1455"
    viewBox="0 0 2373 1455"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_f)">
      <ellipse cx="1186.5" cy="727" rx="257.5" ry="284" 
      // fill="#FBEC6A"
      fill="#A3BCCF" 
      />
    </g>
    <defs>
      <filter
        id="filter0_f"
        x="729"
        y="243"
        width="2000"
        height="2000"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur" />
      </filter>
    </defs>
  </svg>
)
