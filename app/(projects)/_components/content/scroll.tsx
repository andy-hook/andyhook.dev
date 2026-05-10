import { ContentSection } from '../content-section';
import { ImageSection } from '../image-section';
import { ImageGroupSection } from '../image-group-section';
import { TooltipLink } from '../tooltip-link';
import { scrollPlaceholderImage } from '@/images';

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

      <ContentSection title="Zero sync optimistic">
        <p className="capsize">Stuff</p>
      </ContentSection>

      <ContentSection title="Rich text editing">
        <p className="capsize">Stuff</p>
      </ContentSection>

      <ContentSection title="Image cropping">
        <p className="capsize">Stuff</p>
      </ContentSection>

      <ContentSection title="Folder organization">
        <p className="capsize">Stuff</p>
      </ContentSection>

      <ContentSection title="Source uploads">
        <p className="capsize">Stuff</p>
      </ContentSection>

      <ContentSection title="Chat streaming, inline citations">
        <p className="capsize">Stuff</p>
      </ContentSection>

      <ContentSection title="Credit based billing">
        <p className="capsize">Stuff</p>
      </ContentSection>

      <ContentSection title="Chat publishing">
        <p className="capsize">Stuff</p>
      </ContentSection>

      <ContentSection title="Source viewing">
        <p className="capsize">Stuff</p>
      </ContentSection>

      <ContentSection title="Source clipping to notes, highlights">
        <p className="capsize">Stuff</p>
      </ContentSection>

      <ContentSection title="Sheets extension">
        <p className="capsize">Stuff</p>
      </ContentSection>

      <ContentSection title="Sheets extension">
        <p className="capsize">Stuff</p>
      </ContentSection>

      <ImageSection image={scrollPlaceholderImage} />

      <ContentSection title="Exceptional quality, predictable delivery">
        <p className="capsize">
          Quality is often considered diametrically opposed to delivery speed, and in a lot of
          circumstances this can be the case, however, my take on this is to ask the question of
          why? why are we building this now? what&apos;s the simplest feature we can ship today that
          adds value for users? These are important questions to ask, a mutual understanding of
          expectations within the team and a tight scope can unlock a team to push the quality of
          what is delivered while fostering an iterative development culture that empowers a team to
          rapidly evolve at a predictable cadance.
        </p>
        <p className="capsize">
          From a technology perspective I&apos;m a believer in the use of static type systems such
          as <TooltipLink href="https://www.typescriptlang.org/">TypeScript</TooltipLink> for
          improving velocity over time, the confidence that type systems provide when refactoring,
          and the implicit documentation provided by strict typings go a long way to battling code
          entropy (and make it a whole lot easier to onboard new hires)
        </p>
        <p className="capsize">
          By following these principles we were able to deliver high impact initiatives beyond
          expectation and ahead of schedule. The launch of the ANT Upgrade Portal was a great
          example of this and proved the benefits to the team.
        </p>
      </ContentSection>

      <ImageGroupSection
        project="scroll"
        images={[
          scrollPlaceholderImage,
          scrollPlaceholderImage,
          scrollPlaceholderImage,
          scrollPlaceholderImage,
          scrollPlaceholderImage,
          scrollPlaceholderImage,
        ]}
      />
    </>
  );
}
