import React from 'react';
import { Col, Card, CardImg, CardBody, CardTitle, CardLink } from 'reactstrap';
import Truncate from 'react-truncate';

import {AUTHOR_LINK, PHOTO_LINK} from '../../constants';
import './photo-card.css';

const PhotoCard = ({title, tags, owner, description, imageUrl, id}) => (
    <Col className="photo-card" xl={3} md={4} sm={6}>
      <Card className="shadow bg-white rounded">
        <CardImg top width="100%" height="200px" src={imageUrl} alt="" />
        <CardBody>
          <CardTitle>
            <CardLink href={PHOTO_LINK({authorId: owner, photoId: id})}>
              <span className="photo-title photo-link">{title}</span>
            </CardLink>
            <span> by </span>
            <CardLink href={AUTHOR_LINK(owner)}>
              <span className="photo-link">{owner}</span>
            </CardLink>
          </CardTitle>
          <div className="photo-description">
            <span className="photo-description-title">Description: </span>
            <Truncate lines={2} ellipsis="...">{description._content || ''}</Truncate>
          </div>
          <div className="photo-tags">
            <span className="photo-tags-title">Tags: </span> {tags || ''}
          </div>
        </CardBody>
      </Card>
    </Col>
);

export default PhotoCard;