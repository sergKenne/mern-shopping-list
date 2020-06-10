import React, { Component } from 'react'
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'react-uuid';
import {connect} from 'react-redux';
import {removeItem, getItem} from '../redux/items/actionItem'

class ShoppingList extends Component {

    componentDidMount() {
        this.props.showItem();
    }

    
    render() {

        const {items} = this.props.items;
        return (
            <div>
                <Container>
                    <Button
                        color="dark"
                        style={{marginBottom: "2rem", marginTop: "2rem"}}
                        onClick={()=> {
                            const name = prompt("enter Item");

                            // if(name) {
                            //    this.setState( state => ({
                            //        items: [...state.items, {id: uuid(), name:name}]
                            //    }))
                            // }
                        }}
                    >
                        add list
                    </Button>
                    <ListGroup>
                        <TransitionGroup>
                            {items.map(({id, name}) => (
                                <CSSTransition key={id} timout={500} classNames="fade">
                                    <ListGroupItem>
                                        <Button
                                            color="danger"
                                            size="2rem"
                                            style={{marginRight:"1rem"}}
                                            onClick={()=>{
                                                // this.setState(state => ({
                                                //     items: state.items.filter(item => item.id !== id)
                                                // }))
                                                //alert("yes")
                                                this.props.deleteItem(id)
                                            }}
                                        >X</Button>
                                        { name }
                                    </ListGroupItem>
                                </CSSTransition>    
                            ))}
                        </TransitionGroup>
                    </ListGroup>

                </Container>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteItem: (id) => dispatch(removeItem(id)),
        showItem: () => dispatch(getItem())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);