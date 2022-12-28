import './Home.css'
import Footer from '../components/Footer'
import Cards from '../components/Cards'
import MyImage from '../assets/COMM_selfPortrait.jpeg'

const Home = () => {
  return (
    <div className='home'>
      <div className='text'>
        <h1 >
          &#60;CODE&#62;
          <p className='subtitle'>
            Software Engineer who writes clean, elegant, and efficient code.
          </p>
        </h1>
        </div>
        <div className='about'>
          <h1 className='component-title'>
            ABOUT
          </h1>
          <img src={MyImage}  className='myimage' alt="Image of Myself"/>
          <h2 className='component-subtitle-about'>
            Hello! I am a Mexican Software Engineer, but you already knew that. I specialize in solving conceptual
            problems, quantifying them and translating them into code. Cool right! If you want to find out more
            on what I am working on, the footer section of this website contains links to my socials and GitHub.
            I am passionate about tea, keyboards, modifying cars, and philosophy!
            <p className='component-subtext-about'>
              Click the following to contant me:
              <a
              href='https://linktr.ee/christophermata' 
              target='_blank'
              rel='noreferrer'
              className='contact-links'> 
                Click Me!
            </a>
            </p>
          </h2>
        </div>
        <div className='projects'>
          <h1 className='component-title'>
            PROJECTS
          </h1>
          <h2 className='component-subtitle'>
            Discord Bots
          <p className='component-subtext'>
            * Coatlicue is a discord bot created, designed, and developed entirely by me! It is witten in Java using the JavaCord and LavaPlayer API. The backend is handled by
            Spring Boot. It is also connected to a database VIA Firebase to house user and other type of information
          </p>
          </h2>
          <h2 className='component-subtitle'>
            Websites
          <p className='component-subtext'>
            * Coatlicue website is created, designed, and developed entirely by me aswell! It is witten in JavaScript using the React and Node.js.
            Like the Discord bot, this is also connected to the same database!
          </p>
          </h2>
          <h2 className='component-subtitle'>
            IOS Applications
          <p className='component-subtext'>
            * Rize is a calorie traking application that I use. Made out of the fear of companies taking my data, I proceeded to make a calorie traking app that does not leak
            my data to outsiders! The application is made with Swift and Swift UI!
          </p>
          </h2>
          <Cards />
        </div>
        <Footer />        
    </div>
  )
}

export default Home
