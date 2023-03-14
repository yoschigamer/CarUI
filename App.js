import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View } from 'react-native';
import Icons from './components/icon'
import MediaPlayer from './components/mediaPlayer.js';


export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.InterfacesContainer}>
          <View style={styles.Items}>
              <MediaPlayer ImageCover={require('./assets/splash.png')}/>
              <View style={styles.colonne1}>
                <View style={styles.Ligne1}>
                  <Icons ImageIcon={require('./assets/Icons/youtube_music.png')} Url={'https://music.youtube.com/'} />
                  <Icons ImageIcon={require('./assets/Icons/assistant.png')} Url={'https://assistant.google.com/services/invoke/uid/000000d139bbc4d4'} />
                  <Icons ImageIcon={require('./assets/Icons/car.png')} />
                </View>
                <View style={styles.Ligne2}>
                  <Icons ImageIcon={require('./assets/Icons/files.png')} Url={'://'} />
                  <Icons ImageIcon={require('./assets/Icons/terminal.png')} Url={'terminal://'} />
                  <Icons ImageIcon={require('./assets/Icons/firefox.png')} Url={'https://www.mozilla.org/fr/firefox/new/'} />
                </View>
              </View>
              <View style={styles.Ligne3}>
              <Icons ImageIcon={require('./assets/Icons/drive.png')} Url={'https://drive.google.com/'} />
                <Icons ImageIcon={require('./assets/Icons/youtube.png')} Url={'vnd.youtube://'} />
                <Icons ImageIcon={require('./assets/Icons/spotifyicon.png')} Url={'spotify://'} />
                <Icons ImageIcon={require('./assets/Icons/store.png')} Url={'market://'} />
                <Icons ImageIcon={require('./assets/Icons/waze.png')} Url={'https://waze.com/ul'} />
              </View>
            </View>
        </View> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
  },

  InterfacesContainer: {
    backgroundColor: '#DCDCDC',
    justifyContent: 'center',
    alignItems: 'center'
  },

  Items: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  addText: {

  },

  AddItems: {
    backgroundColor: '#D9D9D9',
    width: 130,
    height: 130,
    borderRadius: 30,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 22.5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 45,
    elevation: 24,
},

  Ligne1: {
    display: 'flex',
    flexDirection: 'row'
  },
  Ligne2: {
    display: 'flex',
    flexDirection: 'row'
  },
  Ligne3: {
    display: 'flex',
    flexDirection: 'row'
  }
  
});
