const crypt = require('../src/crypt');

const seedsamples = [
    "abcdefghijklmn",
    "ABCDEFG",
    "1234567",
    "3141592653589790".repeat(20),
    "_________________________________"
    //"!@#$%^&*()0123456".repeat(20)
    //    "abcdefg-_".repeat(20)
]
const secretsamples = [
    "秘密の文字列",
    "Very Long Secret String".repeat(100),
    ""
]

test('同じ長さに変換される', () => {
    secretsamples.forEach((secret) => {
	seedsamples.forEach((seed) => {
	    let crypted = crypt.crypt(seed,secret)
	    expect(crypted.length).toBe(seed.length)
	})
    })
});

test('もとの文字列に戻る', () => {
    secretsamples.forEach((secret) => {
	seedsamples.forEach((seed) => {
	    let crypted = crypt.crypt(seed,secret)
	    let crypted2 = crypt.crypt(crypted,secret)
	    expect(crypted2).toBe(seed)
	})
    })
});



