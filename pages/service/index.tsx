import React from 'react'
import PageTemplate from 'components/templates/PageTemplate'
import PageSentence from 'components/molecules/PageSentence'
import LineDivider from 'components/atoms/LineDivider'
import Image from 'next/image'
import SectionSentence from 'components/molecules/SectionSentence'
import {
  FiArrowUp,
  FiCheckCircle,
  FiDownload,
  FiGlobe,
  FiLayout,
  FiMonitor,
  FiRefreshCcw,
  FiSmartphone,
} from 'react-icons/fi'
import SmallCardIcon from 'components/molecules/Card/SmallCardIcon'
import CardListIcon from 'components/molecules/Card/CardListIcon'
import TextArrowLink from 'components/molecules/TextArrowLink'
import IconListItem from 'components/molecules/IconListItem'
const Services = () => {
  return (
    <>
      <PageTemplate title='Melayani - RiuStudio'>
        <section className="grid place-items-center" data-aos="zoom-in-up">
          <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12">
            <PageSentence
              badge="JASA"
              title="Kami hadir untuk membantu menyelesaikan permasalahan perusahaan Anda"
            />
          </div>
        </section>
        <LineDivider />
        <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5 ">
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-right">
            <figure className="w-full h-[315px] relative">
              <Image
                src={'/images/ui-design-illustration.svg'}
                layout="fill"
                objectFit="fill"
                alt='UI Design'
              />
            </figure>
          </aside>
          <aside className="grid gap-12 place-items-center" data-aos="fade-up-left">
            <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
              <SectionSentence
                badge="UI DESIGN"
                title="Jangan biarkan ide Anda tertangkap oleh orang lain, rancanglah prototipe ide Anda"
                paragraph="Delegasikan ide Anda secepat mungkin, buat desain yang indah dan prototipe yang jelas."
              />
            </div>
            <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
              <aside className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
                <SmallCardIcon
                  title="Desain Friendly"
                  description="Ciptakan desain modern untuk ide Anda."
                  icon={<FiLayout />}
                />
                <SmallCardIcon
                  title="Prototype"
                  description="Buat prototipe yang jelas untuk desain Anda."
                  icon={<FiLayout />}
                />
              </aside>
              <TextArrowLink label="Detil Layanan" href="/service/detail" />
            </div>
          </aside>
        </section>
        <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5 ">
          <aside className="grid gap-12 place-items-center" data-aos="fade-up-right">
            <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
              <SectionSentence
                badge="DEVELOPMENT"
                title="Ciptakan solusi untuk masalah yang berulang, rancang aplikasi, dan akses di mana saja!"
                paragraph="Cukup beritahu kami masalah berulang Anda atau metode primitif yang digunakan saat ini, dan kami akan menciptakan solusi digital."
              />
            </div>
            <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
              <aside className="w-full grid grid-cols-1 gap-5">
                <CardListIcon
                  icon={<FiSmartphone />}
                  title="Mobile App Development"
                />
                <CardListIcon
                  icon={<FiMonitor />}
                  title="Desktop App Development"
                />
                <CardListIcon icon={<FiGlobe />} title="Web Development" />
              </aside>
              <TextArrowLink label="Detil Layanan" href="/service/detail" />
            </div>
          </aside>
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-left">
            <figure className="w-full h-[450px] relative">
              <Image
                src={'/images/development-illustration.svg'}
                layout="fill"
                objectFit="fill"
                alt='IDE for development'
              />
            </figure>
          </aside>
        </section>
        <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5 ">
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-right">
            <figure className="w-full h-[545px] relative">
              <Image
                src={'/images/maintenance-illustration.svg'}
                layout="fill"
                objectFit="fill"
                alt='server maintenance'
              />
            </figure>
          </aside>
          <aside className="grid gap-12 place-items-center" data-aos="fade-up-left">
            <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
              <SectionSentence
                badge="MAINTENANCE"
                title="Bayangkan server Anda seperti anak Anda sendiri, uruslah setiap hari"
                paragraph="Kami akan membackup server Anda setiap hari, membersihkannya setiap minggu, mengupgradenya bila ada pembaruan."
              />
            </div>
            <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
              <aside className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
                <IconListItem icon={<FiDownload />} value='Cadangkan setiap hari' />
                <IconListItem icon={<FiArrowUp />} value='Meningkatkan' />
                <IconListItem icon={<FiRefreshCcw />} value='Pembersihan setiap minggu' />
                <IconListItem icon={<FiCheckCircle />} value='Memperbaiki Kesalahan' />
              </aside>
              <TextArrowLink label="Detil Layanan" href="/service/detail" />
            </div>
          </aside>
        </section>
      </PageTemplate>
    </>
  )
}

export default Services
