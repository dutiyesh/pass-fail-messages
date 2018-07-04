import test from 'ava';
import x from '.';

test(t => {
	t.true(x.pass.length > 0);
	t.true(x.fail.length > 0);
	t.true(x.all.length > 0);
	t.truthy(x.passRandom());
	t.truthy(x.failRandom());
	t.truthy(x.allRandom());
	t.not(x.allRandom(), x.allRandom());
});
