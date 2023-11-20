import { playAudioDo, playAudioDos, playAudioRe, playAudioRes, playAudioMi, playAudioFa, playAudioFas, playAudioSol, playAudioSols, playAudioLa, playAudioLas, playAudioSi } from '../components/player';
import {View, TouchableOpacity } from 'react-native';
import styles from '../content/style';

export default function home() {
  return (
    <View style={styles.container}>
        
        <TouchableOpacity style={styles.teclaBranca} onPress={() => playAudioDo()}>
            
        </TouchableOpacity>

        <TouchableOpacity style={styles.teclaBranca} onPress={() => playAudioRe()}>
            
        </TouchableOpacity>

        <TouchableOpacity style={styles.teclaBranca} onPress={() => playAudioMi()}>
        
        </TouchableOpacity>

        <TouchableOpacity style={styles.teclaBranca} onPress={() => playAudioFa()}>
        
        </TouchableOpacity>

        <TouchableOpacity style={styles.teclaBranca} onPress={() => playAudioSol()}>
        
        </TouchableOpacity>

        <TouchableOpacity style={styles.teclaBranca} onPress={() => playAudioLa()}>
        
        </TouchableOpacity>

        <TouchableOpacity style={styles.teclaBranca} onPress={() => playAudioSi()}>

        </TouchableOpacity>

        <TouchableOpacity style={[styles.teclaPreta, {marginTop:'17%'}]} onPress={() => playAudioDos()}>
            
        </TouchableOpacity>

        <TouchableOpacity style={[styles.teclaPreta, {marginTop:'39%'}]} onPress={() => playAudioRes()}>
            
        </TouchableOpacity>

        <TouchableOpacity style={[styles.teclaPreta, {marginTop:'89%'}]} onPress={() => playAudioFas()}>
        
        </TouchableOpacity>

        <TouchableOpacity style={[styles.teclaPreta, {marginTop:'112%'}]} onPress={() => playAudioSols()}>
        
        </TouchableOpacity>

        <TouchableOpacity style={[styles.teclaPreta, {marginTop:'136%'}]} onPress={() => playAudioLas()}>
        
        </TouchableOpacity>


    </View>
  );
}