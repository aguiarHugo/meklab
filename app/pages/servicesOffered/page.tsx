import Image from 'next/image'
import Link from 'next/link'
import {
  AiOutlineWifi, 
  AiOutlineClockCircle, 
  AiOutlineWarning,
  AiOutlineControl,
  AiOutlineHome,
  AiOutlineCalendar
} from 'react-icons/ai'
import {GiWaterRecycling} from 'react-icons/gi'
import {SlWrench} from 'react-icons/sl'

export default function Services() {
  return (
    <main className='relative mt-40'>
      <div className='flex flex-col items-center'>
        <h1 className="text-center text-[38px]">Gestão da Água</h1>
        <hr className='border-b border-blue-100 w-[300px] justify-center' />
      </div>

      <div className='flex flex-wrap gap-12 justify-center mt-8 sm:mx-[300px] md:mx-[200px]'>
        <div className='flex flex-col w-[200px] justify-center items-center gap-2'>
          <AiOutlineWifi size={48} className='text-blue-100' />
          <p className='text-center'>
            Controle de Água Automatizado sem Fio
          </p>
        </div>
        <div className='flex flex-col w-[200px] justify-center items-center gap-2'>
          <AiOutlineClockCircle size={48} className='text-blue-100' />
          <p className='text-center'>
            Monitoramento 24/7 via Celular, Desktop ou Tablet
          </p>
        </div>
        <div className='flex flex-col w-[200px] justify-center items-center gap-2'>
          <AiOutlineWarning size={48} className='text-blue-100' />
          <p className='text-center'>
            Detecção de Vazamento e Transbordamento
          </p>
        </div>
        <div className='flex flex-col w-[200px] justify-center items-center gap-2'>
          <GiWaterRecycling size={48} className='text-blue-100' />
          <p className='text-center'>
            Controle Automático de Bombas
          </p>
        </div>
        <div className='flex flex-col w-[200px] justify-center items-center gap-2'>
          <AiOutlineControl size={48} className='text-blue-100' />
          <p className='text-center'>
            Gerenciamento de Vários Tanques
          </p>
        </div>
        <div className='flex flex-col w-[200px] justify-center items-center gap-2'>
          <SlWrench size={48} className='text-blue-100' />
          <p className='text-center'>
            Fácil Instalação Pelo Proprietário
          </p>
        </div>
        <div className='flex flex-col w-[200px] justify-center items-center gap-2'>
          <AiOutlineHome size={48} className='text-blue-100' />
          <p className='text-center'>
            Aplicação Residencial, Comercial e Industrial
          </p>
        </div>
        <div className='flex flex-col w-[200px] justify-center items-center gap-2'>
          <AiOutlineCalendar size={48} className='text-blue-100' />
          <p className='text-center'>
            Garantia e Suporte de 5 Anos
          </p>
        </div>
      </div>
      <div className='flex flex-wrap justify-center items-center my-16 gap-12'>
        <Link href='https://www.bomgia.com.br/meklab/abre-catalogo.asp?t=1' target='_blank' className='bg-blue-100 py-2 px-4 w-[200px] rounded-md hover:brightness-125 text-center'>
          Ver Catálogo Eletrônico
        </Link>
        <Link href='https://www.bomgia.com.br/meklab/abre-catalogo.asp?t=2' target='_blank' className='bg-blue-100 py-2 px-4 w-[200px] rounded-md hover:brightness-125 text-center'>
          Ver Catálogo em PDF
        </Link>
      </div>
    </main>
  )
}
