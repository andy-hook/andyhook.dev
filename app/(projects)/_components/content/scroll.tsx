import { ContentSection } from '../content-section';
import { ImageSection } from '../image-section';
import { ImageGroupSection } from '../image-group-section';
import { TooltipLink } from '../tooltip-link';
import {
  scrollComponentsImage,
  scrollCustomizeImage,
  scrollEmbeddedImage,
  scrollIntroImage,
  scrollKnowledgeBaseImage,
  scrollPlaygroundExistingImage,
  scrollPlaygroundNewImage,
  scrollPlaygroundSourceImage,
  scrollSignUpImage,
  scrollSourceSingleImage,
} from '@/images';

export default function ScrollContent() {
  return (
    <>
      <ContentSection title="Overview">
        <p className="capsize">
          I joined Scroll in 2024, when the team was focused on building a research tool tailored
          for journalists. The company later pivoted toward intelligent domain agents, leveraging
          AI-enhanced source ingestion pipelines and rich-text editing technology to deliver
          streamed conversations and highly accurate responses.
        </p>
        <p className="capsize">
          I worked across nearly every user surface of the product, including rich-text editing,{' '}
          <TooltipLink href="https://crdt.tech">CRDT-based</TooltipLink> collaboration, sharing and
          permissions systems, authentication and entitlements, browser extensions, Google Sheets
          autofill workflows, and billing infrastructure.
        </p>

        <p className="capsize">
          Although my primary focus was crafting intuitive front-end experiences, I also contributed
          across the stack. My work included implementing both client and server-side image
          handling, advanced drag-and-drop organization, nested file and folder management, chat
          stream rendering and intuitive resource syncing.
        </p>
      </ContentSection>

      <ImageSection image={scrollIntroImage} />

      <ContentSection title="Optimistic UI as a baseline experience">
        <p className="capsize">
          Optimistic UI was a core pillar of the product design, and the earliest iterations of
          Scroll used the <TooltipLink href="https://trpc.io/">tRPC</TooltipLink> integration of{' '}
          <TooltipLink href="https://tanstack.com/query">React&nbsp;Query</TooltipLink>. While this
          approach worked well at first, the complexity of managing optimistic cache updates in
          memory quickly grew beyond its limits as the product expanded. It became increasingly
          difficult to reason about all the data dependencies involved in a single user interaction.
        </p>

        <p className="capsize">
          We later adopted{' '}
          <TooltipLink href="https://zero.rocicorp.dev">Zero from Rocicorp</TooltipLink>, which
          proved to be a excellent tool. As a sync engine, its architecture is built around a
          “client-first” model where optimistic changes are applied locally via IndexedDB, with
          automatic handling of rollbacks and reconciliation. Because it integrates natively with
          PostgreSQL, changes made at the database level are seamlessly propagated back to all
          connected clients.
        </p>

        <p className="capsize">
          This enabled us to deliver highly responsive, fluid-feeling features with immediate
          feedback. Drag-and-drop nesting of files and folders is a particularly strong example: the
          UI is derived directly from a live query, with instant feedback and no intermediate or
          inconsistent states.
        </p>
      </ContentSection>

      <ImageSection image={scrollComponentsImage} />

      <ContentSection title="AI-native, embracing new technology">
        <p className="capsize">
          Scroll embraced AI at the core of the company. As a small team, we needed to leverage
          every possible efficiency gain, and we made extensive use of LLM agents for ticket
          creation, security and severity reviews, bug triage, knowledge transfer, and as part of
          our integrated development environments.
        </p>

        <p className="capsize">
          The progress over just two years has been significant. Each week brought improvements in
          reliability and accuracy, and I’ve never felt more empowered or confident in my ability to
          learn new technologies. These tools also enabled me to work in parts of the codebase I
          would previously have avoided.
        </p>

        <p className="capsize">
          While we still have a long way to go in adapting to this non-deterministic paradigm, LLMs
          as a learning tool alone are already transformative. With code generation improving week
          by week, we’re entering an era where we can focus on solving increasingly larger problems,
          and working with the Scroll team taught me a great deal about the future possibilities.
        </p>
      </ContentSection>

      <ImageGroupSection
        project="scroll"
        images={[
          scrollSignUpImage,
          scrollKnowledgeBaseImage,
          scrollSourceSingleImage,
          scrollPlaygroundNewImage,
          scrollPlaygroundExistingImage,
          scrollPlaygroundSourceImage,
          scrollCustomizeImage,
          scrollEmbeddedImage,
        ]}
      />
    </>
  );
}
