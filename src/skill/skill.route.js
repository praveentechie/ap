import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import Loader from "../utils/Loader";

const SkillRoute = () => {
  const SkillPage = (lazy(() => {
    return import('./Skill');
  }));

  const WithSuspense = () => {
    return (
      <Suspense fallback={<Loader/>}>
        <SkillPage/>
      </Suspense>
    );
  }

  return (
    <Route path="/skills">
      <WithSuspense/>
    </Route>
  );
};

SkillRoute.displayName = 'SkillRoute';
export default SkillRoute;