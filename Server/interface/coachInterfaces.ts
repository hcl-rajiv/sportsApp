module Coach.Interface{	
	export interface ICoachProfile {	
	//Profile attribute below		
	firstName:string;
	lastName:string;
	sport:string;
	email:string;
	phoneNumber:number;
	dateOfBirth:Date;
	gender:string;
	photo?:ImageData;
	location:{};
	address:{address1:string,city:string,state:string,pin:number};	
	comments ?:[
		{
	coachingExperiance?:string;
	highlights?:string;
	sessionPlan?:string;
	oneLinerBiopic?:string;
        }]
		
	}
	
    export interface ICoachSchedule {	
	//schedule attribute below
	schedule?:[{}]		
	}		
	
}