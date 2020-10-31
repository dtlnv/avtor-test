import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NewsItem from '../List/NewsItem';

const dummyPost = {
    title: 'Title',
    description: 'Desctiption',
    url: 'Dummy_link',
    urlToImage: 'Dummy_image',
    publishedAt: '2020-10-30T15:42:00Z',
};

describe('News Item test', () => {

    it('Render without data', () => {
        const { container } = render(<NewsItem post={{}} />);

        expect(container.querySelector('.news-post')).toBeNull();
    });

    it('Correct render', () => {
        const { container } = render(<NewsItem post={dummyPost} />);

        expect(container.querySelector('.title').textContent).toBe(dummyPost.title);
        expect(container.querySelector('.time').textContent).toBe('October 30, 17:42');
        expect(container.querySelector('.news-post a').getAttribute('href')).toBe(dummyPost.url);
        expect(container.querySelector('.description').textContent).toBe(dummyPost.description);
        expect(container.querySelector('.image img').getAttribute('src')).toBe(dummyPost.urlToImage);
    });

});