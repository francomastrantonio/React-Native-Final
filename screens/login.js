import React from 'react';
import { useHistory } from "react-router";
import styled from 'styled-components'
import logo from './../../img/tinderWorldWideLogo.png';

export const Login = ( { favorites, setInterestSex } ) =>{

  const [interestSelectedSex, setInterestSelectedSex] = React.useState();
  //const [nameUser, setNameUser] = React.useState("");
  const history = useHistory();

  function handleSubmitSexPreferences(){
    setInterestSex(interestSelectedSex);
    history.replace("/search");
  }

  function selectedInterestSexClick(event){
    setInterestSelectedSex(event.target.value);
  }

  return (
    <HomePage>
      <NavBar>
        <Link href="/"><NavBarButton><h1>WorldWideTinder</h1><img src={logo} alt="Logo de TWW"></img></NavBarButton></Link>
        
      </NavBar> 
      
      <BodyPage>
        <MainCard>
          <CardTitle>
              Para comenzar, completa los siguientes datos: 
          </CardTitle>
          <Label>Nombre:</Label>
          <InputName id="inputName"/>
          <Label>Sexo:</Label>
            <SelfSexDDL id="selfSex"/>
          <Label>¿Cuál te interesa conocer?</Label>
            <InterestSexDDL id="interest" onChange={selectedInterestSexClick} /> 
          <Link href="/search"><Boton onClick={handleSubmitSexPreferences} id="btnIngreso">Siguiente</Boton></Link>
        </MainCard>
        
      </BodyPage>
    </HomePage>
  )
}
//{favorites.map((favorite) => `${favorite.name}`)}


//DISEÑO DE INTERFAZ
const HomePage = styled.div`
width: 100vw;
height: 100vh;
background-color: lightcyan;
font-family: 'Roboto', sans-serif;
`

const NavBar = styled.div`
display: flex;
justify-content: center;
background-color: black ;
height: 132px;
color: whitesmoke;
`

const BodyPage = styled.div`
display: flex;
width: 100vw;
height: 80vh;
justify-content: center;
align-items: center;
`

const MainCard = styled.div`
display: flex;
background-color: whitesmoke;
width: 50%;
height: 70%;
border-radius: 20px;
align-items: center;
/* offset-x | offset-y | blur-radius | spread-radius | color */
box-shadow: 0px 10px 10px 5px rgba(0, 0, 0, 0.2);
justify-content: center;
flex-direction: column;
`

//DISEÑO DE OBJETOS
const Boton = styled.button`
cursor: pointer;
background-color: black;
color: whitesmoke;
height: 60px;
width: 120px;
border-radius: 10px;
font-family: 'Roboto', sans-serif;
font-size: large;
margin-top: 5%;
transition: all ease-in-out 1s;

&:hover{
  filter: brightness(0.5);
  transform: translateX(10px);
}
&:disabled{
  filter: brightness(0.1);
}
`

const Link = styled.a`
  margin-top: 20px;
  vertical-align:baseline;
  background:transparent;
  color: whitesmoke;
  &:visited{
    color: whitesmoke;
  }
`

const CardTitle = styled.h2`
display: block;
margin-bottom: 10px;
`

const InputName = styled.input`
height: 30px;
`

const Label = styled.label`
  font-size: 20px;
  margin: 5px;
`

const NavBarButton = styled.button`
cursor: pointer;
background-color: black;
color: whitesmoke;
border-radius: 3px;
border: none;
font-family: 'Roboto', sans-serif;
font-size: large;
transition: all ease-in-out 1s;

&:hover{
  transform: translateY(10px);
}
img{
  height: 60px;
  width: 60px;
}
`
const SelfSexSelector = styled.select`
  height: 100px;

`

class SelfSexDDL extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Hombre'};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
        
          <SelfSexDDLStyle value={this.state.value} onChange={this.handleChange}>
            <option value="man">Hombre</option>
            <option value="woman">Mujer</option>
          </SelfSexDDLStyle>
        
    );
  }
}

class InterestSexDDL extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Todos'};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
        
          <SelfSexDDLStyle value={this.state.value} onChange={this.handleChange}>
            <option value="man">Hombre</option>
            <option value="woman">Mujer</option>
            <option value="all">Todos</option>
          </SelfSexDDLStyle>
        
    );
  }
}

const SelfSexDDLStyle = styled.select`
    background: white;
    border: 1px solid #675d5d;
    padding: 5px 10px;
    outline: none;
    border-radius: 4px;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;

    width: 170px;
button {
    appearance: auto;
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: center;
    align-items: flex-start;
    cursor: default;
    
}
`
export default Login;