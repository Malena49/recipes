import PropTypes from 'prop-types';
import recipes from '../../data'
import Menu from '../Menu';
import Home from '../Home';
 import Recipe from '../Recipe';
import Error from '../Error';
import {useSelector} from 'react-redux';
import Loading from './Loading';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './style.scss';
function App(props) {
  const recette = useSelector((state)=>state.recipes.currentRecipe);
  const recetteList = useSelector((state)=>state.recipes.list);

  if (props.loading) {
    return <Loading />;
  }
  
  return (
    <Router>
    <div className="app">
      <Menu recipes={recipes}/>
      <Routes> 
      <Route path="/" element={ <Home recipes={recipes}/>}/>
     <Route path={`/recipe/${recette}`} element={  <Recipe recipe={recetteList}/>}/>
  
     <Route path="*" element={  <Error />} />
    
      </Routes>

    </div>
    </Router>
  );
}

App.propTypes = {
  loading: PropTypes.bool,
};

App.defaultProps = {
  loading: false,
};

export default App;
