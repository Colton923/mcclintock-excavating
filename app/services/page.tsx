import { Flex } from '@/components/UI'
import { Text } from '@/components/UI/Text/Text'
import * as stylex from '@stylexjs/stylex'

export default function Page() {
  return (
    <Flex variant="column" justify="flex-start" align="center" style={styles.base}>
      <Flex
        variant="column"
        justify="center"
        align="flex-start"
        style={styles.block}
      >
        <Text variant="xl">Construction Services</Text>
        <Text variant="sm">
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
      </Flex>
      <Flex
        variant="column"
        justify="center"
        align="flex-start"
        style={styles.block}
      >
        <Text variant="xl">Pipe & Utility Installation</Text>
        <Text variant="sm">
          The underground utility installers at McClintock Trucking & Excavating.
          know firsthand that dealing with underground utilities — that must function
          properly and remain structurally sound for decades — requires accuracy and
          precision, combined with keeping up on state-of-the-art technology and
          designs. Our services include storm and sanitary sewers, culverts and water
          mains of all types and sizes.
        </Text>
      </Flex>
      <Flex
        variant="column"
        justify="center"
        align="flex-start"
        style={styles.block}
      >
        <Text variant="xl">Concrete Paving</Text>
        <Text variant="sm">
          {`McClintock Trucking & Excavating's professional concrete paving contractors have successfully completed projects for commercial, industrial and municipal customers throughout North America.  We specializes in concrete construction for commercial, industrial and municipal streets, highways, new construction and site development projects of most complexities and sizes.`}
        </Text>
      </Flex>
      <Flex variant="column" justify="center" align="center" style={styles.block}>
        <Text variant="xl">Other Work</Text>
        <Flex variant="row" justify="space-evenly" align="flex-start" wrap="wrap">
          <Flex
            variant="column"
            justify="flex-start"
            align="flex-start"
            style={styles.block}
          >
            <Text variant="md">Site Work</Text>
            <Text variant="xs">Demolition</Text>
            <Text variant="xs">Deliver Supply</Text>
            <Text variant="xs"> Hauling</Text>
            <Text variant="xs"> Emergency Work</Text>
          </Flex>
          <Flex
            variant="column"
            justify="flex-start"
            align="flex-start"
            style={styles.block}
          >
            <Text variant="md">Excavating</Text>
            <Text variant="xs">Loaders</Text>
            <Text variant="xs">Excavators</Text>
            <Text variant="xs">Tandem Dump Trucks</Text>
            <Text variant="xs">Skid Steers</Text>
          </Flex>
          <Flex
            variant="column"
            justify="flex-start"
            align="flex-start"
            style={styles.block}
          >
            <Text variant="md">Paving</Text>
            <Text variant="xs"> Trimmer</Text>
            <Text variant="xs"> Form Ride Paver</Text>
            <Text variant="xs"> Slip Form Paver</Text>
            <Text variant="xs"> Spreader Placer</Text>
            <Text variant="xs"> Screed</Text>
            <Text variant="xs"> Numerous Hand Forms</Text>
            <Text variant="xs"> Concrete Crusher</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

const styles = stylex.create({
  base: {
    minHeight: '100vh',
    maxWidth: '1200px',
    marginTop: '200px',
  },
  block: {
    maxWidth: '800px',
    margin: '20px',
  },
})
