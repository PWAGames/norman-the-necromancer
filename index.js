const t = [0, 18, 16, 15],
	e = [11, 33, 13, 15],
	n = [16, 18, 16, 15],
	i = [32, 18, 14, 15],
	s = [58, 18, 13, 15],
	o = [71, 18, 14, 15],
	a = [85, 18, 13, 15],
	r = [98, 18, 10, 15],
	l = [72, 61, 8, 7],
	h = [18, 52, 2, 2],
	u = [16, 54, 16, 16],
	f = [0, 54, 16, 8],
	g = [22, 48, 4, 4],
	m = [67, 33, 22, 20],
	d = [48, 50, 7, 7],
	p = [22, 52, 2, 2],
	w = [24, 52, 1, 1],
	v = [25, 53, 1, 1],
	y = [24, 53, 1, 1],
	x = [25, 52, 1, 1],
	b = [65, 54, 6, 6],
	C = [71, 55, 5, 5],
	k = [76, 56, 4, 4],
	M = [142, 18, 18, 17],
	R = [11, 51, 3, 3],
	S = [11, 48, 3, 3],
	q = [11, 49, 1, 1],
	A = [11, 52, 1, 1],
	B = [108, 18, 14, 17],
	$ = [131, 35, 29, 31],
	N = [109, 35, 22, 22],
	O = [36, 33, 16, 17],
	T = [122, 18, 20, 11],
	D = [111, 57, 5, 5],
	j = [24, 33, 12, 14],
	F = [0, 62, 16, 8],
	H = [111, 62, 5, 5],
	E = [116, 57, 5, 5],
	I = [116, 62, 5, 5],
	P = [55, 53, 10, 11],
	U = [121, 57, 5, 5],
	G = [18, 48, 4, 4],
	L = [20, 52, 1, 1],
	V = [21, 52, 1, 1],
	W = [18, 52, 1, 2],
	z = [21, 53, 1, 1],
	K = [14, 48, 4, 4],
	X = [17, 53, 1, 1],
	Y = [122, 29, 20, 6],
	J = [53, 64, 7, 6],
	Q = [60, 64, 5, 6],
	Z = [49, 64, 4, 6],
	_ = [52, 33, 15, 17],
	tt = [65, 60, 7, 8],
	et = [89, 33, 14, 15],
	nt = [89, 48, 15, 20],
	it = [80, 53, 9, 15],
	st = [83, 54, 2, 2],
	ot = [82, 57, 1, 1],
	at = [82, 56, 1, 1],
	rt = [104, 58, 7, 8],
	lt = [26, 48, 4, 4],
	ht = [104, 48, 3, 3],
	ut = [104, 51, 3, 3],
	ct = [104, 54, 3, 3],
	ft = [106, 50, 1, 1],
	gt = [106, 51, 1, 1],
	mt = [106, 54, 1, 1],
	dt = [58, 50, 3, 3],
	pt = [61, 50, 2, 2],
	wt = [61, 52, 1, 1],
	vt = [26, 53, 1, 1],
	yt = [27, 52, 2, 2],
	xt = [32, 50, 16, 20],
	bt = [0, 33, 11, 20],
	Ct = [46, 18, 12, 15],
	kt = {
		"mMWTVw/$%": 6,
		'I1f-=*+?{}"': 4,
		"lj[]()|'`,": 3,
		"i:.!": 2
	},
	Mt = Math.PI,
	Rt = Mt / 2,
	St = 2 * Mt;

function qt(t, e)
{
	return {
		x: t,
		y: e
	}
}

function At(t, e, n)
{
	return t < e ? e : t > n ? n : t
}

function Bt(t)
{
	return [Math.cos(t), Math.sin(t)]
}

function $t(t, e)
{
	return Math.atan2(e.y - t.y, e.x - t.x)
}

function Nt(t, e)
{
	let n = t.indexOf(e);
	n >= 0 && t.splice(n, 1)
}

function Ot(t)
{
	return t[Tt(t.length)]
}

function Tt(t)
{
	return Math.random() * t | 0
}

function Dt(t = 1)
{
	return Math.random() * t
}
let jt = {};
for (let c in kt)
	for (let t of c) jt[t] = kt[c];
let Ft = new Image;
Ft.src = "./sprites.png";
let Ht = c,
	Et = Ht.getContext("2d");

function It([t, e, n, i], s, o)
{
	Ut(t, e, n, i, s, o, n, i)
}

function Pt(t, e, n)
{
	It(t, e, -n - t[3])
}

function Ut(t, e, n, i, s, o, a, r)
{
	Et.drawImage(Ft, t, e, n, i, 0 | s, 0 | o, a, r)
}

function Gt(t, e, n, i, s)
{
	let [o, a, r, l] = t;
	if (i <= 3 || s <= 3) return;
	let h = o,
		u = o + 3,
		c = o + r - 3,
		f = a,
		g = a + 3,
		m = a + l - 3,
		d = c - u,
		p = m - g,
		w = e,
		v = e + 3,
		y = e + i - 3,
		x = n,
		b = n + 3,
		C = n + s - 3,
		k = y - v,
		M = C - b;
	Ut(h, f, 3, 3, w, x, 3, 3), Ut(c, f, 3, 3, y, x, 3, 3), Ut(h, m, 3, 3, w, C, 3, 3), Ut(c, m, 3, 3, y, C, 3, 3), Ut(u, f, d, 3, v, x, k, 3), Ut(u, m, d, 3, v, C, k, 3), Ut(h, g, 3, p, w, b, 3, M), Ut(c, g, 3, p, y, b, 3, M), Ut(u, g, d, p, v, b, k, M)
}
let Lt = 0,
	Vt = 0;

function Wt(t, e = Lt, n = Vt)
{
	var i;
	Lt = 0 | e, Vt = 0 | n;
	for (let s = 0; s < t.length; s++)
	{
		let n = t[s];
		if ("\n" === n) Lt = e, Vt += 7;
		else
		{
			let t = n.charCodeAt(0) - 32,
				e = t % 32 * 5,
				s = 6 * (t / 32 | 0),
				o = Lt,
				a = Vt;
			Et.drawImage(Ft, e, s, 5, 6, o, a, 5, 6), Lt += null != (i = jt[n]) ? i : 5
		}
	}
}

function zt()
{
	let
	{
		width: t,
		height: e
	} = Ht, n = Math.min(innerWidth / t, innerHeight / e, 3);
	Ht.style.width = Ht.width * n + "px", Ht.style.height = Ht.height * n + "px", Et.imageSmoothingEnabled = !1
}
let Kt = [],
	Xt = t => t;

function Yt(t, e, n, i, s = Xt)
{
	Kt.push(
	{
		t: t,
		i: e,
		duration: n,
		o: i,
		l: s,
		h: 0
	})
}
const Jt = [0, 0];

function Qt([t, e])
{
	return t + Math.random() * e
}
let Zt = [];
const _t = class
{
	constructor(t = {})
	{
		this.u = new Set, this.x = 0, this.y = 0, this.w = 0, this.g = 0, this.m = [], this.frequency = 0, this.p = Jt, this.angle = Jt, this.duration = Jt, this.v = Jt, this.C = Jt, this.k = Jt, this.M = 0, this.done = !1, Object.assign(this, t), Zt.push(this)
	}
	extend(t)
	{
		return Object.assign(this, t)
	}
	remove()
	{
		this.done = !0
	}
	update(t)
	{
		let e = t / 1e3;
		for (this.M += this.frequency; !this.done && this.M > 0;) this.M -= 1, this.R();
		for (let n of this.u)(n.h += t) >= n.duration ? (this.u.delete(n), _t.S.push(n)) : (n.x += n.q * e, n.y += n.A * e, n.A -= n.k * e, n.y <= 0 && (n.y = 0, n.A *= -n.v, n.q *= n.C));
		this.done && 0 === this.u.size && Nt(Zt, this)
	}
	R()
	{
		let t = _t.S.pop() ||
			{},
			e = Qt(this.p),
			n = Qt(this.angle),
			[i, s] = Bt(n);
		t.x = Qt([this.x, this.w]), t.y = Qt([this.y, this.g]), t.q = i * e, t.A = s * e, t.h = 0, t.duration = Qt(this.duration), t.v = Qt(this.v), t.C = Qt(this.C), t.k = Qt(this.k), t.variant = 0 | Qt([0, this.m.length]), this.u.add(t)
	}
	B(t)
	{
		for (let e = 0; e < t; e++) this.R();
		return this
	}
};
let te = _t;
te.S = [];
class ee
{
	constructor()
	{
		this.x = 0, this.y = 0, this.q = 0, this.A = 0, this.k = 0, this.v = 0, this.C = 0, this.$ = 0, this.N = [0, 0, 0, 0], this.tags = 0, this.O = 0, this.T = 0, this.D = 0, this.j = 0, this.F = 0, this.H = !1, this.I = !1, this.groupId = 0, this.P = [], this.U = 0, this.G = 0
	}
	is(t)
	{
		return (this.tags & t) > 0
	}
	bounds()
	{
		return {
			x: this.x,
			y: this.y,
			w: this.N[2],
			g: this.N[3]
		}
	}
	L()
	{
		return qt(this.x + this.N[2] / 2, this.y + this.N[3] / 2)
	}
	update(t)
	{
		this.V(t), this.G -= t, this.G <= 0 && (this.G = this.U, this.W()), this.K && (this.K.x = this.x, this.K.y = this.y)
	}
	X(t = new ne(this), e = this.P.length)
	{
		let
		{
			constructor: n
		} = Object.getPrototypeOf(t);
		return n !== ne && this.Y(n) || (this.P.splice(e, 0, t), t.J()), t
	}
	Z(t)
	{
		Nt(this.P, t), t._()
	}
	Y(t)
	{
		return this.P.find((e => e instanceof t))
	}
	V(t)
	{
		for (let e of this.P) e.V(t)
	}
	W()
	{
		for (let t of this.P)
			if (++t.tt >= t.et && (t.tt = 0, t.W())) break
	}
	nt(t)
	{
		for (let e of this.P) e.nt(t)
	}
	it(t)
	{
		for (let e of this.P) e.it(t)
	}
	st()
	{
		for (let t of this.P) t.st();
		this.I && game.ot(this)
	}
	rt(t)
	{
		for (let e of this.P) e.rt(t);
		this.H && game.ot(this)
	}
}
class ne
{
	constructor(t)
	{
		this.object = t, this.et = 1, this.tt = 0
	}
	J()
	{}
	_()
	{}
	W()
	{}
	st()
	{}
	nt(t)
	{}
	it(t)
	{}
	V(t)
	{}
	rt(t)
	{}
}

function ie(t, e, n, i)
{
	return {
		lt: t,
		name: e,
		description: n,
		ht: i
	}
}

function se()
{
	return new te(
	{
		duration: [1e4, 5e3],
		C: [.6, 0],
		p: [5, 20],
		angle: [Rt - .5, 1],
		v: [.1, .5],
		k: [60, 0],
		m: [
			[b],
			[C],
			[k]
		]
	})
}

function oe()
{
	return new te(
	{
		duration: [500, 1e3],
		p: [1, 10],
		angle: [Math.PI, -.5],
		v: [0, 0],
		frequency: 2,
		k: [3, 0],
		C: [.5, 0],
		m: [
			[p, w, v],
			[w, v, y],
			[p, w, v]
		]
	})
}

function ae(t, e)
{
	return new te(
	{ ...t,
		duration: [500, 1e3],
		p: [1, 10],
		angle: [Rt - .2, .4],
		v: [0, 0],
		frequency: 2,
		k: [-2, 0],
		m: e
	})
}

function re()
{
	return oe().extend(
	{
		frequency: .5,
		m: [
			[R, S, q],
			[S, q, A],
			[R, q]
		]
	})
}

function le(t)
{
	return ae(t.bounds(), [
		[p, w, v],
		[w, v, y],
		[p, v, x]
	]).extend(
	{
		frequency: 0
	})
}
let he = new AudioContext;
const ue = -12,
	ce = [-.8, 1, .8, .8, -.8, -.8, -1],
	fe = [ue, -10, -9, -7, -4, -5, -1, 0, 0, 2, 3, 5, 8, 7, 11, 12];
let ge = new GainNode(he,
{
	gain: 0
});

function me(t = 3, e = 2)
{
	let n = new ConvolverNode(he,
		{}),
		i = he.sampleRate,
		s = i * t,
		o = he.createBuffer(2, s, i),
		a = o.getChannelData(0),
		r = o.getChannelData(1);
	for (let l = 0; l < s; l++) a[l] = (2 * Math.random() - 1) * Math.pow(1 - l / s, e), r[l] = (2 * Math.random() - 1) * Math.pow(1 - l / s, e);
	return n.buffer = o, n
}

function de()
{
	let t = new GainNode(he,
	{
		gain: 1
	});
	t.connect(ge);
	let e = new GainNode(he,
	{
		gain: 0
	});
	e.connect(t);
	let n = new BiquadFilterNode(he,
	{
		type: "lowpass",
		frequency: 500
	});
	n.connect(e);
	let i = new OscillatorNode(he);
	return i.connect(n),
	{
		gain: e,
		ut: i,
		filter: n,
		volume: t,
		play(t, n)
		{
			e.gain.setValueAtTime(.2, t), i.frequency.setValueAtTime(n, t)
		},
		start()
		{
			this.ut.start(), this.ct()
		},
		ct()
		{
			t.gain.linearRampToValueAtTime(.5, he.currentTime + 1)
		},
		ft()
		{
			t.gain.linearRampToValueAtTime(0, he.currentTime + 1)
		}
	}
}

function pe(t = 1, e = 1)
{
	let n = de();
	n.ut.setPeriodicWave(he.createPeriodicWave(ce, ce));
	let i = me(t, e);
	return i.connect(n.gain), n.filter.connect(i), n.filter.type = "highpass", n.filter.frequency.value = 200, n
}

function we(t, e = 0, n)
{
	let i = he.currentTime;
	! function s()
	{
		let o = new OscillatorNode(he);
		o.start(i);
		for (let r = 0; r < t.length; r += 2)
		{
			let s = t[r],
				o = .25 / (t[r + 1] / 4),
				l = (a = s + e, 440 * Math.pow(Math.pow(2, 1 / 12), a));
			n.play(i, l, o), i += o
		}
		var a;
		o.stop(i), o.onended = () =>
		{
			s()
		}
	}()
}
ge.connect(he.destination);
let ve = !1;

function ye(t = 4, e = [1, 2, 4, 8], n = fe)
{
	let i = t,
		s = [];
	for (; i > 0;)
	{
		let t = Ot(e),
			o = Ot(n),
			a = 1 / t;
		i - a < 0 || (i -= a, s.push(o, t))
	}
	return s
}
let xe = {
	gt: function()
	{
		let t = de();
		return t.filter.type = "lowpass", t.filter.frequency.value = 80, t.ut.frequency.value = 150, t.play = e =>
		{
			t.ut.frequency.setValueAtTime(150, e), t.gain.gain.setValueAtTime(1, e), t.filter.frequency.setValueAtTime(80, e), t.ut.frequency.exponentialRampToValueAtTime(.001, e + .5), t.gain.gain.exponentialRampToValueAtTime(.001, e + .5), t.filter.frequency.linearRampToValueAtTime(.001, e + .5)
		}, t
	}(),
	dt: pe(6, 1),
	wt: function()
	{
		let t = de(),
			e = me(3, 1);
		return e.connect(t.gain), t.filter.connect(e), t.ut.type = "sawtooth", t.play = (e, n) =>
		{
			t.ut.frequency.setValueAtTime(n, e), t.gain.gain.setValueAtTime(.25, e), t.gain.gain.setTargetAtTime(0, e + .05, .2)
		}, t
	}(),
	vt: pe(3, .25),
	yt: pe(3, 1),
	xt: pe()
};
let be = [xe.gt, xe.wt],
	Ce = [xe.xt, xe.vt, xe.yt];

function ke()
{
	if (0 === game.level && xe.dt.start(), 1 === game.level && xe.wt.start(), 2 === game.level && xe.gt.start(), 9 === game.level)
	{
		for (let t of be) t.ft();
		for (let t of Ce) t.start()
	}
	else
		for (let t of be) t.ct()
}
class Me extends ne
{
	rt(t)
	{
		let e = this.object.T,
			n = t.T;
		Xe(t, e, this.object), Xe(this.object, n, t)
	}
}
class Re extends ne
{
	constructor(t, e)
	{
		super(t), this.duration = e, this.h = 0
	}
	V(t)
	{
		(this.h += t) >= this.duration && game.ot(this.object)
	}
}
class Se extends ne
{
	constructor(t, e)
	{
		super(t), this.step = e
	}
	W()
	{
		this.object.y > 0 || (Yt(this.object.x, this.object.x + this.step, 200, ((t, e) =>
		{
			this.object.x = t, this.object.$ = 2 * Math.sin(e * Math.PI), 1 === e && this.object.k >= 100 && (ln = 50)
		})), (this.step < 0 && this.object.x < 0 || this.step > 0 && this.object.x > game.bt.width) && game.ot(this.object))
	}
}
class qe extends ne
{
	constructor()
	{
		super(...arguments), this.Ct = 1
	}
	rt(t)
	{
		Xe(t, this.Ct, this.object)
	}
}
class Ae extends ne
{
	constructor()
	{
		super(...arguments), this.N = Z, this.et = 3, this.Ct = 1, this.K = ae(
		{
			x: 0,
			y: 0,
			w: 0,
			g: 0
		}, [
			[D, h],
			[h]
		]).extend(
		{
			k: [10, 30],
			p: [10, 30],
			frequency: 0
		})
	}
	W()
	{
		var t;
		this.K.extend(this.object.L()), null == (t = this.K) || t.B(1), Xe(this.object, 1, this.object)
	}
}
class Be extends ne
{
	constructor(t, e)
	{
		super(t), this.mask = e, this.N = J, this.K = ae(
		{
			x: 0,
			y: 0,
			w: 0,
			g: 0
		}, [
			[D, h],
			[h]
		]).extend(
		{
			k: [10, 30],
			p: [10, 30],
			frequency: 0
		})
	}
	nt(t)
	{
		t.kt && t.kt.is(this.mask) && (Xe(this.object, -t.Ct, this.object), t.Ct = 0, this.K.extend(this.object.bounds()).B(4))
	}
}
class $e extends ne
{
	V()
	{
		let t, e = this.object,
			n = 100;
		for (let r of game.Mt)
			if (r.is(this.object.O))
			{
				let o = (i = e, s = r, Math.hypot(s.x - i.x, s.y - i.y));
				o < n && (t = r, n = o)
			}
		var i, s, o, a;
		if (t)
		{
			let n = (o = e.q, a = e.A, Math.atan2(a, o)),
				i = n + ($t(e, t.L()) - n) / 20,
				s = Math.hypot(e.q, e.A),
				[r, l] = Bt(i);
			e.q = r * s, e.A = l * s
		}
	}
}
class Ne extends ne
{
	constructor(t, e, n)
	{
		super(t), this.create = e, this.Rt = n, this.St = 0, this.qt = 0
	}
	At(t)
	{}
	V(t)
	{
		if ((this.St += t) > this.Rt)
		{
			this.St = 0, this.qt++;
			let t = this.create();
			game.Bt(t, this.object.x, this.object.y), this.At(t)
		}
	}
}
const Oe = class extends ne
{
	constructor()
	{
		super(...arguments), this.$t = !1, this.Nt = void 0, this.rt = () => this.$t = !0, this.J = () =>
		{
			var t, e;
			this.Nt = (t = Oe.Ot)[e = this.object.groupId] || (t[e] = {
				total: 0,
				Tt: 0
			}), this.Nt.total++
		}
	}
	_()
	{
		this.$t && this.Nt.Tt++, --this.Nt.total || (this.Nt.Tt ? game.Dt = At(game.Dt + 1, 0, 10) : game.Dt = 0)
	}
};
let Te = Oe;
Te.Ot = {};
class De extends ne
{
	constructor()
	{
		super(...arguments), this.N = Q
	}
	nt(t)
	{
		t.Ct > 0 && (t.Ct = 0)
	}
}
class je extends ne
{
	constructor()
	{
		super(...arguments), this.jt = 10
	}
	W()
	{
		return this.jt-- <= 0 && this.object.Z(this), !0
	}
}
class Fe extends ne
{
	rt(t)
	{
		for (let e = 0; e < 3; e++)
		{
			let e = Ie();
			e.A = -200, e.q = Tt(20) - 10, e.y = At(50 + Tt(100), 0, game.bt.Ft - 10), e.x = t.x + Tt(50) - 25, game.Bt(e)
		}
	}
}

function He()
{
	let t = new ee;
	return t.N = l, t.k = 100, t.tags = 8, t
}

function Ee()
{
	let t = new ee;
	return t.N = g, t.tags = 16, t.O = 3, t.k = 100, t.K = oe(), t.C = .1, t.H = !0, t.I = !0, t.X(new qe(t)), t
}

function Ie()
{
	let t = Ee();
	return t.N = lt, t.K.frequency = .8, t.K.m = [
		[ut, ht, ct, ft],
		[ut, ht, ct, gt],
		[ht, ct, mt],
		[ft, gt, mt],
		[X]
	], t
}

function Pe()
{
	let t = new ee;
	return t.N = e, t.tags = 5, t.O = 2, t.T = t.D = 1, t.U = 1e3, t.P.push(new Se(t, 16)), t.P.push(new Me(t)), t
}

function Ue()
{
	let t = Pe();
	return t.N = bt, t.T = t.D = 3, t.U = 1500, t
}

function Ge()
{
	let t = new ee;
	return t.N = Ot([i, Ct, s, o]), t.C = .8, t.k = 75, t.x = game.bt.width, t.tags = 3, t.T = t.D = 1, t.U = 600, t.X(new Se(t, -16)), t.F = .75, t.j = 5, t
}

function Le()
{
	let t = Ge();
	return t.T = t.D = 2, t
}

function Ve()
{
	let t = Ge();
	return t.N = a, t.U = 300, t.T = t.D = 2, t
}

function We()
{
	let t = Ge();
	return t.N = Y, t.U = 200, t.j = 5, t.F = 0, t
}

function ze()
{
	let t = Ge();
	t.N = O, t.T = t.D = 4, t.j = 10;
	let e = t.Y(Se),
		n = !1,
		i = t.X();
	return i.et = 3, i.W = () =>
	{
		n = !n, e.step = n ? 0 : -16, t.N = n ? _ : O
	}, i.nt = t =>
	{
		var e;
		if (n && (null == (e = t.kt) ? void 0 : e.is(16)) && t.kt.q > 0)
		{
			t.Ct = 0;
			let e = function()
			{
				let t = new ee;
				return t.N = U, t.tags = 16, t.O = 33, t.T = 1, t.I = !0, t.H = !0, t.X(new qe(t)), t.X(new Re(t, 3e3)), t.C = .9, t.K = re(), t
			}();
			e.q = t.kt.q *= -1, e.A = t.kt.A *= -.25, e.k = t.kt.k, game.Bt(e, t.kt.x - e.N[2] - 1, t.kt.y)
		}
	}, t.P.reverse(), t
}

function Ke()
{
	let t = new ee;
	return t.N = it, t.tags = 2, t.T = t.D = 3, t.j = 10, t.X(new Re(t, 3e4)), t.X(new Ne(t, (() => Ot([Ge, Le, Ve])()), 3e3)), t.K = ae(t.bounds(), [
		[st, ot, at],
		[ot, at],
		[at]
	]).extend(
	{
		frequency: .2
	}), t
}

function Xe(t, e, n)
{
	let i = {
		Ct: e,
		kt: n
	};
	t.nt(i), t.T = At(t.T - i.Ct, 0, t.D), t.T || Ye(t, n)
}

function Ye(t, e)
{
	var n;
	let i = {
		object: t,
		Ht: e,
		j: t.j
	};
	if (t.is(1))
	{
		let e = t.L();
		se().extend(e).B(2 + Tt(3)).remove(), t.it(i);
		for (let t of game.Et) null == (n = t.it) || n.call(t, i);
		Dt() <= t.F && game.Bt(He(), e.x, e.y), game.It(i.j)
	}
	game.ot(t)
}
let Je = 0,
	Qe = 1;
const Ze = [Ge, Ve, function()
	{
		let t = Ge();
		t.N = r, t.U = 600, t.T = t.D = 3, t.j = 10;
		let e = new ne(t);
		return e.et = 5, e.W = () =>
		{
			for (let e of game.Mt) e.is(2) && Xe(e, -1, t);
			ae(t.bounds(), [
				[R, S, q],
				[S, q, A],
				[R, q]
			]).B(10).remove()
		}, t.X(e), t
	}, function()
	{
		let t = Ge();
		return t.N = m, t.U = 1e3, t.T = t.D = 10, t.j = 25, t
	}, function()
	{
		let t = Ge();
		return t.N = j, t.U = 500, t.T = t.D = 15, t.X(new Ne(t, We, 2e3)), t.j = 100, t
	}, function()
	{
		let t = Ge();
		t.N = et, t.U = 500, t.T = t.D = 5;
		let e = t.X(),
			n = t.Y(Se),
			i = new Be(t, 16),
			s = !1,
			o = n.step;
		return e.et = 5, e.W = () =>
		{
			s = !s, s ? t.X(i) : t.Z(i), t.N = s ? nt : et, n.step = s ? 0 : o
		}, t.j = 20, t
	}, ze, function()
	{
		let t = Ge();
		t.N = M, t.U = 1e3, t.T = t.D = 5, t.j = 15;
		let e = t.X(),
			n = !1,
			i = 0;
		return e.W = () =>
		{
			n = i++ % 4 > 1, t.N = n ? T : M, e.N = n ? Q : void 0
		}, e.nt = t =>
		{
			n && (t.Ct = Math.min(0, t.Ct))
		}, t
	}, function()
	{
		let t = Ge();
		return t.N = B, t.T = t.D = 15, t.j = 10, t.X(new Ne(t, Ke, 3e3)), t
	}, function()
	{
		let t = Ge();
		t.N = $, t.U = 5e3, t.T = t.D = 100, t.P = [], t.k = 1e3, t.K = re().extend(
		{
			frequency: .2,
			angle: [Rt, .5],
			w: t.N[2],
			g: t.N[3]
		});
		let e = 1,
			n = new Se(t, -32),
			i = new Ne(t, ze, 2e3),
			s = new Be(t, 16),
			o = new De(t),
			a = new ne(t);
		return t.X(n), t.X(a), a.nt = (
		{
			Ct: a
		}) =>
		{
			let r = t.T - a <= 0;
			if (1 === e && r) e = 2, t.X(i), t.X(s), t.X(o), n.step *= -1;
			else if (3 === e && r)
			{
				xe.gt.ct(), e = 4, t.T = t.D, t.N = N, t.U = t.G = 1e3, n.step /= 2;
				let i = 0;
				t.X().V = t =>
				{
					(i += t) > 300 && (i = 0, game.Bt(He(), Tt(game.bt.width), game.bt.Ft))
				}
			}
		}, i.At = () =>
		{
			i.qt >= 5 && (e = 3, t.Z(s), t.Z(o), t.Z(i), n.step *= -1)
		}, t
	}, We, Ge, Le],
	_e = {
		10: () => Tt(500),
		0: () => Tt(200),
		12: () => Tt(200),
		11: () => -Tt(500)
	},
	tn = [4, 0, 98, 4, 0, 98, 2, 0, 1, 1, 98, 2, 0, 1, 1, 4, 0, 99, 2, 1, 4, 0, 98, 3, 1, 4, 0, 98, 8, 0, 2, 1, 98, 1, 3, 99, 1, 2, 98, 4, 12, 98, 2, 12, 1, 2, 98, 2, 1, 1, 2, 98, 4, 0, 2, 12, 2, 1, 1, 2, 99, 1, 7, 98, 4, 0, 3, 12, 98, 1, 7, 1, 2, 1, 98, 2, 1, 1, 2, 1, 7, 98, 8, 0, 98, 1, 7, 1, 3, 1, 7, 99, 1, 10, 98, 3, 10, 98, 7, 10, 1, 4, 99, 4, 12, 98, 1, 5, 98, 4, 12, 1, 3, 2, 1, 98, 4, 12, 1, 5, 98, 2, 5, 1, 2, 98, 1, 8, 99, 20, 11, 1, 5, 20, 11, 1, 5, 20, 11, 98, 20, 11, 1, 5, 20, 11, 1, 5, 20, 11, 98, 3, 3, 99, 10, 12, 1, 2, 10, 12, 1, 2, 98, 10, 12, 1, 8, 1, 7, 98, 5, 12, 3, 1, 3, 5, 98, 1, 3, 1, 8, 1, 3, 99, 1, 0, 98, 2, 6, 98, 2, 1, 98, 10, 6, 98, 10, 6, 2, 2, 10, 6, 98, 2, 6, 1, 7, 1, 3, 1, 2, 98, 2, 6, 1, 7, 1, 3, 1, 8, 99, 1, 9, 99];
let en = 0,
	nn = 0;

function sn()
{
	return !game.Mt.some((t => t.is(2)))
}
let on = {
	Et: [],
	items: [],
	selectedIndex: 0
};

function an(t)
{
	on.selectedIndex = At(on.selectedIndex + t, 0, on.items.length - 1)
}

function rn()
{
	let t = function(t)
		{
			let e = (t = [...t]).length;
			for (; e;)
			{
				let n = Tt(e--);
				[t[e], t[n]] = [t[n], t[e]]
			}
			return t
		}(on.Et.filter((t => game.Pt(t)))),
		e = t.filter((t => 1 !== t.Ut));
	return t.filter((t => 1 === t.Ut)).slice(0, 1).concat(e.slice(0, 2)).map((t => (
	{
		name: t.name,
		description: t.description,
		lt: 1 === t.Ut ? 200 + Tt(100) : 75 + Tt(100),
		ht()
		{
			Nt(on.Et, t), game.Gt(t)
		}
	})))
}
let ln = 0,
	hn = qt(0, 150);

function un(t, e, n, i, s, o)
{
	let a = t - 4 * i / 2;
	for (let r = 0; r < i; r++) Pt(r < n ? s : o, a + 4 * r, e)
}
let cn = {
		tags: 0,
		name: "Streak",
		description: "",
		Lt: t => t.X(new Te(t))
	},
	fn = {
		tags: 1,
		name: "Bouncing",
		description: "Spells bounce",
		Lt(t)
		{
			t.X(new Re(t, 3e3)), t.I = !1, t.v = .5
		}
	},
	gn = {
		tags: 2,
		Vt: 2,
		Ut: 1,
		name: "Doubleshot",
		description: "Cast 2 spells",
		Wt()
		{
			game.Kt.zt = 2
		}
	},
	mn = {
		tags: 8,
		Ut: 1,
		name: "Hunter",
		description: "Spells seek targets",
		Lt(t)
		{
			t.X(new $e(t))
		}
	},
	dn = {
		tags: 0,
		name: "Weightless",
		description: "Spells are not affected by gravity",
		Lt(t)
		{
			t.k = 0, t.C = 0, t.v = 1
		}
	};
class pn extends ne
{
	rt(t)
	{
		t.k < 1e3 && Yt(t.x, t.x + 16, 200, (e => t.x = e))
	}
}
let wn = {
		tags: 0,
		name: "Knockback",
		description: "Spells knock backwards",
		Lt(t)
		{
			t.X(new pn(t))
		}
	},
	vn = {
		tags: 0,
		Xt: 1,
		name: "Ceiling",
		description: "Adds a ceiling",
		Wt()
		{
			game.bt.Ft = 48
		}
	};
class yn extends ne
{
	constructor()
	{
		super(...arguments), this.split = !1
	}
	V()
	{
		if (!this.split && this.object.A < 0)
		{
			this.split = !0;
			let t = this.object,
				e = Ee(),
				n = Ee();
			e.x = n.x = t.x, e.y = n.y = t.y, e.q = n.q = t.q, e.A = n.A = t.A, e.q -= 20, n.q += 20, e.groupId = n.groupId = t.groupId, game.Lt(e, !0), game.Lt(n, !0), game.Bt(e), game.Bt(n)
		}
	}
}
let xn = {
		tags: 2,
		Vt: 2,
		Ut: 1,
		name: "Rain",
		description: "Spells split when they drop",
		Yt: !1,
		Lt(t)
		{
			t.X(new yn(t))
		}
	},
	bn = {
		tags: 0,
		name: "Drunkard",
		description: "2x damage, wobbly aim",
		Lt(t)
		{
			t.q += Tt(100) - 50, t.A += Tt(100) - 50, t.Y(qe).Ct *= 2
		}
	},
	Cn = {
		tags: 0,
		name: "Seer",
		description: "Spells pass through the dead",
		Lt(t)
		{
			t.O = 2
		}
	},
	kn = {
		tags: 0,
		name: "Tearstone",
		description: "2x damage when < half HP",
		Lt(t)
		{
			game.Jt.T < game.Jt.D / 2 && (t.Y(qe).Ct *= 3)
		}
	},
	Mn = {
		tags: 0,
		name: "Impatience",
		description: "Resurrection recharges 2x faster",
		Wt()
		{
			game.Zt.Qt /= 2
		}
	},
	Rn = {
		tags: 64,
		name: "Bleed",
		description: "Inflicts bleed on hits",
		Lt(t)
		{
			t.N = G, t.K.extend(
			{
				m: [
					[W, V, L],
					[z, W, V],
					[W, V, L]
				],
				frequency: 5,
				angle: [Mt, 0],
				k: [20, 50]
			}), t.X().rt = t =>
			{
				t.X(new Ae(t))
			}
		}
	},
	Sn = {
		tags: 0,
		name: "Allegiance",
		description: "Summon your honour guard after resurrections",
		_t()
		{
			for (let t = 0; t < 3; t++)
			{
				let e = Ue();
				e.U = 200, game.Bt(e, -15 * t, 0)
			}
		}
	},
	qn = {
		tags: 0,
		name: "Salvage",
		description: "Corpses become souls at the end of levels",
		te()
		{
			let t = game.Mt.filter((t => t.is(8)));
			for (let e of t)
			{
				let t = se().extend(
				{ ...e.L(),
					m: [
						[g]
					],
					duration: [100, 1e3]
				});
				t.B(5), t.remove(), game.ot(e), game.It(5)
			}
		}
	},
	An = {
		tags: 0,
		Ut: 1,
		name: "Studious",
		description: "Rituals are 50% cheaper",
		ee()
		{
			for (let t of on.items) t.lt = t.lt / 2 | 0
		}
	},
	Bn = {
		tags: 0,
		Ut: 1,
		name: "Electrodynamics",
		description: "Lightning strikes after hits",
		Lt(t)
		{
			t.X(new Fe(t))
		}
	},
	$n = {
		tags: 0,
		name: "Chilly",
		description: "10% chance to freeze enemies",
		Lt(t)
		{
			Dt() <= .1 && (t.K.m = [
				[dt, pt, wt]
			], t.N = K, t.Y(qe).Ct = 0, t.X().rt = t =>
			{
				t.k < 1e3 && t.X(new je(t), 0)
			})
		}
	},
	Nn = {
		tags: 0,
		name: "Giants",
		description: "20% chance to resurrect giant skeletons",
		ne(t)
		{
			Dt() < .2 && (game.ot(t), game.Bt(Ue(), t.x, t.y))
		}
	},
	On = {
		tags: 0,
		name: "Avarice",
		description: "+1 soul for each corpse you resurrect",
		ne()
		{
			game.It(1)
		}
	},
	Tn = {
		tags: 0,
		name: "Hardened",
		description: "Unead have +1 HP*",
		ne(t)
		{
			t.T = t.D += 1
		}
	},
	Dn = function()
	{
		let t = new ee;
		return t.x = 5, t.tags = 36, t.N = n, t.O = 2, t.U = 1e3, t.T = t.D = 5, t.K = le(t), t.rt = e =>
		{
			Xe(t, e.T), Ye(e), t.T <= 0 && (window.location = window.location)
		}, t
	}();
Dn.N = l;
let jn = new class
	{
		constructor(t)
		{
			this.bt = {
				width: 400,
				height: 200,
				floor: 0,
				Ft: 200
			}, this.Mt = [], this.Jt = void 0, this.Et = [], this.state = 0, this.j = 0, this.Dt = 0, this.level = 0, this.ie = [], this.Kt = {
				se: 0,
				oe: 15,
				ae: 180,
				zt: 1,
				re: .1,
				le: 3,
				he: 3,
				ue: 1e3,
				ce: 0
			}, this.Zt = {
				Qt: 1e4,
				tt: 1e4
			}, this.Jt = t, this.Bt(t), window.game = this
		}
		Bt(t, e = t.x, n = t.y)
		{
			t.x = e, t.y = n, this.Mt.push(t)
		}
		ot(t)
		{
			var e;
			null == (e = t.K) || e.remove();
			for (let n of Array.from(t.P)) t.Z(n);
			Nt(this.Mt, t)
		}
		fe()
		{
			return this.Dt / 10
		}
		It(t)
		{
			this.j += t + t * this.fe()
		}
		Gt(t)
		{
			var e;
			this.Et.push(t), null == (e = t.Wt) || e.call(t)
		}
		Pt(t)
		{
			if (t.Vt)
				for (let e of this.Et)
					if (t.Vt & e.tags) return !1;
			if (t.Xt)
			{
				for (let e of this.Et)
					if (t.Xt & e.tags) return !0;
				return !1
			}
			return !0
		}
		update(t)
		{
			this.ge(t), this.me(t), this.de(t), this.pe(t), this.we(t)
		}
		ge(t)
		{
			game.Zt.tt += t, game.Jt.K.frequency = game.Zt.tt >= game.Zt.Qt ? .1 : 0
		}
		me(t)
		{
			this.Kt.he < this.Kt.le && (this.Kt.ce += t, this.Kt.ce > this.Kt.ue && (this.Kt.he += 1, this.Kt.ce = 0))
		}
		we(t)
		{
			var e;
			for (let n of this.Et) null == (e = n.V) || e.call(n, t)
		}
		de(t)
		{
			for (let e of this.Mt) e.update(t)
		}
		pe(t)
		{
			let e = t / 1e3;
			for (let s of this.Mt) s.x += s.q * e, s.y += s.A * e;
			for (let s of this.Mt)
			{
				let t = this.bt.floor,
					n = this.bt.Ft - s.N[3];
				(s.y < t || s.y > n) && (s.y = At(s.y, t, n), Math.abs(s.A) >= 10 && s.st(), s.A *= -s.v), s.y !== t && s.y !== n || (s.q *= 1 - s.C), s.k && s.y > 0 && (s.A -= s.k * e)
			}
			for (let s of this.Mt)
				for (let t of this.Mt) s.O & t.tags && (n = s.bounds(), i = t.bounds(), n.x < i.x + i.w && n.y < i.y + i.g && n.x + n.w > i.x && n.y + n.g > i.y && s.rt(t));
			var n, i
		}
		ve()
		{
			var t;
			for (let e of game.Et) null == (t = e.ve) || t.call(e)
		}
		te()
		{
			var t;
			for (let e of game.Et) null == (t = e.te) || t.call(e)
		}
		ee()
		{
			var t;
			for (let e of game.Et) null == (t = e.ee) || t.call(e)
		}
		Lt(t, e = !1)
		{
			var n;
			for (let i of game.Et) e && 0 == i.Yt || null == (n = i.Lt) || n.call(i, t)
		}
		ye()
		{
			let
			{
				Kt: t,
				Jt: e
			} = this, n = e.L(), [i, s] = Bt(t.se);
			return {
				x: n.x + i * t.oe,
				y: n.y + s * t.oe
			}
		}
	}(Dn),
	Fn = !1;
const Hn = ["", "It was over.", "Norman was able to study peacefully.", "But he knew that eventually, they'd be back.", "THE END"];
onpointerup = () =>
{
	0 === jn.state && (function()
		{
			if (ve) return;
			ve = !0;
			let t = [0, .5, 2, .5, 3, .5, 2, .5];
			we([0, 2, -24e3, 2], -36, xe.gt), we([0, 8, ue, 8], -36, xe.dt), we(function()
			{
				let t = ye(4, [8, 4], [fe, ue, ue, ue, ue, ue].flat());
				return [t, t, t, ye(4, [8, 4], fe)].flat()
			}(), -24, xe.wt);
			{
				let e = [0, 2, 2, 2, 3, 2, 2, 2],
					n = [e, e, e, [0, 2, 2, 2, 3, 2, 5, 2]].flat();
				we(n, 0, xe.vt), we(n, -12, xe.yt), we(t, -36, xe.xt)
			}
			let e = he.currentTime;
			ge.gain.linearRampToValueAtTime(.5, e + 5), ke()
		}(), jn.state = 1, jn.Jt.N = n),
		function()
		{
			let
			{
				Kt: e,
				Jt: i
			} = game;
			if (0 === e.he) return;
			e.he--, i.N = t, clearTimeout(Je), Je = setTimeout((() => i.N = n), 500);
			let s = e.ae,
				o = e.se - e.zt * e.re / 2,
				a = Qe++;
			for (let t = 0; t < e.zt; t++)
			{
				let n = Ee(),
					i = o + t * e.re,
					[r, l] = Bt(i),
					{
						x: h,
						y: u
					} = game.ye();
				n.x = h - n.N[2] / 2, n.y = u - n.N[3] / 2, n.q = r * s, n.A = l * s, n.groupId = a, game.Bt(n), game.Lt(n)
			}
		}()
}, onpointermove = (
{
	clientX: t,
	clientY: e
}) =>
{
	let n = Dn.L(),
		i = function(t, e)
		{
			let n = Ht.getBoundingClientRect(),
				i = (t - n.x) * (Ht.width / n.width) | 0,
				s = (e - n.y) * (Ht.height / n.height) | 0;
			return {
				x: i,
				y: hn.y - s
			}
		}(t, e);
	jn.Kt.se = $t(n, i)
}, onkeydown = (
{
	which: t
}) =>
{
	1 === jn.state ? (32 === t && function()
	{
		var t, e;
		if (game.Zt.tt < game.Zt.Qt) return;
		game.Zt.tt = 0;
		for (let i of game.Et) null == (t = i._t) || t.call(i);
		let n = game.Mt.filter((t => t.is(8)));
		for (let i of n)
		{
			game.ot(i);
			let t = Pe();
			game.Bt(t, i.x, 0), le(t).B(10).remove();
			for (let n of game.Et) null == (e = n.ne) || e.call(n, t)
		}
	}(), 80 === t && (Fn = !Fn)) : 2 === jn.state && (38 === t && an(-1), 40 === t && an(1), 13 === t && function()
	{
		let t = on.items[on.selectedIndex];
		t && t.lt <= game.j && (game.j -= t.lt, Nt(on.items, t), t.ht(), an(on.selectedIndex))
	}())
};
let En = !1,
	In = 0;
jn.Gt(cn), on.Et = [fn, vn, xn, gn, mn, dn, wn, bn, Cn, kn, Mn, Rn, qn, An, Bn, $n, Nn, On, Tn, Sn], jn.ie = ["Norman wasn't a particularly popular necromancer...", "         The other villagers hunted him.", "     Sometimes they even finished the job (@)", "  But like any self-respecting necromancer...", "        Norman just brought himself back."],
	function(t, e, n)
	{
		Ht.width = t, Ht.height = e, (onresize = zt)();
		let i = 0;
		! function t(e = 0)
		{
			var n;
			requestAnimationFrame(t),
				function(t)
				{
					(In += t) > 4e3 && (jn.ie.shift(), In = 0, 0 === jn.state && 0 === jn.ie.length && jn.ie.push("                (Click to begin)"))
				}(n = e - i),
				function(t)
				{
					Et.clearRect(0, 0, Ht.width, Ht.height), Et.save(), ln > 0 && (ln -= t, Et.translate(Tt(2), Tt(2))), Et.translate(hn.x, hn.y),
						function()
						{
							for (let t = 0; t < game.bt.width / 16; t++) Pt(t % 5 ? u : xt, 16 * t, 0), Pt(f, 16 * t, -f[3]), Pt(F, 16 * t, game.bt.Ft)
						}(),
						function()
						{
							for (let t of Zt)
								for (let e of t.u)
								{
									let n = t.m[e.variant];
									Pt(n[e.h / e.duration * n.length | 0], e.x, e.y)
								}
						}(),
						function()
						{
							for (let t of game.Mt)
							{
								if (Pt(t.N, t.x, t.y + t.$), t.Y(je) && Gt(rt, t.x, -t.N[3], t.N[2], t.N[3]), t.D > 1 && t !== game.Jt)
									if (t.D < 10)
									{
										let
										{
											x: e
										} = t.L();
										un(e, -6, t.T, t.D, D, H)
									}
								else Pt(D, t.x, -6), Wt(`${t.T}/${t.D}`, t.x + 6, 0);
								let
								{
									x: e
								} = t;
								for (let n of t.P) n.N && (Pt(n.N, e, -12), e += n.N[2] + 1)
							}
						}(), 1 === game.state && function()
						{
							let
							{
								x: t,
								y: e
							} = game.ye();
							Pt(d, t - d[2] / 2, e - d[3] / 2)
						}(), Et.restore(),
						function()
						{
							if (game.ie.length && Wt(game.ie[0], 75, 50), 0 === game.state) return;
							It(P, 0, 0);
							for (let e = 0; e < game.Jt.D; e++) It(e < game.Jt.T ? D : H, 11 + 4 * e, 0);
							for (let e = 0; e < game.Kt.le; e++) It(e < game.Kt.he ? E : I, 11 + 4 * e, 6);
							let t = 0 | game.j;
							if (t)
							{
								let e = game.fe();
								Wt(`$${t} ${e?`(+${100*e+"%"})`:""}`, Ht.width / 2 - 30, 0)
							}
							if (Wt(`${game.level+1}-10`, Ht.width - 30, 2), 1 === game.state)
							{
								let t = 150,
									e = Ht.height - 12,
									n = At(game.Zt.tt / game.Zt.Qt, 0, 1);
								Gt(tt, t, e, 52 * (1 - n) | 0, 10), Wt("Resurrect", t + 10, e + 2), Wt(1 === n ? " (Space)" : " (" + ((1 - n) * game.Zt.Qt / 1e3 | 0) + "s)"), It(l, t + 1, e + 1)
							}
						}(), 2 === game.state && function()
						{
							Wt("Rituals\n\n", 160, 20);
							let t = on.items[on.selectedIndex];
							for (let e of on.items) Wt(`${e===t?">":" "}${e.name} $${e.lt}\n`);
							Wt("\n" + (null == t ? void 0 : t.description) + "\n")
						}()
				}(n), Fn || (1 === jn.state && function(t)
				{
					var e;
					let n = tn[nn];
					if ((en -= t) > 0);
					else if (98 === n) sn() && nn++;
					else if (99 === n);
					else if (n)
					{
						tn[nn]--;
						let t = tn[nn + 1],
							n = Ze[t]();
						game.Bt(n), en = n.U + ((null == (e = _e[t]) ? void 0 : e.call(_e)) || 0)
					}
					else nn += 2
				}(n), 0 !== jn.state && jn.update(n), function(t)
				{
					Kt = Kt.filter((e =>
					{
						e.h += t;
						let n = At(e.h / e.duration, 0, 1),
							i = e.l(n),
							s = e.t + (e.i - e.t) * i;
						return e.o(s, i), n < 1
					}))
				}(n), function(t)
				{
					for (let e of Zt) e.update(t)
				}(n), 1 === jn.state && 99 === tn[nn] && sn() && (nn >= tn.length - 1 ? (jn.state = 4, jn.ie = Hn) : (jn.te(), game.state = 2, function()
				{
					let t = Math.pow(game.level + 1, 2),
						e = [game.Jt.T < game.Jt.D && ie(10 * game.level, "Heal", "Heal 1*", (() => Xe(game.Jt, -1))), ie(10 * t, "Renew", "+1* max hp", (() =>
						{
							game.Jt.D++, game.Jt.T++
						})), ie(10 * t, "Recharge", "+1 max casts", (() => game.Kt.le++)), ...rn(), ie(0, "Continue", "Begin the next level", (() => (game.state = 1, nn++, game.level++, game.ve(), void ke())))];
					on.items = e.filter((t => t))
				}(), game.ee(), xe.gt.ft())), 2 !== jn.level || En || (jn.Jt.X(new Se(jn.Jt, 0)), jn.Jt.G = 100, jn.Jt.U = 500, En = !0)), i = e
		}(), onfocus = () => i = performance.now()
	}(jn.bt.width, jn.bt.height), new te(
	{
		x: 0,
		y: 0,
		w: game.bt.width,
		g: game.bt.height,
		angle: [0, St],
		duration: [5e3, 1e4],
		p: [1, 3],
		v: [0, 0],
		frequency: .1,
		m: [
			[vt, yt],
			[yt, vt, [26, 52, 1, 1], vt]
		]
	}).B(200);