import React from 'react';
import { Form, Input, Button } from 'reactstrap';

export class Search extends React.Component {
    render() {
        return (
            <Form inline>
                <Input type="text" name="search" id="searchBox" placeholder="..." />
                <Button>Search</Button>
            </Form>
        );
    }
}