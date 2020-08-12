import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
	background: var(--color-primary);
    height: 100vh;
    width: 20%;
    margin-left: -20%;
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
        width: 50%;
        height: 100px;
        margin-left: 24px;
    }

    > div {
        width: 200px;
        height: 200px;
        border: none;
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

    hr {
        margin: 20px auto;
        height: 0;
        border: 0;
        border-top: 1px solid var(--color-white-opacity1);
        width: 80%;
    }

    li {
        height: 40px;
        display: flex;
        align-items: center;

        button {
            background: none;
            border: 0;
            margin-left: 10%; 

           
            .icons{
                color: var(--color-white);
            }

        }

        span {
            margin-left: 20px; 
            font-size: 20px;
        }
       
    }

    li:hover {
        background: var(--color-pink-opacity);
        border-right: 3px solid var(--color-pink);

        .icons{
            color: linear-gradient(0deg, blue, green 40%, red);
            background: linear-gradient(-170deg, 
                var(--color-blue),
                var(--color-purple), 
                var(--color-pink), 
                var(--color-orange),
                var(--color-orange-light));
        }
    }
    
`;

export const Icon = styled.div`
    background: red;
`;