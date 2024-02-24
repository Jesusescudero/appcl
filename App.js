import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.phone}>
      <View style={styles.screen}>
        <View style={styles.superior}>
          <Text>X</Text>
          <Text>Para ti &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Siguiendo </Text>
        </View>
        <View style={styles.contenido}>
          <View style={styles.tweet}>
            <Image source={require('./assets/logo.jpg')} style={styles.avatar} />
            <View style={styles.tweetContent}>
              <View style={styles.userInfo}>
                <Text>jesus182</Text>
                <Text>@jesus_182</Text>
              </View>
              <Text>
                🇲🇽 ¡Viva Hidalgo! 🌮✨ Disfrutando de los ricos pastes,
                la cultura vibrante y la calidez de su gente. #Mexico #TravelAdventures 🌎❤️
              </Text>
              <View style={styles.tweetActions}>
                <Text>💬 200</Text>
                <Text>🔁 500</Text>
                <Text>❤️ 100</Text>
                <Image source={require('./assets/barras.png')} style={styles.barras} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.iconos}>
          <Image source={require('./assets/inic.png')} />
          <Image source={require('./assets/busc.png')} />
          <Image source={require('./assets/not.png')} />
          <Image source={require('./assets/icono.png')} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  phone: {
    flex: 1,
  },
  screen: {
    flex: 1,
    padding: 10,
  },
  superior: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});

export default App;
