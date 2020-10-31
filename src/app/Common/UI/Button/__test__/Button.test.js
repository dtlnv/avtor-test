import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import Button from '../index';

describe('Button test', () => {

    it('Should clicks', () => {
        const onClick = jest.fn();
        const { getByTestId } = render(<Button data-testid="button" onClick={onClick}>test</Button>);

        expect(onClick).not.toHaveBeenCalled();
        userEvent.click(getByTestId('button'));
        expect(onClick).toHaveBeenCalled();
    });

    it('Should have a class', () => {
        const { container } = render(<Button className="new-class">test</Button>);

        expect(container.querySelector('.new-class')).not.toBeNull();
    });

});