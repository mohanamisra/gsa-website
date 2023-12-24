import './App.css'
import logo from './assets/logo.png'
import images from './assets/images.png'
import rainbow from './assets/rainbow.png'

const App = () => {
    return (
        <div className = 'container'>

            <div className = 'navbar'>
                <div className = 'left-links'>
                    <div className = 'logo'><img className = 'logo-image' src = {logo} alt = 'pride-flag colour scheme heart'/></div>
                    <div className = 'brand-name'>ColoursIncognito</div>
                </div>
                <div className = 'right-links'>
                    <div className = 'write'>Write</div>
                    <div className = 'read'>Read</div>
                    <div className = 'about-us'>About Us</div>
                    <div className = 'join-us'>Join Us</div>
                </div>
            </div>

            <div className = 'hero section'>
                <div className = 'images'>
                    <img className = 'all-images-img' src = {images} alt = 'pride march photos'/>
                </div>
                <div className = 'text'>
                    <div className = 'section-heading'>So, What's Your Story?</div>
                    <div className = 'section-text'>
                        All stories deserve to be heard. So tell us yours. It could be a happy one, a sad one, or an
                        unfinished one. Share your path to coming out, or growing into yourself, or struggling to do
                        them right now. No one's journey follows the same path — we won't judge!
                    </div>
                </div>
            </div>

            <div className = 'assurance section'>
                <div className = 'section-heading'>Share and browse stories anonymously</div>
                <div className = 'section-text'>We do not store any personal data from you at all except what you
                    choose to share with us. We don’t ask for any suspicious permissions, don’t use cookies, nothing.
                    <br/><br/>
                    The anonymity of our posters is our utmost priority and we treat it very seriously.
                    Readers, including moderators of the site can only see that ‘someone’ has posted.</div>
            </div>

        </div>
    )
}

export default App
