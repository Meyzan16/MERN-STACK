import React from 'react'

import {render} from '@testing-library/react'
import {BrowserRouter as Router } from 'react-router-dom'
// import { NavLink, Link } from 'react-router-dom';


import Button from './index'

// isdisabled
test("should not allowed click button if disabled is present", () => {
    const {container} = render(<Button isDisabled> </Button>)

    expect(container.querySelector("span.disabled")).toBeInTheDocument()
})

// isloading
test("should render loading/spinner", () => {
    const {container, getByText} = render(<Button isLoading> </Button>)

    // reges casesensitve pola tau pettwern untuk mencari loading di kalimat sesuatu, selama ada kalimat loading 
    // dia kemabalikan nilai true
    expect(getByText(/loading/i)).toBeInTheDocument()

    expect(container.querySelector("span")).toBeInTheDocument()
})

// jika button nya link keluar atau eksternal

test("should render <a> to left tag", () => {
    const {container} = render(<Button type="link" isExternal> </Button>);


    expect(container.querySelector("a")).toBeInTheDocument()
})

// jika link ke dalam internal
test("should render <Link> component", () => {
    const { container } = render(
        <Router>
             <Button href="" type="link"> 
             </Button>
        </Router>
    );


    expect(container.querySelector("a")).toBeInTheDocument()
})