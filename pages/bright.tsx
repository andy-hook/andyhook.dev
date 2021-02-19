import React from 'react'
import ArticleDescribe from '../components/Article/ArticleDescribe'
import ArticleImage from '../components/Article/ArticleImage'
import ArticleImageSet from '../components/Article/ArticleImageSet'
import ArticleQuote from '../components/Article/ArticleQuote'
import TextParagraph from '../components/Text/TextParagraph'
import WorkTemplate from '../components/WorkTemplate/WorkTemplate'
import { TESTIMONIALS } from '../data/testimonials'

const TESTIMONIAL = TESTIMONIALS.ze

function Bright(): JSX.Element {
  return (
    <WorkTemplate name="bright">
      <ArticleDescribe title="Overview" bordered>
        <TextParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          tincidunt hendrerit ex, at elementum augue malesuada eu. Pellentesque
          habitant morbi dtristique senectus et netus et malesuada fames ac
          turpis egestas. Nam congue maximus erat vel. Aliquam eget hendrerit
          elit.
        </TextParagraph>

        <TextParagraph>
          Donec malesuada, augue quis blandit interdum, sapien tellus lacinia
          neque, ut varius diam nisl in erat. Fusce augue turpis, sollicitudin
          in elit ac, tristique varius ante. Nullam vel sapien id turpis iaculis
          fringilla eu a ipsum.
        </TextParagraph>
      </ArticleDescribe>
      <ArticleImage />
      <ArticleDescribe title="Crafting a portable component system">
        <TextParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          tincidunt hendrerit ex, at elementum augue malesuada eu. Pellentesque
          habitant morbi dtristique senectus et netus et malesuada fames ac
          turpis egestas. Nam congue maximus erat vel. Aliquam eget hendrerit
          elit.
        </TextParagraph>

        <TextParagraph>
          Donec malesuada, augue quis blandit interdum, sapien tellus lacinia
          neque, ut varius diam nisl in erat. Fusce augue turpis, sollicitudin
          in elit ac, tristique varius ante. Nullam vel sapien id turpis iaculis
          fringilla eu a ipsum.
        </TextParagraph>

        <TextParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          tincidunt hendrerit ex, at elementum augue malesuada eu. Pellentesque
          habitant morbi dtristique senectus et netus et malesuada fames ac
          turpis egestas. Nam congue maximus erat vel. Aliquam eget hendrerit
          elit.
        </TextParagraph>
      </ArticleDescribe>
      <ArticleImageSet
        items={[{ src: '/test.png', width: 500, height: 250 }]}
      />
      <ArticleDescribe title="Modern digital asset management">
        <TextParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          tincidunt hendrerit ex, at elementum augue malesuada eu. Pellentesque
          habitant morbi dtristique senectus et netus et malesuada fames ac
          turpis egestas. Nam congue maximus erat vel. Aliquam eget hendrerit
          elit.
        </TextParagraph>

        <TextParagraph>
          Donec malesuada, augue quis blandit interdum, sapien tellus lacinia
          neque, ut varius diam nisl in erat. Fusce augue turpis, sollicitudin
          in elit ac, tristique varius ante. Nullam vel sapien id turpis iaculis
          fringilla eu a ipsum.
        </TextParagraph>
      </ArticleDescribe>
      <ArticleImageSet
        framed
        frameGradientStart="#7600A9"
        frameGradientEnd="#4C00A9"
        items={[
          { src: '/test.png', width: 500, height: 250 },
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

export default Bright
