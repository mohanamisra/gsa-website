import './App.css'
import logo from './assets/logo.png'
import img1 from './assets/img1.png'
import img2 from './assets/img2.png'
import img3 from './assets/img3.png'

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

            <div className = 'assurance'>
                <div className = 'images'>
                    <div className = 'image-1'><img className = 'img1' src = {img1} alt = 'pride flag'/></div>
                    <div className = 'image-2'><img className = 'img2' src = {img2} alt = 'men hugging'/></div>
                    <div className = 'image-3'><img className = 'img3' src = {img3} alt = 'pride march under rainbow flag'/></div>
                </div>
                <div className = 'text'>
                    <div className = 'section-heading'></div>
                    <div className = 'section-text'></div>
                </div>
            </div>

        </div>
    )
}

export default App
