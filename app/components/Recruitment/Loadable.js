/**
 *
 * Asynchronously loads the component for Recruitment
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
