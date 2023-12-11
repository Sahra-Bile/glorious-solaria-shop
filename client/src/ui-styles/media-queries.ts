const BREAKPOINT = 768

export const MOBILE_QUERY = `(max-width: ${BREAKPOINT - 1}px)`
export const DESKTOP_QUERY = `(min-width: ${BREAKPOINT}px)`

export const isMobile = `@media ${MOBILE_QUERY}`
export const isDesktop = `@media ${DESKTOP_QUERY}`

type BreakpointType = 'desktop' | 'mobile'

export function getCurrentBreakpoint(): BreakpointType {
  return window.innerWidth < BREAKPOINT ? 'mobile' : 'desktop'
}
