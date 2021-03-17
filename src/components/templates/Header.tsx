import { FC } from 'react';
import './Header.scss';
import logo from '../../images/app/logo.png';

const Header: FC = () => (
  <header className="header">
    <div className="main-head">
      {/* company logo */}
      <div className="header-logo">
        <h1 className="picture-main-logo">
          <span className="hide">FFB memory</span>
          <a href="/">
            <img src={logo} alt="company logo" />
          </a>
        </h1>
        <h1 className="letter-main-logo">
          <a href="/">FFB memory</a>
        </h1>
      </div>

      {/* sp toggle menu button */}
      <a href="/" className="menu-trigger">
        <span />
        <span />
        <span />
      </a>
    </div>

    {/* responsive modal back */}
    <div className="responsive-menu-back" />

    {/* global nav */}
    <nav className="global-nav">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className="close-global-nav">
        <i className="fas fa-times" />
      </label>
      <ul>
        <li>
          <a className="btn" href="/">
            <span>TOP</span>
            <span>トップ</span>
          </a>
        </li>
        <li>
          <a className="btn" href="/">
            <span>CAPTURE</span>
            <span>攻略備忘録</span>
          </a>
        </li>
        <li>
          <a className="btn" href="/">
            <span>SURVEY</span>
            <span>調査備忘録</span>
          </a>
        </li>
        <li>
          <a className="btn" href="/">
            <span>ALCHEMY</span>
            <span>レシピ&鉱石</span>
          </a>
        </li>
        <li>
          <a className="btn" href="/">
            <span>OLD</span>
            <span>旧サーバー</span>
          </a>
        </li>
        <li>
          <a className="btn" href="/">
            <span>PICTURE</span>
            <span>画像倉庫</span>
          </a>
        </li>
        <li>
          <a className="btn" href="/">
            <span>TOOL</span>
            <span>ツール</span>
          </a>
        </li>
        <li>
          <a className="btn" href="/">
            <span>LINK</span>
            <span>リンク</span>
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
