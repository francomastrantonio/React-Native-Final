import React, { useEffect } from 'react';
import styled from 'styled-components'
import logo from './../../img/tinderWorldWideLogo.png';
import heart from './../../img/heart.png';
import notHeart from './../../img/notHeart.png';
import { useHistory } from 'react-router';

export const Finder = ({ humanProfile, addFavorite } ) =>{
  
  const history = useHistory();
  const [human, setHuman] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then(res => res.json())
      .then(
        (res) => {
          setHuman(res);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
    
    //const favoriteIDs = favorites.map((favorite) => favorite.id);
    
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  }else{

  return (
        <HomePage>
        <NavBar>
          <Link href="/"><NavBarButton><h1>WorldWideTinder</h1><img src={logo} alt="Logo de TWW"></img></NavBarButton></Link>  
        </NavBar> 
        
        <BodyPage>
          <MainCard>
              <ButtonReaction like={false}>
              <img src={notHeart} alt="Corazon tachado" width="50px"></img>
              </ButtonReaction>

              <HumanCard>
                <HumanImage src={human.results[0].picture["large"]}></HumanImage>
                <div>
                  <h3>{human.results[0].name["first"]} {human.results[0].name["last"]}, {human.results[0].dob["age"]} años</h3>
                  <h4>{human.results[0].gender == "male" ? "Hombre" : "Mujer" }</h4>
                  <h4>{human.results[0].location["city"]}, {human.results[0].location["state"]}</h4>
                  </div>
              </HumanCard>

              <ButtonReaction like={true} onClick={addFavorite()}>
                <img src={heart} alt="Corazon" width="50px"></img>
              </ButtonReaction>
            </MainCard>
          </BodyPage>
        </HomePage>
    
    )
        
}
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
border-radius: 20px;
align-items: center;
/* offset-x | offset-y | blur-radius | spread-radius | color */
box-shadow: 0px 10px 10px 5px rgba(0, 0, 0, 0.2);
justify-content: center;
flex-direction: row;
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

const HumanCard = styled.div`
display: flex;
flex-direction: column;
justify-items: center;
margin-bottom: 20px;
box-shadow: 0px 10px 10px 2px rgba(0, 0, 0, 0.2);
martin-top: 0px;
border-style: solid;
border-color: white;
`

const HumanImage = styled.img`
justify-content: center;
filter: drop-shadow(0 0 5px grey);
border-style: solid;
border-radius: 3px;
width: 300px;
`

const ButtonReaction = styled.button`
display: inline;
height: 350px;
width: 150px;
margin-inline: 2vw;
border-radius: 20px;
border-style: solid;
border-color: white;
box-shadow: 0px 10px 10px 2px rgba(0, 0, 0, 0.2);
background-color: ${(props) => props.like ? 'green' : 'red'};

`
export default Finder;
