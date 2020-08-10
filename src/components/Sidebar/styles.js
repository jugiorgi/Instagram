import styled from 'styled-components';

export const Container = styled.div`
	background: var(--color-primary);
    height: 100vh;
    width: 25%;
`;


export const UserProfile = styled.div`
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    header {
        width: 100%;
        height: 200px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    #logo {
        width: 50px;
        height: 50px;
    }

    #logo_name {
        width: 40%;
        height: 50px;
        margin-left: 24px;
    }

    h1 {
        margin-top: 2.5rem;
        color: var(--color-white);
        font-size: 24px;
    }

    span {
        margin-top: 1rem;
        color: var(--color-white);
        opacity: 0.4;
        font-size: 18px;
    }
`;

export const Content = styled.ul`   
    margin-top: 50px;
    height: 40%;
    width: 100%;
    color: var(--color-white);
    display: grid;
	grid-template: repeat(5, 1fr);

    li {
        height: 40px;
        display: flex;
        align-items: center;

        img {
            margin-left: 30px; 
            height: 25px;
            width: 25px;
        }

        span {
            margin-left: 20px; 
            font-size: 16px;
        }
    }
`;

