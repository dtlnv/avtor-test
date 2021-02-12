import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TestAppWrapper from '../../../../system/App/test';
import Layout from '../';

describe('Layout test', () => {

    it('Correct children render', () => {
        const { container } = render(<TestAppWrapper><Layout>Test</Layout></TestAppWrapper>);

        expect(container.querySelector('header')).not.toBeNull();
        expect(container.querySelector('footer')).not.toBeNull();
        expect(container.querySelector('#container').textContent).toBe('Test');
    });

});