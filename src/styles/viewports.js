import styled, {css} from "styled-components";

const MobileViewport = (w, h = w) => css`
@media screen and (max-width: 480px) {
  width: ${w};
  height: ${h};
}
`
const TabletViewport = css`
@media screen and (max-width: 768px) {
  
}
`
const DesktopViewport = css`
@media screen and (max-width: 1200px) {
  
}
`