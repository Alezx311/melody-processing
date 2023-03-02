export type THtmlElementText = (typeof HTML_ELEMENTS_TEXT)[number]
export type THtmlSource = (typeof HTML_SOURCES)[number]

export const HTML_ELEMENTS_TEXT = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div', 'p', 'span'] as const
export const HTML_SOURCES = [...HTML_ELEMENTS_TEXT].map(element => {
  const rxp = new RegExp(`<${element}.+>(.+)</${element}>`, 'gim')
  const match = (s: string) => s.match(rxp)
  const to = (text: string, props: string) => `<${element} ${props}>${text}</${element}>`
  const is = (s: string) => rxp.test(s)
  return { element, rxp, match, to, is }
})

export const toHtmlImg = (src: string, alt: string = src) => `<img src="${src}" alt="${alt}"/>`
export const toHtmlBr = (text: string) => text.replace(/\n/gim, `\n<br />\n`)
export const toHtmlDiv = (text: string) => `<div>${text}</div>`
export const toDiv = (src: { description: string; file: string }) => `
<div class="svg_element_data">
  <span>${src.description}</span>
  <img src="${src.file}" alt="${src.description}"/>
</div>`

export const toHtmlInfo = (values: object, desc: string) => `<div>
  <h4>${desc}</h4>
  <br />
  ${Object.entries(values)
    .map(([k, v]) => `<span>${k}: ${v}</span>`)
    .join('\n')}
</div>`
