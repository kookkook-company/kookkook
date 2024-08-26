import React from 'react'
import Card from './Card'

const Category = () => {
  return (
    <div className='min-h-[60vh] bg-zinc-200 items-center justify-evenly flex max-sm:flex-col p-5 gap-5'>
        {
            [0, 1, 2].map((_, index)=>{
                return (
                    <Card key={index}/>
                )
            })
        }
    </div>
  )
}

export default Category