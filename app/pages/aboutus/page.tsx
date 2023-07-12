import Image from 'next/image'

import meklab from '@/public/meklab1.png'
import Link from 'next/link'

export default function Aboutus() {
  return (
    <main className='relative mt-40'>
      <div className='flex flex-col items-center'>
        <h1 className="text-center text-[38px]">O que é?</h1>
        <hr className='border-b border-blue-100 w-1/3 justify-center' />
      </div>
      <div className="flex justify-center items-center sm:gap-16">
        <div className='hidden sm:flex'>
          <Image
            src={meklab}
            alt='meklab'
            className='w-[300px] h-[200px]'
          />
        </div>
        <div className="flex flex-col gap-4 px-12 mt-6 sm:mt-0 sm:px-0 sm:basis-1/2">
          <p>
            Meklab é um centro de controle eletrônico para operação 24/7
            dotada de um microprocessador capaz de receber informações de diversos sensores e fontes
            de informações, processar as informações através de códigos de programação, acionar dispositivos elétricos e eletromecânicos, registrar informações, transmitir
            e receber dados e comandos via internet, wi-fi ou RF.
          </p>
          <p>
            O Meklab reconhece todos os protocolos de dados e isso possibilita sua integração
            com todos os sensores, dispositivos eletrônicos e computadores que possuem portas de comunicação
          </p>
          <p>
            Além da central o Meklab desenvolve sensores dedicados, em especial para líquidos e sólidos com precisão
            e longa durabilidade
          </p>
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-center items-start px-12 sm:px-12 gap-6 sm:gap-12 mt-12'>
        <div className='flex flex-col basis-1/3'>
          <h2>Gestão Manual e Automatizada</h2>
          <hr className='border-b border-blue-100 w-full justify-center' />
          <p className='mt-4'>A gestão manual são decisões e comandos baseados em diversas inforamções recebidas.</p>
          <p>A gestão automatizada são ações realizadas por um sistema composto de software e hardware baseados em informações e processadas por algorítimos inteligentes</p>
        </div>
        <div className='flex flex-col basis-1/3'>
          <h2>Comunicação por Cabos ou Wireless</h2>
          <hr className='border-b border-blue-100 w-full justify-center' />
          <p className='mt-4'>
            A linha 2023 traz a possibilidade de uso de cabos de 2 vias para comunicação
            ou uso de dispositivos RF (sem fio). Há configurações compatíveis com redes
            wi-fi, porém pouco usadas pela dependência de estabilidade em redes wi-fi, o que não ocorre com a
            comunicação RF independente.
          </p>
        </div>
        <div className='flex flex-col basis-1/3'>
          <h2>Água, Energia e Processos</h2>
          <hr className='border-b border-blue-100 w-full justify-center' />
          <p className='mt-4'>
            O sistema Meklab estruturado em módulos capazes de realizar a gestão, controle e supervisão de sistemas de água,
            processos industriais / prediais e gestão, proteção e supervisão de energia
          </p>
        </div>
      </div>
      <div className='flex flex-wrap justify-center items-center my-16 gap-12'>
        <Link href='https://www.bomgia.com.br/meklab/abre-catalogo.asp?t=1' target='_blank' className='bg-blue-100 py-2 px-4 w-[230px] rounded-md hover:brightness-125 text-center'>
          Ver Catálogo Eletrônico
        </Link>
        <Link href='https://www.bomgia.com.br/meklab/abre-catalogo.asp?t=2' target='_blank' className='bg-blue-100 py-2 px-4 w-[230px] rounded-md hover:brightness-125 text-center'>
          Ver Catálogo em PDF
        </Link>
      </div>
    </main>
  )
}
