function MediaPlayer(config) {
  this.media = config.el
  this.plugins = config.plugins || [] // Si no hay plugins se llena con un array vacío

  this._initPLugins()
}

MediaPlayer.prototype._initPLugins = function() {
  const player = {
    media: this.media,
    play: () => this.play(),
    pause: () => this.pause(),
    get muteado() {
      return this.media.muted
    },
    set muteado(value) {
      this.media.muted = value
    }
  }

  this.plugins.forEach(plugin => {
    // plugin.run(this) // ya no queremos que todos los plugins tengan acceso a todo nuestro prototype
    plugin.run(player)  
  })
}

MediaPlayer.prototype.play = function() {
  this.media.play()
}

MediaPlayer.prototype.pause = function() {
  this.media.pause()
}

MediaPlayer.prototype.togglePlay = function() {
  (this.media.paused) 
    ? this.play()
    : this.pause()
}

MediaPlayer.prototype.mute = function() {
  this.media.muted = true
}

MediaPlayer.prototype.unmute = function() {
  this.media.muted = false
}
MediaPlayer.prototype.toggleMute = function() {
  (this.media.muted)
    ? this.unmute()
    : this.mute()
}

export default MediaPlayer