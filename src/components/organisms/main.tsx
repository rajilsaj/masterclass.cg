import React from 'react'
import NavBar from '../molecules/nav';
import SectionOne from './section_one';

class Main extends React.Component {
    render()
    {
        return (
            <>
            <NavBar />
            <SectionOne />
            </>
        )
    }
} 

export default Main;