import styled from 'styled-components';

export const Container = styled.div`
    background: linear-gradient(-170deg, 
    var(--color-blue),
    var(--color-purple), 
    var(--color-pink), 
    var(--color-orange),
    var(--color-orange-light));

    border-radius: 50%;
    width: 150px;
    height: 150px;
    margin: auto;  

    display: flex;
    justify-content: center;
    align-items: center; 
`;

export const Border = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    width: 135px;
    height: 135px;
    border-radius: 50%;
    background: var(--color-primary);

    img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
   }
    `;