import {Audio} from 'expo-av';
import React from 'react';
import _ from 'lodash';
import {Howl, Howler} from 'howler'
const soundPath= require('../audios/do.mp4');

    export async function playAudioDo()
    {
        //const {sound} = await Audio.Sound.createAsync({ uri: soundPath }, {shouldPlay: true});

        //await sound.setPositionAsync(0);
        //await sound.playAsync();
        

        new Audio(soundPath).play()
        const noteAudio = new Audio(document.getElementById(note).src);

    }

    export async function playAudioDos()
    {
        const {sound} = await Audio.Sound.createAsync({ uri: '../audios/dos.mp4' }, {shouldPlay: true});
        
        await sound.setPositionAsync(0);
        await sound.playAsync();
    }

    export async function playAudioRe()
    {
        const {sound} = await Audio.Sound.createAsync({ uri: '../audios/re.mp4' }, {shouldPlay: true});
        
        await sound.setPositionAsync(0);
        await sound.playAsync();
    }

    export async function playAudioRes()
    {
        const {sound} = await Audio.Sound.createAsync({ uri: '../audios/res.mp4' }, {shouldPlay: true});
        
        await sound.setPositionAsync(0);
        await sound.playAsync();
    }

    export async function playAudioMi()
    {
        const {sound} = await Audio.Sound.createAsync({ uri: '../audios/mi.mp4' }, {shouldPlay: true});
        
        await sound.setPositionAsync(0);
        await sound.playAsync();
    }
    
    export async function playAudioFa()
    {
        const {sound} = await Audio.Sound.createAsync({ uri: '../audios/fa.mp4' }, {shouldPlay: true});
        
        await sound.setPositionAsync(0);
        await sound.playAsync();
    }

    export async function playAudioFas()
    {
        const {sound} = await Audio.Sound.createAsync({ uri: '../audios/fas.mp4' }, {shouldPlay: true});
        
        await sound.setPositionAsync(0);
        await sound.playAsync();
    }

    export async function playAudioSol()
    {
        const {sound} = await Audio.Sound.createAsync({ uri: '../audios/sol.mp4' }, {shouldPlay: true});
        
        await sound.setPositionAsync(0);
        await sound.playAsync();
    }

    export async function playAudioSols()
    {
        const {sound} = await Audio.Sound.createAsync({ uri: '../audios/sols.mp4' }, {shouldPlay: true});
        
        await sound.setPositionAsync(0);
        await sound.playAsync();
    }

    export async function playAudioLa()
    {
        const {sound} = await Audio.Sound.createAsync({ uri: '../audios/la.mp4' }, {shouldPlay: true});
        
        await sound.setPositionAsync(0);
        await sound.playAsync();
    }

    export async function playAudioLas()
    {
        const {sound} = await Audio.Sound.createAsync({ uri: '../audios/las.mp4' }, {shouldPlay: true});
        
        await sound.setPositionAsync(0);
        await sound.playAsync();
    }

    export async function playAudioSi()
    {
        const {sound} = await Audio.Sound.createAsync({ uri: '../audios/si.mp4' }, {shouldPlay: true});
        
        await sound.setPositionAsync(0);
        await sound.playAsync();
    }
