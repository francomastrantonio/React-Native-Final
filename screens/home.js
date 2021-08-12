import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View, Button, Image, TouchableOpacity, CheckBox, TextInput} from 'react-native';
//import { Landing } from "./screens/landing";

export const Home = () => {
  return(
    <>
    <Header />
    <View style={styles.bodyContainer}>
    
    </View>
    </>
    )
}

export const LandingContent = ({navigation}) => {
  return (
    <View style={styles.bodyContainer}>
<View style={styles.cardLanding}>
<Text style={styles.textLarge}>
¿Estas listo para un encuentro casual?
</Text>
<TouchableOpacity
  onPress={() => navigation.navigate('Login')}
  style={styles.nextButton}>
    <Text style={styles.buttonText}>
      Lo estoy
    </Text>
  </TouchableOpacity>
</View>
</View>
  )
}

export const LoginContent = ({navigation}) => {
  const [isSelected, setSelection] = React.useState(false);
  const [text, onChangeText] = React.useState("Anónimo");
  return (
    <View style={styles.bodyContainer}>
  <View style={styles.cardLogin}>
    <View style={styles.titleCard}>
      <Text style={styles.titleLabel}>
        Para comenzar.. 
      </Text>
      <Text style={styles.textMedium}>
        Completá los siguienes datos
      </Text>
    </View>
    <Text style={styles.titleLabel}>Nombre:</Text>
    <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    <Text style={styles.titleLabel}>Sexo:</Text>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Hombre</Text>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Mujer</Text>
      </View>
          
    <Text style={styles.titleLabel}>¿Cuál te interesa conocer?</Text>
    <View style={styles.checkboxContainer}>
      <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Hombre</Text>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Mujer</Text>
    </View>
    <TouchableOpacity
      onPress={() => navigation.navigate('Finder')}
      style={styles.nextButton}>
      
      <Text style={styles.buttonText}>
        Siguiente
      </Text>

    </TouchableOpacity>
</View>
</View>
  )
}

export const FinderContent = () => {

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
    
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  }else{

  return (
    <View style={styles.bodyContainer}>
    <View style={styles.humanCard}>
    <View style={styles.humanProfile}>
      <Image
        style={styles.humanImage}
        source={{
          uri: human.results[0].picture["large"]
        }}
      />
      <Text>{human.results[0].name["first"]} {human.results[0].name["last"]}, {human.results[0].dob["age"]} años</Text>
      <Text>{human.results[0].gender == "male" ? "Hombre" : "Mujer" }</Text>
      <Text>{human.results[0].location["city"]}, {human.results[0].location["state"]}</Text>
    </View>
    <View style={styles.buttonWrap}>
    <ButtonReactionDislike />
    <ButtonReactionLike />
    </View>
    </View>
    </View>
  )
}
}

export const Header = () => {
  return (
    <View
    style={{
      backgroundColor: 'black',
      paddingVertical: 30,
      flexDirection: 'row'
    }}
    >
      <BackButton />
      <HeaderLogo />
    </View>
  )
}

const HeaderLogo = () =>{
  return(
    <TouchableOpacity onPress={() => console.log('ir a landing')}>
      <Image
        style={styles.tinyLogo}
        source={require('../img/tinderWorldWideLogo.png')}
      />
    </TouchableOpacity>
  )
}
const BackButton = () =>{
  return(
    <TouchableOpacity onPress={() => console.log('Volver')}>
      <Image
        style={styles.backButton}
        source={require('../img/backButton.png')}
      />
    </TouchableOpacity>
  )
}

const ButtonReactionLike = () =>{
  return(
    <TouchableOpacity style={styles.buttonReactionLike} onPress={() => console.log('Like o dislike')}>
      <Image
        style={styles.buttonReactionImage}
        source={require('../img/heart.png')}
      />
    </TouchableOpacity>
  )
}
const ButtonReactionDislike = () =>{
  return(
    <TouchableOpacity style={styles.buttonReactionDislike} onPress={() => console.log('Like o dislike')}>
      <Image
        style={styles.buttonReactionImage}
        source={require('../img/notHeart.png')}
      />
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  cardLanding: {
    backgroundColor: 'whitesmoke',
    width: 300,
    //boxShadow: '0px 10px 10px 5px rgba(0, 0, 0, 0.2)',
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 6,
},
shadowOpacity: 0.37,
shadowRadius: 7.49,

elevation: 12,
    paddingTop: 70,
  },
  cardLogin: {
    backgroundColor: 'whitesmoke',
    width: 300,
    borderRadius: 20,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 6,
},
shadowOpacity: 0.37,
shadowRadius: 7.49,

elevation: 12,
    paddingTop: 30,
  },
  textLarge: {
    fontFamily: 'Roboto',
    fontSize: 30,
    textAlign: 'center',
  },
  textMedium: {
    fontFamily: 'Roboto',
    fontSize: 15,
    textAlign: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50
  },
  bodyContainer: {
  flex: 1,
  backgroundColor: 'lightcyan',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Roboto',
  },
  nextButton:{
    boxShadow: '0px 10px 10px 2px rgba(0, 0, 0, 0.2)',
    borderRadius: 10,
    backgroundColor: 'black',
    width: 120,
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    margin: 15,
  },
  backButton: {
    width: 50,
    height: 50,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 5,
    justifyContent: 'center'
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
  titleLabel: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    width: 200,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    alignSelf: 'center'
  },
  titleCard: {
    marginBottom: 20,
  },
  buttonReactionLike: {
    height: 60,
    width: 100,
    borderRadius: 10,
    backgroundColor: 'green',
    boxShadow: '0px 10px 10px 2px rgba(0, 0, 0, 0.2)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonReactionDislike: {
    height: 60,
    width: 100,
    borderRadius: 10,
    boxShadow: '0px 10px 10px 2px rgba(0, 0, 0, 0.2)',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  humanCard: {
    backgroundColor: 'whitesmoke',
    width: 300,
    borderRadius: 20,
    boxShadow: '0px 10px 10px 5px rgba(0, 0, 0, 0.2)',
    paddingTop: 10,
    alignItems: 'center'
  },
  humanImage: {
    width: 200,
    height: 200,
  },
  buttonWrap: {
    flexDirection: 'row',
    marginBottom: 10
  },
  humanProfile: {

  },
  buttonReactionImage: {
    width: 50,
    height: 50
  }
})


//export default function App() {
 // const [interestSex, setInterestSex] = React.useState("");
 // const [favorites, setFavorite] = React.useState([]);

//  return(
//    <View>
//    <Landing />
//    </View>
//  );
//}
  
  /*
  function handleSetSex(sexSelected) {
    setInterestSex(sexSelected);
  }

  function handleAddFavorite(human) {
    setFavorite((oldFavorites) => [...oldFavorites, human]);
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login 
          favorites={favorites} 
          setInterestSex={handleSetSex}
          />
        </Route>

        <Route path="/search">
          <Finder 
          interestSex={interestSex}
          addFavorite={handleAddFavorite}
          favorites={favorites}
          />
        </Route>

        <Route path="/">
          <Landing />
        </Route>

      </Switch>
    </BrowserRouter>
  )
}
*/

