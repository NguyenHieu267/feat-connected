import { useState } from "react";
import EyeIcon from "../assets/img/eye.svg";

interface RegisterModalProps {
  isVisible: boolean;
  onClose?: () => void;
  onSignInClick?: () => void;
}

const RegisterModal = ({ isVisible, onSignInClick }: RegisterModalProps) => {
  const [walletAddress, setWalletAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  if (!isVisible) return null;

  const handleRegister = () => {
    // Handle register logic here
    console.log("Register:", { walletAddress, password, confirmPassword });
  };

  return (
    <div className="Pop-up Popup-Register">
      <div className="Frame">
        <span>Register</span>
      </div>
      <div className="auto">
        {/* Wallet Address */}
        <div className="MENU">
          <div className="text1">
            <span>Wallet Address</span>
          </div>
          <div className="Input Input-Wallet">
            <div className="Ex">
              <input
                type="text"
                placeholder="0x...."
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                style={{
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  width: "100%",
                  color: "#aba8a1",
                  fontFamily: "Centra No2 TRIAL",
                  fontSize: "1.6rem",
                }}
              />
            </div>
          </div>
        </div>

        {/* Password */}
        <div className="MENU">
          <div className="text1">
            <span>Password</span>
          </div>
          <div className="Input">
            <div className="Ex">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="**********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  width: "calc(100% - 30px)",
                  color: "#aba8a1",
                  fontFamily: "Centra No2 TRIAL",
                  fontSize: "1.6rem",
                }}
              />
              <img
                src={EyeIcon}
                alt="eye"
                onClick={() => setShowPassword(!showPassword)}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="MENU">
          <div className="text1">
            <span>Confirm Password</span>
          </div>
          <div className="Input">
            <div className="Ex">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="**********"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={{
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  width: "calc(100% - 30px)",
                  color: "#aba8a1",
                  fontFamily: "Centra No2 TRIAL",
                  fontSize: "1.6rem",
                }}
              />
              <img
                src={EyeIcon}
                alt="eye"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="Button" onClick={handleRegister}>
          <div className="Sign">
            <span>Sign</span>
          </div>
        </div>

        {/* Text */}
        <div className="Account Account-Register" onClick={onSignInClick}>
          <span>You already have an Account?</span>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
