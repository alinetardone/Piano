import _ from 'lodash';

import { Sound } from 'expo-av/build/Audio';


    export async function playAudioDo()
    {

        const soundPath= require('../audios/do.mpeg');
        const {sound} = await Sound.createAsync( soundPath , {shouldPlay: true});

        await sound.setPositionAsync(200);
        await sound.playAsync();
    }

    export async function playAudioDos()
    {
        const soundPath= require('../audios/dos.mpeg');
        const {sound} = await Sound.createAsync( soundPath , {shouldPlay: true});
        
        await sound.setPositionAsync(500);
        await sound.playAsync();
    }

    export async function playAudioRe()
    {
        const soundPath= require('../audios/re.mpeg');
        const {sound} = await Sound.createAsync( soundPath , {shouldPlay: true});
        
        await sound.setPositionAsync(200);
        await sound.playAsync();
    }

    export async function playAudioRes()
    {
        const soundPath= require('../audios/res.mpeg');
        const {sound} = await Sound.createAsync( soundPath , {shouldPlay: true});
        
        await sound.setPositionAsync(500);
        await sound.playAsync();
    }

    export async function playAudioMi()
    {
        const soundPath= require('../audios/mi.mpeg');
        const {sound} = await Sound.createAsync( soundPath , {shouldPlay: true});
        
        await sound.setPositionAsync(200);
        await sound.playAsync();
    }
    
    export async function playAudioFa()
    {
        const soundPath= require('../audios/fa.mpeg');
        const {sound} = await Sound.createAsync( soundPath , {shouldPlay: true});
        
        await sound.setPositionAsync(200);
        await sound.playAsync();
    }

    export async function playAudioFas()
    {
        const soundPath= require('../audios/fas.mpeg');
        const {sound} = await Sound.createAsync( soundPath , {shouldPlay: true});
        
        await sound.setPositionAsync(500);
        await sound.playAsync();
    }

    export async function playAudioSol()
    {
        const soundPath= require('../audios/sol.mpeg');
        const {sound} = await Sound.createAsync( soundPath , {shouldPlay: true});
        
        await sound.setPositionAsync(200);
        await sound.playAsync();
    }

    export async function playAudioSols()
    {
        const soundPath= require('../audios/sols.mpeg');
        const {sound} = await Sound.createAsync( soundPath , {shouldPlay: true});
        
        await sound.setPositionAsync(500);
        await sound.playAsync();
    }

    export async function playAudioLa()
    {
        const soundPath= require('../audios/la.mpeg');
        const {sound} = await Sound.createAsync( soundPath , {shouldPlay: true});
        
        await sound.setPositionAsync(500);
        await sound.playAsync();
    }

    export async function playAudioLas()
    {
        const soundPath= require('../audios/las.mpeg');
        const {sound} = await Sound.createAsync( soundPath , {shouldPlay: true});
        
        await sound.setPositionAsync(500);
        await sound.playAsync();
    }

    export async function playAudioSi()
    {
        const soundPath= require('../audios/si.mpeg');
        const {sound} = await Sound.createAsync( soundPath , {shouldPlay: true});
        
        await sound.setPositionAsync(500);
        await sound.playAsync();
    }
