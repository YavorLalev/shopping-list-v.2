import { createGlobalStyle } from "styled-components";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({ subsets: ["latin"] });

export default createGlobalStyle`

:root{

--primary-color: #f8f9fb;
--secondary-color: #ff4a11;

}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${workSans.style.fontFamily};
    background: var(--primary-color)
  }
`;
