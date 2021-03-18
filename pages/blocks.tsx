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
          I designed and built the first version of Blocks in early 2020 as part
          of the technical assessment process at Aragon, I wanted to design a
          tightly scoped app that was visually exciting and offered
          opportunities for interesting interactions. While the utility of the
          app is not comparable to the best of existing tools, it still gave me
          the opportunity to learn more about the Ethereum and experiment with
          some new front-end techniques.
        </TextParagraph>

        <TextParagraph>
          An interesting byproduct of this project was being able to receive
          critique and feedback on my implementation during the assessment, this
          effectively turned the process into an additional knowledge stream and
          provided learnings which I could cycle back into the code, further
          improving it for my own needs. While I invested time above and beyond
          what is typical, I found it exciting to work on and helpful for
          professional growth.
        </TextParagraph>
      </ProjectDescription>

      <ProjectImageGroup>
        <ProjectImageGroup.Item imagePath="blocks-intro.jpg" alt="" />
      </ProjectImageGroup>

      <ProjectDescription title="Decentralized technology takes some practice">
        <TextParagraph>
          Blocks was originally using Web3.js and a Metamask provider to fetch
          block information, this was the simplest way to get started but had
          big drawbacks – primarily the need to have a wallet installed and
          connected before being able to fetch data. Migrating to Ethers.js
          offered a more intuitive, opinionated API while using Infura, Alchemy
          and Etherscan nodes solved the wallet provider problem. That said,
          many of these concepts were new to me, and while the typical Web2
          stack is mature and fast, Web3 initially felt cumbersome and difficult
          to use, which is only made more obvious from the proliferation of
          excellently documented, low cost data services available with the
          Former.
        </TextParagraph>

        <TextParagraph>
          Another aspect I had to consider was that interacting with a chain
          directly from a client requires that the front-end handles much of the
          data massaging and manipulation when a centralised backend service
          would normally handle this work. I found myself having to be careful
          not to carelessly perform calculations with standard Number types and
          make ample use of BigNumber formatting libraries to guard against safe
          range throws.
        </TextParagraph>

        <TextParagraph>
          Tech moves fast though, and we now have fantastic projects such as The
          Graph offering a data abstraction later powered by Subgraphs and
          GraphQL, we even have native support for BigInt directly in the
          browser, greatly reducing bundle sizes and standardising around a
          single API. It's these types of learnings and exposure to new
          technology that make investing in personal projects rewarding and
          valuable.
        </TextParagraph>
      </ProjectDescription>

      <ProjectImageGroup
        framed
        frameGradientStart="#d88350"
        frameGradientEnd="#b64a32"
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
