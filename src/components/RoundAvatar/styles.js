import styled from 'styled-components';

export const Container = styled.div`
    background: linear-gradient(-170deg, 
    var(--color-blue),
    var(--color-purple), 
    var(--color-pink), 
    var(--color-orange),
    var(--color-orange-light));

    border-radius: 50%;
    width: 100%;
    height: 100%;
    margin: auto;  

    display: flex;
    justify-content: center;
    align-items: center; 
`;

export const Border = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    width: 93%;
    height: 93%;
    border-radius: 50%;
    background: var(--color-primary);

    img {
    width: 85%;
    height: 85%;
    border-radius: 50%;
   }
    `;