import getHealthStatus from '../health.js';

describe('getHealthStatus', () => {
  test('health > 50 = healthy', () => {
    expect(getHealthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
    expect(getHealthStatus({ health: 51 })).toBe('healthy');
  });

  test('health 15-50 = wounded', () => {
    expect(getHealthStatus({ health: 50 })).toBe('wounded');
    expect(getHealthStatus({ health: 15 })).toBe('wounded');
  });

  test('health < 15 = critical', () => {
    expect(getHealthStatus({ health: 14 })).toBe('critical');
    expect(getHealthStatus({ health: 0 })).toBe('critical');
  });
});