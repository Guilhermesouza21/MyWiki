import "../styles/Header.css";

export default function Header() {
  return (


<header id="header" className="header dark-background d-flex flex-row justify-content-between">   {/* Header */}
    <i className="header-toggle d-xl-none bi bi-list"></i>

   

    <div className="header-top">
      <div className="profile-img">
        {/* imagem */}
      </div>

      <a href="index.html" className="logo d-flex align-items-center justify-content-center">  {/* resquest */}
        
        <h1 className="sitename">My Wiki </h1>  {/* titulo*/}
      </a>

    </div>

    <nav id="navmenu" className="navmenu">  {/*   NAV MENU */}
      <ul>
        <li><a href="#hero" className="active"><i className="bi bi-house navicon"></i>Home</a></li>
        <li><a href="#about"><i className="bi bi-person navicon"></i> About</a></li>
        <li><a href="#resume"><i className="bi bi-file-earmark-text navicon"></i> Resume</a></li>
        <li><a href="#portfolio"><i className="bi bi-images navicon"></i> Portfolio</a></li>
        <li><a href="#services"><i className="bi bi-hdd-stack navicon"></i> Services</a></li>
        <li className="dropdown"><a href="#"><i className="bi bi-menu-button navicon"></i> <span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
          <ul>
            <li><a href="#">Dropdown 1</a></li>
            <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
              <ul>
                <li><a href="#">Deep Dropdown 1</a></li>
                <li><a href="#">Deep Dropdown 2</a></li>
                <li><a href="#">Deep Dropdown 3</a></li>
                <li><a href="#">Deep Dropdown 4</a></li>
                <li><a href="#">Deep Dropdown 5</a></li>
              </ul>
            </li>
            <li><a href="#">Dropdown 2</a></li>
            <li><a href="#">Dropdown 3</a></li>
            <li><a href="#">Dropdown 4</a></li>
          </ul>
        </li>
        <li><a href="#contact"><i className="bi bi-envelope navicon"></i> Contact</a></li>
      </ul>
    </nav>

    <div className="social-links text-center">    {/* ICONES COM links */}
      <a href="#" className="twitter"><i className="bi bi-envelope"></i></a>
      <a href="https://www.instagram.com/gui.s__/" target="_blank" className="instagram"><i className="bi bi-instagram"></i></a>
      <a href="#" className="google-plus"><i className="bi bi-github"></i></a>
      <a href="#" className="linkedin"><i className="bi bi-discord"></i></a>
    </div>
  </header>

  );
}