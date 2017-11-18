import * as React from 'react';
import set from 'lodash.set';
import {
  Button,
  Card, CardHeader, CardBody, CardFooter,
  Container, Row, Col,
  Icon
} from 'cwds-components';
import { telephone } from 'cwds-components/utils/formatters';

// const change = fn => () => {
//   debugger;
//   fn(name, 'checkbox' === type ? checked : value);
// }

const change = fn => ({target: { type, checked, value, name }}) => fn(name, 'checkbox' === type ? checked : value);

const initialState = {
  mode: 'read',
  _saving: false,
  _dirty: false,
  _invalid: false,
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

export default class FavoriteThingsCard extends React.Component {

  static defaultProps = {};

  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleCancel = this.handleCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  // handleChange(event) {
  //   const target = event.target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   const name = target.name;
  //   this.setState({
  //     model: set(this.state.model, name, value)
  //   });
  // }

  handleChange(key, value) {
    this.setState(set(this.state, key, value));
  }

  _renderReadView(...props) {
    return <FavoriteThingsReadView {...props} {...this.state.model}/>
  }

  _renderEditView(...props) {
    return (
      <FavoriteThingsEditView
        {...props}
        model={this.state.model}
        onChange={this.handleChange}
      />
    );
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

const FavoriteThingsEditView = ({
  model: {
    email,
    fname,
    isAwesome,
    tel: telNumbers
  },
  onChange: _onChange
}) => {
  const onChange = change(_onChange);
  return (
    <form>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="model.email"
          className="form-control"
          placeholder="bob@example.com"
          value={email}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label>First Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Bob"
          value={fname}
          name="model.fname"
          onChange={onChange}
        />
      </div>
      <div className="form-check">
        <label className="form-check-label">
          <input
            type="checkbox"
            className="form-check-input"
            checked={isAwesome}
            name="model.isAwesome"
            onChange={onChange}
          />
          Awesome?
        </label>
      </div>
      <label>Telephone Numbers</label>
      {telNumbers.map(({type, value}, i, arr) => (
        <Row key={i}>
          <Col className="col-4">
            <div className="form-group">
              <input
                type="tel"
                className="form-control"
                placeholder="5554443322"
                value={value}
                name={`model.tel[${i}][value]`}
                onChange={onChange}
              />
            </div>
          </Col>
          <Col>
            <div className="form-check form-check-inline">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="radio"
                  name={`model.tel[${i}][type]`}
                  value="mobile"
                  checked={'mobile' === type}
                  onChange={onChange}
                />
                Mobile
              </label>
            </div>
            <div className="form-check form-check-inline">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="radio"
                  name={`model.tel[${i}][type]`}
                  value="work"
                  checked={'work' === type}
                  onChange={onChange}
                />
                Work
              </label>
            </div>
          </Col>
          <Col>
            <Button
              type="light"
              onClick={() => _onChange('model.tel', arr.filter((_, j) => i !== j))}
            >
              <Icon name="trash" />
            </Button>
          </Col>
        </Row>
      ))}
      <Button
        className="btn-block"
        type="success"
        onClick={() => _onChange('model.tel', [...telNumbers, { type: '', value: '' }])}
      >Add Telephone</Button>
    </form>
  );
};

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
      {telNumbers && telNumbers.map(({type, value}, i, arr) => {
        return (
          <Row key={value}><Col className="col-3">{type}</Col><Col>{telephone(value)}</Col></Row>
        );
      })}

    </Container>
  );
};
