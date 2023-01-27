import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
// import {Link, useNavigate} from "react-router-dom"
export class Newsitem extends Component {
  
  

      
  render() {
   

    let {title, description, imageUrl,newsUrl,author,date,source} = this.props;

  
    return (
      <>
      
         <Card className='mt-3' style={{ width: '20rem' }}>
         
        <Badge bg="warning" text="light" className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{zIndex: '1',marginLeft: '-35px'}}>
        {source}
      </Badge>
      <Card.Img variant="top" src={imageUrl} className='pu-5'  />
      
      <Card.Body>
      
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            {
                description
            }
        </Card.Text>
        <a href={newsUrl}><Button variant="primary" size ="sm" 
         
       >Read More</Button></a>
      </Card.Body>
      <Card.Footer>
          <small className="text-muted">By {author} on {new Date(date).toUTCString()}</small>
        </Card.Footer>
    </Card>
      </>
    )
  }
}

export default Newsitem