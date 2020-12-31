import btnStyle, { css } from 'styled-components'

export const Button = btnStyle.a`
display: inline-block;
font-weight: 400;
color: #212529;
text-align: center;
vertical-align: middle;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: transparent;
border: 1px solid transparent;
padding: 0.375rem 0.75rem;
font-size: 1rem;
line-height: 1.5;
border-radius: 0.10rem;
color: #fff;
background-color: #1888ff;
border-color: transparent;
transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
${({heroBtn}) => heroBtn && css`
padding: 0.5rem 1rem;
font-size: 1.25rem;
line-height: 1.5;
border-radius: 0.3rem;
`}

${({btn_sm}) => btn_sm && css`
  background-color: #e91e63;
`}

`
