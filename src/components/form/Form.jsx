import React from "react";
import "./form.css";
import Button from "../button/Button";

function Form({ addresOne, addresTwo }) {
  return (
    <div className="form">
      <h1>Buyurtma kiritish</h1>
      <form action="">
        <div className="form_elements">
          <div className="create">
            <label htmlFor="">
              Joriy Manzil <br />
              <input
                type="text"
                value={addresOne}
                placeholder="lorem ipsum..."
              />
            </label>
            <label htmlFor="">
              Qayerga borish kerak <br />
              <input
                type="text"
                value={addresTwo}
                placeholder="lorem ipsum..."
              />
            </label>
            <label htmlFor="">
              Telefon raqam <br />
              <input
                className="number_input"
                type="text"
                placeholder="lorem ipsum..."
              />{" "}
              <button>Komfort</button>
              <button>Yukxona</button>
            </label>
          </div>
          <div className="min_price">
            <div>Minimal summa:</div> <button> 6000</button>
          </div>
        </div>
        <Button bg={"#05B922"}>Yuborish</Button>
      </form>
    </div>
  );
}

export default Form;
