import XIcon from '../assets/img/X.svg';
import TelegramIcon from '../assets/img/telegram.svg';
import ListIcon from '../assets/img/list.svg';

const Footer = () => {
  return (
    <div className="Social">
      <div className="Left">
        <div className="Feature">
          <span>Feature Request</span>
        </div>
        <div className="Contact">
          <span>Contact Us</span>
        </div>
      </div>
      <div className="Right">
        <img src={XIcon} alt="X" />
        <div className="img1">
          <img src={TelegramIcon} alt="Telegram" />
        </div>
        <img src={ListIcon} alt="List" />
      </div>
    </div>
  );
};

export default Footer;
