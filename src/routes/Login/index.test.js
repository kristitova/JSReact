import React from 'react'

import { render, fireEvent, act } from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect'

import { Login, LoginFormTestIds } from "./index";


describe('Login', () => {

    it('вызов метода onSubmit по клику на кнопки', () => {
        const onSubmit = jest.fn();
        const component = render(<Login onSubmit={onSubmit} />)

        act(() => {
            fireEvent.click(component.queryByTestId(LoginFormTestIds.submit));
        })

        expect(onSubmit).toBeCalled();
    })
});