import "../../styles/App.css";
import logo from "../../images/svg/logo.svg";


export default function footer() {
  return (
    <>
      <footer className="shadow">
        <div className="container">
          <div className="footer_info">
            <div>
              <a className="footer_logo mb-4" href={"#"}>
                <img src={logo} alt="" />
                Pojok Baca Probolinggo
              </a>

              <div className="d-flex gap-5">
                <a href={"https://www.instagram.com/eshonqul03"}>
                  <i class="fab fa-2x text-dark fa-instagram"></i>
                </a>
                <a href={"https://www.facebppk.com/eshonqul03"}>
                  <i class="fab fa-2x text-dark fa-facebook"></i>
                </a>
                <a href={"https://www.youtube.com/"}>
                  <i class="fab fa-2x text-dark fa-youtube"></i>
                </a>
              </div>
            </div>

            <ul className="list-unstyled d-flex footer_info--list">
              <li>
                <strong>Kontak</strong>
                <ul className="list-unstyled p-0 m-0">
                  <li>Email</li>
                  <li>Alamat</li>
                  <li>No. Rekening</li>
                </ul>
              </li>

              <li>
                <strong>Tentang Kami</strong>
                <ul className="list-unstyled p-0 m-0">
                  <li>Umum</li>
                </ul>
              </li>

              <li>
                <strong>Galery</strong>
                <ul className="list-unstyled p-0 m-0">
                  <li>Kegiatan 2018</li>
                  <li>Kegiatan 2019</li>
                  <li>Kegiatan 2020</li>
                  <li>Kegiatan 2021</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
