import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {
  Company,
  Blues,
  StyledSubTitle,
  StyledTitle,
  CopyrightText,
  StyledIcon,
  StyledFormButton
} from '../components/style';
import './style.css';

export default class Entry extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeFname = this.onChangeFname.bind(this);
    this.onChangeMname = this.onChangeMname.bind(this);
    this.onChangeSname = this.onChangeSname.bind(this);
    this.onChangeRegNumber = this.onChangeRegNumber.bind(this);
    this.onChangeRegDate = this.onChangeRegDate.bind(this);
    this.onChangeDateOfBirth = this.onChangeDateOfBirth.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeEthnicity = this.onChangeEthnicity.bind(this);
    this.onChangeCounty = this.onChangeCounty.bind(this);
    this.onChangeConstituency = this.onChangeConstituency.bind(this);
    this.onChangeWard = this.onChangeWard.bind(this);
    this.onChange_Id = this.onChange_Id.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      Fname: '',
      Mname: '',
      Sname: '',
      regDate: '',
      regNumber: '',
      dateOfBirth: '',
      gender: '',
      ethnicity: '',
      county: '',
      constituency: '',
      ward: '',
      _id: ''
    }
  }

  onChangeFname(e) {
    this.setState({ Fname: e.target.value })
  }

  onChangeMname(e) {
    this.setState({ Mname: e.target.value })
  }

  onChangeSname(e) {
    this.setState({ Sname: e.target.value })
  }

  onChangeRegDate(e) {
    this.setState({ regDate: e.target.value })
  }

  onChangeRegNumber(e) {
    this.setState({ regNumber: e.target.value })
  }

  onChangeDateOfBirth(e) {
    this.setState({ dateOfBirth: e.target.value })
  }

  onChangeGender(e) {
    this.setState({ gender: e.target.value })
  }

  onChangeEthnicity(e) {
    this.setState({ ethnicity: e.target.value })
  }

  onChangeCounty(e) {
    this.setState({ county: e.target.value })
  }

  onChangeConstituency(e) {
    this.setState({ constituency: e.target.value })
  }

  onChangeWard(e) {
    this.setState({ ward: e.target.value })
  }

  onChange_Id(e) {
    this.setState({ _id: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const studentObject = {
      Fname: this.state.Fname,
      Mname: this.state.Mname,
      Sname: this.state.Sname,
      regDate: this.state.regDate,
      regNumber: this.state.regNumber,
      dateOfBirth: this.state.dateOfBirth,
      gender: this.state.gender,
      ethnicity: this.state.ethnicity,
      county: this.state.county,
      constituency: this.state.constituency,
      ward: this.state.ward,
      _id: this.state._id
    };
    axios.post('http://localhost:4000/students/createuser', studentObject)
      .then(res => console.log(res.data));

    this.setState({
        Fname: '',
        Mname: '',
        Sname: '',
        regDate: '',
        regNumber: '',
        dateOfBirth: '',
        gender: '',
        ethnicity: '',
        county: '',
        constituency: '',
        ward: '',
        _id: ''
    })
  }

  render() {
    return (
      <>
        <Company width={30}>
          <StyledTitle size={48}>
            COMPANY NAME
          </StyledTitle>
          <CopyrightText>
            SLOGAN
          </CopyrightText>
        </Company>
        <Blues>
          <div className="wrapper">
            <Form onSubmit={this.onSubmit}>
              <Form.Group controlId="Name">
                <Form.Label>FIRST NAME</Form.Label>
                <Form.Control type="text" placeholder='First Name' value={this.state.Fname} onChange={this.onChangeFname} />
              </Form.Group>

              <Form.Group controlId="Name">
                <Form.Label>MIDDLE NAME</Form.Label>
                <Form.Control type="text" placeholder='Middle Name' value={this.state.Mname} onChange={this.onChangeMname} />
              </Form.Group>

              <Form.Group controlId="Name">
                <Form.Label>SURNAME</Form.Label>
                <Form.Control type="text" placeholder='Surname' value={this.state.Sname} onChange={this.onChangeSname} />
              </Form.Group>

              <Form.Group controlId="Name">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type="date" value={this.state.dateOfBirth} onChange={this.onChangeDateOfBirth} />
              </Form.Group>

              <Form.Group controlId="Name">
                <Form.Label>Gender</Form.Label>
                <Form.Control type="text" value={this.state.gender} onChange={this.onChangeGender} />
              </Form.Group>

              <Form.Group controlId="Name">
                <Form.Label>Ethnicity</Form.Label>
                <Form.Control type="text" placeholder='Ethnicity' value={this.state.ethnicity} onChange={this.onChangeEthnicity} />
              </Form.Group>

              <Form.Group controlId="Name">
                <Form.Label>County</Form.Label>
                <Form.Control type="text" value={this.state.county} onChange={this.onChangeCounty} />
              </Form.Group>

              <Form.Group controlId="Name">
                <Form.Label>Constituency</Form.Label>
                <Form.Control type="text" value={this.state.constituency} onChange={this.onChangeConstituency} />
              </Form.Group>

              <Form.Group controlId="Name">
                <Form.Label>Ward</Form.Label>
                <Form.Control type="text" value={this.state.ward} onChange={this.onChangeWard} />
              </Form.Group>

              <StyledFormButton type="submit">
                REGISTER
              </StyledFormButton>
            </Form>
          </div>
        </Blues>
      </>
    );
  }
}