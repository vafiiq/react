import { img1 } from "../../images/imgs";
import { img2 } from "../../images/imgs";
import { img3 } from "../../images/imgs";
import { img4 } from "../../images/imgs";
import { img5 } from "../../images/imgs";
import { img6 } from "../../images/imgs";
import { img7 } from "../../images/imgs";
import { elips } from "../../images/imgs";
import { carusel } from "../../images/imgs";
import { cardImg } from "../../images/imgs";

import Card from "./card";

export default function Main() {
  return (
    <>
      <main>
        <section className="hero mb-5">
          <div className="container">
            <div className="d-flex justify-content-center gap-4">
              <p>Pojok Baca </p>
              <i className="text-success">Probolinggo</i>
            </div>
            <h1 className="text-center mb-5">
              Pinjam Buku Secara Gratis untuk Masyarakat
            </h1>
            <div className="d-flex justify-content-center gap-5 mb-5">
              <button className="search_btn--hero">
                Cari Judul Buku<i class="fas fa-search"></i>
              </button>
              <button className="sent_btn--hero">
                Donasi dengan Kami<i class="fas fa-donate"></i>
              </button>
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center justify-content-between gap-5">
                <div className="d-flex flex-column justify-content-between">
                  <img
                    className="shadow mb-5"
                    width={"150px"}
                    src={img1}
                    alt={"card-img"}
                  />
                  <img
                    className="shadow"
                    width={"150px"}
                    src={img2}
                    alt={"card-img"}
                  />
                </div>

                <img
                  className="shadow"
                  width={"150px"}
                  src={img3}
                  alt={"card-img"}
                />
              </div>

              <img
                className="shadow"
                width={"250px"}
                src={img4}
                alt={"card-img"}
              />

              <div className="d-flex align-items-center justify-content-between gap-5">
                <img
                  className="shadow"
                  width={"150px"}
                  src={img5}
                  alt={"card-img"}
                />
                <div className="d-flex flex-column justify-content-between">
                  <img
                    className="shadow mb-5"
                    width={"150px"}
                    src={img6}
                    alt={"card-img"}
                  />
                  <img
                    className="shadow"
                    width={"150px"}
                    src={img7}
                    alt={"card-img"}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="harus">
          <div className="container">
            <h2 className="text-center text-black mb-5">
              Kenapa Kita Harus Membaca Buku?
            </h2>
            <div className="d-flex mb-5">
              <Card />
              <Card />
            </div>

            <ul className="list-unstyled d-flex justify-content-between">
              <li className="d-flex align-items-center gap-4">
                <img src={elips} alt="" />
                <div>
                  <strong className="fs-2 text-dark">500+</strong>
                  <p className="m-0">Judul Buku</p>
                </div>
              </li>
              <li className="d-flex align-items-center gap-4">
                <img src={elips} alt="" />
                <div>
                  <strong className="fs-2 text-dark">500+</strong>
                  <p className="m-0">Judul Buku</p>
                </div>
              </li>
              <li className="d-flex align-items-center gap-4">
                <img src={elips} alt="" />
                <div>
                  <strong className="fs-2 text-dark">500+</strong>
                  <p className="m-0">Judul Buku</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="d-flex justify-content-between">
              <div>
                <h3>Apa Kata Mereka?</h3>
                <p>Mereka yang telah menjadi pengunjung tetap kami</p>
              </div>

              <p>Selengkapnya</p>
            </div>

            <div className="d-flex">
              <Card />
              <Card />
            </div>
            <img className="d-block m-auto mb-5" src={carusel} alt="" />
          </div>
        </section>

        <section>
          <div className="container">
            <div className="d-flex justify-content-between mb-3">
              <div>
                <h3>Kegiatan Pojok Baca Probolinggo</h3>
                <p>Intip kegiatan yang telah kami selenggarakan </p>
              </div>

              <p>Selengkapnya</p>
            </div>

            <ul className="list-unstyled d-flex justify-content-between mb-5">
              <li>
                <img src={cardImg} alt="" />
              </li>
              <li>
                <img src={cardImg} alt="" />
              </li>
              <li>
                <img src={cardImg} alt="" />
              </li>
            </ul>
          </div>
        </section>

        <div>
          <div className="text-center">
            <h2 className="text-dark">
              Ingin Membantu Meningkatkan Literasi Anak-Anak Sekitar Kita?
            </h2>
            <p className="mb-5">Percayakan melalui kegiatan kita</p>

            <div className="d-flex justify-content-center flex-column align-items-center gap-4">
              <button className="search_btn--hero"> Donasi dengan Kami<i class="fas fa-donate"></i></button>

              <span>Atau</span>

              <button className="sent_btn--hero d-flex gap-2 align-items-center mb-5">
              Hubungi Kami<i class="fab fa-whatsapp"></i>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
