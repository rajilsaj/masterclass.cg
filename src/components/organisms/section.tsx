import React from 'react'



class Section extends React.Component {
    render()
    {
        return(
            <div className="bg-white flex flex-col h-screen ">
               <div className=' h-1/4 w-full bg-cami-background-dark'></div>
               <div className=' h-4 w-full flex flex-row justify-around   pl-28 pr-28 absolute mt-6'>
                    
                    <div className='w-1/2 h-72 shadow-sm  bg-white m-2 bg-bgt bg-cover bg-center flex  flex-col justify-end'>
                        <div className='h-3/4 '></div>
                        <div className="flex  p-2 align-bottom bg-white "><h3 className='text-center'>Centre</h3></div>
                    </div>
                    <div className='w-1/2 h-72 m-2 shadow-sm  bg-bgt1 bg-cover  bg-center flex  flex-col justify-end'>
                    <div className='h-3/4 '></div>
                    <div className="flex  p-2 align-bottom bg-white "><h3 className='text-center'>d'Application</h3></div>
                    </div>
                    <div className='w-1/2 h-72 m-2 shadow-sm  bg-bgt2 bg-cover  bg-center flex  flex-col justify-end'>
                    <div className='h-3/4 '></div>
                    <div className="flex  p-2 align-bottom bg-white "><h3 className='text-center'>Aux Metiers</h3></div>
                    </div>
                    <div className='w-1/2 h-72 m-2 shadow-sm  bg-bgt3 bg-cover  bg-center flex  flex-col justify-end'>
                    <div className='h-3/4 '></div>
                    <div className="flex  p-2 align-bottom bg-white "><h3  className='text-center '>De l'Informatique</h3></div>
                    </div>
                    
               </div>
               <div className='h-1/4 w-full pt-36'>
                <h1 className='text-center text-9xl'>
                    Depuis 2013
                </h1>
               </div>
            </div>
        )
    }
}

export default Section