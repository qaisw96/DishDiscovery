import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './util/constants/routePaths';
import HomePage from './routes/HomeRoute';
import RecipeRoute from './routes/RecipeRoute';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={ROUTES.Home} element={<HomePage />} />
        <Route path={ROUTES.RecipeDetails} element={<RecipeRoute />} />
      </Routes>
    </>
  );
}

export default App;
