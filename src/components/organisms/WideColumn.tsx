import { FC } from 'react';

type Props = {
  Content: FC;
};

const WideColumn: FC<Props> = ({ Content }) => (
  <>
    <article className="contents">
      <div className="wrap wrap-1col">
        <Content />
      </div>
    </article>
  </>
);

export default WideColumn;
