import ConnectWallet from './components/ConnectWallet';

const App = () => {
  return (
    <div className="Connect-Wallet">
      {/* Tag V1 */}
      <div className="Tag1">
        <span>Connect V1</span>
      </div>
      
      {/* Top Section */}
      <div className="Top">
        <ConnectWallet />
      </div>

      {/* Tag V2 */}
      <div className="Tag2">
        <span>Connect V2</span>
      </div>
      
      {/* Bottom Section */}
      <div className="Connect-bottom">
        <ConnectWallet />
      </div>
    </div>
  );
};

export default App;
