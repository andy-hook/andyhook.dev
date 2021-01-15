import React from 'react'
import { inclusiveDown, inclusiveUp } from '../../style/responsive'
import LayoutGutter from '../Layout/LayoutGutter'
import LayoutLimiter from '../Layout/LayoutLimiter'
import LayoutRow from '../Layout/LayoutRow'
import WorkGridItem from './WorkGridItem'

const WORK_ITEMS = [
  {
    title: 'Bright',
    description: 'Description',
    href: '/bright',
    img: { src: '/test.png', width: 565, height: 597 },
  },
  {
    title: 'Aragon',
    href: '/aragon',
    description: 'Description',
    img: { src: '/test.png', width: 565, height: 382 },
  },
  {
    title: 'Blocks',
    href: '/blocks',
    description: 'Description',
    img: { src: '/test.png', width: 565, height: 533 },
  },
  {
    title: 'Brandwatch',
    href: '/brandwatch',
    description: 'Description',
    img: { src: '/test.png', width: 565, height: 703 },
  },
]

function WorkGrid(): JSX.Element {
  return (
    <LayoutGutter>
      <LayoutRow trimTop>
        <LayoutLimiter size="large">
          <div
            css={`
              display: grid;

              ${inclusiveDown('xs')} {
                row-gap: 4rem;
                grid-template-columns: 1fr;
              }

              ${inclusiveUp('sm')} {
                grid-template-columns: 1fr 1fr;
                column-gap: 6%;
              }

              ${inclusiveUp('xl')} {
                column-gap: 4.8rem;
              }
            `}
          >
            {WORK_ITEMS.map(({ title, description, img, href }, i) => (
              <div
                key={i}
                css={`
                  ${i === 2 ? 'align-self: end;' : ''}
                `}
              >
                <WorkGridItem
                  src={img.src}
                  href={href}
                  title={title}
                  description={description}
                  width={img.width}
                  height={img.height}
                />
              </div>
            ))}
          </div>
        </LayoutLimiter>
      </LayoutRow>
    </LayoutGutter>
  )
}

export default WorkGrid
