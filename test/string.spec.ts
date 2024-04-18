import assert from 'assert';
import {
	trim,
	removeSpecialChar,
	removeNewLine,
	replaceBetween,
	capitalizeFirst,
	capitalizeEverySentence,
	capitalizeEachWords,
	strCount,
	strShuffle,
	strRandom,
	strBlindRandom,
	truncate,
	truncateExpect,
	split,
	strUnique,
	strToAscii,
	urlJoin
} from '../dist';

describe('String', () => {
	it('trim', (done) => {
		assert.strictEqual(trim(null), null);
		assert.strictEqual(trim(''), '');
		assert.strictEqual(trim(' hello world '), 'hello world');
		assert.strictEqual(trim(' h e l l o  wo     rld  '), 'h e l l o wo rld');
		assert.strictEqual(trim(' H ello World'), 'H ello World');
		assert.strictEqual(trim('  Hell    o    World'), 'Hell o World');
		done();
	});

	it('removeSpecialChar', (done) => {
		assert.strictEqual(removeSpecialChar('1　2！3☆4＠5＋6─🌍'), '123456');
		assert.strictEqual(removeSpecialChar('Hello, World!'), 'HelloWorld');
		assert.strictEqual(removeSpecialChar('12 34-56,78=90'), '1234567890');
		assert.strictEqual(
			removeSpecialChar('ABC가나다ㄱㄴㄷㅏㅑㅓ天地人'),
			'ABC가나다ㄱㄴㄷㅏㅑㅓ天地人'
		);
		assert.strictEqual(removeSpecialChar('Hello World!', ' '), 'Hello World');
		assert.strictEqual(removeSpecialChar('Hello-qsu & World!', '-&!'), 'Hello-qsu&World!');
		done();
	});

	it('removeNewLine', (done) => {
		assert.strictEqual(
			removeNewLine(`te
st`),
			'test'
		);
		assert.strictEqual(removeNewLine('te\rst'), 'test');
		assert.strictEqual(removeNewLine('te\nst'), 'test');
		assert.strictEqual(removeNewLine('te\r\nst'), 'test');
		assert.strictEqual(removeNewLine('te\r\nst', '|'), 'te|st');
		assert.strictEqual(removeNewLine('t\ne\r\ns\rt', '-'), 't-e-s-t');
		done();
	});

	it('replaceBetween', (done) => {
		assert.strictEqual(replaceBetween('hello[world]', '[', ']'), 'hello');
		assert.strictEqual(replaceBetween("hello'test'world'test2'!!", "'", "'"), 'helloworld!!');
		assert.strictEqual(replaceBetween('hello[w]o[r][[l]][[d]]!!', '[', ']'), 'helloo]]!!');
		assert.strictEqual(replaceBetween('abc[hello]def[world]g[!!!]', '[', ']'), 'abcdefg');
		assert.strictEqual(replaceBetween('abc<<def>>ghi<<jkl>>mn', '<<', '>>'), 'abcghimn');
		assert.strictEqual(replaceBetween('hell1o2~', '1', '2', 'o!'), 'hello!~');
		done();
	});

	it('capitalizeFirst', (done) => {
		assert.strictEqual(capitalizeFirst('t'), 'T');
		assert.strictEqual(capitalizeFirst('test'), 'Test');
		assert.strictEqual(capitalizeFirst('tEST'), 'TEST');
		done();
	});

	it('capitalizeEverySentence', (done) => {
		assert.strictEqual(capitalizeEverySentence('hello. world'), 'Hello. World');
		assert.strictEqual(capitalizeEverySentence('hello. 1world'), 'Hello. 1World');
		assert.strictEqual(capitalizeEverySentence('HeLLO,world'), 'HeLLO,world');
		assert.strictEqual(capitalizeEverySentence('H. e. l. l. o.'), 'H. E. L. L. O.');
		assert.strictEqual(capitalizeEverySentence('hello!world!', '!'), 'Hello!World!');
		done();
	});

	it('capitalizeEachWords', (done) => {
		assert.strictEqual(capitalizeEachWords('hello, world!'), 'Hello, World!');
		assert.strictEqual(capitalizeEachWords('test'), 'Test');
		assert.strictEqual(
			capitalizeEachWords('this is the test sentence.', true),
			'This is the Test Sentence.'
		);
		done();
	});

	it('strCount', (done) => {
		assert.strictEqual(strCount('hello', 'l'), 2);
		assert.strictEqual(strCount('abcdABCD', 'a'), 1);
		assert.strictEqual(strCount('aaaaaa', 'a'), 6);
		assert.strictEqual(strCount('hello', 'll'), 1);
		done();
	});

	it('strShuffle', (done) => {
		assert(strShuffle('hi'));
		assert(strShuffle('abc def ghi'));
		done();
	});

	it('strRandom', (done) => {
		assert(strRandom(5));
		assert(strRandom(10));
		done();
	});

	it('strBlindRandom', (done) => {
		assert(strBlindRandom('test', 2));
		assert(strBlindRandom('test', 2, '#'));
		done();
	});

	it('truncate', (done) => {
		assert.strictEqual(truncate('test', 2), 'te');
		assert.strictEqual(truncate('test', 1, '...'), 't...');
		done();
	});

	it('truncateExpect', (done) => {
		assert.strictEqual(
			truncateExpect('hello. this is test string.', 10, '.'),
			'hello. this is test string.'
		);
		assert.strictEqual(
			truncateExpect('hello. this is test. bye.', 20, '.'),
			'hello. this is test.'
		);
		assert.strictEqual(truncateExpect('hello.. this is test', 20, '.'), 'hello.. this is test');
		assert.strictEqual(truncateExpect('hello.. this is test', 21, '.'), 'hello.. this is test');
		assert.strictEqual(truncateExpect('hello.. this is test', 19, '.'), 'hello.. this is test');
		assert.strictEqual(truncateExpect('hello-this-is-test-string-bye', 14, '-'), 'hello-this-is-');
		done();
	});

	it('split', (done) => {
		assert.deepStrictEqual(split('hello,js world', [',', ' ']), ['hello', 'js', 'world']);
		assert.deepStrictEqual(split('hello,js world', ',', ' '), ['hello', 'js', 'world']);
		assert.deepStrictEqual(split('hello, js world', ', '), ['hello', 'js world']);
		assert.deepStrictEqual(split('hello, js world', 'hello', ' js ', 'w'), ['', ',', '', 'orld']);
		assert.deepStrictEqual(split('hello+js.world', '+', '.'), ['hello', 'js', 'world']);
		assert.deepStrictEqual(split('hello+?js world', '+?'), ['hello', 'js world']);
		assert.deepStrictEqual(split('hello j\\s world', '\\s'), ['hello j', ' world']);
		done();
	});

	it('strUnique', (done) => {
		assert.strictEqual(strUnique('ababcdcd'), 'abcd');
		assert.strictEqual(strUnique('abc--11111'), 'abc-1');
		done();
	});

	it('strToAscii', (done) => {
		assert.deepStrictEqual(
			strToAscii('hello-world.'),
			[104, 101, 108, 108, 111, 45, 119, 111, 114, 108, 100, 46]
		);
		assert.deepStrictEqual(strToAscii('1 2 3 4 5'), [49, 32, 50, 32, 51, 32, 52, 32, 53]);
		done();
	});

	it('urlJoin', (done) => {
		assert.strictEqual(urlJoin('https://example.com'), 'https://example.com');
		assert.strictEqual(urlJoin('https://example.com', null, 'world/'), 'https://example.com/world');
		assert.strictEqual(urlJoin(null, 'https://example.com', 'world/'), 'https://example.com/world');
		assert.strictEqual(
			urlJoin('https://example.com', 'hello', 'world'),
			'https://example.com/hello/world'
		);
		assert.strictEqual(
			urlJoin('https://example.com', '/hello', '/world', 'bye'),
			'https://example.com/hello/world/bye'
		);
		assert.strictEqual(
			urlJoin('example.com', '/hello', '/world', 'bye'),
			'example.com/hello/world/bye'
		);
		assert.strictEqual(urlJoin('hello', '/world', 'bye'), 'hello/world/bye');
		done();
	});
});
