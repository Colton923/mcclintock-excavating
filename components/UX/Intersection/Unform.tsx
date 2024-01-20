'use client'
import { useRef, useState, useEffect } from 'react'
import * as stylex from '@stylexjs/stylex'

type Props = {
  children: React.ReactNode
  translatedX: number
  translatedY: number
}

const Unform = ({ children, translatedY, translatedX }: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const intersect = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries
    setIsVisible(entry.isIntersecting)
  }
  const options = {
    root: null,
    rootMargin: '400px',
    threshold: 0.1,
  }

  useEffect(() => {
    const observer = new IntersectionObserver(intersect, options)

    if (ref.current) observer.observe(ref.current)
    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [ref, options])

  return (
    <div
      ref={ref}
      {...stylex.props(
        isVisible && styles.Unform(-translatedY, -translatedX),
        styles.default
      )}
    >
      {children}
    </div>
  )
}

const styles = stylex.create({
  default: {
    transition: 'transform 1s ease-in-out',
    transitionDelay: '1.5s',
  },
  Unform: (translatedY: number, translatedX: number) => ({
    transform: `translate(${translatedX}px, ${translatedY}px)`,
    transition: 'transform 1s ease-in-out',
    transitionDelay: '1.5s',
  }),
})

export default Unform
