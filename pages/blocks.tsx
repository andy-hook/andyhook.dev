import React from 'react'
import Link from '../components/Link/Link'
import ProjectDescription from '../components/Project/ProjectDescription'
import ProjectImageGroup from '../components/Project/ProjectImageGroup'
import ProjectTemplate from '../components/ProjectTemplate/ProjectTemplate'
import TextParagraph from '../components/Text/TextParagraph'

function BlocksPage(): JSX.Element {
  return (
    <ProjectTemplate name="blocks">
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
        <ProjectImageGroup.Item
          imagePath="blocks-intro.jpg"
          alt="Multiple tablet devices showing screens from the Blocks application"
        />
      </ProjectImageGroup>

      <ProjectDescription title="Decentralized technology takes some practice">
        <TextParagraph>
          Blocks was originally using{' '}
          <Link href="https://web3js.readthedocs.io/">Web3.js</Link> and a{' '}
          <Link href="https://docs.metamask.io/guide/ethereum-provider.html">
            MetaMask provider
          </Link>{' '}
          to fetch block information, this was the simplest way to get started
          but had big drawbacks – primarily the need to have a wallet installed
          and connected before being able to fetch data. Migrating to{' '}
          <Link href="https://docs.ethers.io/">Ethers.js</Link> offered a more
          intuitive, opinionated API while using{' '}
          <Link href="https://infura.io/">Infura</Link>,{' '}
          <Link href="https://www.alchemyapi.io/">Alchemy</Link> and{' '}
          <Link href="https://etherscan.io/">Etherscan</Link> backed nodes
          solved the wallet provider problem. That said, many of these concepts
          were new to me, and while the typical centralised stack is mature and
          fast, Web3 initially felt cumbersome and difficult to use, which is
          only made more obvious from the proliferation of excellently
          documented, low cost data services available with the former.
        </TextParagraph>

        <TextParagraph>
          Another aspect I had to consider was that interacting with a chain
          directly from a client requires that the front-end handles much of the
          data massaging and manipulation when a centralised backend service
          would normally handle this work. I found myself having to be careful
          not to carelessly perform calculations with standard Number types and
          make ample use of Big Number formatting libraries to guard against{' '}
          <Link href="https://docs.ethers.io/v5/api/utils/bignumber/#BigNumber--notes-safenumbers">
            safe range errors
          </Link>
          .
        </TextParagraph>

        <TextParagraph>
          Tech moves fast though, and we now have fantastic projects such as{' '}
          <Link href="https://thegraph.com/">The Graph</Link> offering a data
          abstraction layer powered by Subgraphs and GraphQL, we even have
          native support for{' '}
          <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt">
            BigInt
          </Link>{' '}
          directly in the browser, greatly reducing bundle size and
          standardising around a single API. It's these types of learnings and
          exposure to new technology that make investing in personal projects
          rewarding and valuable.
        </TextParagraph>
      </ProjectDescription>

      <ProjectImageGroup framed loadingColor="#181F23">
        <ProjectImageGroup.Item
          imagePath="blocks-home.jpg"
          alt="Blocks application screen showing the home page with title and block list"
        />
        <ProjectImageGroup.Item
          imagePath="blocks-list.jpg"
          alt="Blocks application screen showing a list of blocks with details"
        />
        <ProjectImageGroup.Item
          imagePath="blocks-detail.jpg"
          alt="Blocks application screen showing detailed information about a block"
        />
        <ProjectImageGroup.Item
          imagePath="blocks-transactions.jpg"
          alt="Blocks application screen showing a list of transactions associated with a block"
        />
      </ProjectImageGroup>
    </ProjectTemplate>
  )
}

export default BlocksPage
