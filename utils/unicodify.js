var hash = require('../hash')

var VARIANTS = {
  a: [
    'å',
    'ǻ',
    'ḁ',
    'ẚ',
    'ă',
    'ặ',
    'ắ',
    'ằ',
    'ẳ',
    'ẵ',
    'ȃ',
    'â',
    'ậ',
    'ấ',
    'ầ',
    'ẫ',
    'ẩ',
    'ả',
    'ǎ',
    'ȧ',
    'ǡ',
    'ạ',
    'ä',
    'ǟ',
    'à',
    'ȁ',
    'á',
    'ā',
    'ā̀',
    'ã',
    'ą',
    'ą́',
    'ą̃',
    'æ'
  ],
  b: ['ƀ', 'ḃ', 'ḅ', 'ḇ', 'ɓ'],
  c: ['ć', 'ĉ', 'č', 'ċ', 'ḉ', 'ƈ', 'c̈', 'ȼ', 'ç'],
  d: ['đ', 'ɗ', 'ḋ', 'ḍ', 'ḑ', 'ḓ', 'ď', 'ḏ'],
  e: [
    'ĕ',
    'ḝ',
    'ȇ',
    'ê',
    'ê̄',
    'ê̌',
    'ề',
    'ế',
    'ể',
    'ễ',
    'ệ',
    'ẻ',
    'ḙ',
    'ě',
    'ė',
    'ė́',
    'ė̃',
    'ẹ',
    'ë',
    'è',
    'è̩',
    'ȅ',
    'é',
    'é̩',
    'ē',
    'ḕ',
    'ḗ',
    'ẽ',
    'ḛ',
    'ę',
    'ę́',
    'ę̃'
  ],
  f: ['ƒ', 'ḟ'],
  g: ['ǵ', 'ǥ', 'ĝ', 'ǧ', 'ğ', 'ģ', 'ɠ', 'ġ', 'ḡ'],
  h: ['ĥ', 'ȟ', 'ħ', 'ḩ', 'ẖ', 'ḥ', 'ḣ', 'ḧ', 'ḫ'],
  i: [
    'ị',
    'ĭ',
    'î',
    'ǐ',
    'ɨ',
    'ï',
    'ḯ',
    'í',
    'ì',
    'ȉ',
    'į',
    'į̃',
    'ī',
    'ī̀',
    'ỉ',
    'ȋ',
    'ĩ'
  ],
  j: ['ĵ', 'j̇̃'],
  k: ['ƙ', 'ꝁ', 'ḱ', 'ǩ', 'ḳ', 'ķ', 'ᶄ', 'ḵ'],
  l: ['ĺ', 'ł', 'ľ', 'ḹ', 'l̃', 'ļ', 'ŀ', 'ḷ', 'ḻ', 'ḽ', 'ƚ'],
  m: ['ḿ', 'ṁ', 'ṃ', 'm̃'],
  n: ['ń', 'ñ', 'ň', 'ǹ', 'ṅ', 'ṇ', 'ņ', 'ṉ', 'ṋ'],
  o: [
    'ø',
    'ǿ',
    'ö',
    'ȫ',
    'ó',
    'ò',
    'ô',
    'ố',
    'ồ',
    'ổ',
    'ỗ',
    'ộ',
    'ǒ',
    'ő',
    'ŏ',
    'ȏ',
    'ȯ',
    'ȱ',
    'ọ',
    'ɵ',
    'ơ',
    'ớ',
    'ờ',
    'ỡ',
    'ợ',
    'ở',
    'ỏ',
    'ō',
    'ṓ',
    'ṑ',
    'õ',
    'ȭ',
    'ṍ',
    'ṏ',
    'ǫ',
    'ȍ',
    'o̩',
    'ó̩'
  ],
  p: ['ṕ', 'ṗ', 'ᵽ', 'ƥ', 'ᶈ'],
  q: ['ʠ', 'q̃'],
  r: ['ŕ', 'ɍ', 'ř', 'ŗ', 'ṙ', 'ȑ', 'ȓ', 'ṛ', 'ṝ', 'ṟ', 'ꞧ', 'ɽ', 'r̃'],
  s: ['ś', 'ṡ', 'ṩ', 'ṥ', 'ṣ', 's̩', 'ꞩ', 'ŝ', 'ṧ', 'š', 'ş', 'ș', 's̈'],
  t: ['ť', 'ṫ', 'ẗ', 'ţ', 'ṭ', 'ʈ', 'ț', 'ƫ', 'ṱ', 'ṯ', 'ŧ'],
  u: [
    'ŭ',
    'ʉ',
    'ụ',
    'ü',
    'ǜ',
    'ǘ',
    'ǚ',
    'ǖ',
    'ṳ',
    'ú',
    'ù',
    'û',
    'ṷ',
    'ǔ',
    'ȗ',
    'ű',
    'ŭ',
    'ư',
    'ứ',
    'ừ',
    'ử',
    'ự',
    'ữ',
    'ủ',
    'ū',
    'ū̀',
    'ū́',
    'ṻ',
    'ū̃',
    'ũ',
    'ṹ',
    'ṵ',
    'ų',
    'ų́',
    'ų̃',
    'ȕ',
    'Ů'
  ],
  v: ['ṽ', 'ṿ', 'ʋ'],
  w: ['ẃ', 'ẁ', 'ŵ', 'ẅ', 'ẇ', 'ẉ', 'ẘ'],
  x: ['ẍ', 'ẋ', 'ᶍ'],
  y: ['ý', 'ỳ', 'ŷ', 'ÿ', 'ỹ', 'ẏ', 'ỵ', 'ẙ', 'ỷ', 'ȳ', 'ƴ'],
  z: ['ź', 'ẑ', 'ž', 'ż', 'ẓ', 'ẕ', 'ƶ', 'ᶎ']
}

module.exports = function unicodify(id, word) {
  id = hash([id, 'unicodify'])
  var wordLen = word.length
  var i = id % wordLen

  id = hash(id)

  var letter = wordLen === 1 ? word : word[i]

  var lower = letter.toLowerCase()
  var variants = VARIANTS[lower]

  if (!variants) {
    return word
  }

  var variant = variants[id % variants.length]
  letter = letter === lower ? variant : variant.toUpperCase()
  return wordLen === 1 ? letter : word.slice(0, i) + letter + word.slice(i + 1)
}