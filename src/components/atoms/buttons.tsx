import React from 'react'

type label = {
    label : string,
    icon ?: string, 
}
export class BigButton extends React.Component <label> {
    render() {
        return <button className="text-orange-500 border border-orange-500 hover:bg-orange-500
         hover:text-white active:bg-orange-600 font-bold uppercase px-8 py-3 
         rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            <i className="fas fa-heart"></i> <h1 className='text-3xl'>{this.props.label}</h1>
        </button>
    }
}