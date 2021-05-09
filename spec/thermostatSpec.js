'use strict';

describe('Thermostat', () => {
  let thermostat;
  
  beforeEach(() => {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', () => {
    expect(thermostat.temperature).toEqual(20);
  });

  it('increases the temperature with up function', () => {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('decreases the temperature with down function', () => {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });
  
  it('has a minimum temperature of 10 degrees', () => {
    for (let i = 0; i < 11; i++){
    thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });
});
