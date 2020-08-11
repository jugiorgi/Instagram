import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  
:root {
    font-size: 60%;

    --color-background: #191b2a;
    --color-primary: #121421;
    --color-primary-light: #916BEA;
    --color-primary-dark: #000000;
	--color-blue: #4c5fd7;
	--color-purple: #7232bd;
	--color-orange: #f46f30;
	--color-orange-light: #ffdc7d;
	--color-pink: rgba(195, 42, 163);
	--color-pink-opacity:  rgba(195, 42, 163, .2);
	--color-white: #FFF;
	--color-white-opacity2: rgba(255, 255, 255, .2);
	--color-white-opacity1: rgba(255, 255, 255, .1);
}

* {
	margin:0;
	padding: 0;
	outline: 0;
	box-sizing: border-box;
}

*:focus {
	outline:0;
}

html, body, #root {
	min-height: auto;
	height: 100%;
	background: linear-gradient(-90deg, #7159c1, #ab59c1);
}

body {
	-webkit-font-smoothing: antialiased;
}

body, input, button, h1, span {
	font: 14px 'Roboto', sans-serif;
}

a {
	text-decoration: none;
}

ul {
	list-style: none;
}

button {
	cursor: pointer;
}
`;
