import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector('video')
const buttonPLay = document.querySelector('button#play-pause')
const buttonMute = document.querySelector('button#mute-unmute')

const player = new MediaPlayer({
  el: video, 
  plugins: [
    new AutoPlay()
  ], 
})
buttonPLay.onclick = () => player.togglePlay()
buttonMute.onclick = () => player.toggleMute()
