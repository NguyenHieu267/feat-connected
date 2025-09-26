interface HeaderProps {
  onConnectClick?: () => void;
}

const Header = ({ onConnectClick }: HeaderProps) => {
  return (
    <div className="Header">
      <div className="ACW3">
        ACW3
      </div>
      <div className="frame4">
        <div className="button" onClick={onConnectClick}>
          <span>Connect</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
