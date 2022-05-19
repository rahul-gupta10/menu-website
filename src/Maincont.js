import React from 'react'
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Row } from 'reactstrap'
import Food from './Food'

export default function Maincont(props) {
  return (
    <Row style={{width:"70%",marginLeft:"auto",marginRight:"auto"}}>
       {Food.map((items)=>(
         <Col key={items.id} className="col-lg-6 col-md-6 col-sm-12  p-4">
          {/* <div >{items.title}</div> */}

          <Card>
    <CardImg
      alt="Card image cap"
      src={items.img}
      top
      width="100%"
    />
    <CardBody className={props.mode}>
      <CardTitle tag="h5">
        {items.title}
      </CardTitle>
      <CardText>
        {items.desc}
      </CardText>
      <Button onClick={()=>alert(items.price)}>
        {"Order"+ items.price}
      </Button>
    </CardBody>
  </Card>
         </Col>
      // <div key={items.id}>{items.title}</div>
      ))}
    </Row>


  )
}
