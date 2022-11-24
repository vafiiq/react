import { avatr } from "../../images/imgs";

function Card() {
  return (
    <>
      <div className="container">
        <div class="card mb-5 shadow">
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>

            <div className="d-flex align-items-center gap-4">
              <img src={avatr} alt={"avatar"} />
              <div>
                <strong className="d-block mb-2">Mohammad Hatta</strong>
                <p>Wakil Presiden Indonesia Pertama</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
