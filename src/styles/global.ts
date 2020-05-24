import { createGlobalStyle } from 'styled-components';
import gitBG from '../assets/git_bg.svg';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  background: #f0f0f5 url(${gitBG}) no-repeat 70% top;
}

body, input, button {
  font: 16px 'Roboto', sans-serif;
}

button {
  cursor: pointer
}

#root {
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;

}
`;
