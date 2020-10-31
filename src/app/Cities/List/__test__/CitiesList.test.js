import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CitiesList from '../';
import TestAppWrapper from '../../../../system/App/test';

const dummyList = [
    {
        formatted: 'City Name 1',
        annotations: {
            geohash: 'test_id1'
        }
    },
    {
        formatted: 'City Name 2',
        annotations: {
            geohash: 'test_id2'
        }
    }
];

describe('Cities list test', () => {

    it('Renders without list', () => {
        const { container } = render(<TestAppWrapper><CitiesList list={[]} /></TestAppWrapper>);

        expect(container.querySelectorAll('.city_in_search').length).toBe(0);
    });

    it('Renders with list', () => {
        const { container } = render(<TestAppWrapper><CitiesList list={dummyList} /></TestAppWrapper>);

        expect(container.querySelectorAll('.city_in_search').length).toBe(dummyList.length);
    });

    it('Renders correct list', () => {
        const { container } = render(<TestAppWrapper><CitiesList list={dummyList} /></TestAppWrapper>);

        for (let i = 0; i < dummyList.length; i++) {
            expect(container.querySelectorAll('.city_in_search .city_name')[i].textContent).toBe(dummyList[i].formatted);
        }
    });

});