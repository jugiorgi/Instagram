import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 10%;

    display: flex;
    align-items: center;
`;

export const AddStories = styled.div`
    height: 120px;
    width: 120px;

    button {
        background-image: url('https://66.media.tumblr.com/dc960340a5c17d5695f7e8b10879911b/tumblr_prj2m2kXwe1szajfa_540.jpg');
        background-size: 100%;

        height: 100%;
        width: 100%;

        border: none;
        border-radius: 50%;

        opacity: .8;
    }
`;

export const AllStories = styled.div`
    height: 100%;
    width: 100%;   
    display: flex;
    flex-direction: row;

    button + button{
        margin: 0 10px;
        height: 120px;
        width: 120px;   
        background: none;
        border: 0;
    }

    button {
        margin: 0 10px 0 20px;
        height: 120px;
        width: 120px;   
        background: none;
        border: 0;
    }
`;


