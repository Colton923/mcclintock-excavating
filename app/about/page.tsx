import { Card } from '@/components/UI/Card/Card'
import { Text } from '@/components/UI/Text/Text'
import * as stylex from '@stylexjs/stylex'

export default function Page() {
  return (
    <div {...stylex.props(styles.base)}>
      <div {...stylex.props(styles.title1)}>
        <Text variant="xl">About Us</Text>
      </div>
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
      <div {...stylex.props(styles.title)}>
        <Text variant="xl">The Team</Text>
      </div>
      <div {...stylex.props(styles.cards)}>
        <Card style={styles.card}>
          <div {...stylex.props(styles.flex)}>
            <Text variant="md">Randy McClintock</Text>
            <div {...stylex.props(styles.imagePlaceholder)}>
              <Text style={styles.imagePlaceholderText} variant="sm">
                Image Placeholder
              </Text>
            </div>
            <Text variant="sm">Owner</Text>
          </div>
        </Card>
        <Card style={styles.card}>
          <div {...stylex.props(styles.flex)}>
            <Text variant="md">{`John D'Amico`}</Text>
            <div {...stylex.props(styles.imagePlaceholder)}>
              <Text style={styles.imagePlaceholderText} variant="sm">
                Image Placeholder
              </Text>
            </div>
            <Text variant="sm">Estimator</Text>
          </div>
        </Card>
        <Card style={styles.card}>
          <div {...stylex.props(styles.flex)}>
            <Text variant="md">Amy Peel</Text>
            <div {...stylex.props(styles.imagePlaceholder)}>
              <Text style={styles.imagePlaceholderText} variant="sm">
                Image Placeholder
              </Text>
            </div>
            <Text variant="sm">Controller</Text>
          </div>
        </Card>
        <Card style={styles.card}>
          <div {...stylex.props(styles.flex)}>
            <Text variant="md">Kayla Rockwell</Text>
            <div {...stylex.props(styles.imagePlaceholder)}>
              <Text style={styles.imagePlaceholderText} variant="sm">
                Image Placeholder
              </Text>
            </div>
            <Text variant="sm">Office Manager</Text>
          </div>
        </Card>
      </div>
    </div>
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

const styles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    minHeight: '100vh',
  },
  title1: {
    marginTop: '150px',
    marginBottom: '40px',
  },
  title: {
    marginBottom: '40px',
  },
  flex: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBlock: {
    marginBottom: '40px',
    maxWidth: '800px',
    padding: '0 20px',
  },
  cards: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '800px',
    width: '100%',
  },
  card: {
    margin: '10px',
    width: '280px',
  },
  imagePlaceholder: {
    width: '280px',
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
