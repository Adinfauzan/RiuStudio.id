import LineDivider from 'components/atoms/LineDivider'
import PageSentence from 'components/molecules/PageSentence'
import SectionSentence from 'components/molecules/SectionSentence'
import PageTemplate from 'components/templates/PageTemplate'
import Image from 'next/image'
import React from 'react'

const HowWeWork = () => {
  return (
    <PageTemplate>
      <section className="grid place-items-center">
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-5/12 text-center" data-aos="zoom-in-up">
          <PageSentence
            badge="BAGAIMANA KITA BEKERJA"
            title="Kami memiliki alur kerja yang memungkinkan pekerjaan diselesaikan dengan baik"
          />
        </div>
      </section>
      <LineDivider />
      <section className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 lg:gap-5">
        <aside className="w-full" data-aos="fade-up-right">
          <div className="w-full h-[410px] relative">
            <Image
              src={'/images/discuss-illustration.webp'}
              quality={100}
              layout="fill"
              objectFit="contain"
              alt='Some people discuss'
            />
          </div>
        </aside>
        <aside className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left" data-aos="fade-up-left">
          <SectionSentence
            badge="STEP 01"
            title={`Mari kita bicarakan masalah perusahaan Anda terlebih dahulu`}
            paragraph={"Setelah mengirimkan formulir penawaran, kami akan meninjau datanya, kemudian kami akan menghubungi Anda. Anda dapat berdiskusi dengan tim kami mengenai permasalahan Anda dan mencari solusi dari permasalahan tersebut. <br> <br> Pada langkah ini, Anda akan membahas aplikasi apa yang akan dibangun."}
          />
        </aside>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 lg:gap-5">
        <aside className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left" data-aos="fade-up-right">
          <SectionSentence
            badge="STEP 02"
            title={`Melakukan perencanaan, perancangan dan pengembangan hingga semuanya selesai`}
            paragraph="Jika semuanya sudah disepakati maka tim kami akan membuat rencana terkait aplikasi yang akan dibuat. Mulai dari analisis, desain, hingga pengembangan. <br> <br> Pada langkah ini, aplikasi sudah selesai 100%."
          />
        </aside>
        <aside className="w-full" data-aos="fade-up-left">
          <div className="w-full h-[410px] relative">
            <Image
              src={'/images/development-illustration-2.svg'}
              quality={100}
              layout="fill"
              objectFit="contain"
              alt='Development'
            />
          </div>
        </aside>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 lg:gap-5">
        <aside className="w-full" data-aos="fade-up-right">
          <div className="w-full h-[410px] relative">
            <Image
              src={'/images/project-asset-illustration.svg'}
              quality={100}
              layout="fill"
              objectFit="contain"
              alt='Project Asset'
            />
          </div>
        </aside>
        <aside className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left" data-aos="fade-up-left">
          <SectionSentence
            badge="STEP 03"
            title={`Proyek selesai dan kami mengirimkan semua aset proyek, dan akses ke server`}
            paragraph="Kami akan bertanggung jawab untuk menyerahkan semua aset proyek kepada Anda, jangan khawatir. Aset tersebut antara lain, file desain, kode sumber, akses server, dan lain sebagainya. <br> <br> Pada langkah ini, semuanya selesai dan kontrak berakhir."
          />
        </aside>
      </section>
      <LineDivider />
    </PageTemplate>
  )
}

export default HowWeWork
