import './Navbar.css';
import logo from './logo-main3.png';
import { HomeButton , MemberSearchButton , RegisterButton , LoginButton} from '../pages/Icons';
const Navbar = () => {



  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <button onClick={() => (window.location.href = "/login")} className="navbar-button login"><p>ورود</p>
          <LoginButton/>
          </button>
          <button onClick={() => (window.location.href = "/register")} className="navbar-button register"><p>ثبت‌نام</p>
          <RegisterButton/>
          </button>
        </div>

        <div className="navbar-center" href="/">
            <img className="navbar-logo" src={logo} alt="Logo" />
        </div>

        <div className="navbar-right">
         <button onClick={() => (window.location.href = "/doctors")}
          className="navbar-button search">
            <p>جستجوی دکتر</p>
         <MemberSearchButton/>
         </button>
          <button onClick={() => (window.location.href = "/")} className="navbar-button home"> <p>صفحه اصلی</p>
          <HomeButton/>
          </button>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
