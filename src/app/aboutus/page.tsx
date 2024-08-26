import React from 'react'
import Aboutus from '../assets/aboutus.png'
import Image from 'next/image'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='pt-20 px-5'>
      <div className='min-w-screen'>
        <div className='flex justify-center mb-5'>
          <Image src={Aboutus.src} width={600} height={600} alt="aboutus"/>
        </div>
        <div className='p-5'>
          <h3 className='text-xl border-b'>About us - เกี่ยวกับเรา</h3>
          <p className='text-base m-5'>
            เรารับจัดทำเว็บไซต์ หรือเว็บแอพพลิเคชั่นตามความต้องการของลูกค้า ไม่ว่าจะเป็นระบบ CMS, ระบบ ERP หรือเว็บไซต์ธุรกิจเพื่อเพิ่มความน่าเชื่อถือของแบรนด์ หรือบริษัทของคุณ
          </p>
        </div>
      </div>
    </div>
  )
}

export default page