import { FC } from 'react';

import Links from 'components/pages/Links';
import { linkData } from 'data/links';

const EnhancedLinks: FC = () => <Links links={linkData} />;

export default EnhancedLinks;
