import * as stylex from '@stylexjs/stylex'

const GoogleMap = ({ style }: { style?: stylex.StyleXStyles }) => {
  return (
    <iframe
      width="100%"
      height="400px"
      loading="lazy"
      style={{
        filter: 'grayscale(100%)',
        WebkitFilter: 'grayscale(100%)',
      }}
      {...stylex.props(style)}
      src={`https://www.google.com/maps/embed/v1/view?zoom=17&center=41.5108,-90.4046&key=${process.env.GOOGLE_MAPS_API}`}
    ></iframe>
  )
}

export default GoogleMap
