import React, {Component} from 'react';
import uuid from 'react-uuid'
import {connect} from 'react-redux'
import { 
    Button,
    Modal, 
    ModalHeader, 
    ModalBody, 
    //ModalFooter, 
    Input, 
    Label, 
    Form, 
    FormGroup 
} from 'reactstrap';
import { addItem } from '../redux/items/actionItem';

class ItemModel extends Component {

    state = {
        model: false,
        name: ""
    } 

    toggle = () => {
        this.setState({
            model: !this.state.model
        })
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        const newItem = {
            id: uuid(),
            name: this.state.name,
            date: new Date()
        };

        this.props.addNewItem(newItem);

        console.log(newItem);
    }

    render() {
        return (
            <div>
               <Button
                 color="dark"
                 style={{marginBottom: "2rem", marginTop: "2rem"}}
                 onClick={this.toggle}
               >Add Item</Button>
               <Modal
               isOpen={this.state.model}
               toggle={this.toggle}
               >
                   <ModalHeader toggle={this.toggle}>Add To shoppingList</ModalHeader>
                   <ModalBody>
                       <Form onSubmit={this.onSubmit}>
                           <FormGroup>
                               <Label for="item">Item</Label>
                               <Input
                                  type="text"
                                  name="name"
                                  id="item"
                                  placeholder="Add shopping item"
                                  onChange= {this.onChange}
                               />
                               <Button 
                                 type="submit"
                                 color="dark" 
                                 style={{marginTop:"2rem", marginBottom:"2rem"}}
                                 onClick={this.toggle}
                                 block
                                >Submit</Button>
                           </FormGroup>
                       </Form>
                   </ModalBody>
               </Modal>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addNewItem: (newItem) => dispatch(addItem(newItem))
})

export default connect(null, mapDispatchToProps)(ItemModel) 

