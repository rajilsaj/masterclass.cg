import React from 'react'
import { BigButton } from '../atoms/buttons'

export class Transition extends React.Component {
    render() {
        return <div className='mx-auto py-5 my-32 content-center grid grid-cols-3'>
                <div></div>
                 <BigButton label='Entrer'/>
                 <div></div>
        </div>
    }
}