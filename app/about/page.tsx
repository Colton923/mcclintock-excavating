import { Card } from '@/components/UI/Card/Card'
import { Text } from '@/components/UI/Text/Text'
import * as stylex from '@stylexjs/stylex'
import randy from '@/public/images/randy.jpg'
import { colorTokens } from '../../styles/colorTokens.stylex'
import { ExcavatorLogo } from '@/components/SVGs'
import { Flex } from '@/components/UI'

export default function Page() {
  return (
    <Flex variant="column" justify="center" align="flex-start" style={styles.base}>
      <Text variant="xl">About Us</Text>
      <Text
        style={styles.textBlock}
        variant="md"
      >{`Understanding the challenges of managing and overseeing a project, we at McClintock Trucking & Excavating are dedicated to simplifying and streamlining the process for you.`}</Text>
      <Text
        style={styles.textBlock}
        variant="md"
      >{`Established in 2015, our company has grown to become a prominent name in the construction industry.`}</Text>
      <Text
        style={styles.textBlock}
        variant="md"
      >{`Our team comprises fully-certified professionals adept at handling both intricate and straightforward projects.`}</Text>
      <Text
        style={styles.textBlock}
        variant="md"
      >{`Driven by our steadfast commitment to excellence, we consistently go above and beyond to ensure our clients' complete satisfaction..`}</Text>
      <div {...stylex.props(styles.logoBlock)}>
        <ExcavatorLogo
          width={'100%'}
          height={'100%'}
          stroke={colorTokens.white0}
          fill={colorTokens.primary_red_dark3}
        />
      </div>
      <Text style={styles.title} variant="xl">
        The Team
      </Text>

      <Flex
        wrap="wrap"
        variant="row"
        justify="center"
        align="center"
        style={styles.cards}
      >
        <Card style={styles.card}>
          <Flex variant="column" justify="center" align="center">
            <Text variant="md">Randy McClintock</Text>
            <img
              {...stylex.props(styles.img)}
              src={randy.src}
              width={'278px'}
              height={'360px'}
              alt="owner"
            />
            <Text variant="sm">Owner</Text>
          </Flex>
        </Card>
        <Card style={styles.card}>
          <Flex variant="column" justify="center" align="center">
            <Text variant="md">{`John D'Amico`}</Text>
            <div {...stylex.props(styles.imagePlaceholder)}>
              <Text style={styles.imagePlaceholderText} variant="sm">
                Image Placeholder
              </Text>
            </div>
            <Text variant="sm">Estimator</Text>
          </Flex>
        </Card>
        <Card style={styles.card}>
          <Flex variant="column" justify="center" align="center">
            <Text variant="md">Amy Peel</Text>
            <div {...stylex.props(styles.imagePlaceholder)}>
              <Text style={styles.imagePlaceholderText} variant="sm">
                Image Placeholder
              </Text>
            </div>
            <Text variant="sm">Controller</Text>
          </Flex>
        </Card>
        <Card style={styles.card}>
          <Flex variant="column" justify="center" align="center">
            <Text variant="md">Kayla Rockwell</Text>
            <div {...stylex.props(styles.imagePlaceholder)}>
              <Text style={styles.imagePlaceholderText} variant="sm">
                Image Placeholder
              </Text>
            </div>
            <Text variant="sm">Office Manager</Text>
          </Flex>
        </Card>
      </Flex>
    </Flex>
  )
}

const imageShift = stylex.keyframes({
  '0%': {
    backgroundPosition: '0% 50%',
  },
  '50%': {
    backgroundPosition: '100% 50%',
  },
  '100%': {
    backgroundPosition: '0% 50%',
  },
})

type TMobile = '@media (max-width: 786px)'
type TDesktop = '@media (min-width: 786px)'

const MOBILE: TMobile = '@media (max-width: 786px)' as TMobile
const DESKTOP: TDesktop = '@media (min-width: 786px)' as TDesktop

const styles = stylex.create({
  base: {
    paddingTop: '200px',
    paddingBottom: '100px',
  },
  img: {
    objectFit: 'cover',
    objectPosition: 'center',
    borderRightWidth: '1px',
    borderRightStyle: 'solid',
    borderRightColor: colorTokens.primary_red_dark3,
    borderLeftWidth: '1px',
    borderLeftStyle: 'solid',
    borderLeftColor: colorTokens.primary_red_dark3,
    paddingTop: '10px',
    paddingBottom: '10px',
  },
  title: {
    marginBottom: '40px',
  },
  textBlock: {
    marginBottom: '40px',
    maxWidth: '800px',
    padding: '0 20px',
  },
  cards: {
    maxWidth: '800px',
    width: '100%',
  },
  logoBlock: {
    display: {
      [MOBILE]: 'none',
      [DESKTOP]: 'flex',
    },
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '800px',
    width: '100%',
    marginBottom: '40px',
  },
  card: {
    margin: '10px',
    width: '280px',
  },
  imagePlaceholder: {
    width: '278px',
    height: '380px',
    backgroundImage:
      'linear-gradient(60deg, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 100%)',
    backgroundSize: '400% 400%',
    animationName: imageShift,
    animationDuration: '5s',
    animationIterationCount: 'infinite',
    marginBottom: '10px',
    marginTop: '10px',
  },
  imagePlaceholderText: {
    color: '#fff',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
})
