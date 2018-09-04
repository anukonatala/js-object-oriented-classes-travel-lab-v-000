
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

let eastWest =  ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

class Route{
  
  
  constructor(beginningLocation,endingLocation){
	  this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
}

blocksTravelled(){
  
}

}





