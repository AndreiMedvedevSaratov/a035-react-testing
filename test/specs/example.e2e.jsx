// import { expect, $ } from '@wdio/globals'
// import { render, screen } from '@testing-library/react'

import BrowserRunner from "@wdio/browser-runner"

// import * as matchers from '@testing-library/jest-dom/matchers'
// expect.extend(matchers)

// // ToDo: fix me
// import Component from '/path/to/component.jsx'

// describe('react component tests', () => {
//     it('should test my component', async () => {
//         render(<Component />)
//         const component = screen.getByText(/Click me!/i)

//         const elem = await $(component)
//         await elem.click()
//         expect(component).toContainText('Click me!')
//     })
// })

describe('My React application', () => {
    it('should look correct', () => {
        browser.url('/');
        browser.execute('/*@visual.init*/', 'My React App');
        browser.execute('/*@visual.shapshot*/', 'Home Page');
    });
});
