import { render } from '@testing-library/react';
import Main from '.';

describe('Main', () => {
  it('should render properly', () => {
    const { debug } = render(<Main />);

    debug();
  })
})
