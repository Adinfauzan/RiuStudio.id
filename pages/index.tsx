import ButtonLink from 'components/atoms/Button/ButtonLink'
import LineDivider from 'components/atoms/LineDivider'
import FeatureCard from 'components/molecules/Card/FeatureCard'
import PageSentence from 'components/molecules/PageSentence'
import PricingCard from 'components/molecules/Card/PricingCard'
import ProjectCard from 'components/molecules/Card/ProjectCard'
import SectionSentence from 'components/molecules/SectionSentence'
import LogoList from 'components/organisms/LogoList'
import TestimonialList from 'components/organisms/TestimonialList'
import PageTemplate from 'components/templates/PageTemplate'
import Image from 'next/image'
import React from 'react'
import { FiFigma, FiCode, FiBox } from 'react-icons/fi'
const Home = () => {
  return (
    <>
      <PageTemplate title="Home - RiuStudio">
        {/* Banner Section */}
        <section
          className="flex flex-col gap-10 items-center"
          data-aos="fade-up"
        >
          <div className="w-10/12 md:w-8/12 text-center">
            <PageSentence
              title="RiuStudio"
              description="Kami berkomitmen untuk tidak membuat klien menunggu. Kami akan mengirimkan pekerjaan secepat mungkin. Bahkan di hari yang sama. Meski begitu, kami tidak mengurangi kualitas pekerjaan kami."
              badge="BERORIENTASI PADA PENGEMBANGAN KLIEN"
            />
          </div>
          <div className="flex flex-col gap-6 sm:flex-row w-full sm:w-fit">
            <ButtonLink value="Kirim Penawaran" href="/quote" />
            <ButtonLink
              value="Tentang"
              color="white"
              style="light"
              href="/about"
            />
          </div>
        </section>
        {/* Feature List */}
        <section className="grid grid-cols-1 gap-5 md:grid-cols-3 mb-16">
          <div data-aos="fade-up">
            <FeatureCard
              title="Design"
              description="Antarmuka proyek akan dirancang terlebih dahulu, alat favorit kami adalah Figma dan Adobe Photoshop."
              icon={<FiFigma />}
            />
          </div>
          <div data-aos="fade-up">
            <FeatureCard
              title="Develop"
              description="Ubah desain dan tulis logika bisnis di sini. Pilih teknologi yang Anda inginkan."
              icon={<FiCode />}
            />
          </div>
          <div data-aos="fade-up">
            <FeatureCard
              title="Ship"
              description="Setelah pekerjaan selesai, kami akan mengirimkan proyek beserta seluruh asetnya kepada Anda."
              icon={<FiBox />}
            />
          </div>
        </section>
        {/* Logo List */}
        <LogoList />
        {/* How We Work */}
        <section className="grid grid-cols-1 gap-6 sm:gap-8 place-items-center lg:grid-cols-2">
          <aside className="w-full h-[400px] relative" data-aos="fade-right">
            <Image
              src={'/images/how-we-work-illustration.svg'}
              layout="fill"
              objectFit="fill"
              alt="Structured plan"
            />
          </aside>
          <aside
            className="text-center sm:w-10/12 lg:text-left lg:w-full"
            data-aos="fade-left"
          >
            <SectionSentence
              title="Semuanya terencana dengan baik, dirancang dengan baik dan dikembangkan dengan sepenuh hati"
              paragraph="Perencanaan yang matang membuat kami percaya diri, dikembangkan dengan praktik terbaik sehingga proyek dapat dipertahankan. Kami selalu menguji proyek sebelum dikirim."
              badge="BAGAIMANA KITA BEKERJA"
            />
          </aside>
        </section>
        {/* Our Teams */}
        <section className="grid grid-cols-1 gap-6 sm:gap-8 place-items-center lg:grid-cols-2">
          <aside className="text-center sm:w-10/12 lg:text-left lg:w-full">
            <div className="space-y-12" data-aos="fade-right">
              <SectionSentence
                title="Kami adalah tim desainer, pengembang, dan Analisis."
                paragraph="Tim kami terdiri dari banyak orang kreatif. Kami berkomitmen untuk menjaga kualitas kerja dan kecepatan. Orang-orang kreatif ini bekerja sama untuk menciptakan hasil kerja yang maksimal."
                badge="TIM KAMI"
              />
              <ButtonLink
                value="Lihat Tim Kami"
                href="/teams"
                size="small"
                color="white"
                style="light"
              />
            </div>
          </aside>
          <aside
            className="w-full h-[400px] relative sm:w-8/12 lg:w-full"
            data-aos="fade-left"
          >
            <Image
              src={'/images/team-illustration.svg'}
              layout="fill"
              objectFit="fill"
              alt="Code editor and UI Editing popup"
            />
          </aside>
        </section>
        <LineDivider />
        {/* Our Projects */}
        <section className="flex flex-col gap-16 items-center">
          <div
            className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12"
            data-aos="zoom-in-up"
          >
            <SectionSentence
              title="Sebelumnya kami mengerjakan proyek, ayo dilihat."
              badge="PROJECTS"
            />
          </div>
          <div className="w-full grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-5">
            <div data-aos="flip-left">
              <ProjectCard
                title="Halaman Arahan Aplikasi Desktop"
                description="Ini adalah projects pembuatan aplikasi desktop."
              />
            </div>
            <div data-aos="flip-right">
              <ProjectCard
                title="Laman Landas Aplikasi Seluler"
                description="Ini adalah proyek desain aplikasi dengan figma dan Photoshop."
                bottomSquareSize="big"
              />
            </div>
          </div>
        </section>
        {/* Prices
        <section className="flex flex-col gap-16 items-left">
          <div
            className="text-center sm:w-10/12 md:w-13/12 lg:w-6/12"
            data-aos="zoom-in-up"
          >
            <SectionSentence
              title="Apa yang kamu butuhkan? Pilih layanan yang dapat membantu Anda."
              badge="GET STARTED"
            />
          </div>
          <div className="w-full grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            <div data-aos="fade-up-right">
              <PricingCard
                price="Rp.350.000"
                title="Toko Online"
                features={[
                  '5 Halaman',
                  'Dapet File',
                  '3x Revisi',
                  '1 Domain',
                  'Bantuan 24/7',
                  '1Gb Storage Hosting',
                  'Template Request',
                ]}
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <PricingCard
                price="Rp.375.000"
                title="Portfolio"
                features={[
                  '5 Halaman',
                  'Dapet File',
                  '3 Revisi',
                  '1 Domain',
                  'Bantuan 24/7',
                  '1Gb Storage Hosting',
                  'Template Request',
                ]}
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <PricingCard
                price="Rp 250.000"
                title="Maintenance"
                features={[
                   'Back Up',
                   '3 Jam Maintenance',
                   'Bantuan 24/7',
                   'Termasuk Memperbaiki',
                   'Rp.75.000/Tambah Jam',
                ]}
              />
            </div>
            <div data-aos="fade-up-left">
              <PricingCard
                price="Rp.150.000"
                title="Manage WordPress"
                features={[
                  'Template Gratis',
                  '1 Domain',
                  '~10.000 Kunjungan Bulanan',
                  '5 Revisi',
                  'Bantuan 24/7',
                  'Email Gratis',
                  '100Gb SSD Storage',
                  'Backup Mingguan dan Sesuai Kebutuhan',
                  'Jaminan 30 Hari Uang Kembali',
                ]}
              />
            </div>
          </div>
        </section>*/
        {/* Testimonial */}
        <section className="flex flex-col gap-16 items-center">
          <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12" data-aos="zoom-in-up">
            <SectionSentence
              title="Apa yang dikatakan klien kami yang tidak pernah kami kecewakan?"
              badge="TESTIMONIAL"
            />
          </div>
          <div className="w-full" data-aos="fade-up">
            <TestimonialList />
          </div>
        </section>
      </PageTemplate>
    </>
  )
}

export default Home
