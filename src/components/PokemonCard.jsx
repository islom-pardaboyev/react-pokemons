import React from 'react'

function PokemonCard({img, name, types, width, height, egg, id}) {
  return (
    <div className='min-w-[32%] relative p-5 rounded-xl bg-gradient-to-r from-red-500 to-orange-500'>
      <span className='absolute top-1 right-1 bg-white/80 w-7 h-7 rounded-full flex items-center justify-center'>{id}</span>
      <img src={img} className='rounded-xl mx-auto' width={150} height={150} alt="" />
      <div className='mt-3 rounded-md p-1 flex flex-col gap-3 bg-white'>
        <h1 className='flex w-full items-center justify-between'>Name: <strong>{name}</strong></h1>
        <h1 className='flex w-full items-center justify-between'>Types: <strong>{types}</strong></h1>
        <h1 className='flex w-full items-center justify-between'>Width: <strong>{width}</strong></h1>
        <h1 className='flex w-full items-center justify-between'>Height: <strong>{height}</strong></h1>
        <h1 className='flex w-full items-center justify-between'>Egg: <strong>{egg}</strong></h1>
      </div>
    </div>
  )
}

export default PokemonCard