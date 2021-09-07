import React, { Component } from 'react';
import {Card,Button} from 'react-bootstrap'

class CardAPI extends Component {
    getChocolateIDFun=()=>{
        this.props.getChocolateID(this.props.chocolate.name)
    }
    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.chocolate.img}/>
                <Card.Body>
                    <Card.Title>{this.props.chocolate.name}</Card.Title>
                   
                    <Button variant="primary" onClick={this.getChocolateIDFun}>ADD TO Fav</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default CardAPI;
