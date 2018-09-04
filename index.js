
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
  constructor(beginningLocation,endingLocation){
	  this.beginningLocation = new Location();
    this.endingLocation = new Location();
  }
}

class Location{
  constructor(horizontal, vertical){
    this.horizontal = horizontal;
    this.vertical = vertical;
  }
}





