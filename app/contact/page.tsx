import { ContactForm } from '@/components/Forms/ContactForm/ContactForm'
import GoogleMap from '@/components/GoogleMap/GoogleMap'
import { Email, GoogleMaps, Phone } from '@/components/SVGs'
import { Flex } from '@/components/UI'
import { A } from '@/components/UI/A/A'
import { Text } from '@/components/UI/Text/Text'
import * as stylex from '@stylexjs/stylex'

export default function Page() {
  return (
    <div {...stylex.props(styles.base)}>
      <GoogleMap />
      <Flex variant="row" justify="flex-start" align="flex-end" wrap="wrap">
        <Text style={styles.title} variant="xl">
          Contact
        </Text>
        <A
          href={
            'https://www.google.com/maps/place/1701+1st+Ave,+Silvis,+IL+61282/@41.510842,-90.4071781,17z/data=!3m1!4b1!4m6!3m5!1s0x87e23bd026ae8fa5:0x52e06dc3ce90436b!8m2!3d41.510842!4d-90.4046032!16s%2Fg%2F11p_8349tk?entry=ttu'
          }
          style={styles.link}
        >
          <Flex variant="row" align="center">
            <GoogleMaps height="60px" width="60px" />
            <Flex
              variant="column"
              align="flex-start"
              justify="center"
              style={styles.group}
            >
              <Text variant="sm">1701 1st Ave</Text>
              <Text variant="sm">Silvis, IL 61282</Text>
            </Flex>
          </Flex>
        </A>
        <A style={styles.link} href={'tel:3099129138'}>
          <Phone height="60px" width="60px" />
          <Flex
            variant="column"
            align="flex-start"
            justify="center"
            style={styles.group}
          >
            <Text variant="sm">309-912-9138</Text>
          </Flex>
        </A>
        <A style={styles.link} href={'mailto:office@mcclintocktrkexc.com'}>
          <Email height="60px" width="60px" />
          <Flex
            variant="column"
            align="flex-start"
            justify="center"
            style={styles.group}
          >
            <Text variant="sm">office@mcclintocktrkexc.com</Text>
          </Flex>
        </A>
      </Flex>
      <Flex variant="row" justify="flex-start" align="flex-end" wrap="wrap">
        <Text style={styles.title} variant="xl">
          Hours
        </Text>
        <div {...stylex.props(styles.grid)}>
          <Text style={styles.taCenter} variant="sm">
            Monday - Friday
          </Text>
          <Text style={styles.taCenter} variant="sm">
            7:00 AM - 4:30 PM
          </Text>
          <Text style={styles.taCenter} variant="sm">
            Saturday - Sunday
          </Text>
          <Text style={styles.taCenter} variant="sm">
            Closed
          </Text>
        </div>
      </Flex>
      <ContactForm />
    </div>
  )
}

type TMobile = '@media (max-width: 786px)'
type TDesktop = '@media (min-width: 786px)'

const MOBILE: TMobile = '@media (max-width: 786px)' as TMobile
const DESKTOP: TDesktop = '@media (min-width: 786px)' as TDesktop

const styles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    minHeight: '100vh',
    maxWidth: '1200px',
    paddingTop: '200px',
  },
  taCenter: {
    textAlign: 'center',
  },
  title: {
    padding: '3rem 100% 1rem 1rem',
  },
  group: {
    cursor: 'pointer',
  },
  link: {
    borderColor: 'rgba(255,255,255,0.5)',
    borderWidth: '1px',
    borderStyle: 'solid',
    padding: '5px',
    borderRadius: '8px',
    marginBottom: '20px',
    marginLeft: '10px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr',
    gridTemplateAreas: '"a b" "c d"',
    gridGap: '10px',
    marginBottom: '20px',
    paddingLeft: '10px',
  },
  contactForm: {
    marginTop: '100px',
    marginBottom: '100px',
  },
})
