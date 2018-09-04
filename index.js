
class Driver{
	constructor(name,startDate){
	  this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year){
    console.log(this.startDate.getFullYear());
    console.log(year - this.startDate.getFullYear());
    return year - this.startDate.getFullYear() - 1;
  }

}

class Route{
  constructor(beginningLocation,startDate){
	  this.name = name;
    this.startDate = new Date(startDate);
  }
}



