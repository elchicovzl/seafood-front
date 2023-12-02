
export function sectionRenderer(section: any, index: number) {
  switch (section.__component) {
    case "sections.heading":
      return <>
        <h1 className="text-3xl font-bold">{section.heading}</h1>
        <p className="text-lg">{section.description}</p>
      </>
    
    default:
      return null;
  }
}
