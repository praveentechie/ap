import { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import Loader from '../common/Loader';

const ContactRoute = () => {
  const ContactPage = (lazy(() => {
    return import('./Contact');
  }));

  const WithSuspense = () => {
    return (
      <Suspense fallback={<Loader/>}>
        <ContactPage/>
      </Suspense>
    );
  }

  return (
    <Route path='/contact'>
      <WithSuspense/>
    </Route>
  );
};

ContactRoute.displayName = 'ContactRoute';
export default ContactRoute;