// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import buildFormatLocale from '.'

describe('is locale > buildFormatLocale', function () {
  it('returns an object', function () {
    assert(typeof buildFormatLocale() === 'object')
  })

  describe('formatters property', function () {
    it('is an object', function () {
      assert(typeof buildFormatLocale().formatters === 'object')
    })

    describe('MMM', function () {
      it('returns the correct string for January', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(Date.UTC(2016, 0))) === 'jan')
      })

      it('returns the correct string for February', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(Date.UTC(2016, 1))) === 'feb')
      })

      it('returns the correct string for March', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(Date.UTC(2016, 2))) === 'mar')
      })

      it('returns the correct string for April', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(Date.UTC(2015, 3))) === 'apr')
      })

      it('returns the correct string for May', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(Date.UTC(2016, 4))) === 'maí')
      })

      it('returns the correct string for June', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(Date.UTC(2016, 5))) === 'jún')
      })

      it('returns the correct string for July', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(Date.UTC(2016, 6))) === 'júl')
      })

      it('returns the correct string for August', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(Date.UTC(2016, 7))) === 'ágú')
      })

      it('returns the correct string for September', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(Date.UTC(2016, 8))) === 'sep')
      })

      it('returns the correct string for October', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(Date.UTC(2016, 9))) === 'okt')
      })

      it('returns the correct string for November', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(Date.UTC(2016, 10))) === 'nóv')
      })

      it('returns the correct string for December', function () {
        assert(buildFormatLocale().formatters.MMM(new Date(Date.UTC(2016, 11))) === 'des')
      })
    })

    describe('MMMM', function () {
      it('returns the correct string for January', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(Date.UTC(2016, 0))) === 'janúar')
      })

      it('returns the correct string for February', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(Date.UTC(2016, 1))) === 'febrúar')
      })

      it('returns the correct string for March', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(Date.UTC(2016, 2))) === 'mars')
      })

      it('returns the correct string for April', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(Date.UTC(2015, 3))) === 'apríl')
      })

      it('returns the correct string for May', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(Date.UTC(2016, 4))) === 'maí')
      })

      it('returns the correct string for June', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(Date.UTC(2016, 5))) === 'júní')
      })

      it('returns the correct string for July', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(Date.UTC(2016, 6))) === 'júlí')
      })

      it('returns the correct string for August', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(Date.UTC(2016, 7))) === 'ágúst')
      })

      it('returns the correct string for September', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(Date.UTC(2016, 8))) === 'september')
      })

      it('returns the correct string for October', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(Date.UTC(2016, 9))) === 'október')
      })

      it('returns the correct string for November', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(Date.UTC(2016, 10))) === 'nóvember')
      })

      it('returns the correct string for December', function () {
        assert(buildFormatLocale().formatters.MMMM(new Date(Date.UTC(2016, 11))) === 'desember')
      })
    })

    describe('dd', function () {
      it('returns the correct string for Sunday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(Date.UTC(2016, 1 /* Feb */, 7))) === 'su')
      })

      it('returns the correct string for Monday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(Date.UTC(2016, 1 /* Feb */, 1))) === 'má')
      })

      it('returns the correct string for Tuesday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(Date.UTC(2016, 1 /* Feb */, 2))) === 'þr')
      })

      it('returns the correct string for Wednesday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(Date.UTC(2016, 1 /* Feb */, 3))) === 'mi')
      })

      it('returns the correct string for Thursday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(Date.UTC(2016, 1 /* Feb */, 4))) === 'fi')
      })

      it('returns the correct string for Friday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(Date.UTC(2016, 1 /* Feb */, 5))) === 'fö')
      })

      it('returns the correct string for Saturday', function () {
        assert(buildFormatLocale().formatters.dd(new Date(Date.UTC(2016, 1 /* Feb */, 6))) === 'la')
      })
    })

    describe('ddd', function () {
      it('returns the correct string for Sunday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(Date.UTC(2016, 1 /* Feb */, 7))) === 'sun')
      })

      it('returns the correct string for Monday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(Date.UTC(2016, 1 /* Feb */, 1))) === 'mán')
      })

      it('returns the correct string for Tuesday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(Date.UTC(2016, 1 /* Feb */, 2))) === 'þri')
      })

      it('returns the correct string for Wednesday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(Date.UTC(2016, 1 /* Feb */, 3))) === 'mið')
      })

      it('returns the correct string for Thursday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(Date.UTC(2016, 1 /* Feb */, 4))) === 'fim')
      })

      it('returns the correct string for Friday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(Date.UTC(2016, 1 /* Feb */, 5))) === 'fös')
      })

      it('returns the correct string for Saturday', function () {
        assert(buildFormatLocale().formatters.ddd(new Date(Date.UTC(2016, 1 /* Feb */, 6))) === 'lau')
      })
    })

    describe('dddd', function () {
      it('returns the correct string for Sunday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(Date.UTC(2016, 1 /* Feb */, 7))) === 'sunnudaginn')
      })

      it('returns the correct string for Monday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(Date.UTC(2016, 1 /* Feb */, 1))) === 'mánudaginn')
      })

      it('returns the correct string for Tuesday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(Date.UTC(2016, 1 /* Feb */, 2))) === 'þriðjudaginn')
      })

      it('returns the correct string for Wednesday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(Date.UTC(2016, 1 /* Feb */, 3))) === 'miðvikudaginn')
      })

      it('returns the correct string for Thursday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(Date.UTC(2016, 1 /* Feb */, 4))) === 'fimmtudaginn')
      })

      it('returns the correct string for Friday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(Date.UTC(2016, 1 /* Feb */, 5))) === 'föstudaginn')
      })

      it('returns the correct string for Saturday', function () {
        assert(buildFormatLocale().formatters.dddd(new Date(Date.UTC(2016, 1 /* Feb */, 6))) === 'laugardaginn')
      })
    })

    describe('A', function () {
      it('returns the correct string for 1-11 a.m.', function () {
        assert(buildFormatLocale().formatters.A(new Date(Date.UTC(2016, 1 /* Feb */, 11, 1))) === 'AM')
      })

      it('returns the correct string for 12 a.m.', function () {
        assert(buildFormatLocale().formatters.A(new Date(Date.UTC(2016, 1 /* Feb */, 11, 0))) === 'AM')
      })

      it('returns the correct string for 1-11 p.m.', function () {
        assert(buildFormatLocale().formatters.A(new Date(Date.UTC(2016, 1 /* Feb */, 11, 13))) === 'PM')
      })

      it('returns the correct string for 12 p.m.', function () {
        assert(buildFormatLocale().formatters.A(new Date(Date.UTC(2016, 1 /* Feb */, 11, 12))) === 'PM')
      })
    })

    describe('a', function () {
      it('returns the correct string for 1-11 a.m.', function () {
        assert(buildFormatLocale().formatters.a(new Date(Date.UTC(2016, 1 /* Feb */, 11, 1))) === 'am')
      })

      it('returns the correct string for 12 a.m.', function () {
        assert(buildFormatLocale().formatters.a(new Date(Date.UTC(2016, 1 /* Feb */, 11, 0))) === 'am')
      })

      it('returns the correct string for 1-11 p.m.', function () {
        assert(buildFormatLocale().formatters.a(new Date(Date.UTC(2016, 1 /* Feb */, 11, 13))) === 'pm')
      })

      it('returns the correct string for 12 p.m.', function () {
        assert(buildFormatLocale().formatters.a(new Date(Date.UTC(2016, 1 /* Feb */, 11, 12))) === 'pm')
      })
    })

    describe('aa', function () {
      it('returns the correct string for 1-11 a.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(Date.UTC(2016, 1 /* Feb */, 11, 1))) === 'a.m.')
      })

      it('returns the correct string for 12 a.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(Date.UTC(2016, 1 /* Feb */, 11, 0))) === 'a.m.')
      })

      it('returns the correct string for 1-11 p.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(Date.UTC(2016, 1 /* Feb */, 11, 13))) === 'p.m.')
      })

      it('returns the correct string for 12 p.m.', function () {
        assert(buildFormatLocale().formatters.aa(new Date(Date.UTC(2016, 1 /* Feb */, 11, 12))) === 'p.m.')
      })
    })

    describe('Mo', function () {
      it('returns ordinal result of M formatter', function () {
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 1 }}) === '1')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 2 }}) === '2')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 3 }}) === '3')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 11 }}) === '11')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 101 }}) === '101')
        assert(buildFormatLocale().formatters.Mo(null, {M: function () { return 111 }}) === '111')
      })
    })

    describe('Do', function () {
      it('returns ordinal result of D formatter', function () {
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 1 }}) === '1')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 2 }}) === '2')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 3 }}) === '3')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 11 }}) === '11')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 101 }}) === '101')
        assert(buildFormatLocale().formatters.Do(null, {D: function () { return 111 }}) === '111')
      })
    })

    describe('DDDo', function () {
      it('returns ordinal result of DDD formatter', function () {
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 1 }}) === '1')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 2 }}) === '2')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 3 }}) === '3')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 11 }}) === '11')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 101 }}) === '101')
        assert(buildFormatLocale().formatters.DDDo(null, {DDD: function () { return 111 }}) === '111')
      })
    })

    describe('do', function () {
      it('returns ordinal result of d formatter', function () {
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 1 }}) === '1')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 2 }}) === '2')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 3 }}) === '3')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 11 }}) === '11')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 101 }}) === '101')
        assert(buildFormatLocale().formatters.do(null, {d: function () { return 111 }}) === '111')
      })
    })

    describe('Qo', function () {
      it('returns ordinal result of Q formatter', function () {
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 1 }}) === '1')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 2 }}) === '2')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 3 }}) === '3')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 11 }}) === '11')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 101 }}) === '101')
        assert(buildFormatLocale().formatters.Qo(null, {Q: function () { return 111 }}) === '111')
      })
    })

    describe('Wo', function () {
      it('returns ordinal result of W formatter', function () {
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 1 }}) === '1')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 2 }}) === '2')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 3 }}) === '3')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 11 }}) === '11')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 101 }}) === '101')
        assert(buildFormatLocale().formatters.Wo(null, {W: function () { return 111 }}) === '111')
      })
    })
  })

  describe('formattingTokensRegExp property', function () {
    it('is an instance of RegExp', function () {
      assert(buildFormatLocale().formattingTokensRegExp instanceof RegExp)
    })
  })
})