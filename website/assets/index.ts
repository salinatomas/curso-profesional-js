import MediaPlayer from '@salinatomass/platzimediaplayer'
import AutoPlay from '@salinatomass/platzimediaplayer/lib/plugins/AutoPlay'
import AutoPause from '@salinatomass/platzimediaplayer/lib/plugins/AutoPause'
import AdsPlugin from '@salinatomass/platzimediaplayer/lib/plugins/ads'

const video: HTMLMediaElement = document.querySelector('video')
const playButton: HTMLElement = document.querySelector('button#play-pause')
const muteButton: HTMLElement = document.querySelector('button#mute-unmute')

const player = new MediaPlayer({
  el: video, 
  plugins: [
    new AutoPlay(),
    new AutoPause(),
    new AdsPlugin()
  ]
})

playButton.onclick = () => player.togglePlay()
muteButton.onclick = () => player.toggleMute()

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error =>  {
    console.log(error.message);
  })
}
