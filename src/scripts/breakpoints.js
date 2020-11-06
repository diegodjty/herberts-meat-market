const breakpoints = [768,1024];

const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)

export default mq;