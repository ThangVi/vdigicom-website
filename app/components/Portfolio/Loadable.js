/**
 *
 * Asynchronously loads the component for Portfolio
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
