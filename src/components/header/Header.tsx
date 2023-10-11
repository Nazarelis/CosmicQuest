import './Header.css'
import Logo from "../logo/Logo";

const Header =() => {
    return (
        <>
            <div className='Header'>
                <div className='container-logo'>
                    <Logo />
                </div>
                <div className='container-title'>
                    <h1>Cosmic Quest</h1>
                </div>
                
            </div>
        </>
    )
}

export default Header;