import { CityType } from './02_02';

let city: CityType  

beforeEach( () => {
    city = {
        title: "Minsk",
        houses: [{buildedAt: 2012},{},{}],
        govermentBuildings: ["school", "bank", "ambulance"],
        citizensNumber: 100000
    }
})

test ("test city should contains 3 hjoses", () => {
    expect(city.houses.length).toBe(3);

    expect(city.houses[0].buildedAt).toBe(2012);
    expect(city.citizensNumber).toBe(100000);

    expect(city.govermentBuildings.length).toBe(3);
    expect(city.govermentBuildings[0]).toBe("school");
    expect(city.govermentBuildings[1]).toBe("bank");
    expect(city.govermentBuildings[2]).toBe("ambulance");


})