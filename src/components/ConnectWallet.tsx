import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SignInModal from './SignInModal';
import RegisterModal from './RegisterModal';

type ModalType = 'none' | 'signin' | 'register';

const ConnectWallet = () => {
  const [currentModal, setCurrentModal] = useState<ModalType>('none');

  const handleConnectClick = () => {
    setCurrentModal('signin');
  };

  const handleConnectWalletClick = () => {
    setCurrentModal('signin');
  };

  const handleCloseModal = () => {
    setCurrentModal('none');
  };

  const handleRegisterClick = () => {
    setCurrentModal('register');
  };

  const handleSignInClick = () => {
    setCurrentModal('signin');
  };

  const handleOverlayClick = () => {
    setCurrentModal('none');
  };

  const getContainerClass = () => {
    let baseClass = "Connect-top";
    if (currentModal === 'signin') {
      baseClass += " Sign-in";
    } else if (currentModal === 'register') {
      baseClass += " Register";
    }
    return baseClass;
  };

  return (
    <div className={getContainerClass()} style={{ position: 'relative' }}>
      {currentModal !== 'none' && (
        <div className="modal-overlay" onClick={handleOverlayClick} />
      )}
      <Header onConnectClick={handleConnectClick} />
      <Main onConnectWalletClick={handleConnectWalletClick}>
        <SignInModal 
          isVisible={currentModal === 'signin'}
          onClose={handleCloseModal}
          onRegisterClick={handleRegisterClick}
        />
        <RegisterModal 
          isVisible={currentModal === 'register'}
          onClose={handleCloseModal}
          onSignInClick={handleSignInClick}
        />
      </Main>
      <Footer />
    </div>
  );
};

export default ConnectWallet;
