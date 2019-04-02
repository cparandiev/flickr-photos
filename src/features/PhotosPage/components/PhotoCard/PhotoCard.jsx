import React from 'react';
import { Col, Card, CardImg } from 'reactstrap';


const PhotoCard = ({imageUrl}) => (
    <Col className='photo-card' xl={3} md={4} sm={6}>
      <Card>
        <CardImg top width='100%' height='200px' src={imageUrl} alt='' />
      </Card>
    </Col>
);

export default PhotoCard;