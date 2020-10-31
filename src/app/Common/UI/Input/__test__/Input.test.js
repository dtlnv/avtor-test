import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import Input from '../index';

describe('Input test', () => {

    it('Should changes', () => {
        const onChange = jest.fn();
        const { getByTestId } = render(<Input data-testid="input" onChange={onChange} />);

        expect(onChange).not.toHaveBeenCalled();
        userEvent.type(getByTestId('input'), 'test');
        expect(onChange).toHaveBeenCalled();
    });

    it('Should have a class and a placeholder', () => {
        const { container, getByPlaceholderText } = render(<Input className="new-class" placeholder="test placeholder" />);

        expect(container.querySelector('.new-class')).not.toBeNull();
        expect(getByPlaceholderText('test placeholder')).not.toBeNull();
    });

});