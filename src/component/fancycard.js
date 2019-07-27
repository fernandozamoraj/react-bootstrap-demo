import React from 'react'
import {Card, ListGroup, ListGroupItem, Button, Container} from 'react-bootstrap'

const FancyCard = ({header,text,option1,option2,option3}) => {

    return (
        <React.Fragment>
            <Container className="mt-3">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/8/2016/10/31113305/Post-Event-Survey.jpg" />
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
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            </Container>
        </React.Fragment>
    )
}

export default FancyCard
