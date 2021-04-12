import React from 'react';
import {List} from './List'

const items = [1, 2, 3, 4, 5];

class Page extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <List items={items} />
            </div>
        )
    }
}

export default Page;