import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
// import * as ui from '@qubejs/ui-charts'
import * as ui from '@qubejs/ui-material-base/components.lazy.esm';
import { Router } from 'react-router-dom';
import { plugins } from '@qubejs/web-react';
import App from './app';

plugins.register(ui);
// plugins.register(advanced);
// plugins.register(data);

describe('App', () => {
  it('should render successfully', () => {
    const history = createMemoryHistory({ initialEntries: ['/ho/home'] });
    const { baseElement } = render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    );
    expect(baseElement).toBeTruthy();
  });
});
