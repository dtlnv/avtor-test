import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NewsList from '../List/NewsList';

const dummyList = [{
    title: 'Title',
    description: 'Desctiption',
    url: 'Dummy_link',
    urlToImage: 'Dummy_image',
    publishedAt: '2020-10-30T15:42:00Z',
}, {
    title: 'Title2',
    description: 'Desctiption2',
    url: 'Dummy_link2',
    urlToImage: 'Dummy_image2',
    publishedAt: '2020-10-30T15:42:00Z',
}]

describe('News list test', () => {

    it('Renders without list', () => {
        const { getByText, container } = render(<NewsList list={[]} />);

        expect(getByText('News')).toBeTruthy();
        expect(container.querySelectorAll('.news-post').length).toBe(0);
    });

    it('Renders with list', () => {
        const { getByText, container } = render(<NewsList list={dummyList} />);

        expect(getByText('News')).toBeTruthy();
        expect(container.querySelectorAll('.news-post').length).toBe(dummyList.length);
    });

    it('Renders correct list', () => {
        const { container } = render(<NewsList list={dummyList} />);

        for (let i = 0; i < dummyList.length; i++) {
            expect(container.querySelectorAll('.news-post .title')[i].textContent).toBe(dummyList[i].title);
            expect(container.querySelectorAll('.news-post .description')[i].textContent).toBe(dummyList[i].description);
            expect(container.querySelectorAll('.news-post .time')[i].textContent).toContain('October 30');
            expect(container.querySelectorAll('.news-post a')[i].getAttribute('href')).toBe(dummyList[i].url);
            expect(container.querySelectorAll('.news-post img')[i].getAttribute('src')).toBe(dummyList[i].urlToImage);
        }
    });

});