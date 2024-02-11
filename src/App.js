import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";

// Layouts
import { RootLayout } from "./layouts/RootLayout";
import {ExploreLayout} from "./layouts/ExploreLayout"
// Pages
import {Home} from "./pages/Home"
import {About} from "./pages/About"
import {Countries , countriesLoader} from "./pages/explore/Countries"
import {CountryDetails, countryDetailsLoader} from "./pages/explore/CountryDetails"
import {NotFound} from "./pages/NotFound"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="explore" element={<ExploreLayout/>}>
        <Route index element={<Countries/>} loader={countriesLoader}/>
        <Route path=":name" element={<CountryDetails/>} loader={countryDetailsLoader}/>
      </Route>

      <Route path="*" element={<NotFound/>}/>
    </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
