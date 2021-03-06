import ClassChooser from './ClassChooser';
import ParentRepository from './ParentRepository';

export default class HydrationRepository extends ParentRepository {
  constructor(fetchedData, user, dataClass) {
    super(fetchedData, user, dataClass)
    this.numOunces;
  }

  addNewHydrationData(date, ounces) {
    let hydrationData = {
    "userID": this.userID,
    "date": date,
    "numOunces": ounces
    }
    this.addNewDataObject(hydrationData)
  }
}
