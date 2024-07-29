import LineDivider from 'components/atoms/LineDivider'
import TeamCard from 'components/molecules/Card/TeamCard'
import PageSentence from 'components/molecules/PageSentence'
import SectionSentence from 'components/molecules/SectionSentence'
import LogoList from 'components/organisms/LogoList'
import StatisticList from 'components/organisms/StatisticList'
import PageTemplate from 'components/templates/PageTemplate'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <PageTemplate title="Tentang - RiuStudio">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
        <aside className="w-full" data-aos="fade-down-right">
          <div className="w-full h-[480px] relative">
            <Image
              src={'/images/about-illustration.webp'}
              layout="fill"
              objectFit="contain"
              quality={80}
              alt="Programmers when coding in their laptop"
              
            />
          </div>
        </aside>
        <aside
          className="text-center sm:w-10/12 md:w-8/12 lg:w-full lg:text-left"
          data-aos="fade-up-left"
        >
          <PageSentence
            badge="ABOUT"
            title="Kami tim dari RiuStudio.id"
            description={`Beberapa orang kreatif berkumpul di tempat yang sama - itulah RiuStudio. Kami berkolaborasi untuk menghasilkan hasil terbaik, disukai klien dan nyaman bagi pengguna. Disini kita menjaga kebersamaan walaupun dengan latar belakang yang berbeda-beda, semua orang disini sudah ahli di bidangnya masing-masing.`}
          />
        </aside>
      </section>
      <LineDivider />
      <section className="grid place-items-center gap-16">
        <div
          className="sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-5/12 text-center"
          data-aos="zoom-in-up"
        >
          <SectionSentence
            badge="STATISTICS"
            title="Ini Statistik kita dalam 2 tahun ke belakang." 
            />
        </div>
        <div className="w-full grid gap-14">
          <div data-aos="fade-right">
            <StatisticList />
          </div>
          <LogoList />
        </div>
      </section>
      <section className="grid place-items-center gap-16">
        <div
          className="sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-5/12 text-center"
          data-aos="zoom-in-up"
        >
          <SectionSentence
            badge="TIM KAMI"
            title="Temui Tim RiuStudio"
          />
        </div>
        <div className="w-full grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/team/"
              job="Founder"
              name="Adin Fauzan"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/team/"
              job="Front-end Development"
              name=""
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/team/"
              job="Back-end Development"
              name=""
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/team/"
              job="Grafik Desainer"
              name=""
            />
          </div>
          
          </div>
      </section>
    </PageTemplate>
  )
}

export default About
