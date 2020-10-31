import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MenuItem from '../MenuItem';
import TestAppWrapper from '../../../../system/App/test';

describe('Menu Item test', () => {

    it('Render without data', () => {
        const { container } = render(<MenuItem title="" link="" />);
        expect(container.querySelector('li')).toBeNull();
    });

    it('Render without data', () => {
        const { container } = render(<TestAppWrapper><MenuItem title="Title" link="link" /></TestAppWrapper>);

        expect(container.querySelector('li a').textContent).toBe("Title");
        expect(container.querySelector('li a').getAttribute('href')).toBe("/link");
    });

});