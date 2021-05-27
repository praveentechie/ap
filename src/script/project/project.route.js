import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import Loader from "../common/Loader";

const ProjectRoute = () => {
  const ProjectPage = (lazy(() => {
    return import('./Project');
  }));

  const WithSuspense = () => {
    return (
      <Suspense fallback={<Loader/>}>
        <ProjectPage/>
      </Suspense>
    );
  }

  return (
    <Route path="/project">
      <WithSuspense/>
    </Route>
  );
};

ProjectRoute.displayName = 'ProjectRoute';
export default ProjectRoute;