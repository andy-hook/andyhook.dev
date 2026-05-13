import { ContentSection } from '../content-section';
import { ImageSection } from '../image-section';
import { ImageGroupSection } from '../image-group-section';
import { TooltipLink } from '../tooltip-link';
import {
  scrollKnowledgeBaseImage,
  scrollPlaceholderImage,
  scrollPlaygroundExistingImage,
  scrollPlaygroundNewImage,
  scrollPlaygroundSourceImage,
  scrollSourceSingleImage,
} from '@/images';

export default function ScrollContent() {
  return (
    <>
      <ContentSection title="Overview">
        <p className="capsize">
          I joined the Aragon team in 2020 as a Senior Engineer to help further their mission of
          revolutionising governance. From the very start it was clear that high quality, responsive
          and delightful user interfaces were a crucial element of the project and that the team
          values technically competent engineers equally versed in design.
        </p>
        <p className="capsize">
          The utility of a{' '}
          <TooltipLink href="https://www.investopedia.com/tech/what-dao/">
            Decentralized Autonomous Organisation
          </TooltipLink>{' '}
          (DAO) is well understood within the Ethereum community, but for the uninitiated there is a
          lot to unpack. The team knew that onboarding an entire class of first-time crypto users to
          the decentralized governance concept couldn&apos;t be achieved overnight and Aragons
          messaging has taken multiple iterations over the years with this in mind.
        </p>
        <p className="capsize">
          As part of the front-end engineering team I heavily contributed to the initial prototype
          of the Aragon Network Dashboard, launched a highly praised ANT Upgrade Portal, furthered
          the adoption of TypeScript in front-end code, improved and maintained a variety of open
          source packages, pushed for a bigger emphasis on Agile development and mentored junior
          team members.
        </p>
      </ContentSection>

      <ImageSection image={scrollPlaceholderImage} />

      <ContentSection title="All of your knowledge in one place">
        <p className="capsize">
          The utility of a{' '}
          <TooltipLink href="https://www.investopedia.com/tech/what-dao/">
            Decentralized Autonomous Organisation
          </TooltipLink>{' '}
          (DAO) is well understood within the Ethereum community, but for the uninitiated there is a
          lot to unpack. The team knew that onboarding an entire class of first-time crypto users to
          the decentralized governance concept couldn&apos;t be achieved overnight and Aragons
          messaging has taken multiple iterations over the years with this in mind.
        </p>
        <p className="capsize">
          As part of the front-end engineering team I heavily contributed to the initial prototype
          of the Aragon Network Dashboard, launched a highly praised ANT Upgrade Portal, furthered
          the adoption of TypeScript in front-end code, improved and maintained a variety of open
          source packages, pushed for a bigger emphasis on Agile development and mentored junior
          team members.
        </p>
        {/* <p className="capsize">Source uploads</p>
        <p className="capsize">Resource list</p>
        <p className="capsize">Resource detail side panel</p>
        <p className="capsize">Resource syncing</p>
        <p className="capsize">Ingestion</p>
        <p className="capsize">Temporal workflows</p>
        <p className="capsize">Cancellation dialog</p> */}
      </ContentSection>

      {/* Knowlege base and syncing */}
      <ImageSection image={scrollPlaceholderImage} />

      <ContentSection title="Optimistic by design">
        <p className="capsize">
          The utility of a{' '}
          <TooltipLink href="https://www.investopedia.com/tech/what-dao/">
            Decentralized Autonomous Organisation
          </TooltipLink>{' '}
          (DAO) is well understood within the Ethereum community, but for the uninitiated there is a
          lot to unpack. The team knew that onboarding an entire class of first-time crypto users to
          the decentralized governance concept couldn&apos;t be achieved overnight and Aragons
          messaging has taken multiple iterations over the years with this in mind.
        </p>
        <p className="capsize">
          As part of the front-end engineering team I heavily contributed to the initial prototype
          of the Aragon Network Dashboard, launched a highly praised ANT Upgrade Portal, furthered
          the adoption of TypeScript in front-end code, improved and maintained a variety of open
          source packages, pushed for a bigger emphasis on Agile development and mentored junior
          team members.
        </p>
        {/* <p className="capsize">Zero sync</p>
        <p className="capsize">Folder interaction</p>
        <p className="capsize">Re-ordering</p>
        <p className="capsize">Suggested questions</p>
        <p className="capsize">Inline citations</p>
        <p className="capsize">Text editing</p> */}
      </ContentSection>

      {/* interaction tiles */}
      {/* folder drag and drop, re-ordering, deleting, creating, renaming */}
      <ImageSection image={scrollKnowledgeBaseImage} />

      <ContentSection title="Distill insights, quickly and accurately">
        <p className="capsize">
          The utility of a{' '}
          <TooltipLink href="https://www.investopedia.com/tech/what-dao/">
            Decentralized Autonomous Organisation
          </TooltipLink>{' '}
          (DAO) is well understood within the Ethereum community, but for the uninitiated there is a
          lot to unpack. The team knew that onboarding an entire class of first-time crypto users to
          the decentralized governance concept couldn&apos;t be achieved overnight and Aragons
          messaging has taken multiple iterations over the years with this in mind.
        </p>
        <p className="capsize">
          As part of the front-end engineering team I heavily contributed to the initial prototype
          of the Aragon Network Dashboard, launched a highly praised ANT Upgrade Portal, furthered
          the adoption of TypeScript in front-end code, improved and maintained a variety of open
          source packages, pushed for a bigger emphasis on Agile development and mentored junior
          team members.
        </p>

        {/* <p className="capsize">Chat interface</p>
        <p className="capsize">Chat linking to specific sources</p>
        <p className="capsize">Add ons and extensions</p>
        <p className="capsize">Sharing</p>
        <p className="capsize">Note editor</p>
        <p className="capsize">Clippings</p>
        <p className="capsize">Highlights</p> */}
      </ContentSection>

      <ImageSection image={scrollPlaceholderImage} />

      {/* interaction tiles */}
      {/* folder drag and drop, re-ordering, deleting, creating, renaming */}

      <ContentSection title="Built for self service and reliability">
        <p className="capsize">
          The utility of a{' '}
          <TooltipLink href="https://www.investopedia.com/tech/what-dao/">
            Decentralized Autonomous Organisation
          </TooltipLink>{' '}
          (DAO) is well understood within the Ethereum community, but for the uninitiated there is a
          lot to unpack. The team knew that onboarding an entire class of first-time crypto users to
          the decentralized governance concept couldn&apos;t be achieved overnight and Aragons
          messaging has taken multiple iterations over the years with this in mind.
        </p>
        <p className="capsize">
          As part of the front-end engineering team I heavily contributed to the initial prototype
          of the Aragon Network Dashboard, launched a highly praised ANT Upgrade Portal, furthered
          the adoption of TypeScript in front-end code, improved and maintained a variety of open
          source packages, pushed for a bigger emphasis on Agile development and mentored junior
          team members.
        </p>

        <p className="capsize">
          As part of the front-end engineering team I heavily contributed to the initial prototype
          of the Aragon Network Dashboard, launched a highly praised ANT Upgrade Portal, furthered
          the adoption of TypeScript in front-end code, improved and maintained a variety of open
          source packages, pushed for a bigger emphasis on Agile development and mentored junior
          team members.
        </p>

        {/* <p className="capsize">Clerk authentication</p>
        <p className="capsize">Temporal workflows</p>
        <p className="capsize">Stripe for billing</p>
        <p className="capsize">Entitlements and gates</p>
        <p className="capsize">Image cropping</p>
        <p className="capsize">Publishing</p> */}
      </ContentSection>

      <ImageGroupSection
        project="scroll"
        images={[
          scrollKnowledgeBaseImage,
          scrollSourceSingleImage,
          scrollPlaygroundNewImage,
          scrollPlaygroundExistingImage,
          scrollPlaygroundSourceImage,
          scrollPlaceholderImage,
        ]}
      />
    </>
  );
}
