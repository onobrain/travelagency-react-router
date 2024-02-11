import { Outlet } from "react-router-dom";

export const ExploreLayout = () => {
  return (
    <div className="explore-layout">
      <main>
        <h1>Explore Countries :</h1>
        <p>Embark in a journey to explore Beautiful coutries.</p> 
      </main>
      <Outlet/>
    </div>
  );
};
