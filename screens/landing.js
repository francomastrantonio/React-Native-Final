//import logo from './../../img/tinderWorldWideLogo.png';
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function Landing () {
  return (
    <View>
        <Text>
              ¿Estas listo para un encuentro casual?
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({});
/*
<Image 
        style={styles.navIcon}
        source={require('./../../img/tinderWorldWideLogo.png')}
        />

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  navIcon: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

/*
export const Landing = () =>{
  return (
    <HomePage>
      <NavBar>
        <Link href="/"><NavBarButton><h1>WorldWideTinder</h1><img src={logo} alt="Logo de TWW"></img></NavBarButton></Link>
        
      </NavBar> 
      
      <BodyPage>
        <MainCard>
          <TituloCard>
              ¿Estas listo para un encuentro casual?
          </TituloCard>
          <Link href="/login"><Boton>Lo estoy</Boton></Link>
        </MainCard>
      </BodyPage>
    </HomePage>
  )
}


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
//offset-x | offset-y | blur-radius | spread-radius | color 
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
const TituloCard = styled.h2`
display: block;
`
const NavBarButton = styled.button`
cursor: pointer;
background-color: black;
color: whitesmoke;
border-radius: 3px;
border: none;
//display: block;
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
*/