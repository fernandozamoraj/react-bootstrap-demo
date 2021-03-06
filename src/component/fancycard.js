import React from 'react'
import {Card, ListGroup, ListGroupItem, Button, Container} from 'react-bootstrap'

const FancyCard = ({header,text,option1,option2,option3}) => {

    return (
        <React.Fragment>
            <Container className="mt-3">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/randomimage.jpg`} />
                    <Card.Body>
                        <Card.Title>FancyCard</Card.Title>
                        <Card.Text>
                        {text}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem><Button variant="outline-info" block>{option1}</Button></ListGroupItem>
                        <ListGroupItem><Button variant="outline-info" block>{option2}</Button></ListGroupItem>
                        <ListGroupItem><Button variant="outline-info" block>{option3}</Button></ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">Previous</Card.Link>
                        <Card.Link href="#">Next</Card.Link>
                    </Card.Body>
                </Card>
            </Container>
        </React.Fragment>
    )
}

export default FancyCard
