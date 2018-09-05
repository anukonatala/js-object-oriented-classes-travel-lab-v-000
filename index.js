
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



  blocksTravelled() {
    let startingHorizontal = eastWest.indexOf(this.beginningLocation.horizontal);
    let endingHorizontal = eastWest.indexOf(this.endingLocation.horizontal);
    let horizontalBlocks;
    if (startingHorizontal > endingHorizontal) {
      horizontalBlocks = startingHorizontal - endingHorizontal;
    } else if (startingHorizontal < endingHorizontal) {
      horizontalBlocks = endingHorizontal - startingHorizontal;
    } else {
      horizontalBlocks = 0;
    }
  let startingVertical = parseInt(this.beginningLocation.vertical);
  let endingVertical = parseInt(this.endingLocation.vertical);
  let verticalBlocks;

  if (startingVertical > endingVertical) {
    verticalBlockscks = startingVertical - endingVertical;
  } else if (endingVertical > startingVertical) {
      verticalBlocks = endingVertical - startingVertical;
  } else {
    verticalBlocks = 0;
  }
  return horizontalBlocks + verticalBlocks;
  }
  
  estimatedTime(isPeakHour) {
    if(isPeakHour === undefined) {
      return this.blocksTravelled()/3;
    } else {
      return this.blocksTravelled()/2;
    }
  }
}





