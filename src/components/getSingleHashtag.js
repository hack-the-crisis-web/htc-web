const getSingleHashtag = hashtagString =>
  hashtagString
    .split('#theglobalhack')
    .map(s => s.trim())
    .sort((a, b) => b.length - a.length)[0]

export default getSingleHashtag
