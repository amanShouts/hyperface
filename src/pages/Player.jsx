import { useParams } from "react-router-dom";
import "./Player.css"
import { BsShare, BsChevronDown, BsPauseCircle, BsBook, BsFillPlayFill } from 'react-icons/bs';
import { AiOutlineVerticalLeft, AiOutlineVerticalRight, AiOutlineFastBackward, AiOutlineFastForward } from 'react-icons/ai'
import { useEffect, useState, useRef } from "react";

export function Player({ }) {

    const { id } = useParams(); // not use right now, can use to route later 

    const [played, setPlayed] = useState(false)
    const playerRef = useRef(null);
    const inputRef = useRef(null)
    const [current_seek_time, setCurrentSeektime] = useState("0:00")

    useEffect(() => {

    }, [])

    function togglePlay() {
        let playerId = playerRef.current.id
        // console.log("the id is ", playerId)

        if (played) {
            //already playing - so pause it 
            document.getElementById(`${playerId}`).pause()
        }
        else {
            document.getElementById(`${playerId}`).play()
        }
        setPlayed(prev => !prev)
    }

    function setSeekBar(event) {

        const minutes = Math.floor(event.target.currentTime / 60);
        const seconds = Math.floor(event.target.currentTime - minutes * 60);
        // const currentTime = str_pad_left(minutes, '0', 2) + ':' + str_pad_left(seconds, '0', 2);
        const currentTime = minutes + " : " + seconds

        let audio_input = inputRef.current.id
        console.log(audio_input)
        document.querySelector(`#${audio_input}`).value = currentTime

        setCurrentSeektime(currentTime)
    }

    function nextSong(action) {

    }

    function doFastForward(action) {
        console.log("fats forward ", action)
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
                <img src={require("../content_course.png")} alt="podcast" />
                <h2>Fundamentals of Product Des..</h2>
                <p>Chapter 2 - What is Product Design?</p>
            </div>

            <div className="player_buttons">
                <button>View Chapter Notes</button>
                <button> Attempt Quiz </button>
            </div>

            <div className="player_bar_wrap">
                <div className="player_bar_audio">
                    <audio id="my_audio" src={require("../lightness_of_being.mp3")} ref={playerRef} onTimeUpdate={(e) => { setSeekBar(e) }}></audio>
                </div>
                <div className="player_song_bar">
                    <input type="range" min="1" max="1000" value="10" ref={inputRef} id="audio_seek_bar" />
                </div>
                <div className="player_song_time">
                    <span>{current_seek_time}</span>
                    <span>0:43</span>
                </div>
            </div>

            <div className="player_song_icons">
                <AiOutlineVerticalLeft size={30} onClick={() => nextSong(-1)} />
                <AiOutlineFastBackward size={35} onClick={() => { doFastForward(-15) }} />
                {played == true ? <BsPauseCircle size={65} onClick={togglePlay} /> : <BsFillPlayFill size={65} onClick={togglePlay} />}
                <AiOutlineFastForward size={35} onClick={() => { doFastForward(15) }} />
                <AiOutlineVerticalRight size={30} onClick={() => nextSong(1)} />
            </div>

            <div className="player_chapters_wrap">
                <BsBook />
                <span>Chapters</span>
            </div>
        </div >
    )
}