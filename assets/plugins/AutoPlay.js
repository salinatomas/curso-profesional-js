function AutoPLay() {}

AutoPLay.prototype.run = function(player) {
  if(!player.muteado) {
    player.muteado = true
  }
  player.play()
}

export default AutoPLay