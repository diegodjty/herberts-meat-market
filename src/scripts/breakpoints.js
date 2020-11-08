const breakpoints = [768,1022];

const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)

export default mq;