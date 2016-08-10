import BigNumber from 'bignumber.js';

import { outBlock, outAccountInfo, outAddress, outDate, outNumber, outPeers, outReceipt, outTransaction } from './output';
import { isAddress, isBigNumber, isInstanceOf } from '../../../test/types';

describe('api/format/output', () => {
  const address = '0x63cf90d3f0410092fc0fca41846f596223979195';
  const checksum = '0x63Cf90D3f0410092FC0fca41846f596223979195';

  describe('outAccountInfo', () => {
    it('returns meta objects parsed', () => {
      expect(outAccountInfo(
        { '0x63cf90d3f0410092fc0fca41846f596223979195': {
          name: 'name', uuid: 'uuid', meta: '{"name":"456"}' }
        }
      )).to.deep.equal({
        '0x63Cf90D3f0410092FC0fca41846f596223979195': {
          name: 'name', uuid: 'uuid', meta: { name: '456' }
        }
      });
    });
  });

  describe('outAddress', () => {
    it('retuns the address as checksummed', () => {
      expect(outAddress(address)).to.equal(checksum);
    });

    it('retuns the checksum as checksummed', () => {
      expect(outAddress(checksum)).to.equal(checksum);
    });
  });

  describe('outBlock', () => {
    ['author', 'miner'].forEach((input) => {
      it(`formats ${input} address as address`, () => {
        const block = {};
        block[input] = address;
        const formatted = outBlock(block)[input];

        expect(isAddress(formatted)).to.be.true;
        expect(formatted).to.equal(checksum);
      });
    });

    ['difficulty', 'gasLimit', 'gasUsed', 'number', 'nonce', 'totalDifficulty'].forEach((input) => {
      it(`formats ${input} number as hexnumber`, () => {
        const block = {};
        block[input] = 0x123;
        const formatted = outBlock(block)[input];

        expect(isInstanceOf(formatted, BigNumber)).to.be.true;
        expect(formatted.toString(16)).to.equal('123');
      });
    });

    ['timestamp'].forEach((input) => {
      it(`formats ${input} number as Date`, () => {
        const block = {};
        block[input] = 0x57513668;
        const formatted = outBlock(block)[input];

        expect(isInstanceOf(formatted, Date)).to.be.true;
        expect(formatted.getTime()).to.equal(1464940136000);
      });
    });

    it('ignores and passes through unknown keys', () => {
      expect(outBlock({ someRandom: 'someRandom' })).to.deep.equal({ someRandom: 'someRandom' });
    });

    it('formats a block with all the info converted', () => {
      expect(
        outBlock({
          author: address,
          miner: address,
          difficulty: '0x100',
          gasLimit: '0x101',
          gasUsed: '0x102',
          number: '0x103',
          nonce: '0x104',
          totalDifficulty: '0x105',
          timestamp: '0x57513668',
          extraData: 'someExtraStuffInHere'
        })
      ).to.deep.equal({
        author: checksum,
        miner: checksum,
        difficulty: new BigNumber('0x100'),
        gasLimit: new BigNumber('0x101'),
        gasUsed: new BigNumber('0x102'),
        number: new BigNumber('0x103'),
        nonce: new BigNumber('0x104'),
        totalDifficulty: new BigNumber('0x105'),
        timestamp: new Date('2016-06-03T07:48:56.000Z'),
        extraData: 'someExtraStuffInHere'
      });
    });
  });

  describe('outDate', () => {
    it('converts a second date in unix timestamp', () => {
      expect(outDate(0x57513668)).to.deep.equal(new Date('2016-06-03T07:48:56.000Z'));
    });
  });

  describe('outNumber', () => {
    it('returns a BigNumber equalling the value', () => {
      const bn = outNumber('0x123456');

      expect(isBigNumber(bn)).to.be.true;
      expect(bn.eq(0x123456)).to.be.true;
    });

    it('assumes 0 when ivalid input', () => {
      expect(outNumber().eq(0)).to.be.true;
    });
  });

  describe('outPeers', () => {
    it('converts all internal numbers to BigNumbers', () => {
      expect(outPeers({ active: 789, connected: '456', max: 0x7b })).to.deep.equal({
        active: new BigNumber(789),
        connected: new BigNumber(456),
        max: new BigNumber(123)
      });
    });
  });

  describe('outReceipt', () => {
    ['contractAddress'].forEach((input) => {
      it(`formats ${input} address as address`, () => {
        const block = {};
        block[input] = address;
        const formatted = outReceipt(block)[input];

        expect(isAddress(formatted)).to.be.true;
        expect(formatted).to.equal(checksum);
      });
    });

    ['blockNumber', 'cumulativeGasUsed', 'cumulativeGasUsed', 'gasUsed', 'transactionIndex'].forEach((input) => {
      it(`formats ${input} number as hexnumber`, () => {
        const block = {};
        block[input] = 0x123;
        const formatted = outReceipt(block)[input];

        expect(isInstanceOf(formatted, BigNumber)).to.be.true;
        expect(formatted.toString(16)).to.equal('123');
      });
    });

    it('ignores and passes through unknown keys', () => {
      expect(outReceipt({ someRandom: 'someRandom' })).to.deep.equal({ someRandom: 'someRandom' });
    });

    it('formats a receipt with all the info converted', () => {
      expect(
        outReceipt({
          contractAddress: address,
          blockNumber: '0x100',
          cumulativeGasUsed: '0x101',
          gasUsed: '0x102',
          transactionIndex: '0x103',
          extraData: 'someExtraStuffInHere'
        })
      ).to.deep.equal({
        contractAddress: checksum,
        blockNumber: new BigNumber('0x100'),
        cumulativeGasUsed: new BigNumber('0x101'),
        gasUsed: new BigNumber('0x102'),
        transactionIndex: new BigNumber('0x103'),
        extraData: 'someExtraStuffInHere'
      });
    });
  });

  describe('outTransaction', () => {
    ['from', 'to'].forEach((input) => {
      it(`formats ${input} address as address`, () => {
        const block = {};
        block[input] = address;
        const formatted = outTransaction(block)[input];

        expect(isAddress(formatted)).to.be.true;
        expect(formatted).to.equal(checksum);
      });
    });

    ['blockNumber', 'gasPrice', 'gas', 'nonce', 'transactionIndex', 'value'].forEach((input) => {
      it(`formats ${input} number as hexnumber`, () => {
        const block = {};
        block[input] = 0x123;
        const formatted = outTransaction(block)[input];

        expect(isInstanceOf(formatted, BigNumber)).to.be.true;
        expect(formatted.toString(16)).to.equal('123');
      });
    });

    it('ignores and passes through unknown keys', () => {
      expect(outTransaction({ someRandom: 'someRandom' })).to.deep.equal({ someRandom: 'someRandom' });
    });

    it('formats a transaction with all the info converted', () => {
      expect(
        outTransaction({
          from: address,
          to: address,
          blockNumber: '0x100',
          gasPrice: '0x101',
          gas: '0x102',
          nonce: '0x103',
          transactionIndex: '0x104',
          value: '0x105',
          extraData: 'someExtraStuffInHere'
        })
      ).to.deep.equal({
        from: checksum,
        to: checksum,
        blockNumber: new BigNumber('0x100'),
        gasPrice: new BigNumber('0x101'),
        gas: new BigNumber('0x102'),
        nonce: new BigNumber('0x103'),
        transactionIndex: new BigNumber('0x104'),
        value: new BigNumber('0x105'),
        extraData: 'someExtraStuffInHere'
      });
    });
  });
});
