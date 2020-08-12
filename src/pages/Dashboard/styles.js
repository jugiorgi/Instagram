import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	height: 100%;
	width: 80%;
	margin-left: 20%;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;

	margin: 0 50px;

	h1 {
		color: var(--color-white);
		font-size: 25px;
		margin: 3% 0;
	}
`;

export const PostList = styled.ul`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 50px;
	list-style: none;

	li {
		height: 400px;
		display: flex;
		flex-direction: column;
		margin-bottom: 50px;
	}
`;