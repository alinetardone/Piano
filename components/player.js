import _ from 'lodash';
import { Sound } from 'expo-av/build/Audio';

    export async function playAudioDo()
    {
        const soundPath= require('../audios/do.mp4');
        const {sound} = await Sound.createAsync( soundPath , {shouldPlay: true});

        await sound.setPositionAsync(0);
        await sound.playAsync();

    }

    export async function playAudioDos()
    {
        const soundPath= require('../audios/dos.mp4');
        const {sound} = await Sound.createAsync( soundPath , {shouldPlay: true});
        
        await sound.setPositionAsync(0);
        await sound.playAsync();
    }

    export async function playAudioRe()
    {
        const soundPath= require('../audios/re.mp4');
        const {sound} = await Sound.createAsync( soundPath , {shouldPlay: true});
        
        await sound.setPositionAsync(0);
        await sound.playAsync();
    }

    export async function playAudioRes()
    {
        const soundPath= require('../audios/res.mp4');
        const {sound} = await Sound.createAsync( soundPath , {shouldPlay: true});
        
        await sound.setPositionAsync(0);
        await sound.playAsync();
    }

    export async function playAudioMi()
    {
        const soundPath= require('../audios/mi.mp4');
        const {sound} = await Sound.createAsync( soundPath , {shouldPlay: true});
        
        await sound.setPositionAsync(0);
        await sound.playAsync();
    }
    
    export async function playAudioFa()
    {
        const soundPath= require('../audios/fa.mp4');
        const {sound} = await Sound.createAsync( soundPath , {shouldPlay: true});
        
        await sound.setPositionAsync(0);
        await sound.playAsync();
    }

    export async function playAudioFas()
    {
        const soundPath= require('../audios/fas.mp4');
        const {sound} = await Sound.createAsync( soundPath , {shouldPlay: true});
        
        await sound.setPositionAsync(0);
        await sound.playAsync();
    }

    export async function playAudioSol()
    {
        const soundPath= require('../audios/sol.mp4');
        const {sound} = await Sound.createAsync( soundPath , {shouldPlay: true});
        
        await sound.setPositionAsync(0);
        await sound.playAsync();
    }

    export async function playAudioSols()
    {
        const soundPath= require('../audios/sols.mp4');
        const {sound} = await Sound.createAsync( soundPath , {shouldPlay: true});
        
        await sound.setPositionAsync(0);
        await sound.playAsync();
    }

    export async function playAudioLa()
    {
        const soundPath= require('../audios/la.mp4');
        const {sound} = await Sound.createAsync( soundPath , {shouldPlay: true});
        
        await sound.setPositionAsync(0);
        await sound.playAsync();
    }

    export async function playAudioLas()
    {
        const soundPath= require('../audios/las.mp4');
        const {sound} = await Sound.createAsync( soundPath , {shouldPlay: true});
        
        await sound.setPositionAsync(0);
        await sound.playAsync();
    }

    export async function playAudioSi()
    {
        const soundPath= require('../audios/si.mp4');
        const {sound} = await Sound.createAsync( soundPath , {shouldPlay: true});
        
        await sound.setPositionAsync(0);
        await sound.playAsync();
    }
