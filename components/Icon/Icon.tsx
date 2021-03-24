import React from 'react'

const ICON_PATHS = {
  dribbble:
    'M11.92 22.36A10.36 10.36 0 1122.28 12a10.36 10.36 0 01-10.36 10.36zm.24-11.9a32.74 32.74 0 01-9.08 1.26 2.62 2.62 0 000 .28 8.88 8.88 0 002.26 5.91 14.05 14.05 0 017.2-5.84l.35-.11q-.34-.75-.73-1.5zM8.14 4a8.85 8.85 0 00-4.88 6.18 33.14 33.14 0 008.17-1.09A51.37 51.37 0 008.14 4zm5.34 9.43h-.05S8.19 15.28 6.48 19l-.2-.15a8.87 8.87 0 009.1 1.32 38.35 38.35 0 00-1.89-6.72zm-3.7-10s.01-.03 0-.01zm2.14-.27a9.19 9.19 0 00-2.09.25 43.12 43.12 0 013.32 5.16 9.49 9.49 0 004.61-3.2 8.79 8.79 0 00-5.84-2.22zm6.84 3.22a11.39 11.39 0 01-4.94 3.51c.21.42.41.85.6 1.28.07.15.12.31.19.46a20.44 20.44 0 016.17.29 9 9 0 00-2-5.54zM15.15 13a39.76 39.76 0 011.72 6.33 8.86 8.86 0 003.79-5.94 13.24 13.24 0 00-5.51-.39z',
  github:
    'M22.88 12.27a10.9 10.9 0 01-7.43 10.33c-.56.1-.75-.24-.75-.53v-3a2.59 2.59 0 00-.73-2c2.42-.27 5-1.19 5-5.36a4.25 4.25 0 00-1.12-2.92 4 4 0 00-.12-2.89c-.9-.28-3 1.12-3 1.12A10.29 10.29 0 009.28 7S7.2 5.62 6.3 5.9a4 4 0 00-.12 2.89 4.2 4.2 0 00-1.11 2.92c0 4.16 2.53 5.09 4.95 5.36a2.44 2.44 0 00-.69 1.46 2.3 2.3 0 01-3.16-.9 2.24 2.24 0 00-1.67-1.12c-1.07 0-.07.66-.07.66.71.33 1.2 1.59 1.2 1.59.64 1.94 3.67 1.29 3.67 1.29v2c0 .25-.19.62-.74.52a10.89 10.89 0 1114.33-10.29zM5.15 16.85h-.18c-.02 0 0 .12.1.17a.13.13 0 00.18 0c.03-.02-.02-.13-.1-.17zm.51.42c-.07-.07-.17-.1-.23 0s0 .14 0 .23.17.1.23 0 0-.14 0-.23zm.45.6a.17.17 0 00-.22-.1c-.07 0-.07.16 0 .26s.19.14.24.1.2 0 .2-.14a.13.13 0 00-.2-.13zm.54.59c-.1-.1-.23-.11-.29 0a.2.2 0 00.06.27c.1.08.23.11.28 0s0-.18 0-.27zm.68.4a.22.22 0 00-.27.1c0 .08.05.18.18.21a.21.21 0 00.27-.08c0-.09 0-.19-.18-.23zm.84.14c-.13 0-.23.07-.23.16s.1.17.25.15.22-.07.22-.15-.12-.16-.24-.16zm.83-.11c-.13 0-.22.11-.2.21s.13.14.25.12.22-.12.2-.2-.13-.15-.26-.13z',
  instagram:
    'M21.56 16A5.72 5.72 0 0120 20a5.72 5.72 0 01-4 1.56c-1.33.07-2.64.06-4 .06s-2.64 0-4-.06A5.72 5.72 0 014 20a5.72 5.72 0 01-1.56-4c-.07-1.33-.06-2.64-.06-4s0-2.64.06-4A5.72 5.72 0 014 4a5.72 5.72 0 014-1.56c1.33-.07 2.64-.06 4-.06s2.64 0 4 .06A5.72 5.72 0 0120 4a5.72 5.72 0 011.56 4c.07 1.33.06 2.64.06 4s.01 2.64-.06 4zM6.33 4.5a3.18 3.18 0 00-1.11.72 3.13 3.13 0 00-.72 1.11C4 7.59 4.11 10.6 4.11 12s-.11 4.41.39 5.67a3.17 3.17 0 001.83 1.83c1.26.5 4.27.39 5.67.39s4.41.11 5.67-.39a3.23 3.23 0 001.83-1.83c.5-1.26.39-4.27.39-5.67s.11-4.41-.39-5.67a3.25 3.25 0 00-1.83-1.83C16.41 4 13.4 4.11 12 4.11S7.59 4 6.33 4.5zM12 16.94A4.94 4.94 0 1116.93 12 4.93 4.93 0 0112 16.94zm0-8.15A3.21 3.21 0 1015.21 12 3.23 3.23 0 0012 8.79zM17.14 8a1.16 1.16 0 111.15-1.15A1.16 1.16 0 0117.14 8z',
  twitter:
    'M20.19 8.7v.53a11.63 11.63 0 01-11.7 11.71 11.6 11.6 0 01-6.32-1.85 6.57 6.57 0 001 .05 8.24 8.24 0 005.11-1.75 4.13 4.13 0 01-3.85-2.86 6.85 6.85 0 00.78.07 5 5 0 001.09-.14 4.12 4.12 0 01-3.31-4v-.05a4.32 4.32 0 001.86.52 4.13 4.13 0 01-1.28-5.55 11.69 11.69 0 008.49 4.31 4.29 4.29 0 01-.1-.94 4.12 4.12 0 017.12-2.82 8.19 8.19 0 002.61-1 4.1 4.1 0 01-1.81 2.27 8.07 8.07 0 002.37-.63 8.87 8.87 0 01-2.06 2.13z',
  linkedin:
    'M5.2 7.1c-1.2.1-2.1-.8-2.2-2V5c0-1.1.9-2 2.1-2h.1c1.1-.1 2.2.7 2.3 1.9S6.7 7 5.6 7.1h-.4zm1.9 13.6h-4v-12h4v12zm14.3 0h-4v-6.4c0-1.6-.6-2.7-2-2.7-.9 0-1.7.6-2 1.4-.1.3-.1.6-.1 1v6.6h-4c.1-10.9 0-12 0-12h4v1.7a3.8 3.8 0 013.6-2c2.6 0 4.6 1.7 4.6 5.4l-.1 7z',
  lock:
    'M18.61,9.31H18V6.18a6.19,6.19,0,1,0-12.37,0V9.32H5.39a2.11,2.11,0,0,0-2.12,2.12v9.32a2.12,2.12,0,0,0,2.12,2.13H18.61a2.11,2.11,0,0,0,2.12-2.12V11.43A2.12,2.12,0,0,0,18.61,9.31Zm-10.72,0V6.19a3.91,3.91,0,0,1,7.81,0V9.31Z',
  download:
    'M12.0039 2C11.7629 2 11.5318 2.09574 11.3614 2.26615C11.191 2.43656 11.0952 2.66768 11.0952 2.90868V13L9.01163 10.9164C8.66404 10.5565 8.0693 10.5513 7.7155 10.9051C7.36299 11.2576 7.37198 11.8586 7.72676 12.2013L11.3615 15.836C11.5319 16.0063 11.763 16.102 12.0039 16.102C12.2449 16.102 12.4759 16.0063 12.6463 15.836L16.281 12.2013C16.6207 11.8496 16.6157 11.2732 16.27 10.9275C15.9243 10.5818 15.3479 10.5767 14.9962 10.9164L12.9126 13V3.86824C14.8825 4.09044 16.7045 5.02125 18.039 6.48723C19.3735 7.9532 20.1295 9.85436 20.1662 11.8364C20.2028 13.8185 19.5177 15.7463 18.2383 17.2607C16.9589 18.775 15.1726 19.7726 13.2123 20.0675C11.2519 20.3624 9.25117 19.9345 7.58289 18.8636C5.9146 17.7927 4.69255 16.1518 4.14445 14.2467C3.59634 12.3415 3.75956 10.3021 4.60369 8.50836C5.44783 6.71464 6.9153 5.28898 8.73267 4.49704C9.19463 4.312 9.42886 3.75095 9.22752 3.28988C9.02837 2.83382 8.46039 2.61694 8.00573 2.83235C5.73723 3.82071 3.91574 5.61504 2.8934 7.86843C1.87106 10.1218 1.72049 12.6742 2.4708 15.0322C3.22111 17.3902 4.819 19.3862 6.95556 20.6344C9.09212 21.8826 11.6156 22.2944 14.0381 21.7901C16.4606 21.2858 18.6101 19.9012 20.0711 17.904C21.532 15.9069 22.2006 13.439 21.9476 10.9775C21.6946 8.516 20.5379 6.23573 18.7012 4.57753C16.8646 2.91933 14.4784 2.00097 12.0039 2Z',
}

type IconName = keyof typeof ICON_PATHS

type IconProps = {
  name: IconName
}

function Icon({ name, ...props }: IconProps): JSX.Element {
  const iconPath = ICON_PATHS[name]

  return (
    <div
      css={`
        width: 1em;
        height: 1em;
      `}
      {...props}
    >
      <svg
        viewBox="0 0 24 24"
        css={`
          display: block;
          width: 100%;
          height: 100%;
          fill: currentColor;
        `}
      >
        <path d={iconPath} />
      </svg>
    </div>
  )
}

export default Icon
