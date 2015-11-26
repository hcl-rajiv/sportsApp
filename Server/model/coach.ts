///<reference path="../interface/coachInterfaces.ts"/>
module Coach.Model {
	export class coach implements Coach.Interface.ICoachProfile,Coach.Interface.ICoachSchedule{
		
	firstName:string;
	lastName:string;
	sport:string;
	email:string;
	phoneNumber:number;
	dateOfBirth:Date;
	gender:string;
	photo:ImageData;
	location:{};
	address:{address1:string,city:string,state:string,pin:number};	
	comments :[
		{
	coachingExperiance?:string;
	highlights?:string;
	sessionPlan?:string;
	oneLinerBiopic?:string;
        }]
	schedule:[{}]
		
		constructor(profile?:Coach.Interface.ICoachProfile,schedule?:Coach.Interface.ICoachSchedule){
			if(profile){
				this.firstName =profile.firstName;
				this.lastName = profile.lastName;
				this.sport = profile.sport;
				this.email = profile.email;
				this.phoneNumber = profile.phoneNumber;
				this.dateOfBirth = profile.dateOfBirth;
				this.gender = profile.gender;
				this.photo = profile.photo;
				this.location = profile.location;
				this.address = profile.address;
				this.comments = profile.comments
			}//end profile
			 
			if(schedule){
				this.schedule = schedule.schedule;				
			}		
		}//end constructor
	
	//todo :- any dalidation on the class to be added here
		
	}}
