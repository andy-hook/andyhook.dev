import React from 'react'
import ArticleDescribe from '../components/Article/ArticleDescribe'
import ArticleImage from '../components/Article/ArticleImage'
import ArticleImageSet from '../components/Article/ArticleImageSet'
import ArticleParagraph from '../components/Article/ArticleParagraph'
import ArticleQuote from '../components/Article/ArticleQuote'
import WorkTemplate from '../components/WorkTemplate/WorkTemplate'
import { TESTIMONIALS } from '../data/testimonials'

const TESTIMONIAL = TESTIMONIALS.brett

function Aragon(): JSX.Element {
  return (
    <WorkTemplate name="aragon">
      <ArticleDescribe title="Overview" bordered>
        <ArticleParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          tincidunt hendrerit ex, at elementum augue malesuada eu. Pellentesque
          habitant morbi dtristique senectus et netus et malesuada fames ac
          turpis egestas. Nam congue maximus erat vel. Aliquam eget hendrerit
          elit.
        </ArticleParagraph>

        <ArticleParagraph>
          Donec malesuada, augue quis blandit interdum, sapien tellus lacinia
          neque, ut varius diam nisl in erat. Fusce augue turpis, sollicitudin
          in elit ac, tristique varius ante. Nullam vel sapien id turpis iaculis
          fringilla eu a ipsum.
        </ArticleParagraph>
      </ArticleDescribe>
      <ArticleImage />
      <ArticleDescribe title="Upgrading the network token">
        <ArticleParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          tincidunt hendrerit ex, at elementum augue malesuada eu. Pellentesque
          habitant morbi dtristique senectus et netus et malesuada fames ac
          turpis egestas. Nam congue maximus erat vel. Aliquam eget hendrerit
          elit.
        </ArticleParagraph>

        <ArticleParagraph>
          Donec malesuada, augue quis blandit interdum, sapien tellus lacinia
          neque, ut varius diam nisl in erat. Fusce augue turpis, sollicitudin
          in elit ac, tristique varius ante. Nullam vel sapien id turpis iaculis
          fringilla eu a ipsum.
        </ArticleParagraph>

        <ArticleParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          tincidunt hendrerit ex, at elementum augue malesuada eu. Pellentesque
          habitant morbi dtristique senectus et netus et malesuada fames ac
          turpis egestas. Nam congue maximus erat vel. Aliquam eget hendrerit
          elit.
        </ArticleParagraph>
      </ArticleDescribe>
      <ArticleImageSet
        items={[
          { src: '/test.png', width: 500, height: 250 },
          { src: '/test.png', width: 500, height: 250 },
        ]}
      />
      <ArticleDescribe title="Road to the Aragon Network DAO">
        <ArticleParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          tincidunt hendrerit ex, at elementum augue malesuada eu. Pellentesque
          habitant morbi dtristique senectus et netus et malesuada fames ac
          turpis egestas. Nam congue maximus erat vel. Aliquam eget hendrerit
          elit.
        </ArticleParagraph>

        <ArticleParagraph>
          Donec malesuada, augue quis blandit interdum, sapien tellus lacinia
          neque, ut varius diam nisl in erat. Fusce augue turpis, sollicitudin
          in elit ac, tristique varius ante. Nullam vel sapien id turpis iaculis
          fringilla eu a ipsum.
        </ArticleParagraph>
      </ArticleDescribe>
      <ArticleImageSet
        framed
        frameGradientStart="#00E1FF"
        frameGradientEnd="#00B9ED"
        items={[
          { src: '/test.png', width: 500, height: 250 },
          { src: '/test.png', width: 500, height: 250 },
        ]}
      />
      <ArticleQuote
        name={TESTIMONIAL.name}
        title={TESTIMONIAL.title}
        company={TESTIMONIAL.company}
        testimonial={TESTIMONIAL.longTestimonial}
      />
    </WorkTemplate>
  )
}

export default Aragon
