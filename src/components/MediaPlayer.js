import React from "react"
import Window from "./Window"
import MediaPlayerIcon from "../assets/img/media_player.png"
import PauseIcon from "../assets/img/pause.png"
import PlayIcon from "../assets/img/play.png"
import StopIcon from "../assets/img/stop.png"
import MediaPlayerImage from "../assets/img/media_player_image.gif"
import Risen from "../assets/other/risen.mp3"
import "./MediaPlayer.scss"
import Button from "./Button";

class MediaPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {isPlaying: false, time: "00:00", canPlay: false}
  }

  componentDidMount() {
    this.initializeAudio()
  }

  initializeAudio() {
    this.audio = new Audio(Risen);
    this.audio.volume = 0.3;
    this.audio.loop = true
    this.audio.addEventListener("canplaythrough", () => this.setState({canPlay: true}))
    this.audio.addEventListener("timeupdate", () => {
      const time = this.audio.currentTime
      const seconds = Math.floor(time % 60)
        .toString().padStart(2, "0")
      const minutes = Math.floor(time / 60)
        .toString().padStart(2, "0")
      this.setState({time: `${minutes}:${seconds}`})
    })
  }

  play() {
    this.setState({isPlaying: true})
    this.audio.play()
  }

  pause() {
    this.setState({isPlaying: false})
    this.audio.pause()
  }

  stop() {
    this.setState({isPlaying: false})
    this.audio.pause()
    this.audio.currentTime = 0
  }

  render() {
    const {isPlaying, time, canPlay} = this.state
    const {closeWindow} = this.props

    return (
      <Window title="Media Player" logo={MediaPlayerIcon} onClose={closeWindow}>
        <div className="MediaPlayer">
          <img src={MediaPlayerImage} alt="" className="MediaPlayer__image"/>
          <div className="MediaPlayer__bottom">
          <div className="MediaPlayer__timer">
            [1] {time}
          </div>
          <div className="MediaPlayer__control">
            <div className="MediaPlayer__track">
              <span>
                Terry&nbsp;A.&nbsp;Davis&nbsp;-&nbsp;Risen&nbsp;(Piano&nbsp;Cover&nbsp;by&nbsp;Dave&nbsp;Eddy)
              </span>
            </div>
            <div className="MediaPlayer__buttons">
              <Button
                style={{width: 100, height: 24}}
                disabled={isPlaying || !canPlay}
                onClick={this.play.bind(this)}
                icon={PlayIcon}
              />
              <Button
                style={{height: 24}}
                disabled={!isPlaying}
                onClick={this.pause.bind(this)}
                icon={PauseIcon}
              />
              <Button
                style={{height: 24}}
                disabled={!isPlaying}
                onClick={this.stop.bind(this)}
                icon={StopIcon}
              />
            </div>
          </div>
          </div>
        </div>
      </Window>
    )
  }
}

export default MediaPlayer
