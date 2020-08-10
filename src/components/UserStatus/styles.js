import styled from 'styled-components';

export const Container = styled.div`
    margin:  5% 0; 
    width: 100%;
    display: grid;
	grid-template-columns: repeat(3, 1fr);
	list-style: none;

    div + div {
        border-left: 1px inset var(--color-white-opacity);
    }

    div {
        margin-top: 20%;
        padding: 20px;
        height: 40px;
		display: flex;
		flex-direction: column;
        justify-content: center;
        align-items: center;
		

        strong {
			font-size: 16px;
			line-height: 20px;
			color: var(--color-white);
			margin-top: 5px;
		}

		span {
			font-size: 18px;
            opacity: 0.5;
            color: #FFF;
			margin: 10px 0 20px;
		}
    }
`;
