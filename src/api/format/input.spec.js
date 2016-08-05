import BigNumber from 'bignumber.js';

import { inAddress, inBlockNumber, inData, inFilter, inHex, inNumber10, inNumber16, inOptions } from './input';
import { isAddress } from '../../../test/types';

describe('api/format/input', () => {
  const address = '0x63cf90d3f0410092fc0fca41846f596223979195';

  describe('inAddress', () => {
    const address = '63cf90d3f0410092fc0fca41846f596223979195';

    it('adds the leading 0x as required', () => {
      expect(inAddress(address)).to.equal(`0x${address}`);
    });

    it('returns verified addresses as-is', () => {
      expect(inAddress(`0x${address}`)).to.equal(`0x${address}`);
    });

    it('returns lowercase equivalents', () => {
      expect(inAddress(address.toUpperCase())).to.equal(`0x${address}`);
    });

    it('returns 0x on null addresses', () => {
      expect(inAddress()).to.equal('0x');
    });
  });

  describe('inBlockNumber()', () => {
    it('returns earliest as-is', () => {
      expect(inBlockNumber('earliest')).to.equal('earliest');
    });

    it('returns latest as-is', () => {
      expect(inBlockNumber('latest')).to.equal('latest');
    });

    it('returns pending as-is', () => {
      expect(inBlockNumber('pending')).to.equal('pending');
    });

    it('formats existing BigNumber into hex', () => {
      expect(inBlockNumber(new BigNumber(0x123456))).to.equal('0x123456');
    });

    it('formats hex strings into hex', () => {
      expect(inBlockNumber('0x123456')).to.equal('0x123456');
    });

    it('formats numbers into hex', () => {
      expect(inBlockNumber(0x123456)).to.equal('0x123456');
    });
  });

  describe('inData', () => {
    it('formats to hex', () => {
      expect(inData('123456')).to.equal('0x123456');
    });
  });

  describe('inHex', () => {
    it('leaves leading 0x as-is', () => {
      expect(inHex('0x123456')).to.equal('0x123456');
    });

    it('adds a leading 0x', () => {
      expect(inHex('123456')).to.equal('0x123456');
    });

    it('returns uppercase as lowercase (leading 0x)', () => {
      expect(inHex('0xABCDEF')).to.equal('0xabcdef');
    });

    it('returns uppercase as lowercase (no leading 0x)', () => {
      expect(inHex('ABCDEF')).to.equal('0xabcdef');
    });

    it('handles empty & null', () => {
      expect(inHex()).to.equal('0x');
      expect(inHex('')).to.equal('0x');
    });
  });

  describe('inFilter', () => {
    ['address'].forEach((input) => {
      it(`formats ${input} address as address`, () => {
        const block = {};
        block[input] = address;
        const formatted = inFilter(block)[input];

        expect(isAddress(formatted)).to.be.true;
        expect(formatted).to.equal(address);
      });
    });

    ['fromBlock', 'toBlock'].forEach((input) => {
      it(`formats ${input} number as blockNumber`, () => {
        const block = {};
        block[input] = 0x123;
        const formatted = inFilter(block)[input];

        expect(formatted).to.equal('0x123');
      });
    });

    it('ignores and passes through unknown keys', () => {
      expect(inFilter({ someRandom: 'someRandom' })).to.deep.equal({ someRandom: 'someRandom' });
    });

    it('formats an filter options object with relevant entries converted', () => {
      expect(
        inFilter({
          address: address,
          fromBlock: 'latest',
          toBlock: 0x101,
          extraData: 'someExtraStuffInHere'
        })
      ).to.deep.equal({
        address: address,
        fromBlock: 'latest',
        toBlock: '0x101',
        extraData: 'someExtraStuffInHere'
      });
    });
  });

  describe('inNumber10()', () => {
    it('formats existing BigNumber into number', () => {
      expect(inNumber10(new BigNumber(123))).to.equal(123);
    });

    it('formats hex strings into decimal', () => {
      expect(inNumber10('0x0a')).to.equal(10);
    });

    it('formats numbers into number', () => {
      expect(inNumber10(123)).to.equal(123);
    });

    it('formats undefined into 0', () => {
      expect(inNumber10()).to.equal(0);
    });
  });

  describe('inNumber16()', () => {
    it('formats existing BigNumber into hex', () => {
      expect(inNumber16(new BigNumber(0x123456))).to.equal('0x123456');
    });

    it('formats hex strings into hex', () => {
      expect(inNumber16('0x123456')).to.equal('0x123456');
    });

    it('formats numbers into hex', () => {
      expect(inNumber16(0x123456)).to.equal('0x123456');
    });

    it('formats undefined into 0', () => {
      expect(inNumber16()).to.equal('0x0');
    });
  });

  describe('inOptions', () => {
    ['data'].forEach((input) => {
      it(`converts ${input} to hex data`, () => {
        const block = {};
        block[input] = '1234';
        const formatted = inData(block[input]);

        expect(formatted).to.equal('0x1234');
      });
    });

    ['from', 'to'].forEach((input) => {
      it(`formats ${input} address as address`, () => {
        const block = {};
        block[input] = address;
        const formatted = inOptions(block)[input];

        expect(isAddress(formatted)).to.be.true;
        expect(formatted).to.equal(address);
      });
    });

    ['gas', 'gasPrice', 'value', 'nonce'].forEach((input) => {
      it(`formats ${input} number as hexnumber`, () => {
        const block = {};
        block[input] = 0x123;
        const formatted = inOptions(block)[input];

        expect(formatted).to.equal('0x123');
      });
    });

    it('ignores and passes through unknown keys', () => {
      expect(inOptions({ someRandom: 'someRandom' })).to.deep.equal({ someRandom: 'someRandom' });
    });

    it('formats an options object with relevant entries converted', () => {
      expect(
        inOptions({
          from: address,
          to: address,
          gas: new BigNumber('0x100'),
          gasPrice: 0x101,
          value: 258,
          nonce: '0x104',
          data: '0123456789',
          extraData: 'someExtraStuffInHere'
        })
      ).to.deep.equal({
        from: address,
        to: address,
        gas: '0x100',
        gasPrice: '0x101',
        value: '0x102',
        nonce: '0x104',
        data: '0x0123456789',
        extraData: 'someExtraStuffInHere'
      });
    });
  });
});
