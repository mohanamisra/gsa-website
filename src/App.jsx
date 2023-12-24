import './App.css'
import logo from './assets/logo.png'
import images from './assets/images.png'
import read from './assets/read.svg'
import write from './assets/write.svg'
import instaIcon from './assets/insta.svg'
import discordIcon from './assets/discord.svg'
import questionIcon from './assets/question.svg'

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

            <div className = 'read-write section'>
                <div className = 'section-heading'>What would you like to do?</div>
                <div className = 'choices'>
                    <div className = 'read card'>
                        <img className = 'read-image' src = {read} alt = 'a book held by hands'/>
                        <div className = 'heading'>Read</div>
                        <div className = 'card-text'>Lend your ears to the experiences of other
                            queer people from all walks of life.</div>
                    </div>
                    <div className = 'write card'>
                        <img className = 'write-image' src = {write} alt = 'a pencil writing on paper'/>
                        <div className = 'heading'>Write</div>
                        <div className = 'card-text'>Write about yourself, your life, something that happened
                            ten years back or what you’re anxious about right now!</div>
                    </div>
                </div>
            </div>

            <div className = 'cta section'>
                <div className = 'section-heading'>Or you could...</div>
                <div className = 'cta-choices'>
                    <div className = 'insta-div'>
                        <img className = 'insta icon' src = {instaIcon} alt = 'instagram icon'/>
                        <div className = 'cta-heading'>Follow us on Instagram!</div>
                        <div className = 'cta-text'>We post everything here, follow for updates!</div>
                    </div>
                    <div className = 'discord-div'>
                        <img className = 'discord icon' src = {discordIcon} alt = 'discord icon'/>
                        <div className = 'cta-heading'>Join our Discord Server!</div>
                        <div className = 'cta-text'>This is where we all hang out. Come along and have fun!</div>
                    </div>
                    <div className = 'question-div'>
                        <img className = 'question icon' src = {questionIcon} alt = 'question icon'/>
                        <div className = 'cta-heading'>Ask us a question!</div>
                        <div className = 'cta-text'>Reach out to us, we’re always there for you!</div>
                    </div>
                </div>
            </div>

            <footer className = 'footer section'>
                <div className = 'page-links'>
                    <div className = 'faqs'>FAQs</div>
                    <div className = 'resources'>Resources</div>
                    <div className = 'contact'>Contact Us</div>
                </div>
                <div className = 'branding'>
                    <img src = {logo} className = 'logo-image' alt = 'pride flag on heart'/>
                    <div className = 'brand-name'>ColoursIncognito</div>
                </div>
            </footer>
        </div>
    )
}

export default App
