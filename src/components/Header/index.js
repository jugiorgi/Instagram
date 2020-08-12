import React from 'react';

import { IoMdSearch, IoIosNotificationsOutline, IoMdPaperPlane, IoIosAddCircle } from "react-icons/io";

import { Container, Search, Aside, NewPhoto } from './styles';

export default function Header({ placeholder }) {

    function handleSubmit(){

    }

	return (
        <Container>
            <Search>
                <form onSubmit={handleSubmit}>
					<button type="submit">
						<IoMdSearch size={30} color="#999" />
					</button>
					<input name="filter" placeholder={placeholder} />
				</form>
            </Search>

            <Aside>
                <button type="button">
					<IoIosNotificationsOutline size={30} color="#FFF"/>
				</button>

                <button type="button">
					<IoMdPaperPlane size={30} color="#FFF"/>
				</button>

                <NewPhoto>
                    <button type="button">
                        <IoIosAddCircle size={30} color="#FFF"/>
                        <span>Add photo</span>
                    </button>
                </NewPhoto>
            </Aside>
        </Container>
	);
}