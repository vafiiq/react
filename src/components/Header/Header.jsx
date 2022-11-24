import "../../styles/App.css"
import logo from "../../images/svg/logo.svg"

export default function Header() {
  return (
   <>
   <header>
    <div className="container">
      <div className="header_info">
        <div>
          <a href={"#"}>
            <img src={logo} alt="" />
          </a>
        </div>

        <nav>
          <ul className='nav_list'>
            <li className="nav_item">
              <a className='nav_item--link' href={"#"}>Beranda</a>
            </li>
            <li className="nav_item">
              <a className='nav_item--link' href={"#"}>Koleksi</a>
            </li>
            <li className="nav_item">
              <a className='nav_item--link' href={"#"}>Syarat dan Ketentuan</a>
            </li>
            <li className="nav_item">
              <a className='nav_item--link' href={"#"}>Kontak</a>
            </li>
          </ul>

          <button className='header_btn'>Masuk</button>
        </nav>
      </div>
    </div>
   </header>
   </>
  )
}
