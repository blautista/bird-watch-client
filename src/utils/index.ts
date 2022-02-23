export const getImageListColumnsByViewportWidth = () => {
  const vw = window.innerWidth;

  const breakpoints = [
    {upTo: 600, cols: 1},
    {upTo: 900, cols: 2},
    {upTo: 1200, cols: 3},
    {upTo: 1536, cols: 4},
    {upTo: Infinity, cols: 4},
  ]

  return breakpoints.find((breakpoint) => vw < breakpoint.upTo)?.cols
}