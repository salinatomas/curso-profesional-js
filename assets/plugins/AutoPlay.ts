import MediaPlayer from '../MediaPlayer'

class AutoPlay {
  constructor () { }
  
  run(player: MediaPlayer) {
    if(!player.media.muted) {
      player.mute()
    }
    player.play()
  }
}

export default AutoPlay