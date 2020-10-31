import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TestAppWrapper from '../../../../system/App/test';
import FormatSelect from '../';
import { store } from '../../../../utils/reducer';
import userEvent from '@testing-library/user-event';

describe('FormatSelect test', () => {

    it('Change redux param', () => {
        const { container } = render(<TestAppWrapper><FormatSelect /></TestAppWrapper>);

        expect(store.getState().format).toBe('metric');

        ['metric', 'imperial'].forEach(format => {
            userEvent.selectOptions(container.querySelector('.formatSelect'), format)
            expect(store.getState().format).toBe(format);
            expect(container.querySelector('.formatSelect').value).toBe(format);
        });
    });

});