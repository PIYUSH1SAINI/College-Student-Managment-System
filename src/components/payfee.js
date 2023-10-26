import React from "react";
import "./payment.css";

function Payfee() {
  const [status, setstatus] = React.useState(true);
  const [upistatus, upisetstatus] = React.useState(false);
  const [instatus, insetstatus] = React.useState(false);

  function upi() {
    upisetstatus(true);
    setstatus(false);
    insetstatus(false);
  }

  function card() {
    upisetstatus(false);
    setstatus(true);
    insetstatus(false);
  }

  function internet() {
    upisetstatus(false);
    setstatus(false);
    insetstatus(true);
  }
  return (
    <div className="wrapperfee">
      <div className="payfee">
        <div className="infofee">
          <span>Billing info</span>
          <form>
            <table className="info_table">
              <tr>
                <td colSpan="2">Full Name</td>
              </tr>

              <tr>
                <td colSpan="3">
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter the name"
                    required
                  />
                </td>
              </tr>

              <tr>
                <td colSpan="2">Email Id</td>
              </tr>

              <tr>
                <td colSpan="3">
                  <input
                    type="text"
                    id="email"
                    placeholder="Enter the valid email"
                    required
                  />
                </td>
              </tr>

              <tr>
                <td colSpan="2">Contact No</td>
              </tr>

              <tr>
                <td colSpan="3">
                  <input
                    type="number"
                    id="number"
                    placeholder="Enter the contact No."
                    required
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2">Payment Option</td>
              </tr>
              <tr id="opt">
                <td id="up">
                  <button id="upi" onClick={upi} type="submit">
                    Upi
                  </button>
                </td>
                <td>
                  <button id="card" onClick={card} type="submit">
                    Debit/credit card
                  </button>
                </td>
                <td>
                  <button id="internet" onClick={internet} type="submit">
                    Internet banking
                  </button>
                </td>
              </tr>
            </table>
          </form>
        </div>

        <div className="opt">
          {status ? (
            <form>
              <table className="opt_table">
                <tr>
                  <th>
                    <h1>Card Payment</h1>
                  </th>
                </tr>
                <tr>
                  <td colSpan="2">Accepted cards</td>
                </tr>

                <tr>
                  <td colSpan="2">
                    <img
                      src={require("./visa.png")}
                      alt="admin"
                      height="40rem"
                    />

                    <img
                      src={require("./master.png")}
                      alt="admin"
                      height="40rem"
                    />

                    <img
                      src={require("./card.png")}
                      alt="admin"
                      height="40rem"
                    />
                  </td>
                </tr>

                <tr>
                  <td colSpan="2">Credit Card number</td>
                </tr>

                <tr>
                  <td colSpan="2">
                    <input
                      type="number"
                      id="card_number"
                      placeholder="Enter your card number"
                      required
                    />
                  </td>
                </tr>

                <tr colSpan="2">
                  <td colSpan="2">Exp Month</td>
                </tr>

                <tr>
                  <td colSpan="2">
                    <input type="date" id="month" required />
                  </td>
                </tr>

                <tr className="cvv">
                  <td>Exp Year</td>
                  <td>CVV</td>
                </tr>

                <tr className="cvv">
                  <td>
                    <select>
                      <option value="2020-2021">2025</option>
                      <option value="2021-2022">2026</option>
                      <option value="2022-2023">2027</option>
                      <option value="2023-2024">2028</option>
                    </select>
                  </td>

                  <td>
                    <input type="number" id="cvv" />
                  </td>
                </tr>

                <tr>
                  <td colSpan="2">
                    <button id="checkout" type="submit">
                      Proceed To Checkout
                    </button>
                  </td>
                </tr>
              </table>
            </form>
          ) : null}

          {upistatus ? (
            <div className="upi">
              {/* <h2>UPI Payments </h2> */}
              <div className="upi_image">
                <img src={require("./upi.png")} alt="admin" height="350rem" />
              </div>
            </div>
          ) : null}

          {instatus ? (
            <div class="payment-form">
              <h1>Internet Banking Payment</h1>
              <form>
                <div class="form-group">
                  <label for="account-number">Account Number</label>
                  <input
                    type="text"
                    id="account-number"
                    placeholder="Enter your account number"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="amount">Amount</label>
                  <input
                    type="text"
                    id="amount"
                    placeholder="Enter the payment amount"
                    required
                  />
                </div>
                <button type="submit">Make Payment</button>
              </form>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
export default Payfee;
