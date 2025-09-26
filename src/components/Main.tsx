import fontPicture from '../assets/img/font-picture.jpg';

interface MainProps {
  onConnectWalletClick?: () => void;
  children?: React.ReactNode;
}

const Main = ({ onConnectWalletClick, children }: MainProps) => {
  return (
    <div className="main">
      <img src={fontPicture} alt="picture" />
      <div className="text">
        <div className="text-top">
          <span>Tokens & NFT with Ease</span>
        </div>
        <div className="text-mid">
          <span>Launch Token, Liquidity, Airdrops and much more. Effortless and without coding.</span>
        </div>
        <div className="button" onClick={onConnectWalletClick}>
          <div className="button-text">
            <span>Connect Your Wallet</span>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Main;
