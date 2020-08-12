  
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 150px;
    margin-top: 50px;

    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const Search = styled.div`
    width: 70%;
    height: 50px;

    
    form {
        display: flex;
        align-items: center;
    }

    button {
        background: rgba(255,255,255,0.2);
        border: none;
        padding: 0 8px;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        height: 50px;
        width: 5%;
    }

    input {
        background: rgba(255,255,255,0.2);
        border: none;
        padding: 8px;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        height: 50px;
        width: 100%;

        font-size: 20px;
        color: var(--color-grey);
    }

`;

export const Aside = styled.div`
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    

    > button {
        background: none;
        border: none;
        height: 50px;
        width: 15%;
    }
`;

export const NewPhoto = styled.div`
    width: 50%;
    margin-left: 10%;

    button {
        background: linear-gradient(-170deg, 
            var(--color-pink) 20%, 
            var(--color-orange));
        border-radius: 8px;
        border: none;
        height: 50px;
        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    button:hover {
        opacity: .8;
    }

    span {
        font-size: 20px;
        color: var(--color-white);
        margin-left: 10px;
    }
`;
