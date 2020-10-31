import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Menu from '../index';
import TestAppWrapper from '../../../../system/App/test';

describe('Menu test', () => {

    it('Correct render', () => {
        const { container } = render(<TestAppWrapper><Menu /></TestAppWrapper>);

        expect(container.querySelectorAll('.menu ul').length).not.toBe(0);
    });

});