import LineDivider from 'components/atoms/LineDivider'
import FaqTabbar from 'components/molecules/FaqTabbar'
import PageSentence from 'components/molecules/PageSentence'
import FaqList from 'components/organisms/FaqList'
import PageTemplate from 'components/templates/PageTemplate'
import React, { useEffect, useState } from 'react'
import getRandomItemsFromArray from 'utils/getRandomItemsFromArray'

const Faq = () => {
  const faqs = [
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
  const [randomFaqs, setRandomFaqs] = useState([faqs, faqs, faqs, faqs])
  const [activeFaq, setActiveFaq] = useState(faqs)
  useEffect(() => {
    const faqs = [
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
    setRandomFaqs([
      faqs,
      getRandomItemsFromArray(faqs, 5),
      getRandomItemsFromArray(faqs, 4),
      getRandomItemsFromArray(faqs, 3),
    ])
  }, [])
  return (
    <PageTemplate>
      <section className="grid grid-cols-1 place-items-center">
        <div className="sm:w-10/12 md:8/12 lg:w-6/12 text-center" data-aos="zoom-in-up">
          <PageSentence
            badge="FAQ"
            title="Pertanyaan yang sering diajukan, mungkin sama dengan pertanyaan Anda"
          />
        </div>
      </section>
      <section className="flex flex-col md:flex-row gap-5">
        <div className="basis-12/12 md:basis-4/12" data-aos="fade-up">
          <FaqTabbar
            tabs={[
              {
                name: 'Umum',
                onClick: () => {
                  setActiveFaq(randomFaqs[0])
                },
              },
              {
                name: 'Transaksi',
                onClick: () => {
                  setActiveFaq(randomFaqs[1])
                },
              },
              {
                name: 'Pemeliharaan',
                onClick: () => {
                  setActiveFaq(randomFaqs[2])
                },
              },
              {
                name: 'Teknologi',
                onClick: () => {
                  setActiveFaq(randomFaqs[3])
                },
              },
            ]}
          />
        </div>
        <div className="basis-12/12 md:basis-8/12">
          <FaqList faqs={activeFaq} />
        </div>
      </section>
      <LineDivider />
    </PageTemplate>
  )
}

export default Faq
