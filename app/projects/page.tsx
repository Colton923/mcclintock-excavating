import { Flex } from '@/components/UI'
import { Text } from '@/components/UI/Text/Text'
import * as stylex from '@stylexjs/stylex'

const imgSrcs = [
  '/images/projectPic1.webp',
  '/images/projectPic2.webp',
  '/images/projectPic3.webp',
  '/images/projectPic4.webp',
  '/images/projectPic5.webp',
  '/images/projectPic6.webp',
  '/images/projectPic7.webp',
  '/images/projectPic8.webp',
  '/images/projectPic9.webp',
  '/images/projectPic10.webp',
  '/images/projectPic11.webp',
  '/images/projectPic12.webp',
]

export default function Page() {
  const Images = (src: string) => {
    return (
      <div {...stylex.props(styles.imgWrap)}>
        <img
          src={src}
          alt={src}
          width={'100%'}
          height={'100%'}
          {...stylex.props(styles.img)}
        />
      </div>
    )
  }

  return (
    <Flex variant="column" justify="center" align="flex-start" style={styles.base}>
      <Text variant="xl">Projects</Text>
      <Flex variant="row" justify="space-evenly" align="flex-start" wrap="wrap">
        {imgSrcs.map((src, i) => {
          return <div key={i}>{Images(src)}</div>
        })}
      </Flex>
    </Flex>
  )
}

type TMobile = '@media (max-width: 786px)'
type TDesktop = '@media (min-width: 786px)'

const MOBILE: TMobile = '@media (max-width: 786px)' as TMobile
const DESKTOP: TDesktop = '@media (min-width: 786px)' as TDesktop

const styles = stylex.create({
  base: {
    minHeight: '100vh',
    maxWidth: '1200px',
    paddingTop: '200px',
    paddingBottom: '100px',
  },
  imgWrap: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '0.375rem',
    borderColor: 'rgba(255,255,255,0.5)',
    borderWidth: '1px',
    borderStyle: 'solid',
    transform: 'translateY(50px)',
    margin: '10px',
  },
  img: {
    objectFit: 'cover',
    objectPosition: 'center',
    boxShadow: '0 0 5px rgba(255,255,255,0.5)',
    borderRadius: '0.375rem',
  },
})
