import React from 'react'
import ProjectDescription from '../components/Project/ProjectDescription'
import ProjectImageGroup from '../components/Project/ProjectImageGroup'
import ProjectQuote from '../components/Project/ProjectQuote'
import TextParagraph from '../components/Text/TextParagraph'
import WorkTemplate from '../components/WorkTemplate/WorkTemplate'
import { TESTIMONIALS } from '../data/testimonials'

const TESTIMONIAL = TESTIMONIALS.yohan

function BlocksPage(): JSX.Element {
  return (
    <WorkTemplate name="blocks">
      <ProjectDescription title="Overview" bordered>
        <TextParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          aliquet elit eu dui congue pulvinar. Nullam enim quam, lacinia sit
          amet est a, venenatis accumsan eros. Pellentesque interdum ex velit,
          in vulputate arcu vulputate sed. Fusce ac suscipit enim. tincidunt
          quam.
        </TextParagraph>

        <TextParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          aliquet elit eu dui congue pulvinar. Nullam enim quam, lacinia sit
          amet est a, venenatis accumsan eros. Pellentesque interdum ex velit,
          in vulputate arcu vulputate sed. Fusce ac suscipit enim. Integer at
          justo euismod, sodales lectus quis, ullamcorper dui. Nulla justo nibh,
          tincidunt eu lorem vel, pretium fermentum purus.
        </TextParagraph>

        <TextParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          aliquet elit eu dui congue pulvinar. Nullam enim quam, lacinia sit
          amet est a, venenatis accumsan eros. Pellentesque interdum ex velit,
          in vulputate arcu vulputate sed. Fusce ac suscipit enim. Integer at
          justo euismod, sodales lectus quis, ullamcorper dui. Nulla justo nibh,
          tincidunt eu lorem vel, pretium fermentum purus.
        </TextParagraph>
      </ProjectDescription>

      <ProjectImageGroup>
        <ProjectImageGroup.Item imagePath="blocks-intro.jpg" alt="" />
      </ProjectImageGroup>

      <ProjectDescription title="Experimenting with fetching data from the blockchain">
        <TextParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          aliquet elit eu dui congue pulvinar. Nullam enim quam, lacinia sit
          amet est a, venenatis accumsan eros. Pellentesque interdum ex velit,
          in vulputate arcu vulputate sed. Fusce ac suscipit enim. Integer at
          justo euismod, sodales lectus quis, ullamcorper dui. Nulla justo nibh,
          tincidunt eu lorem vel, pretium fermentum purus.
        </TextParagraph>

        <TextParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          aliquet elit eu dui congue pulvinar. Nullam enim quam, lacinia sit
          amet est a, venenatis accumsan eros. Pellentesque interdum ex velit,
          in vulputate arcu vulputate sed. Fusce ac suscipit enim. Integer at
          justo euismod, sodales lectus quis, ullamcorper dui. Nulla justo nibh,
          tincidunt eu lorem vel, pretium fermentum purus.
        </TextParagraph>

        <TextParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          aliquet elit eu dui congue pulvinar. Nullam enim quam, lacinia sit
          amet est a, venenatis accumsan eros. Pellentesque interdum ex velit,
          in vulputate arcu vulputate sed. Fusce ac suscipit enim. Integer at
          justo euismod, sodales lectus quis, ullamcorper dui. Nulla justo nibh,
          tincidunt eu lorem vel, pretium fermentum purus.
        </TextParagraph>
      </ProjectDescription>

      <ProjectImageGroup
        framed
        frameGradientStart="#ECA35F"
        frameGradientEnd="#B44634"
        loadingColor="#181F23"
      >
        <ProjectImageGroup.Item imagePath="blocks-home.jpg" alt="" />
        <ProjectImageGroup.Item imagePath="blocks-list.jpg" alt="" />
        <ProjectImageGroup.Item imagePath="blocks-detail.jpg" alt="" />
        <ProjectImageGroup.Item imagePath="blocks-transactions.jpg" alt="" />
      </ProjectImageGroup>

      <ProjectQuote
        name={TESTIMONIAL.name}
        title={TESTIMONIAL.title}
        company={TESTIMONIAL.company}
        testimonial={TESTIMONIAL.longTestimonial}
      />
    </WorkTemplate>
  )
}

export default BlocksPage
