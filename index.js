
class Driver{
	constructor(startDate){
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year){
    return year - this.startDate;
  }

}



