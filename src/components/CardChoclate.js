import React, { Component } from 'react';
import {Card,Button} from 'react-bootstrap'

class CardChoclate extends Component {
    deleteChocolateFun=()=>{
        this.props.deleteChocolate(this.props.chocolate._id)
    }
    getChocolateIDFun=()=>{
        this.props.getChocolateID(this.props.chocolate._id)
    }

    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.chocolate.img}/>
                <Card.Body>
                    <Card.Title>{this.props.chocolate.name}</Card.Title>
                   
                    <Button variant="primary" onClick={this.deleteChocolateFun}>DELETE</Button>
                    <Button variant="primary" onClick={this.getChocolateIDFun}>UPDATE</Button>


                </Card.Body>
            </Card>
        )
    }
}

export default CardChoclate;
