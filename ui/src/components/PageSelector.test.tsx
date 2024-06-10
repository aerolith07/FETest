import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { PageSelector } from './PageSelector'
import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation';

jest.mock('next/navigation');

const mockedUseSearchParams = jest.mocked(useSearchParams);

describe('Page Selector', () => {
    beforeAll(() => {
        mockedUseSearchParams.mockReturnValue(new ReadonlyURLSearchParams({}));
    })

    it('renders page numbers', () => {

        render(<PageSelector totalPages={5} currentPage={2} />);

        const links = screen.getAllByRole('link');
        const currentPageNode = screen.getByRole('paragraph');

        expect(links).toHaveLength(4);
        expect(currentPageNode).toHaveTextContent('2')
    })

    it('does not render page numbers if only 1 page', () => {

        render(<PageSelector totalPages={1} currentPage={1} />);

        const links = screen.queryAllByRole('link');
        const currentPageNode = screen.queryByRole('paragraph');

        expect(links).toHaveLength(0)
        expect(currentPageNode).toBeNull()
    })
})