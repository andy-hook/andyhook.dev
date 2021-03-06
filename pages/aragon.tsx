import React from 'react'
import Link from '../components/Link/Link'
import ProjectDescription from '../components/Project/ProjectDescription'
import ProjectImageGroup from '../components/Project/ProjectImageGroup'
import ProjectTemplate from '../components/ProjectTemplate/ProjectTemplate'
import TextParagraph from '../components/Text/TextParagraph'

function AragonPage(): JSX.Element {
  return (
    <ProjectTemplate name="aragon">
      <ProjectDescription title="Overview" bordered>
        <TextParagraph>
          I joined the Aragon One team in 2020 as a Senior Engineer to help
          further their mission of revolutionising governance. From the very
          start it was clear that high quality, responsive and delightful user
          interfaces were a crucial element of the project and that the team
          values technically competent engineers equally versed in design.
        </TextParagraph>

        <TextParagraph>
          The utility of a Decentralized Autonomous Organisation (DAO) is well
          understood within the Ethereum community, but for the uninitiated
          there is a lot to unpack. The team knew that onboarding an entire
          class of first-time crypto users to the decentralized governance
          concept couldn't be achieved overnight and Aragons messaging has taken
          multiple iterations over the years with this in mind.
        </TextParagraph>

        <TextParagraph>
          As part of the front-end engineering team I heavily contributed to the
          initial prototype of the Aragon Network Dashboard, launched a highly
          praised ANT Upgrade Portal, furthered the adoption of TypeScript in
          front-end code, improved and maintained a variety of open source
          packages, pushed for a bigger emphasis on Agile development and
          mentored junior team members.
        </TextParagraph>
      </ProjectDescription>

      <ProjectImageGroup>
        <ProjectImageGroup.Item
          imagePath="aragon-intro.jpg"
          alt="Multiple tablet devices showing screens of Aragon user interfaces"
        />
      </ProjectImageGroup>

      <ProjectDescription title="Delivering on the Aragon promise">
        <TextParagraph>
          The project is well known in the DAO space for executing to a very
          high standard, the exceptional quality of their brand design and user
          experience stand out in an industry that is not known for being
          particularly user friendly.
        </TextParagraph>

        <TextParagraph>
          I was lucky enough to work with two amazing design talents,{' '}
          <Link href="https://twitter.com/dizzypaty">Patricia Davila</Link> and{' '}
          <Link href="https://twitter.com/owisixseven">Adrián García</Link>,
          user experience, and brand respectively. They are some of the most
          talented designers I've worked with and deserve high praise for the
          visual fidelity and intuitive experience offered within Aragons
          products.
        </TextParagraph>

        <TextParagraph>
          An important component of a high performing product team is a strong
          relationship between engineers and designers. Catching every edge
          case, accounting for all possible UI states and fine tuning a flow to
          fit within technological limitations requires smooth communication
          between disciplines and engineers who understand all sides of the coin
          – technology, design, users and business. My biggest impact in this
          regard was an ability to execute on this vision, ensuring every detail
          and interaction was of the highest quality.
        </TextParagraph>
      </ProjectDescription>

      <ProjectImageGroup>
        <ProjectImageGroup.Item
          imagePath="aragon-components.jpg"
          alt="A large array of Aragon user interface components arranged in an offset grid"
        />
      </ProjectImageGroup>

      <ProjectDescription title="Exceptional quality and predictable delivery">
        <TextParagraph>
          Quality is often considered diametrically opposed to delivery speed,
          and in a lot of circumstances this can be the case, however, my take
          on this is to ask the question of why? why are we building this now?
          what's the simplest feature we can ship today that adds value for
          users? These are important questions to ask, a mutual understanding of
          expectations within the team and a tight scope can unlock a team to
          push the quality of what is delivered while fostering an iterative
          development culture that empowers a team to rapidly evolve at a
          predictable cadance.
        </TextParagraph>

        <TextParagraph>
          From a technology perspective I'm a believer in the use of static type
          systems such as TypeScript for improving velocity over time, the
          confidence that type systems provide when refactoring, and the
          implicit documentation provided by strict typings go a long way to
          battling code entropy (and make it a whole lot easier to onboard new
          hires)
        </TextParagraph>

        <TextParagraph>
          By following these principles we were able to deliver high impact
          initiatives beyond expectation and ahead of schedule. The launch of
          the ANT Upgrade Portal was a great example of this and proved the
          benefits to the team.
        </TextParagraph>
      </ProjectDescription>

      <ProjectImageGroup framed loadingColor="#F3F5F9">
        <ProjectImageGroup.Item
          imagePath="aragon-network-dashboard-home.jpg"
          alt="Dashboard screen showing a list of open proposals in a grid"
        />
        <ProjectImageGroup.Item
          imagePath="aragon-network-dashboard-proposal.jpg"
          alt="Dashboard screen showing details about a single proposal"
        />
        <ProjectImageGroup.Item
          imagePath="aragon-network-dashboard-agreement.jpg"
          alt="Dashboard screen showing details about an agreement"
        />
        <ProjectImageGroup.Item
          imagePath="aragon-upgrade-home.jpg"
          alt="Upgrade portal home screen showing options for upgrading ANT tokens"
        />
        <ProjectImageGroup.Item
          imagePath="aragon-upgrade-converter.jpg"
          alt="Upgrade portal converter screen showing the conversion rate and a user input for specifying an amount"
        />
        <ProjectImageGroup.Item
          imagePath="aragon-upgrade-complete.jpg"
          alt="Upgrade portal transaction signing screen showing the steps needed to complete the process"
        />
      </ProjectImageGroup>
    </ProjectTemplate>
  )
}

export default AragonPage
