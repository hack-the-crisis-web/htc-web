const parseTwitterWidgetCode = widgetCode => {
  if (!widgetCode) {
    return false
  }

  const classNameRegex = /class=['"](.*?)['"]/g
  const dataRefRegex = /data-ref=['"](.*?)['"]/g
  const scriptRegex = /<script>(.*?)<\/script>/g

  const classNameMatch = widgetCode.match(classNameRegex)
  const dataRefMatch = widgetCode.match(dataRefRegex)
  const scriptMatch = widgetCode.match(scriptRegex)

  const className = classNameMatch[0] ? classNameMatch[0].slice(7, -1) : ''
  const dataRef = dataRefMatch[0] ? dataRefMatch[0].slice(10, -1) : ''
  const scriptContent = scriptMatch[0] ? scriptMatch[0].slice(8, -9) : ''

  const r = { scriptContent, dataRef, className }

  if (!scriptContent || !dataRef || !className) {
    return false
  }

  return r
}

export default parseTwitterWidgetCode
