import Bg from '../../assets/BgHero.jpg'
import Navbar from '../Navbar'

const Hero = () => {
  return (
    <div
    className="min-h-screen"
    style={{   
        backgroundPosition: 'center',
        backgroundImage: `url(${Bg.src})`,
        backgroundSize: 'cover'
    }}>
        {/* <Navbar/> */}
        <div className='w-screen min-h-screen justify-center mx-auto flex flex-col'>
            <div className="hero-overlay bg-opacity-50">        
            </div>
            <div className="flex items-center justify-center min-w-screen text-neutral-content text-center">
                <div className="max-w-xl">
                    <h1 className="mb-5 text-5xl font-bold">kookkook company</h1>
                    <p className="mb-5">
                        บริการรับจัดทำเว็บไซต์ เว็บแอพพลิเคชั่น ระบบ CMS ระบบ ERP สำหรับธุรกิจ
                    </p>
                    <button className="btn bg-base-200 hover:bg-base-300 hover:border-base-300">Get Intouch</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero