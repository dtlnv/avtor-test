import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CityCard from '../CityCard';
import TestAppWrapper from '../../../system/App/test';

const dummyCity = {
    cityId: 0,
    name: "Test city",
};

describe('City Card test', () => {

    it('Render without data', () => {
        const { container } = render(<TestAppWrapper><CityCard city={{}} /></TestAppWrapper>);

        expect(container.innerHTML).toBe("");
    });

    it('Correct render with dummy data', () => {
        const { findByText, container } = render(<TestAppWrapper><CityCard city={dummyCity} /></TestAppWrapper>);

        expect(findByText(dummyCity.name)).not.toBeNull();
        expect(container.querySelector('.remove-city')).not.toBeNull();
    });

    it('Correct render current city', () => {
        const { container } = render(<TestAppWrapper><CityCard city={dummyCity} current /></TestAppWrapper>);

        expect(container.querySelector('.fa-location-arrow')).not.toBeNull();
    });

    it('City with error', () => {
        dummyCity.error = true;
        const { findByText } = render(<TestAppWrapper><CityCard city={dummyCity} /></TestAppWrapper>);

        expect(findByText("Something went wrong")).not.toBeNull();
    });

});