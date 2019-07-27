import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'

const Card = ({header,text,option1,option2,option3}) => {

    return (
        <React.Fragment>
            
            <Container>
                <Row>
                    <Col xs={3} md={3}/>
                    <Col offset={2} xs={3} md={3}>
                    CustomCard
                    </Col> 
                </Row>
                <Row className="mt-2">
                    
                    <Col xs={2} md={2}>
                        <Button variant="success" >back</Button>
                    </Col>
                    <Col xs={5} md={6}>
                        {text}
                    </Col>
                    <Col xs={2} md={2}>
                        <Button variant="success">next</Button>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col xs={3} md={3}/>
                    <Col offset={2} xs={3} nd={3}>
                        <Button variant="outline-info" block>{option1}</Button>
                    </Col>
                    
                </Row>
                <Row className="mt-2">
                <   Col xs={3} md={3}/>
                    <Col offset={2} xs={3}>
                    <Button variant="outline-info" block>{option2}</Button>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col xs={3} md={3}/>
                    <Col offset={2} xs={3}>
                        <Button variant="outline-info" block>{option3}</Button>
                    </Col> 
                </Row>
            </Container>
            
        </React.Fragment>
    )
}

export default Card
