import LineDivider from 'components/atoms/LineDivider'
import Text from 'components/atoms/Text'
import PricingCard from 'components/molecules/Card/PricingCard'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import Link from 'next/link'
import React from 'react'
import randomString from 'utils/randomString'

const Pricing = () => {
  interface Faq {
    title: string
    description: string
  }
  const faqs: Faq[] = [
    {
      title: `Bagaimana sistem pembayarannya?`,
        description: `Jika proyek sudah disetujui, Anda akan membayar uang muka, dan bila progresnya mencapai 50% Anda akan melakukan pembayaran kedua, dan bila progresnya 100% Anda akan melunasinya.`,
      },
      {
        title: `Bolehkah saya berkonsultasi terlebih dahulu?`,
        description: `Tentu saja Anda dapat berkonsultasi dengan kami terlebih dahulu. Kami sangat senang membantu permasalahan Anda dan memberikan solusi terbaik kami. Anda dapat menghubungi kami melalui halaman kontak.`,
      },
      {
        title: `Bagaimana jika proyek terhenti di tengah jalan?`,
        description: `Kami berjanji akan selalu menyelesaikan proyek tepat waktu, jika terjadi masalah (karena kesalahan kami), semua pembayaran akan dikembalikan. Dan proyek tersebut akan dihentikan.`,
      },
      {
        title: `Apakah itu termasuk server dan domain?`,
        description: `Anda tidak perlu memikirkan hal lain, semuanya sudah kami persiapkan. Anda hanya perlu memeriksa kemajuan Anda dan memastikan fitur yang Anda inginkan sudah tepat.`,
      },
      {
        title: `Apakah saya akan mendapatkan kode sumbernya?`,
        description: `Ketika proyek selesai 100%, semua sumber daya, seperti file desain, diagram analisis, kode sumber, dll. akan diberikan kepada Anda. Anda tidak perlu khawatir tentang hal ini.`,
      },
    {
      title: `Apakah ada garansi?`,
      description: `Garansi 1 tahun atas kesalahan atau kekeliruan kami. Jika ingin menambahkan fitur yang tidak termasuk dalam garansi, ada biaya lain per fitur, dan harga tergantung tingkat kesulitan.`,
    },
  ]

  return (
    <PageTemplate>
      <section className="grid grid-cols-1 place-items-center">
        <div
          className="sm:w-10/12 md:8/12 lg:w-6/12 text-center"
          data-aos="zoom-in-up"
        >
          <PageSentence
            badge="PRICING"
            title="Apa yang kamu butuhkan? Pilih layanan yang dapat membantu Anda"
          />
        </div>
      </section>
      <LineDivider />
      <section className="w-full grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        <div data-aos="fade-up">
          <PricingCard
            price="92$"
            title="UI Design"
            features={[
              '10 Halaman Desain',
              'Didokumentasikan dengan baik',
              '4 Revisi',
              '$5$/Halaman Tambahan',
            ]}
          />
        </div>
        <div data-aos="fade-up">
          <PricingCard
            price="153$"
            title="Development"
            features={[
              'Web & Mobile',
              'Didokumentasikan dengan baik',
              '8 Revisi',
              '$10$/Halaman Tambahan',
            ]}
          />
        </div>
        <div data-aos="fade-up">
          <PricingCard
            price="185$"
            title="Maintenance"
            features={[
              'Cadangan Harian',
              '3 Jam Pemeliharaan',
              'Termasuk Memperbaiki',
              '$15$/Kam Tambahan',
            ]}
          />
        </div>
      </section>
      <section className="grid place-items-center gap-16">
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center" data-aos="zoom-in-up">
          <PageSentence
            badge="FAQ"
            title="Pertanyaan yang sering diajukan, mungkin sama dengan pertanyaan Anda"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-7">
          {faqs.map((faq) => {
            return (
              <div className="grid gap-2.5" key={randomString(64)} data-aos="fade-right">
                <Text textStyle="FAQTitle" value={faq.title} />
                <Text textStyle="FAQDescription" value={faq.description} />
              </div>
            )
          })}
        </div>
        <div className="text-white text-base font-medium text-center">
          {`Tidak menemukan jawaban? `}
          <div className="sm:hidden"></div>
          <div className="text-cyan inline select-none">
            <Link href={'/quote'}>Jangan ragu untuk bertanya!</Link>
          </div>
        </div>
      </section>
    </PageTemplate>
  )
}

export default Pricing
