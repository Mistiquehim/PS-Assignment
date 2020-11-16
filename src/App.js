import './App.css';
import Layout from './containers/Layout/Layout'
import Dashboard from './containers/Dashboard/Dashboard'
import { getParam } from './utils/utils'

function App(props) {
  return (
    <Layout>
      <Dashboard query={getParam(props.location.search)} history={props.history} />
    </Layout>
  );
}

export default App;
