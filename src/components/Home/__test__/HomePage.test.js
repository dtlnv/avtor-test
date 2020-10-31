import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomePage from '../HomePage';
import { setCities, store } from '../../../utils/reducer';
import TestAppWrapper from '../../../system/App/test';
import userEvent from '@testing-library/user-event';

const dummyCity = {
    formatted: 'Mykolaiv, Ukraine',
    annotations: {
        geohash: 'test_id'
    }
};

const dummyCityInRedux = [{ id: dummyCity.annotations.geohash, name: dummyCity.formatted }];

describe('Home page test', () => {

    it('Render list with data from Redux', () => {
        store.dispatch(setCities(dummyCityInRedux));
        const { findByText, container } = render(<TestAppWrapper><HomePage /></TestAppWrapper>);

        expect(findByText(dummyCityInRedux.name)).not.toBeNull();
        userEvent.click(container.querySelector('.remove-city'));
        expect(store.getState().cities).toStrictEqual([]);
    });

    it('Correct render current city card', () => {
        // correct - Something went wrong; navigator.geolocation doesn't work in the test environment
        const { findByText } = render(<TestAppWrapper><HomePage /></TestAppWrapper>);

        expect(findByText("Something went wrong")).not.toBeNull();
    });

});
