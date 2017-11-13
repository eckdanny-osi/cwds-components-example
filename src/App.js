import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Alert,
  Card,
  Container,
  Icon,
  Link,
  Row,
  Col,
  Button,
} from 'cwds-components';
import 'cwds-components/dist/style.css';

const dismissAlert = () => {
  alert('You closed the alert!');
}

class App extends Component {
  render() {
    return (
      <div className="App">

        <h1>Kitchen Sink</h1>

        <h2>Alerts</h2>
        {/* <Alert type="primary"><strong>Primary</strong> Keep Calm and Carry On!</Alert> */}
        {/* <Alert type="secondary"><strong>Secondary</strong> Just meh!</Alert> */}
        <Alert type="success"><strong>Success</strong> It worked!</Alert>
        <Alert type="info"><strong>Info</strong> Just an FYI...</Alert>
        <Alert type="warning"><strong>Warning</strong> Be careful!</Alert>
        <Alert type="danger"><strong>Danger</strong> Oh nos! Something broke!</Alert>
        {/* <Alert type="light"><strong>Light</strong> I dunno...</Alert> */}
        {/* <Alert type="dark"><strong>dark</strong> I dunno...</Alert> */}

        <Alert type="info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et magna ut risus sollicitudin dapibus at nec mi. Fusce magna augue, tristique vitae velit ac, dictum iaculis turpis. Nullam blandit tincidunt enim, eget porta odio dapibus vel. Fusce quis molestie erat, ac malesuada massa. Curabitur et dui id turpis finibus ullamcorper. Morbi tincidunt mattis metus, non ultricies odio porttitor ac. Ut dictum nunc id ex iaculis, eu tempus orci rutrum. Aliquam aliquam tortor at magna viverra venenatis. Sed aliquet pellentesque tristique. Maecenas molestie commodo orci, id feugiat ligula consequat a. Sed auctor quam vel scelerisque sodales. Duis aliquet lectus ex.
        </Alert>

        <h2>Buttons</h2>

        <Button type="primary">Primary</Button>{' '}
        <Button type="secondary">Secondary</Button>{' '}
        <Button type="success">Success</Button>{' '}
        <Button type="danger">Danger</Button>{' '}
        <Button type="warning">Warning</Button>{' '}
        {/* <Button type="info">Info</Button>{' '} */}
        <Button type="light">Light</Button>{' '}
        {/* <Button type="dark">Dark</Button>{' '} */}
        <Button type="link">Link</Button>
        
        <h2>Cards</h2>
        <Card />

        <h2>Grid</h2>

        <Container>
          I am in a <tt>Container</tt>!
        </Container>
        <Container fluid>
          I am in a <tt>Fluid Container</tt>!
        </Container>
        <h3>All together now...</h3>
        <Container>
          <Row>
            <Col style={{ border: "1px solid red" }}>one</Col>
            <Col style={{ border: "1px solid blue" }}>two</Col>
            <Col style={{ border: "1px solid green" }}>three</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
