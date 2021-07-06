import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const categories = [
    { name: 'portraits', description: 'Portraits of poeple in my life' }
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

afterEach(cleanup);

describe('Nav component', () => {
    // baseline test
        it('renders', () => {
            render(<Nav 
                categories={categories}
                setCurrentCategory={mockSetCurrentCategory}
                currentCategory={mockSetCurrentCategory}
            />);
        });

    // snapshot test
        it('matches snapshot', () => {
            const { asFragment } = render(<Nav 
                categories={categories}
                setCurrentCategory={mockSetCurrentCategory}
                currentCategory={mockSetCurrentCategory}
            />);
            
            // assert value comparison
            expect(asFragment()).toMatchSnapshot();
        });
        
});

describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        // arrange
        const { getByLabelText } =render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockSetCurrentCategory}
        />);
        //assert
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
});

describe('links are visible', () => {
    it('inserts text into the links', () => {
        // arrange
        const { getByTestId } = render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockSetCurrentCategory}
        />);
        // assert
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About Me');
    });
})