import { ImageGroupSection } from '../image-group-section';
import { ContentSection } from '../content-section';
import { ImageSection } from '../image-section';
import { TooltipLink } from '../tooltip-link';
import {
  blocksDetailImage,
  blocksHomeImage,
  blocksIntroImage,
  blocksListImage,
  blocksTransactionsImage,
} from '@/images';

export default function BlocksContent() {
  return (
    <>
      <ContentSection title="Overview">
        <p className="capsize">
          I designed and built the first version of Blocks in early 2020 as part of the technical
          assessment process at Aragon, I wanted to design a tightly scoped app that was visually
          exciting and offered opportunities for interesting interactions. While the utility of the
          app is not comparable to the best of existing tools, it still gave me the opportunity to
          learn more about <TooltipLink href="https://ethereum.org/">Ethereum</TooltipLink> and
          experiment with some new front-end techniques.
        </p>
        <p className="capsize">
          An interesting byproduct of this project was being able to receive critique and feedback
          on my implementation during the assessment, this effectively turned the process into an
          additional knowledge stream and provided learnings which I could cycle back into the code,
          further improving it for my own needs. While I invested time above and beyond what is
          typical, I found it exciting to work on and helpful for professional growth.
        </p>
      </ContentSection>

      <ImageSection image={blocksIntroImage} />

      <ContentSection title="Decentralized technology takes some practice">
        <p className="capsize">
          Blocks was originally using{' '}
          <TooltipLink href="https://web3js.readthedocs.io/">Web3.js</TooltipLink> and a{' '}
          <TooltipLink href="https://metamask.io/">MetaMask</TooltipLink> provider to fetch block
          information, this was the simplest way to get started but had big drawbacks – primarily
          the need to have a wallet installed and connected before being able to fetch data.
          Migrating to <TooltipLink href="https://docs.ethers.org/">Ethers.js</TooltipLink> offered
          a more intuitive, opinionated API while using Infura, Alchemy and Etherscan backed nodes
          solved the wallet provider problem. That said, many of these concepts were new to me, and
          while the typical centralised stack is mature and fast, Web3 initially felt cumbersome and
          difficult to use, which is only made more obvious from the proliferation of excellently
          documented, low cost data services available with the former.
        </p>
        <p className="capsize">
          Another aspect I had to consider was that interacting with a chain directly from a client
          requires that the front-end handles much of the data massaging and manipulation when a
          centralised backend service would normally handle this work. I found myself having to be
          careful not to carelessly perform calculations with standard Number types and make ample
          use of Big Number formatting libraries to guard against safe range errors.
        </p>
        <p className="capsize">
          Tech moves fast though, and we now have fantastic projects such as{' '}
          <TooltipLink href="https://thegraph.com/">The Graph</TooltipLink> offering a data
          abstraction layer powered by Subgraphs and GraphQL, we even have native support for BigInt
          directly in the browser, greatly reducing bundle size and standardising around a single
          API. It&apos;s these types of learnings and exposure to new technology that make investing
          in personal projects rewarding and valuable.
        </p>
      </ContentSection>

      <ImageGroupSection
        project="blocks"
        images={[blocksHomeImage, blocksListImage, blocksDetailImage, blocksTransactionsImage]}
      />
    </>
  );
}
