import * as React from 'react';
import {
  Button,
  Card, CardHeader, CardBody, CardFooter,
  Container, Row, Col,
  Icon,
  utils
} from 'cwds-components';



const initialState = {
  mode: 'read',
  _saving: false,
  model: {
    email: 'danny.eck@osi.ca.gov',
    fname: 'Danny',
    lname: 'Eck',
    isAwesome: true,
    tel: [
      { value: '5553334444', type: 'mobile' },
      { value: '3334445566', type: 'office' }
    ]
  }
};

class FavoriteThingsCard extends React.Component {

  static defaultProps = {};

  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  _renderReadView(...props) {
    return <FavoriteThingsReadView {...props} {...this.state.model}/>
  }

  _renderEditView(...props) {
    return <FavoriteThingsEditView {...props} {...this.state.model}/>
  }

  _renderBody(...props) {
    return 'read' === this.state.mode
      ? this._renderReadView(...props)
      : this._renderEditView(...props)
      ;
  }

  handleCancel() {
    this.setState({ mode: 'read' });
  }

  handleSave() {
    this.setState({ _saving: true })
    setTimeout(() => {
      this.setState({
        mode: 'read',
        _saving: false
      });
    }, 1000);
  }

  render() {
    return (
      <Card>
        <CardHeader className="clear-fix">
          <h3 style={{display: 'inline-block'}}>Some Card Header</h3>
          <div className="card-actions">
            <Button
              type="light"
              size="sm"
              onClick={() => { this.setState({ mode: 'edit' }) }}
              className={'edit' === this.state.mode ? 'd-none' : false}
              >Edit</Button>
          </div>
        </CardHeader>

        <CardBody>{this._renderBody()}</CardBody>

        <CardFooter>
          <div className="card-actions">
            <Button
              type="light"
              size="sm"
              onClick={this.handleCancel}
              className={'edit' !== this.state.mode ? 'd-none' : false}
              disabled={this.state._saving}
              >Cancel</Button>
            {' '}
            <Button
              type="primary"
              size="sm"
              onClick={this.handleSave}
              className={'edit' !== this.state.mode ? 'd-none' : false}
              disabled={this.state._saving}
              >{
                !this.state._saving
                  ? 'Save'
                  : <span>
                      <Icon name='circle-o-notch' spin />{' '}
                      Saving...
                    </span>
                }</Button>
          </div>
        </CardFooter>
      </Card>
    );
  }
}

export default FavoriteThingsCard;

const FavoriteThingsEditView = ({
  email,
  fname,
  isAwesome,
  tel: telNumbers
}) => (
  <form>
    <div className="form-group">
      <label>Email</label>
      <input
        type="email"
        className="form-control"
        placeholder="bob@example.com"
        value={email}
        onChange={() => {}}
      />
    </div>
    <div className="form-group">
      <label>First Name</label>
      <input
        type="text"
        className="form-control"
        placeholder="Bob"
        value={fname}
        onChange={() => {}}
      />
    </div>
    <div className="form-check">
      <label className="form-check-label">
        <input
          type="checkbox"
          className="form-check-input"
          value={isAwesome}
          onChange={() => {}}
        />
        Awesome?
      </label>
    </div>
    <label>Telephone Numbers</label>
    {telNumbers.map(({type, value}) => (
      <Row key={value}>
        <Col className="col-4">
          <div className="form-group">
            <input
              type="tel"
              className="form-control"
              placeholder="5554443322"
              value={value}
              onChange={() => {}}
            />
          </div>
        </Col>
        <Col>
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="work"
                checked
                onChange={() => {}}
              />
              Mobile
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value="work"
                onChange={() => {}}
              />
              Work
            </label>
          </div>
        </Col>
      </Row>
    ))}
  </form>
);

const FavoriteThingsReadView = ({
  email,
  fname,
  isAwesome,
  tel: telNumbers
}) => {
  return (
    <Container>
      <Row>
        <Col className="col-3">Email</Col>
        <Col>{email}</Col>
      </Row>
      <Row><Col className="col-3">First Name</Col><Col>{fname}</Col></Row>
      <Row><Col className="col-3">Is Awesome?</Col><Col>{isAwesome ? 'Yes' : 'No'}</Col></Row>
      <br />
      <h4>Telephone</h4>
      {telNumbers.map(({type, value}, i, arr) => {
        return (
          <Row key={value}><Col className="col-3">{type}</Col><Col>{utils.telephoneFormatter(value)}</Col></Row>
        );
      })}

    </Container>
  );
};


/*
email:
"danny.eck@osi.ca.gov"
fname:
"Danny"
isAwesome:
true
lname:
"Eck"
tel:
Array[2]
0:
{…}
1:
{…}
*/
