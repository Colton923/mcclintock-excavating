import { Excavator } from '@/components/SVGs'
import * as stylex from '@stylexjs/stylex'
import { colorTokens } from '../../styles/colorTokens.stylex'

type LogoProps = {
  width: string
  height: string
  fill?: string
  stroke?: string
  bg?: string
}
export const ExcavatorLogo = ({ height, width, fill, stroke, bg }: LogoProps) => {
  const heightAsInt = (parseInt(height.replace('%', '')) / 100) as number
  const widthAsInt = (parseInt(width.replace('%', '')) / 100) as number
  const calcHeight = Math.floor((712 / 622) * 622 * heightAsInt)
  const calcWidth = Math.floor((622 / 712) * 712 * widthAsInt)
  const calcTextHeight = Math.floor(750 * heightAsInt)
  const calcTextWidth = Math.floor(750 * widthAsInt)

  return (
    <div
      {...stylex.props(styles.base)}
      style={{
        backgroundColor: bg ?? 'transparent',
      }}
    >
      <Excavator
        stroke={stroke ? stroke : undefined}
        fill={fill ? fill : undefined}
        width={`${calcWidth}px`}
        height={`${calcHeight}px`}
      />
      {calcHeight > 350 && (
        <svg
          viewBox="0 0 750 750"
          width={`${calcTextWidth}px`}
          height={`${calcTextHeight}px`}
          {...stylex.props(styles.overlay)}
        >
          <path id="curve" fill="transparent" d="M 0 486 C 74 635 694 635 744 486" />
          <path
            id="curveAbove"
            fill="transparent"
            d="M 0 535 C 74 535 535 535 744 535"
          />
          <text
            style={
              stroke
                ? {
                    textShadow: `
            1px 1px 0px ${stroke ?? colorTokens.primary_red_dark2},
            -1px -1px 0px ${stroke ?? colorTokens.primary_red_dark2},
            -1px 1px 0px ${stroke ?? colorTokens.primary_red_dark2},
            1px -1px 0px ${stroke ?? colorTokens.primary_red_dark2}`,
                  }
                : {
                    textShadow: `
            1px 1px 0px rgba(255,255,255,1),
            -1px -1px 0px rgba(255,255,255,1),
            -1px 1px 0px rgba(255,255,255,1),
            1px -1px 0px rgba(255,255,255,1)`,
                  }
            }
            width="500"
            fontSize={50}
            fontWeight={700}
            letterSpacing={'.4rem'}
          >
            <textPath
              startOffset="50%"
              textAnchor="middle"
              alignmentBaseline="middle"
              href="#curveAbove"
              {...stylex.props(styles.logoTitle)}
              xlinkHref="#curve"
              fill={fill ?? colorTokens.primary_red_dark2}
              color={stroke ?? colorTokens.primary_red_dark2}
            >
              McClintock
            </textPath>
          </text>
          <text
            style={
              stroke
                ? {
                    textShadow: `
            1px 1px 0px ${stroke ?? colorTokens.primary_red_dark2},
            -1px -1px 0px ${stroke ?? colorTokens.primary_red_dark2},
            -1px 1px 0px ${stroke ?? colorTokens.primary_red_dark2},
            1px -1px 0px ${stroke ?? colorTokens.primary_red_dark2}`,
                  }
                : {
                    textShadow: `
            1px 1px 0px rgba(255,255,255,1),
            -1px -1px 0px rgba(255,255,255,1),
            -1px 1px 0px rgba(255,255,255,1),
            1px -1px 0px rgba(255,255,255,1)`,
                  }
            }
            width="500"
            fontSize={34}
            fontWeight={900}
            letterSpacing={'.6rem'}
          >
            <textPath
              startOffset="50%"
              textAnchor="middle"
              alignmentBaseline="middle"
              href="#curve"
              {...stylex.props(styles.logoTitle)}
              xlinkHref="#curve"
              fill={fill ?? colorTokens.primary_red_dark2}
              color={stroke ?? colorTokens.primary_red_dark2}
            >
              Trucking & Excavating
            </textPath>
          </text>
        </svg>
      )}
    </div>
  )
}

const styles = stylex.create({
  base: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  overlay: {
    position: 'absolute',
    top: '61%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  logoTitle: {
    textTransform: 'uppercase',
  },
})
