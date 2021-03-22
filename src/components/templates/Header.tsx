import { FC } from 'react';
import { Link } from 'react-router-dom';

import HamburgerMenuButton from 'components/molecules/HamburgerMenuButton';
import 'components/templates/Header.scss';
import logo from 'images/app/logo.png';

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
      <HamburgerMenuButton />
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
          <Link className="btn" to="/">
            <span>TOP</span>
            <span>トップ</span>
          </Link>
        </li>
        <li>
          <Link className="btn" to="/capture">
            <span>CAPTURE</span>
            <span>攻略備忘録</span>
          </Link>
        </li>
        <li>
          <Link className="btn" to="/survey">
            <span>SURVEY</span>
            <span>調査備忘録</span>
          </Link>
        </li>
        <li>
          <Link className="btn" to="/">
            <span>ALCHEMY</span>
            <span>レシピ&鉱石</span>
          </Link>
        </li>
        <li>
          <Link className="btn" to="/oldServer">
            <span>OLD</span>
            <span>旧サーバー</span>
          </Link>
        </li>
        <li>
          <Link className="btn" to="/">
            <span>PICTURE</span>
            <span>画像倉庫</span>
          </Link>
        </li>
        <li>
          <Link className="btn" to="/">
            <span>TOOL</span>
            <span>ツール</span>
          </Link>
        </li>
        <li>
          <Link className="btn" to="/links">
            <span>LINK</span>
            <span>リンク</span>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
