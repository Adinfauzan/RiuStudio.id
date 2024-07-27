import Button from 'components/atoms/Button'
import LineDivider from 'components/atoms/LineDivider'
import BlogCard, { BlogCardProps } from 'components/molecules/Card/BlogCard'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import Link from 'next/link'
import React from 'react'
import randomString from 'utils/randomString'

const Blog = () => {
  const blogListData: BlogCardProps[] = [
    {
      authorAvatarSrc: '/images/blog-author-1.webp',
      authorName: 'Jane Cooper',
      launchDate: 'Mar 18',
      lead: 'People have been using wrong SEO techniques on their websites.',
      readTime: '5 min',
      thumbnailSrc: '/images/blog-thumbnail-1.webp',
      title: 'SEO tricks that can increase the traffic of your website',
    },
  ]
  return (
    <PageTemplate>
      <section className="grid place-items-center">
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center" data-aos="zoom-in-uo">
          <PageSentence
            badge="BLOG"
            title="Get precise knowledge wherever you are"
          />
        </div> 
      </section>
      <LineDivider />
      <section className="grid place-items-center gap-16">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 sm:gap-x-5">
          {blogListData.map((data) => {
            return (
              <Link href="/blog/detail" key={randomString(64)}>
                <div data-aos="fade-up">
                  <BlogCard
                    authorAvatarSrc={data.authorAvatarSrc}
                    authorName={data.authorName}
                    launchDate={data.launchDate}
                    lead={data.lead}
                    readTime={data.readTime}
                    thumbnailSrc={data.thumbnailSrc}
                    title={data.title}
                  />
                </div>
              </Link>
            )
          })}
        </div>
        <div className="">
          <Button value='Load More' color='white' style='light' />
        </div>
      </section>
    </PageTemplate>
  )
}

export default Blog
