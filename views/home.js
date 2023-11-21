import { playAudioDo, playAudioDos, playAudioRe, playAudioRes, playAudioMi, playAudioFa, playAudioFas, playAudioSol, playAudioSols, playAudioLa, playAudioLas, playAudioSi } from '../components/player';
import {View, TouchableOpacity } from 'react-native';
import styles from '../content/style';

export default function home() {
  return (
    <View style={styles.container}>
        
        <TouchableOpacity style={styles.teclaBranca} onPressIn={() => playAudioDo()}>
            
        </TouchableOpacity>

        <TouchableOpacity style={styles.teclaBranca} onPressIn={() => playAudioRe()}>
            
        </TouchableOpacity>

        <TouchableOpacity style={styles.teclaBranca} onPressIn={() => playAudioMi()}>
        
        </TouchableOpacity>

        <TouchableOpacity style={styles.teclaBranca} onPressIn={() => playAudioFa()}>
        
        </TouchableOpacity>

        <TouchableOpacity style={styles.teclaBranca} onPressIn={() => playAudioSol()}>
        
        </TouchableOpacity>

        <TouchableOpacity style={styles.teclaBranca} onPressIn={() => playAudioLa()}>
        
        </TouchableOpacity>

        <TouchableOpacity style={styles.teclaBranca} onPressIn={() => playAudioSi()}>

        </TouchableOpacity>

        <TouchableOpacity style={[styles.teclaPreta, {marginTop:'20%'}]} onPressIn={() => playAudioDos()}>
            
        </TouchableOpacity>

        <TouchableOpacity style={[styles.teclaPreta, {marginTop:'49%'}]} onPressIn={() => playAudioRes()}>
            
        </TouchableOpacity>

        <TouchableOpacity style={[styles.teclaPreta, {marginTop:'108%'}]} onPressIn={() => playAudioFas()}>
        
        </TouchableOpacity>

        <TouchableOpacity style={[styles.teclaPreta, {marginTop:'137%'}]} onPressIn={() => playAudioSols()}>
        
        </TouchableOpacity>

        <TouchableOpacity style={[styles.teclaPreta, {marginTop:'166%'}]} onPressIn={() => playAudioLas()}>
        
        </TouchableOpacity>


    </View>
  );
}