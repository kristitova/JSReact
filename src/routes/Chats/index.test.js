import React from 'react'
import '@testing-library/jest-dom'
import { render, fireEvent, act } from '@testing-library/react';
import { ChatsRender, ChatsTestIDS } from "./index";

describe('СhatsRender', () => {
    it('корректное название чата', () => {
        const component = render(<ChatsRender />)

        expect(component.queryByTestId(ChatsTestIDS.title))
            .toHaveTextContent('name')
    });
});
