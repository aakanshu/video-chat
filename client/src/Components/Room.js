import React from 'react';

export default class Room extends React.Component {
    
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        const { match: { params: {id} } } = this.props;
        console.log(id);
    }

    render() {
        return (
        <h1>Room page</h1>
            // join  info then video
            // invalid room id show message 
        );
    }
}