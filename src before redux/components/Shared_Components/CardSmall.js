import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';
import card from '../../Assets/Images/card.jpg'

const CardSmall = (props) => {
    return (
        <Card style={{ width: '18rem',minWidth:'15rem',margin:"10px" }}>
            <Card.Img variant="top" src={card} />
            <ListGroup className="list-group-flush">
                <ListGroup.Item>{props.props.title}</ListGroup.Item>
                <ListGroup.Item>{props.props.rating}</ListGroup.Item>
                <ListGroup.Item>{props.props.price}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default CardSmall