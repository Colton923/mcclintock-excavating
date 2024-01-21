import { ContactForm } from '@/components/Forms/ContactForm/ContactForm'
import GoogleMap from '@/components/GoogleMap/GoogleMap'
import { Email, GoogleMaps, Phone } from '@/components/SVGs'
import { A } from '@/components/UI/A/A'
import { Text } from '@/components/UI/Text/Text'
import * as stylex from '@stylexjs/stylex'

export default function Page() {
  return (
    <div {...stylex.props(styles.base)}>
      <div {...stylex.props(styles.googleMap)}>
        <GoogleMap />
      </div>
      <div {...stylex.props(styles.title1)}>
        <Text variant="xl">Contact</Text>
      </div>
      <A
        href={
          'https://www.google.com/maps/place/1701+1st+Ave,+Silvis,+IL+61282/@41.510842,-90.4071781,17z/data=!3m1!4b1!4m6!3m5!1s0x87e23bd026ae8fa5:0x52e06dc3ce90436b!8m2!3d41.510842!4d-90.4046032!16s%2Fg%2F11p_8349tk?entry=ttu'
        }
        style={styles.link}
      >
        <GoogleMaps height="60px" width="60px" />
        <div {...stylex.props(styles.group)}>
          <Text variant="sm">1701 1st Ave</Text>
          <Text variant="sm">Silvis, IL 61282</Text>
        </div>
      </A>
      <A style={styles.link} href={'tel:3099129138'}>
        <Phone height="60px" width="60px" />
        <div {...stylex.props(styles.group)}>
          <Text variant="sm">309-912-9138</Text>
        </div>
      </A>
      <A style={styles.link} href={'mailto:office@mcclintocktrkexc.com'}>
        <Email height="60px" width="60px" />
        <div {...stylex.props(styles.group)}>
          <Text variant="sm">office@mcclintocktrkexc.com</Text>
        </div>
      </A>
      <div {...stylex.props(styles.title)}>
        <Text variant="xl">Hours</Text>
      </div>
      <div {...stylex.props(styles.grid)}>
        <Text variant="sm">Monday - Friday</Text>
        <Text variant="sm">7:00 AM - 4:30 PM</Text>
        <Text variant="sm">Saturday - Sunday</Text>
        <Text variant="sm">Closed</Text>
      </div>
      <div {...stylex.props(styles.contactForm)}>
        <ContactForm />
      </div>
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
  },
  googleMap: {
    marginTop: {
      [MOBILE]: '150px',
      [DESKTOP]: '230px',
    },
    width: '100%',
    padding: '10px',
    marginBottom: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title1: {
    marginTop: '40px',
    marginBottom: '40px',
  },
  title: {
    marginBottom: '40px',
  },
  group: {
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    minWidth: '300px',
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
  },
  contactForm: {
    marginTop: '100px',
    marginBottom: '100px',
  },
})
