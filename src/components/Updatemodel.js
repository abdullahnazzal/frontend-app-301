import React, { Component } from 'react';
import {Modal,Button} from 'react-bootstrap'

class Updatemodel extends Component {
    // deleteChocolateFun=()=>{
    //     this.props.deleteChocolate(this.props.chocolate._id)
    // }
    // getChocolateIDFun=()=>{
    //     this.props.getChocolateID(this.props.chocolate._id)
    // }

    render() {
        return (
            <Modal show={this.props.stateOfModal} onHide={this.props.closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>Update</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={this.props.updateChocolate}>
                    <input type="test" name="name" defaultValue={this.props.chosenChocolate.name} />
                    <input type="test" name="img" defaultValue={this.props.chosenChocolate.img}/>
                    <input type="submit" value="Update" />


                </form>
                </Modal.Body>
            <Modal.Footer>
              {/* <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button> */}
            </Modal.Footer>
          </Modal>
        )
    }
}

export default Updatemodel;
