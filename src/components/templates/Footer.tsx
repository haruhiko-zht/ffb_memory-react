import { FC } from 'react';
import './Footer.scss';

const Footer: FC = () => (
  <footer>
    <div className="normal">&copy;たらんぶらん</div>

    <div className="responsive">
      <div className="bottom-menu-item">
        <span className="bottom-menu-icon">
          <i className="fas fa-list" />
        </span>
        <span className="bottom-menu-caption">サイドバー</span>
      </div>
      <div className="bottom-menu-item">
        <a href="/">
          <span className="bottom-menu-icon">
            <i className="fas fa-home" />
          </span>
          <span className="bottom-menu-caption">ホーム</span>
        </a>
      </div>
      <div className="bottom-menu-item">&copy;たらんぶらん</div>
      <div className="bottom-menu-item">
        <span className="bottom-menu-icon">
          <i className="fas fa-arrow-up" />
        </span>
        <span className="bottom-menu-caption">トップ</span>
      </div>
      <div className="bottom-menu-item">
        <span className="bottom-menu-icon">
          <i className="fas fa-bars" />
        </span>
        <span className="bottom-menu-caption">メニュー</span>
      </div>
    </div>
  </footer>
);

export default Footer;
