import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import Loader from "../common/Loader";

const ExperienceRoute = () => {

  const ExperiencePage = (lazy(() => {
    return import('./Experience');
  }));

  const WithSuspense = () => {
    return (
      <Suspense fallback={<Loader/>}>
        <ExperiencePage/>
      </Suspense>
    );
  }

  return (
    <Route path="/experience">
      <WithSuspense/>
    </Route>
  );
};

ExperienceRoute.displayName = 'ExperienceRoute';
export default ExperienceRoute;