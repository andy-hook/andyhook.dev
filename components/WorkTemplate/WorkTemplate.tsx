import React from 'react'
import { useTheme } from '../../hooks/useTheme/useTheme'
import Image from 'next/image'
import {
  setCropAndLineHeight,
  typeBaseMedium,
  typeDisplaySemibold,
  typeSizeBaseXl,
  typeSizeDisplayLg,
} from '../../style/typography'
import LayoutGutter from '../Layout/LayoutGutter'
import LayoutLimiter from '../Layout/LayoutLimiter'
import WorkDetailsList from './WorkDetailsList'

type WorkTemplate = {
  children: React.ReactNode
}

function WorkTemplate({ children }: WorkTemplate): JSX.Element {
  const { foreground } = useTheme()

  return (
    <article>
      <header
        css={`
          padding-top: 20rem;
          margin-bottom: 10rem;
        `}
      >
        <LayoutGutter
          css={`
            margin-bottom: 10rem;
          `}
        >
          <LayoutLimiter size="large">
            <h1
              css={`
                ${typeDisplaySemibold}
                ${typeSizeDisplayLg}
                ${setCropAndLineHeight('display', 'tight')}
                  
                max-width: 16em;
                margin-bottom: 1.25em;
                color: ${foreground('extraHigh')};
              `}
            >
              Social listening trusted by world-leading brands
            </h1>
            <p
              css={`
                ${typeBaseMedium}
                ${typeSizeBaseXl}
                ${setCropAndLineHeight('body', 'regular')}

                color: ${foreground('extraLow')};
              `}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum tincidunt hendrerit ex, at elementum augue malesuada
              eu..
            </p>
          </LayoutLimiter>
        </LayoutGutter>
        <Image src="/test.png" width={1000} height={50} layout="responsive" />
      </header>
      <main>
        <LayoutGutter>
          <LayoutLimiter
            size="large"
            css={`
              display: grid;
              grid-template-columns: 1fr 30%;
              grid-gap: 4rem;
              width: 100%;
            `}
          >
            <div
              css={`
                /* background-color: red; */
                height: 3000px;
                flex: 1;
              `}
            >
              {children}
            </div>
            <aside>
              <div
                css={`
                  position: sticky;
                  top: 4rem;
                  padding-bottom: 10rem;
                `}
              >
                <WorkDetailsList
                  title="Company"
                  items={['Bright Interactive']}
                  css={`
                    margin-bottom: 3.5rem;
                  `}
                />
                <WorkDetailsList
                  title="Role"
                  items={[
                    'Internship',
                    'Oct 2015 – Dec 2015',
                    'Palo Alto, California',
                  ]}
                  css={`
                    margin-bottom: 3.5rem;
                  `}
                />
                <WorkDetailsList
                  title="Technologies"
                  items={[
                    'React',
                    'Typescript',
                    'Ethereum',
                    'Styled Components',
                    'Ethers',
                    'Jest',
                  ]}
                />
              </div>
            </aside>
          </LayoutLimiter>
        </LayoutGutter>
      </main>
    </article>
  )
}

export default WorkTemplate
