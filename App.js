import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.phone}>
      <View style={styles.screen}>
        <View style={styles.superior}>
          <Text style={styles.whiteText}>X</Text>
          <Text style={styles.whiteText}>Para ti &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Siguiendo </Text>
        </View>
        <View style={styles.contenido}>
          <View style={styles.tweet}>
            <Image source={require('./assets/logo.jpg')} style={styles.avatar} />
            <View style={styles.tweetContent}>
              <View style={styles.userInfo}>
                <Text style={styles.whiteText}>jesus182</Text>
                <Text style={styles.whiteText}>@jesus_182</Text>
              </View>
              <Text style={styles.whiteText}>
                🇲🇽 ¡Viva Hidalgo! 🌮✨ Disfrutando de los ricos pastes,
                la cultura vibrante y la calidez de su gente. #Mexico #TravelAdventures 🌎❤️
              </Text>
              <View style={styles.tweetActions}>
                <Text style={styles.whiteText}>💬 200</Text>
                <Text style={styles.whiteText}>🔁 500</Text>
                <Text style={styles.whiteText}>❤️ 100</Text>
                <Image source={require('./assets/barras.png')} style={styles.barras} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.iconos}>
          <Image source={require('./assets/inic.png')} style={styles.icon} />
          <Image source={require('./assets/busc.png')} style={styles.icon} />
          <Image source={require('./assets/not.png')} style={styles.icon} />
          <Image source={require('./assets/icono.png')} style={styles.icon} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  phone: {
    flex: 1,
    backgroundColor: 'black',
  },
  screen: {
    flex: 1,
    padding: 10,
  },
  superior: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30, // Ajusta el margen superior según tus preferencias
  },
  contenido: {
    marginTop: 20,
  },
  tweet: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  tweetContent: {
    flex: 1,
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  tweetActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  barras: {
    width: 20,
    height: 20,
  },
  iconos: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  icon: {
    width: 30,
    height: 30,
  },
  whiteText: {
    color: 'white',
  },
});

export default App;
