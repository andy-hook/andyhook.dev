import { motion } from 'framer-motion'
import React, { useMemo } from 'react'
import { useInView } from 'react-intersection-observer'
import { WORK, WorkName, WORK_ORDER } from '../../data/work'
import { spring } from '../../style/motion'
import { inclusiveUp } from '../../style/responsive'
import LayoutGutter from '../Layout/LayoutGutter'
import LayoutLimiter from '../Layout/LayoutLimiter'
import LayoutRow from '../Layout/LayoutRow'
import LayoutShade from '../Layout/LayoutShade'
import TextHeading from '../Text/TextHeading'
import WorkCard from '../WorkCard/WorkCard'

type MoreWorkProps = {
  currentWorkName: WorkName
}

function MoreWork({ currentWorkName }: MoreWorkProps): JSX.Element {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-10%',
    initialInView: true,
  })

  const items = useMemo(() => {
    return WORK_ORDER.filter((value) => value !== currentWorkName).map(
      (key) => WORK[key]
    )
  }, [currentWorkName])

  return (
    <LayoutShade borderTop borderBottom>
      <LayoutRow>
        <LayoutGutter>
          <LayoutLimiter>
            <motion.div
              ref={inViewRef}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 150,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                ...spring.snappy,
                staggerChildren: 0.1,
                delayChildren: 0.2,
              }}
              animate={inView ? 'visible' : 'hidden'}
            >
              <TextHeading
                tag="h3"
                size="sm"
                css={`
                  margin-bottom: 1.25em;
                `}
              >
                More Work
              </TextHeading>
              <div
                css={`
                  display: grid;
                  grid-template-columns: 1fr;
                  grid-gap: 6rem;

                  ${inclusiveUp('sm')} {
                    grid-template-columns: 1fr 1fr 1fr;
                    grid-gap: 3%;
                  }

                  ${inclusiveUp('xl')} {
                    grid-gap: 3rem;
                  }
                `}
              >
                {items.map(
                  ({ title, subtitle, route, thumbnailImageSmall }, i) => (
                    <motion.div
                      key={i}
                      initial="visible"
                      transition={spring.snappy}
                      variants={{
                        hidden: {
                          opacity: 0,
                          y: 60,
                        },
                        visible: {
                          opacity: 1,
                          y: 0,
                        },
                      }}
                    >
                      <WorkCard
                        key={i}
                        subtitle={subtitle}
                        href={route}
                        imagePath={thumbnailImageSmall.imagePath}
                        alt={thumbnailImageSmall.alt}
                        title={title}
                        disabled={!route}
                        size="small"
                      />
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>
          </LayoutLimiter>
        </LayoutGutter>
      </LayoutRow>
    </LayoutShade>
  )
}

export default MoreWork
