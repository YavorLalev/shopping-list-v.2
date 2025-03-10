import { createGlobalStyle } from "styled-components";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({ subsets: ["latin"] });

export default createGlobalStyle`

:root{
--primary-color: #f8f9fb;
--secondary-color: #ff4a11;
--input-color: #fefefe;
--border-color: #e1ded9;
--overlay-color:rgba(113, 112, 111, 0.5);

--font-family: ${workSans.style.fontFamily};
--font-body: 300 1.1rem/1.5 var(--font-family);
--font-heading: 500 1.3rem/1.5 var(--font-family);
--font-button: 500 1.1rem/1.3 var(--font-family);
--font-label: 400 1.1rem/1.4 var(--font-family);
--font-product: 400 1.1rem/1.3 var(--font-family);
}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    font: var(--font-body);
    background: var(--primary-color);
  }
`;
