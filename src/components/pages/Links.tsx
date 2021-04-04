import { FC } from 'react';
import { Helmet } from 'react-helmet';

import 'components/pages/Links.scss';
import Header from 'components/templates/Header';
import Footer from 'components/templates/Footer';
import { LinkData, linkTypes, LinkType } from 'data/links';

type Props = {
  links: LinkData[];
};

const Links: FC<Props> = ({ links }) => (
  <>
    <Helmet>
      <title>リンク | FFB memory</title>
    </Helmet>

    <Header />

    <main className="main-article">
      <div className="main-title">
        <div className="title-wrap">
          <h2>リンク</h2>
        </div>
      </div>

      <article className="contents">
        <div className="wrap wrap-1col link-wrap">
          {Object.keys(linkTypes).map((type, index) =>
            index === 0 ? (
              <input
                key={type}
                id={`tab${index}`}
                type="radio"
                name="link_btn"
                defaultChecked
              />
            ) : (
              <input
                key={type}
                id={`tab${index}`}
                type="radio"
                name="link_btn"
              />
            ),
          )}

          <div id="link-tab">
            {(Object.keys(linkTypes) as LinkType[]).map((type, index) =>
              linkTypes[type] ? (
                <label
                  key={type}
                  className={`link${index}_label`}
                  htmlFor={`tab${index}`}
                >
                  {linkTypes[type]}
                </label>
              ) : (
                <></>
              ),
            )}
          </div>

          <div id="link-area">
            {Object.keys(linkTypes).map((type, index) => (
              <div key={type} id={`link${index}`}>
                <table>
                  <tbody>
                    {links
                      .filter((link) => link.type === type)
                      .map((link) => (
                        <tr key={link.id}>
                          <th>
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              {link.image ? (
                                <img src={link.image} alt={link.title} />
                              ) : (
                                <h3>{link.title}</h3>
                              )}
                            </a>
                          </th>
                          <td>{link.overview}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </article>
    </main>

    <Footer />
  </>
);

export default Links;
