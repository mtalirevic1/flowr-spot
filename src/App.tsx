import { Provider } from 'react-redux';
import { store } from './redux/store';

const App = () => {

  return (
    <Provider store={store}>
        <p>App</p>
    </Provider>
  )
}

export default App
