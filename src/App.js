import FormContainer from './components/body/formcontainer/FormContainer';
import SubHeader from './components/body/subheader/SubHeader';
import Header from './components/header/Header';
import './App.css';

/**
 * ProximaNova font is paid
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
  return (
    <div>
      <Header />
      <SubHeader />
      <FormContainer />
    </div>
  );
}

export default App;
