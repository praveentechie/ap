import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import Loader from "../utils/Loader";

const AboutRoute = () => {

  const AboutPage = (lazy(() => {
    return import('../about/About');
  }));

  const WithSuspense = () => {
    return (
      <Suspense fallback={<Loader/>}>
        <AboutPage/>
      </Suspense>
    );
  }

  return (
    <Route path="/about">
      <WithSuspense/>
    </Route>
  );
};

AboutRoute.displayName = 'AboutRoute';
export default AboutRoute;