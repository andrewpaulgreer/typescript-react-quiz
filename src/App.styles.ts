import styled, {createGlobalStyle} from 'styled-components'
//@ts-ignore
import BGImage from './images/ts-quiz.jpg'

export const GlobalStyle = createGlobalStyle`
html {
    height: 100%
}

body {
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
}

* {
    box-sizing: border-box;
    font-family: 'Kumbh', sans-sarif;
}
`;

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justfy-content: center;
align-items: center;

>p {
    color: #fff;
}

.score {
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 2rem;
    margin: 0;
}

h1{
font-family: Kumbh Inline;
background-image: linear-gradient(180deg, #fff, #87f1ff);
background-size: 100%;
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
-moz-background-clip: text;
-mox-text-fill-color: transparent;
filter: drop-shadow(2px 2px #0085a3)
font-size: 100px;
font-weight: 400;
text-allign: center;
margin: 30px;
}

.start, .next, .submit-button {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #87f1ff);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px reba(0,0,0,0.25);
    border-radius: 10px;
    height: 100px;
    margin: 20px 0;
    padding: 0 40px;
}

.start{
    width: 500px;
    height: 100px;
    font-size: 3rem;
}
.next{
 
    width: 600px;
    height: 100px;  
}


`
