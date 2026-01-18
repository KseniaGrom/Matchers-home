import sortByHealth from '../sortByHealth.js';

describe('sortByHealth', () => {
  test('should sort heroes by health in descending order', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const expected = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];

    expect(sortByHealth(heroes)).toEqual(expected);
  });

  test('should return new array (not modify original)', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
    ];

    const sorted = sortByHealth(heroes);
    
    expect(heroes).toEqual([
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
    ]);
    
    expect(sorted).not.toBe(heroes);
  });

  test('should handle empty array', () => {
    expect(sortByHealth([])).toEqual([]);
  });

  test('should handle single hero', () => {
    const heroes = [{ name: 'маг', health: 100 }];
    expect(sortByHealth(heroes)).toEqual([{ name: 'маг', health: 100 }]);
  });

  test('should sort correctly with equal health', () => {
    const heroes = [
      { name: 'герой1', health: 50 },
      { name: 'герой2', health: 50 },
      { name: 'герой3', health: 30 },
    ];

    const result = sortByHealth(heroes);
    
    expect(result[0].health).toBe(50);
    expect(result[1].health).toBe(50);
    expect(result[2].health).toBe(30);
  });

  test('should sort negative health values', () => {
    const heroes = [
      { name: 'герой1', health: -10 },
      { name: 'герой2', health: 0 },
      { name: 'герой3', health: 50 },
    ];

    const expected = [
      { name: 'герой3', health: 50 },
      { name: 'герой2', health: 0 },
      { name: 'герой1', health: -10 },
    ];

    expect(sortByHealth(heroes)).toEqual(expected);
  });
});