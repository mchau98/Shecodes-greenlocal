import './index.css'
import logo from '../../assets/images/logo.png'
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom'

function MainLayout({children}){
    const user = JSON.parse(localStorage.getItem('user-infor'));
    const nagivate = useNavigate();
    function handleLogout(){
        localStorage.removeItem('user-infor');
        setTimeout(()=> {
            nagivate('login')
        }, 2000)
    }
    return (
        <div>
            <div className='header'>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="navbar-brand" href="/">
                            <img src={logo} alt="Logo" width="60" height="40" class="d-inline-block align-text-top"/>
                        </a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/user">User</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/waste-bins">Waste Bin</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/rubbish">Rubbish</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav mb-2 mb-lg-0">
                       {
                        user ? <>
                            <li class="nav-item">
                            <a class="nav-link" href="/">Hi,</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="/">
                            <button type="button" class=""
                            onClick={handleLogout}>Logout</button>
                            </a>
                            </li>
                        </> : <>
                        <li class="nav-item">
                            <a class="nav-link" href="/register">Register</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="/login">Login</a>
                            </li>
                        </>
                       }
                    </ul>
                    
                    </div>
                </div>
            </nav>
            </div>
            <div>
                {children}
            </div>
            <div className='footer'>
            <footer className="text-center mt-20">
        &copy; {new Date().getFullYear()} Green Local
      </footer>
            </div>
        </div>
    )
}
export default MainLayout