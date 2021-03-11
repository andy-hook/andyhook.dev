import React from 'react'
import ArticleDescribe from '../components/Article/ArticleDescribe'
import ArticleImage from '../components/Article/ArticleImage'
import ArticleImageSet from '../components/Article/ArticleImageSet'
import ArticleQuote from '../components/Article/ArticleQuote'
import TextParagraph from '../components/Text/TextParagraph'
import WorkTemplate from '../components/WorkTemplate/WorkTemplate'
import { TESTIMONIALS } from '../data/testimonials'

const TESTIMONIAL = TESTIMONIALS.brett

function AragonPage(): JSX.Element {
  return (
    <WorkTemplate name="aragon">
      <ArticleDescribe title="Overview" bordered>
        <TextParagraph>
          I joined the Aragon team in 2020 to help further their efforts to
          revolutionise governance. From the very start it was clear that high
          performance, responsive and delightful user interfaces were a crucial
          element for the project and that the team values technically competent
          engineers who are equally well versed in design.
        </TextParagraph>

        <TextParagraph>
          The utility of a Decentralized Autonomous Organisation (DAO) is well
          understood within the Ethereum community, but for the uninitiated
          there is a lot to unpack. The team knew that onboarding an entire
          class of first-time crypto users to the decentralized governance
          concept couldn't be achieved overnight. Aragons messaging and
          technological solutions have taken many forms and iterations over the
          years with this in mind, and the ultimate goal of finding product
          market fit is now within reach.
        </TextParagraph>

        <TextParagraph>
          As part of the front-end engineering team I would ultimately
          contribute heavily to the initial prototype of the Aragon Network
          Dashboard, launch a highly praised ANT Upgrade Portal, further the
          adoption of TypeScript in front-end code, improve and maintain a
          variety of Aragons open source packages, push for a bigger emphasis on
          Agile development and mentor junior team members.
        </TextParagraph>
      </ArticleDescribe>
      <ArticleImage imagePath="aragon-intro.png" alt="" />

      <ArticleDescribe title="Delivering on the Aragon promise">
        <TextParagraph>
          The Aragon project is well known in the DAO space for executing to a
          very high level, the exceptional quality of their brand design and
          user experience stand out in an industry that is not known for being
          particularly user friendly.
        </TextParagraph>

        <TextParagraph>
          I was lucky enough to have the opportunity to work with two amazing
          design talents, Patricia Davila and Adrian García, user experience and
          brand respectively. They are hands down some of the most talented
          designers I've ever worked with and they deserve high praise for the
          visual fidelity and user experience present in their products.
        </TextParagraph>

        <TextParagraph>
          A crucial component of any high performing product team is the
          relationship between engineers and designers, catching every edge
          case, accounting for all possible states and fine tuning a flow to fit
          within technological limitations requires smooth communication and
          engineers who understand both sides of the coin – technology, design,
          user psychology and business value. Where I was able to have the most
          impact was in the execution of this vision, ensuring every detail and
          interaction was of the highest quality.
        </TextParagraph>
      </ArticleDescribe>
      <ArticleImageSet
        items={[
          {
            imagePath: 'aragon-components.png',
            alt: '',
          },
        ]}
      />
      <ArticleDescribe title="Exceptional quality at lightning speed">
        <TextParagraph>
          Quality is often thought of as diametrically opposed to delivery
          speed, and in a lot of circumstances this can be the case, however, my
          take on this is to ask the question of "why?" – "Why are we building
          this now?", "What's the smallest thing we can ship that adds value for
          users today?" these are important questions to ask, a mutual
          understanding of expectations within the team and a tight scope allows
          us to push the quality of what we aim to deliver and fosters an
          iterative product development culture that empowers the team to
          rapidly evolve at a measured cadance.
        </TextParagraph>

        <TextParagraph>
          From a technology perspective I'm a big believer in the use of tools
          like TypeScript for enhancing velocity within a team, the confidence
          that static type systems provide when refactoring, and the implicit
          documentation provided by strict typing go a long way to battling code
          entropy (and make it a whole lot easier to onboard new hires)
        </TextParagraph>

        <TextParagraph>
          By following these principles and working closely with the team we
          were able to deliver on high impact objectives beyond expectation and
          ahead of schedule. The launch of Aragons ANT Upgrade Portal was a
          great example of this and really solidified the benefits of these
          approaches to the team.
        </TextParagraph>
      </ArticleDescribe>
      <ArticleImageSet
        framed
        frameGradientStart="#00E1FF"
        frameGradientEnd="#00B9ED"
        items={[
          {
            imagePath: 'aragon-network-dashboard-home.png',
            alt: '',
          },
          {
            imagePath: 'aragon-network-dashboard-proposal.png',
            alt: '',
          },
          {
            imagePath: 'aragon-network-dashboard-agreement.png',
            alt: '',
          },
          {
            imagePath: 'aragon-upgrade-home.png',
            alt: '',
          },
          {
            imagePath: 'aragon-upgrade-converter.png',
            alt: '',
          },
          {
            imagePath: 'aragon-upgrade-complete.png',
            alt: '',
          },
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

export default AragonPage
