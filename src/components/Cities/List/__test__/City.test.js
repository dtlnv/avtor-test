import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TestAppWrapper from '../../../../system/App/test';
import City from '../City';
import { setCities, store } from '../../../../utils/reducer';
import userEvent from '@testing-library/user-event';

const dummyCity = {
    formatted: 'City Name',
    annotations: {
        geohash: 'test_id'
    }
};

const dummyCityInRedux = [{ id: dummyCity.annotations.geohash, name: dummyCity.formatted }];

describe('City in list test', () => {

    it('Render without data', () => {
        const { container } = render(<TestAppWrapper><City city={{}} /></TestAppWrapper>);

        expect(container.querySelector('.city_name')).toBeNull();
    });

    it('Correct city name rendering', () => {
        const { container } = render(<TestAppWrapper><City city={dummyCity} /></TestAppWrapper>);

        expect(container.querySelector('.city_name').textContent).toBe(dummyCity.formatted);
    });

    it('Add city to redux store', () => {
        const { container } = render(<TestAppWrapper><City city={dummyCity} /></TestAppWrapper>);

        expect(store.getState().cities).toStrictEqual([]);
        userEvent.click(container.querySelector('button'));
        expect(store.getState().cities).toStrictEqual(dummyCityInRedux);
    });

    it('Remove city from redux store', () => {
        store.dispatch(setCities(dummyCityInRedux));
        const { container } = render(<TestAppWrapper><City city={dummyCity} following /></TestAppWrapper>);

        expect(store.getState().cities).toStrictEqual(dummyCityInRedux);
        userEvent.click(container.querySelector('button'));
        expect(store.getState().cities).toStrictEqual([]);
    });

});