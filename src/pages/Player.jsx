import { useParams } from "react-router-dom";
import "./Player.css"
import { BsShare, BsChevronDown, BsPauseCircle, BsBook, BsFillPlayFill } from 'react-icons/bs';
import { AiOutlineVerticalLeft, AiOutlineVerticalRight, AiOutlineFastBackward, AiOutlineFastForward } from 'react-icons/ai'
import { useEffect, useState, useRef } from "react";
import "../audio/lightness_of_being.mp3"

export function Player() {

    const { id } = useParams(); // not used right now, can use to route later 

    const songArr = [
        "../audio/lightness_of_being.mp3",
        "../audio/jon_hopkins.wav",
        "../audio/sleepwalking.mp3",
        "../audio/skee_mask.wav",
        "../audio/floating.wav",
        "../audio/harshita.mp3"
    ]

    const [played, setPlayed] = useState(false)
    const [song, setSong] = useState(0)
    const playerRef = useRef(null);
    const inputRef = useRef(null)
    const animateRef = useRef(null)

    const [current_seek_time, setCurrentSeektime] = useState("0:00")
    console.log(played)

    useEffect(() => {
        let seekbar = inputRef.current
        seekbar.value = 0
    }, [])

    function togglePlay() {

        let playerId = playerRef.current.id // audio
        setPlayed(prev => {
            return prev === true ? false : true
        })
        if (played) {
            //already playing - so pause it 
            document.getElementById(`${playerId}`).pause()
            // playerRef.current.pause()
            window.cancelAnimationFrame(animateRef.current)
        }
        else {
            document.getElementById(`${playerId}`).play()
            animateSeekBar()
        }
    }

    // function setSeekBar(event) {

    //     const minutes = Math.floor(event.target.currentTime / 60);
    //     const seconds = Math.floor(event.target.currentTime - minutes * 60);
    //     const currentTime = minutes + " : " + seconds
    //     // const currentTime = str_pad_left(minutes, '0', 2) + ':' + str_pad_left(seconds, '0', 2);
    //     const currentTimeNumber = event.target.currentTime

    //     let audio_duration = event.target.duration
    //     let movePercent = Math.floor(+currentTimeNumber / +audio_duration * 100)
    //     // console.log(audio_duration, movePercent)

    //     // let audio_input_id = inputRef.current.id
    //     // document.querySelector(`#${audio_input_id}`).value = movePercent

    //     let seekbar = inputRef.current
    //     // seekbar.value = movePercent
    //     animateSeekBar(seekbar, movePercent)
    //     setCurrentSeektime(currentTime)
    // }

    function animateSeekBar() {
        let audio = playerRef.current // audio
        let movement = Math.floor(audio.currentTime / audio.duration * 100)
        let seekbar = inputRef.current // input
        seekbar.value = movement

        if (movement >= 100)
            return;

        console.log(played)

        animateRef.current = window.requestAnimationFrame(animateSeekBar);
    }

    function nextSong(action) {

    }

    function doFastForward(action) {
        // console.log("fats forward ", action)
        let playerId = playerRef.current.id
        if (action === 15) {
            document.querySelector(`#${playerId}`).currentTime = +document.querySelector(`#${playerId}`).currentTime + 15
        }
        else if (action === -15) {
            document.querySelector(`#${playerId}`).currentTime = +document.querySelector(`#${playerId}`).currentTime - 15
        }
    }

    return (
        <div className="player_main">
            <div className="player_icons_row1">
                <BsChevronDown size={20} /> <BsShare size={20} />
            </div>

            <div className="player_course_wrap">
                <img src={require("../images/content_course.png")} alt="podcast" />
                <h2>Fundamentals of Product Des..</h2>
                <p>Chapter 2 - What is Product Design?</p>
            </div>

            <div className="player_buttons">
                <button>View Chapter Notes</button>
                <button> Attempt Quiz </button>
            </div>

            <div className="player_bar_wrap">
                <div className="player_bar_audio">
                    <audio id="my_audio" src={require("../audio/lightness_of_being.mp3")} ref={playerRef} onTimeUpdate={(e) => { }}></audio>
                </div>
                <div className="player_song_bar">
                    <input type="range" min="1" max="100" ref={inputRef} id="audio_seek_bar" />
                </div>
                <div className="player_song_time">
                    <span>{current_seek_time}</span>
                    <span>0:43</span>
                </div>
            </div>

            <div className="player_song_icons">
                <AiOutlineVerticalRight size={30} onClick={() => nextSong(-1)} />
                <AiOutlineFastBackward size={35} onClick={() => { doFastForward(-15) }} />
                {played === true ? <BsPauseCircle size={65} onClick={togglePlay} /> : <BsFillPlayFill size={65} onClick={togglePlay} />}
                <AiOutlineFastForward size={35} onClick={() => { doFastForward(15) }} />
                <AiOutlineVerticalLeft size={30} onClick={() => nextSong(1)} />
            </div>

            <div className="player_chapters_wrap">
                <BsBook />
                <span>Chapters</span>
            </div>
        </div >
    )
}