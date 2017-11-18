import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardEdit,
  CardFooter,
  CardHeader,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from 'cwds-components'
import FavoriteThingsCard from './FavoriteThingsCard';

export default () => (
  <Container>
    <br />
    <br />
    <Row>
      <Col>
        <h1>Card Things</h1>
        <p>asldfkjasdlfj</p>

        <FavoriteThingsCard />

        <br />


        <h3>Simple Card</h3>
        <Card>
          <CardBody>I AM CARDBODY</CardBody>
        </Card>
        <br />
        <Card>
          <CardHeader>I AM CardHeader</CardHeader>
          <CardBody>I AM CARDBODY</CardBody>
          <CardFooter>I AM CARDFOOTER</CardFooter>
        </Card>
        <br />
        <br />

        <CardEdit

        >
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <input type="checkbox" className="form-check-input" />
                Check me out
              </label>
            </div>
          </form>
        </CardEdit>

        <br />
        <br />

        <Card>
          <CardHeader className="clear-fix">
            <h3 style={{display: 'inline-block'}}>Contact Log</h3>
            <div className="card-actions pull-right">
              <Button size="sm" type="light">View All Attempts</Button>{'  '}
              <Button size="sm" type="light">+ Add Attempt</Button>
            </div>
          </CardHeader>
          <ListGroup>
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </ListGroup>
          <CardFooter>Footer</CardFooter>
        </Card>

        <br />
        <br />
      </Col>
    </Row>
  </Container>
);
