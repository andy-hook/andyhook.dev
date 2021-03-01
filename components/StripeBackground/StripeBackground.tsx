import React from 'react'
import { useTheme } from '../../hooks/useTheme/useTheme'

function StripeBackground({
  ...props
}: React.HTMLAttributes<SVGElement>): JSX.Element {
  const { background } = useTheme()

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1009 1507"
      {...props}
    >
      <defs>
        <radialGradient
          id="a"
          cx="999.93"
          cy="253.71"
          fx="1166.9318333931249"
          fy="560.5639139390521"
          r="349.35"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor={background('extraHigh')} />
          <stop
            offset="1"
            stopColor={background('extraHigh')}
            stopOpacity="0"
          />
        </radialGradient>
        <radialGradient
          id="b"
          cx="945.17"
          cy="481.18"
          fx="945.1687558807198"
          fy="481.1833141273173"
          r="711.13"
          xlinkHref="#a"
        />
        <radialGradient
          id="c"
          cx="850.13"
          cy="568.42"
          fx="850.1279597927087"
          fy="568.4193517631538"
          r="598.15"
          xlinkHref="#a"
        />
        <radialGradient
          id="d"
          cx="718.9"
          cy="562.61"
          fx="718.9024177635229"
          fy="562.6129118503586"
          r="777.87"
          xlinkHref="#a"
        />
        <radialGradient
          id="e"
          cx="825.74"
          cy="763.52"
          fx="825.7409121589653"
          fy="763.5157328331006"
          r="955.42"
          xlinkHref="#a"
        />
        <radialGradient
          id="f"
          cx="831.55"
          cy="845.97"
          fx="831.5473520717615"
          fy="845.9671795948034"
          r="832.42"
          xlinkHref="#a"
        />
        <radialGradient
          id="g"
          cx="786.26"
          cy="861.06"
          fx="786.2571207519532"
          fy="861.0639233680722"
          r="939.96"
          xlinkHref="#a"
        />
        <radialGradient
          id="h"
          cx="848.97"
          cy="974.87"
          fx="848.9666718101498"
          fy="974.8701456588751"
          r="963.25"
          xlinkHref="#a"
        />
        <radialGradient
          id="i"
          cx="664.32"
          cy="825.06"
          fx="664.3218825832419"
          fy="825.0639959087403"
          r="794.63"
          xlinkHref="#a"
        />
        <radialGradient
          id="j"
          cx="799.03"
          cy="1000.42"
          fx="799.0312885601043"
          fy="1000.4184812751773"
          r="941.12"
          xlinkHref="#a"
        />
        <radialGradient
          id="k"
          cx="766.52"
          cy="996.93"
          fx="766.5152250484471"
          fy="996.9346173275007"
          r="1007.71"
          xlinkHref="#a"
        />
        <radialGradient
          id="l"
          cx="772.32"
          cy="1031.77"
          fx="772.3216649612432"
          fy="1031.7732568042757"
          r="895.9"
          xlinkHref="#a"
        />
        <radialGradient
          id="m"
          cx="696.84"
          cy="969.06"
          fx="696.8379460948936"
          fy="969.063705746079"
          r="926.53"
          xlinkHref="#a"
        />
        <radialGradient
          id="n"
          cx="696.84"
          cy="1043.29"
          fx="696.8379460948936"
          fy="1043.293161015703"
          r="929.75"
          xlinkHref="#a"
        />
        <radialGradient
          id="o"
          cx="696.84"
          cy="1060.01"
          fx="696.8379460948936"
          fy="1060.013811642013"
          r="929.75"
          xlinkHref="#a"
        />
        <radialGradient
          id="p"
          cx="696.84"
          cy="1025.3"
          fx="696.8379460948936"
          fy="1025.2978968625448"
          r="931.13"
          xlinkHref="#a"
        />
        <radialGradient
          id="q"
          cx="815.29"
          cy="1123.52"
          fx="815.2893203159338"
          fy="1123.515007426453"
          r="947.9"
          xlinkHref="#a"
        />
        <radialGradient
          id="r"
          cx="814.38"
          cy="1142.3"
          fx="814.3777345520202"
          fy="1142.3006730599518"
          r="947.43"
          xlinkHref="#a"
        />
      </defs>
      <polygon
        points="649.82 0 694.72 0 1009 240.8 1009 280.68 649.82 0"
        fill="url(#a)"
      />
      <polygon
        points="377.3 0 404.4 0 1009 514.86 1009 542.73 377.3 0"
        fill="url(#b)"
      />
      <polygon
        points="220.14 0 239.49 0 1009 698.34 1009 720.8 220.14 0"
        fill="url(#c)"
      />
      <polygon
        points="136.53 0 1009 836.92 1009 850.86 121.04 0 136.53 0"
        opacity="0.55"
        fill="url(#d)"
      />
      <polygon
        points="1009 938.34 48.27 0 35.11 0 1009 949.18 1009 938.34"
        fill="url(#e)"
      />
      <polygon
        points="1009 1021.18 0 0 0 7.76 1009 1032.02 1009 1021.18"
        opacity="0.63"
        fill="url(#f)"
      />
      <polygon
        points="1009 1084.67 0 41.83 0 48.02 1009 1093.18 1009 1084.67"
        fill="url(#g)"
      />
      <polygon
        points="1009 1139.63 0 82.09 0 89.06 1009 1145.83 1009 1139.63"
        fill="url(#h)"
      />
      <polygon
        points="1009 1185.31 0 113.06 0 119.25 1009 1190.73 1009 1185.31"
        fill="url(#i)"
      />
      <polygon
        points="1009 1225.57 0 137.06 0 140.54 1009 1230.21 1009 1225.57"
        opacity="0.55"
        fill="url(#j)"
      />
      <polygon
        points="1009 1259.83 0 158.34 0 160.67 1009 1263.89 1009 1259.83"
        fill="url(#k)"
      />
      <polygon
        points="1009 1288.28 0 179.38 0 184.02 1009 1291.12 1009 1288.28"
        opacity="0.49"
        fill="url(#l)"
      />
      <polygon
        points="1009 1313.31 0 197.44 0 201.06 1009 1316.92 1009 1313.31"
        fill="url(#m)"
      />
      <polygon
        points="1009 1389.71 0 266.85 0 270.46 1009 1393.33 1009 1389.71"
        opacity="0.23"
        fill="url(#n)"
      />
      <polygon
        points="1009 1406.44 0 283.57 0 287.18 1009 1410.05 1009 1406.44"
        opacity="0.14"
        fill="url(#o)"
      />
      <polygon
        points="1009 1372.65 0 246.78 0 250.4 1009 1376.27 1009 1372.65"
        opacity="0.44"
        fill="url(#p)"
      />
      <polygon
        points="1009 1336.54 0 209.31 0 212.41 1009 1341.18 1009 1336.54"
        opacity="0.68"
        fill="url(#q)"
      />
      <polygon
        points="1007.87 1355.32 0 228.1 0 231.19 1007.87 1359.97 1007.87 1355.32"
        opacity="0.52"
        fill="url(#r)"
      />
    </svg>
  )
}

export default StripeBackground
