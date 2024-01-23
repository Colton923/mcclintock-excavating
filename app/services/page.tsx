import { Text } from '@/components/UI/Text/Text'
import * as stylex from '@stylexjs/stylex'

export default function Page() {
  return (
    <div {...stylex.props(styles.base)}>
      <div {...stylex.props(styles.group)}>
        <Text variant="xl">Construction Services</Text>
        <Text style={styles.textBlock} variant="sm">
          The experienced professionals at McClintock Trucking & Excavating has the
          proven capability to be your number on contractor of choice in the Quad
          Cities and most of Illinois and Iowa. We have developed a proven track
          record as the go-to contractor within the heavy equipment, construction
          services environment. From water and sewer projects to rebuilding
          interchange networks, we have the experience and responsiveness that you
          are looking for when choosing a contractor. We maintain a large inventory
          of state-of-the-art equipment to meet all job needs. Whether your project
          is large or small, McClintock Trucking & Excavating has a team that can
          work with you to make your project a success. Contact us to learn more.
        </Text>
      </div>
      <div {...stylex.props(styles.group)}>
        <Text variant="xl">Pipe & Utility Installation</Text>
        <Text style={styles.textBlock} variant="sm">
          The underground utility installers at McClintock Trucking & Excavating.
          know firsthand that dealing with underground utilities — that must function
          properly and remain structurally sound for decades — requires accuracy and
          precision, combined with keeping up on state-of-the-art technology and
          designs. Our services include storm and sanitary sewers, culverts and water
          mains of all types and sizes.
        </Text>
      </div>
      <div {...stylex.props(styles.group)}>
        <Text variant="xl">Concrete Paving</Text>
        <Text style={styles.textBlock} variant="sm">
          {`McClintock Trucking & Excavating's professional concrete paving contractors have successfully completed projects for commercial, industrial and municipal customers throughout North America.  We specializes in concrete construction for commercial, industrial and municipal streets, highways, new construction and site development projects of most complexities and sizes.`}
        </Text>
      </div>
      <div {...stylex.props(styles.listGroup)}>
        <Text variant="xl" style={styles.listTitle}>
          Other Work
        </Text>
        <ul {...stylex.props(styles.list)}>
          <Text style={styles.textBlock} variant="md">
            Site Work
          </Text>
          <li>Demolition</li>
          <li>Deliver Supply</li>
          <li> Hauling</li>
          <li> Emergency Work</li>
        </ul>
        <ul {...stylex.props(styles.list)}>
          <Text style={styles.textBlock} variant="md">
            Excavating
          </Text>
          <li>Loaders</li>
          <li>Excavators</li>
          <li>Tandem Dump Trucks</li>
          <li>Skid Steers</li>
        </ul>
        <ul {...stylex.props(styles.list)}>
          <Text style={styles.textBlock} variant="md">
            Paving
          </Text>
          <li> Trimmer</li>
          <li> Form Ride Paver</li>
          <li> Slip Form Paver</li>
          <li> Spreader Placer</li>
          <li> Screed</li>
          <li> Numerous Hand Forms</li>
          <li> Concrete Crusher</li>
        </ul>
      </div>
    </div>
  )
}

const styles = stylex.create({
  base: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    minHeight: '100vh',
    maxWidth: '1200px',
    marginTop: '250px',
  },
  listTitle: {
    width: '100%',
  },
  group: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  listGroup: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    padding: '10px',
  },
  textBlock: {
    maxWidth: '800px',
    marginTop: '20px',
    marginBottom: '20px',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    minWidth: '300px',
  },
})
