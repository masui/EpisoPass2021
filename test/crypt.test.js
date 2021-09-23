//
// crypt.coffeeのテスト
//
const crypt = require('../src/crypt');

const seedsamples = [
    "abcdefghijklmn",
    "ABCDEFG",
    "1234567",
    "3141592653589790".repeat(20),
    "_________________________________",
    "!@#$%^&*()0123456".repeat(20),
    "abcdefg-_".repeat(20),
    "1qaz@WSX3edc$RFV5tgb^YHN"
]
const secretsamples = [
    "秘密の文字列", // 日本語の秘密文字列
    "Very Long Secret String".repeat(100), // 長い秘密文字列
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
	    expect(crypted2).toBe(seed) // crypt()を2回適用するともとに戻る
	})
    })
});

test('同じ文字クラスに変換される', () => {
    let seed, crypted
    secretsamples.forEach((secret) => {
	seed = "lowercasecharacters"
	crypted = crypt.crypt(seed,secret)
	expect(crypted).toMatch(/^[a-z]+$/) // 小文字のシードは小文字に変換される
	seed = "3141592653589000"
	crypted = crypt.crypt(seed,secret)
	expect(crypted).toMatch(/^[0-9]+$/)
    })
})



