import React from 'react'
import ArticleDescribe from '../components/Article/ArticleDescribe'
import ArticleImage from '../components/Article/ArticleImage'
import ArticleImageSet from '../components/Article/ArticleImageSet'
import ArticleParagraph from '../components/Article/ArticleParagraph'
import WorkTemplate from '../components/WorkTemplate/WorkTemplate'

function Bright(): JSX.Element {
  return (
    <WorkTemplate name="bright">
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
      <ArticleDescribe title="Crafting a portable component system">
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
        items={[{ src: '/test.png', width: 500, height: 250 }]}
      />
      <ArticleDescribe title="Modern digital asset management">
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
        frameGradientStart="#7600A9"
        frameGradientEnd="#4C00A9"
        items={[
          { src: '/test.png', width: 500, height: 250 },
          { src: '/test.png', width: 500, height: 250 },
          { src: '/test.png', width: 500, height: 250 },
        ]}
      />
    </WorkTemplate>
  )
}

export default Bright
