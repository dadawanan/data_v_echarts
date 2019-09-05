export default () => {
  const {
    pageWidth,
    pageHeight
  } = { pageWidth: 3840, pageHeight: 2160 }
  const body = document.querySelector('body')
  body.style.width = `${pageWidth}px`
  body.style.height = `${pageHeight}px`
  const x = window.innerWidth / pageWidth
  const y = window.innerHeight / pageHeight
  body.style.transform = `scale(${x > y ? y : x}) translate3d(-50%, -50%, 0)`
}
