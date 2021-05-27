import { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import Loader from '../common/Loader';

const AwardRoute = () => {
  const AwardPage = (lazy(() => {
    return import('./Award');
  }));

  const WithSuspense = () => {
    return (
      <Suspense fallback={<Loader/>}>
        <AwardPage/>
      </Suspense>
    );
  }

  return (
    <Route path='/award'>
      <WithSuspense/>
    </Route>
  );
};

AwardRoute.displayName = 'AwardRoute';
export default AwardRoute;