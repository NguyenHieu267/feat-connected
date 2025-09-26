import { useState } from 'react';
import EyeIcon from '../assets/img/eye.svg';

interface SignInModalProps {
  isVisible: boolean;
  onClose?: () => void;
  onRegisterClick?: () => void;
}

const SignInModal = ({ isVisible, onClose, onRegisterClick }: SignInModalProps) => {
  const [walletAddress, setWalletAddress] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  if (!isVisible) return null;

  const handleSignIn = () => {
    // Handle sign in logic here
    console.log('Sign in:', { walletAddress, password });
  };

  return (
    <div className="Pop-up">
      <div className="Frame">
        <span>Sign In</span>
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
                  background: 'transparent', 
                  border: 'none', 
                  outline: 'none',
                  width: '100%',
                  color: '#aba8a1',
                  fontFamily: 'Centra No2 TRIAL',
                  fontSize: '1.6rem'
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
                type={showPassword ? 'text' : 'password'}
                placeholder="**********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ 
                  background: 'transparent', 
                  border: 'none', 
                  outline: 'none',
                  width: 'calc(100% - 30px)',
                  color: '#aba8a1',
                  fontFamily: 'Centra No2 TRIAL',
                  fontSize: '1.6rem'
                }}
              />
              <img 
                src={EyeIcon} 
                alt="eye" 
                onClick={() => setShowPassword(!showPassword)}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>
        </div>
        
        {/* Button */}
        <div className="Button" onClick={handleSignIn}>
          <div className="Sign">
            <span>Sign</span>
          </div>
        </div>
        
        {/* Text */}
        <div className="Account" onClick={onRegisterClick}>
          <span>You haven't Account?</span>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
