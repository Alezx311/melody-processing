import { Formatter, Svg, Value } from '../common/constants';

describe.skip('Melody Processing Constants', () => {
  describe('Test Svg', () => {
    it('Values', () => {
      expect(Svg).toBeDefined();
    });
  });

  describe('Test Formatter', () => {
    it('Values', () => {
      expect(Formatter).toBeDefined();
    });
  });

  describe('Test Value', () => {
    it('Values', () => {
      expect(Value).toBeDefined();
    });
  });

  describe('Show', () => {
    it('Svg', () => {
      expect(Svg.values).toBeDefined();
    });

    it('Formatter', () => {
      expect(Formatter.values).toBeDefined();
    });

    it('Value', () => {
      expect(Value.values).toBeDefined();
    });

    it('Total', () => {
      const total = { ...Svg.values, ...Formatter.values, ...Value.values };
      console.log(total);
    });
  });
});
