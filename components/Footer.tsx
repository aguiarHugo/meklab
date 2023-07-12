import React from 'react'

type Props = {}

const Footer = () => {
  return (
    <footer className='mt-auto w-full bg-blue-100'>
        <div className='flex justify-between mx-4 py-1'>
            <p><span className='text-[12px]'>&copy;</span>Meklab, todos os direitos reservados.</p>
            <p>2023</p>
        </div>
    </footer>
  )
}

export default Footer