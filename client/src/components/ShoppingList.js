import React, { Component } from 'react'
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
//import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {connect} from 'react-redux';
import {removeItem, getItem} from '../redux/items/actionItem'

class ShoppingList extends Component {

    componentDidMount() {
        this.props.showItem();
    }

    render() {
        console.log(this.props.items);
        const {items} = this.props.items;
        return (
            <div>
                <Container>
                    <ListGroup>
                        {items.map(({id, name}) => (
                            <ListGroupItem key={id}>
                                <Button
                                    color="danger"
                                    size="2rem"
                                    style={{marginRight:"1rem"}}
                                    onClick={()=>{
                                        this.props.deleteItem(id)
                                    }}
                                >X</Button>
                                { name }
                            </ListGroupItem>
                        ))}
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