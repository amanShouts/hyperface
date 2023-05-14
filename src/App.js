import './App.css';
import { SimpleSlider } from "./pages/Carousel"
import { BsDiscord } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom'

export function App() {

  const navigate = useNavigate()

  const courses = [
    {

    },
    {

    },
    {

    }
  ]

  const articles = [
    {

    },
    {

    },
    {

    }
  ]

  function openPlayer() {
    navigate("/player/5")
  }

  return (
    <div className='course_page_wrap'>
      <div className='course_page_main'>
        <div className='course_page_name'>
          <div className='course_page_text'>

            <h3> Hey <span> Aman </span>👋 </h3>
            <p> Its a nice day to learn something </p>

          </div>

          <div className='course_page_profile'>
            <img className='profile_pic' src={require("./Aman_Singh_Photo.png")} alt="profile pic" />
          </div>

        </div>

        {/* ------------------------ row 2 ------------------------------- Communtiy  */}

        <div className='course_page_community_wrap'>
          <div className='course_page_community'>
            <p>Join and help us in building Airvoice!</p>
            <button> <BsDiscord className='course_page_community_discord' /> <span> Community </span> </button>
          </div>
        </div>


        {/*  ------------------------ row 3 ------------------------------- Courses */}

        <div className='course_page_course' >
          <div className='course_page_course_heading'>
            <h2>Courses for you</h2>
          </div>

          <div className='course_page_course_text'>
            <p>Listen to byte-sized audio courses from top thinkers</p>
          </div>

          <div className='course_page_course_carousel' onClick={() => { openPlayer() }}>
            {/* carousel  */}
            <SimpleSlider />
          </div>

        </div>

        {/* ------------------------row 4 ---------------------------- Articles  */}

        <div className='course_page_course' >
          <div className='course_page_course_heading'>
            <h2>Articles Reads</h2>
          </div>

          <div className='course_page_course_text'>
            <p>Listen to audio versions of top web articles</p>
          </div>

          <div className='course_page_course_carousel' onClick={() => { openPlayer() }}>
            {/* carousel  */}
            <SimpleSlider />
          </div>

        </div>

        {/* ---------------------------- row 5 ---------------------- Tweets */}

        <div className='course_page_course' >
          <div className='course_page_course_heading'>
            <h2>Tweet Shorts</h2>
          </div>

          <div className='course_page_course_text'>
            <p>Listen to audio versions of tweet threads</p>
          </div>

          <div className='course_page_course_carousel' onClick={() => { openPlayer() }}>
            {/* carousel  */}
            <SimpleSlider />
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
