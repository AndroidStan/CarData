declare type CarData = {
  oil: {
    oilRangeKm: string,
    lastOilChangeKm: string,
    currentCarKm: string
  }
};

let carStateTemplate : CarData = {
  oil:
  {
    oilRangeKm: '',
    lastOilChangeKm: '',
    currentCarKm: ''
  }
}

export default class CarDetails {
  
  carsState : CarData[] = []
  private static instance: CarDetails

  private constructor(){
  }

  initialise(numberOfCars : number){
    for (let i = 0; i < numberOfCars; i++) {
      CarDetails.getInstance().carsState.push(carStateTemplate);
    }
  }

  public static getInstance(): CarDetails {
    if (!CarDetails.instance) {
      CarDetails.instance = new CarDetails();
    }

    return CarDetails.instance;
  }

  setOilRangeKm(text: string, index : number) {
    CarDetails.getInstance().carsState[index].oil.oilRangeKm = text
  }

  setLastOilChangeKm(text: string, index: number) {
    CarDetails.getInstance().carsState[index].oil.lastOilChangeKm = text
  }

  setCurrentCarKm(text: string, index: number) {
    CarDetails.getInstance().carsState[index].oil.currentCarKm = text
  }

  calculateLeftOilKm(index: number) {
    const oilRangeKm = Number(CarDetails.getInstance().carsState[index].oil.oilRangeKm),
          lastOilChangeKm = Number(CarDetails.getInstance().carsState[index].oil.lastOilChangeKm),
          currentCarKm = Number(CarDetails.getInstance().carsState[index].oil.currentCarKm)

    return String (oilRangeKm - ( currentCarKm - lastOilChangeKm) )
  }
}
