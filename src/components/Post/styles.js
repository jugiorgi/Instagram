import styled from 'styled-components';

export const Container = styled.div`

   > img{
       width: 100%;
       height: 60%;
       margin-bottom: 10px;
   }

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin: auto;

        .person{
            margin-left: 10px;
        
            button {
                height: 40px;
                width: 40px;
                border: none;
                background: none;
                
                img {
                    margin: auto;
                }
            }

            strong {
                color: var(--color-white);
                margin-left: 15px;
            }
        }

        .actionButtons {
            width: 30%;
            margin-right: 10px;

            button {
                width: 20px;
                background: none;
                border: none;

            }
        }
    }
`;