import ReactOnRails from 'react-on-rails';
import createStore from '../store/appStore';
import HelloWorldApp from './HelloWorldAppClient';

// This is how react_on_rails can see the HelloWorldApp in the browser.
ReactOnRails.register({ HelloWorldApp });
ReactOnRails.registerStore({ helloWorldStore: createStore });
