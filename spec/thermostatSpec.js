'use strict';

describe('Thermostat', () => {
  let thermostat;
  
  beforeEach(() => {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', () => {
    expect(thermostat.temperature).toEqual(20);
  });

  it('increases temperature with up function', () => {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });
});
