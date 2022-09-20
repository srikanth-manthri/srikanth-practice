import React, { useRef, useState } from "react";
import Modal from "./Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Eye = <FontAwesomeIcon className="icon" icon={['fas','eye']} />;
const EyeSlash = <FontAwesomeIcon className="icon" icon={['fas','eye-slash']} />;

function MyAccount(props) {
  const modal = useRef(null);
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const { email, currentPassword, newPassword, confirmPassword } = formData;
  function hangleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    console.log(formData);
  }
  const refConfirmPassword = useRef();
  function showPassword() {
    setShowPass(!showPass);
    refConfirmPassword.current.type = showPass ? "password" : "text";
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      email: "",
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    });
    setShowPass(false);
  };
  const canUpdatePassword = [
    currentPassword,
    newPassword,
    confirmPassword
  ].every(Boolean);
  return (
    <div className="myaccount-wrapper common-background">
      <div className="login-wrapper user-profile-wrapper ">
        <form onSubmit={handleSubmit}>
          <h4>Update Password</h4>
          <label htmlFor="email">Email:</label>
          <input
            onChange={hangleChange}
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="abc@example.com"
            disabled
          />
          <label htmlFor="currentPassword">Current Password:</label>
          <input
            type="password"
            onChange={hangleChange}
            id="currentPassword"
            name="currentPassword"
            autoComplete
            value={currentPassword}
            required
          />
          <label htmlFor="newPassword">New Password:</label>
          <input
            type="password"
            onChange={hangleChange}
            id="newPassword"
            name="newPassword"
            autoComplete
            value={newPassword}
            required
          />
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <div className="eye">
            <input
              ref={refConfirmPassword}
              type="password"
              onChange={hangleChange}
              id="confirmPassword"
              name="confirmPassword"
              autoComplete
              value={confirmPassword}
              required
            />
            {showPass ? (
              <i onClick={showPassword}>{Eye}</i>
            ) : (
              <i onClick={showPassword}>{EyeSlash}</i>
            )}
          </div>
          <button
            className="loginButton"
            type="submit"
            disabled={!canUpdatePassword}
          >
            Update Password
          </button>
        </form>
      </div>
<div className="order-details">
      <table>
        <caption>Orders Details</caption>
        <tr>
          <th>ORDER ID</th>
          <th>TIME STAMP</th>
          <th>TOTAL</th>
          <th>ACTIONS</th>
        </tr>
        <tr>
          <td>65526dsdfs</td>
          <td>22102021</td>
          <td>$336</td>
          <td className="actions">
            <FontAwesomeIcon
              onClick={() => modal.current.open()}
              className="info" icon={['fas','info-circle']}/>
            <FontAwesomeIcon className="delete" icon={['fas','trash-alt']}/>
          </td>
        </tr>
      </table>
</div>
      <Modal ref={modal}>
        <div className="cart-wrapper noselect">
          <div className="cart-header">
            <h3>orderID: 65526dsdfs</h3>
          </div>
          <div className="cart-list">
            <ul>
              <li className="cart-item">
                <div className="cart-item-img">
                  <img
                    src="/images/shoe1.png"
                    width="90"
                    height="38"
                    alt="cart item"
                  />
                </div>
                <div className="cart-item-name">
                  <span>Popular Trendy Shoes </span>
                </div>
                <div className="cart-item-qty">
                  <p>Qty:</p>
                  <input type="number" value={1} disabled />
                </div>
                <div className="cart-item-price">$336</div>
              </li>
            </ul>
          </div>
          <div className="cart-checkout">
            <div className="cart-total">
              <h4>Total :</h4>
              <span>$1008</span>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default MyAccount;
