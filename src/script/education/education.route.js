import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import Loader from "../common/Loader";

const EducationRoute = () => {

  const EducationPage = (lazy(() => {
    return import('./Education');
  }));

  const WithSuspense = () => {
    return (
      <Suspense fallback={<Loader/>}>
        <EducationPage/>
      </Suspense>
    );
  }

  return (
    <Route path="/education">
      <WithSuspense/>
    </Route>
  );
};

EducationRoute.displayName = 'EducationRoute';
export default EducationRoute;