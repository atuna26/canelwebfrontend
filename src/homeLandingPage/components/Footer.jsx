import React from 'react'
import logoCanel from '../../assets/logoCanel.png'
import { navLinks } from '../constants'
import instagramLogo from "../../assets/instagramLogo.svg"
import linkedinLogo from "../../assets/linkedinLogo.svg"

const Footer = () => {
  return (
    <footer className='bg-white/50 flex justify-between md:px-32 px-8 py-8 shadow-lg'>
        <div className='flex flex-col'>
          <img src={logoCanel} alt="Canel Logo" className='w-32 h-auto' />
          <div className='flex items-center gap-2 pt-2'>
            <a href="https://www.instagram.com/canelmining"><img src={instagramLogo} alt="Instagram Logo" className='w-7 h-7' /></a>
            <a href="https://www.instagram.com/canel_usa"><img src={instagramLogo} alt="Instagram Logo" className='w-7 h-7' /></a>
            <a href="https://www.linkedin.com/company/canelmining"><img src={linkedinLogo} alt="LinkedIn Logo" className='w-7 h-7' /></a>
          </div>
          <p className='text-sm text-gray-600 pt-5'>© 2025 Canel. All rights reserved.</p>
        </div>
        <div className='flex justify-center gap-6'>
            <div className='flex flex-col'>
              <h3 className='text-lg font-semibold'>Kurumsal</h3>
              <ul className=' space-y-2'>
                <li><a href="/kurumsal/hakkimizda" className='text-gray-600 hover:text-primary/80'>Firma Hakkında</a></li>
                <li><a href="/kurumsal/kalite-politikamiz" className='text-gray-600 hover:text-primary/80'>Kalite Politikası</a></li>
                <li><a href="/kurumsal/misyon-vizyon" className='text-gray-600 hover:text-primary/80'>Misyon ve Vizyon</a></li>
              </ul>
            </div>
            <div className='flex flex-col'>
              <h3 className='text-lg font-semibold'>Mermerler</h3>
              <ul className=' space-y-2'>
                <li><a href="/mermerler/tum-mermerler" className='text-gray-600 hover:text-primary/80'>Tüm Mermerler</a></li>
                <li><a href="/mermerler/plaka-mermerler" className='text-gray-600 hover:text-primary/80'>Plaka Mermerler</a></li>
                <li><a href="/mermerler/ebatli-fayans-mermerler" className='text-gray-600 hover:text-primary/80'>Ebatlı ve Fayans Mermerler</a></li>
                <li><a href="/mermerler/paver-mermerler" className='text-gray-600 hover:text-primary/80'>Paver Mermerler</a></li>
                <li><a href="/mermerler/blok-mermerler" className='text-gray-600 hover:text-primary/80'>Blok Mermerler</a></li>
              </ul>
            </div>
            <div className='flex flex-col'>
              <h3 className='text-lg font-semibold'>Canel</h3>
              <ul className=' space-y-2'>
                <li><a href="/mermerler/tum-mermerler" className='text-gray-600 hover:text-primary/80'>Bandırma Fabrikası</a></li>
                <li><a href="/mermerler/plaka-mermerler" className='text-gray-600 hover:text-primary/80'>Ocaklar</a></li>
                <li><a href="/referanslar" className='text-gray-600 hover:text-primary/80'>Referanslar</a></li>
                <li><a href="/katalog" className='text-gray-600 hover:text-primary/80'>Katalog</a></li>
                <li><a href="/iletisim" className='text-gray-600 hover:text-primary/80'>İletişim</a></li>
              </ul>
            </div>


        </div>

    </footer>
  )
}

export default Footer
