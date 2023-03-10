import { render, screen} from '@testing-library/react';
import {render as renderer, unmountComponentAtNode} from 'react-dom'
import React from 'react'
import Footer from '../Components/footer/Footer';
import { toHaveStyle } from '@testing-library/jest-dom'
// expect.extend({ toHaveStyle })




describe("Testing Footer component",()=>{

    let element;
    beforeEach(()=>{
      element= document.createElement("div")
      document.body.appendChild(element)
    })

    afterEach(()=>{
        unmountComponentAtNode(element)
        element.remove()
        element=null
       })  

    test("Demo test",()=>{
        console.log("Test executed");
    })

    test("Should have This is Footer text in header",()=>{
        render(<Footer/>)
        expect(screen.getByText("This is Footer")).toBeInTheDocument()
    })

    test("Should have Disclaimer text in footer",()=>{
        render(<Footer/>)
        expect(screen.getByText("Disclaimer")).toBeInTheDocument()
    })


    it("Should have 3 anchor links in footer component",()=>{
        renderer(<Footer/>,element)
        const count=element.getElementsByTagName('a').length
        expect(count).toBe(3)
})

test("Should have userclass class in brand-link",()=>{
    render(<Footer/>)
    expect(screen.getByTestId("footerbrand")).toHaveClass("copy")
})

})
