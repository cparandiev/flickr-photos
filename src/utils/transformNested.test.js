import { map, inc } from 'ramda';
import transfromNested from './transformNested';

describe('Transform Nested', () => {
  it('should transform nested array in object', () => {
    const testObj = {
      arr: [1, 2, 3]
    }

    expect(transfromNested(['arr'], map(inc), testObj)).toEqual({ arr: [2, 3, 4] });
  });

  it('should transform nested object in object', () => {
    const testObj = {
      prop: {
        val: 1
      }
    }
    
    expect(transfromNested(['prop', 'val'], inc, testObj)).toEqual({ prop: { val: 2} });
  });

  it('should transform nested array in object in object', () => {
    const testObj = {
      prop: {
        arr: [1, 2, 3]
      }
    }
    
    expect(transfromNested(['prop', 'arr'], map(inc), testObj)).toEqual({ prop: { arr: [2, 3, 4]} });
  });
});