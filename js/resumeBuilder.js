/*
This is empty on purpose! Your code to build the resume will go here.
 */
 //$("#main").append("Eddie");
 //var awesomeThoughts = "I am Eddie and I am AWESOME!";
 //var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
 //$("#main").append(funThoughts);
 var bio ={
	 "name":"Eddie",
	 "role":"Web Dev",
	 "contact":{
		 "email":"eddie@hottymail.com",
		 "mobile":"(888)-888-1222"
	 },
	 "picURL":"images/fry.jpg",
	 "welcome_message":"Hi, welcome to my online resume. I'm hoping to become a Web Developer. Thank you Udacity!!",
	 "skills":["C","Java","Python"]
	 };
	 
 


 var formattedName = HTMLheaderName.replace("%data%",bio.name);
 var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
 var formattedSkills = HTMLskills.replace("%data%",bio.skills);
 var formattedPic = HTMLbioPic.replace("%data%",bio.picURL);
 var formattedWelcome= HTMLwelcomeMsg.replace("%data%",bio.welcome_message);
 
 var formattedMobile=HTMLmobile.replace("%data%",bio.contact.mobile);
 var formattedEmail=HTMLemail.replace("%data%",bio.contact.email);

 $("#header").append(formattedName);
 $("#header").append(formattedRole);
 $("#header").append(formattedSkills);
 $("#header").append(formattedPic);
 $("#header").append(formattedWelcome); 

  var work={
 	"date":"Jan 1999-Dec 2000"
 };

 //using dot notation
 work.employer="McTronics";
 work.title="Engineer";
 work.loc="Seattle,WA";
 work.description="Chief Engineer and master of the code. Found and squished 1000 bugs.";
 
 var formattedWorkEmployer=HTMLworkEmployer.replace("%data%",work.employer);
 var formattedWorkDates=HTMLworkDates.replace("%data%",work.date);
 var formattedWorkTitle=HTMLworkTitle.replace("%data%",work.title);
 var formattedWorkLoc=HTMLworkLocation.replace("%data%",work.loc);
 var formattedWorkDescrip=HTMLworkDescription.replace("%data%",work.description);
 
 $("#header").append(formattedWorkEmployer);
 $("#header").append(formattedWorkDates);
 $("#header").append(formattedWorkTitle);
 $("#header").append(formattedWorkLoc);
 $("#header").append(formattedWorkDescrip);
 
 $("#header").append(formattedMobile);
 $("#header").append(formattedEmail);
 
 var school={};

 //using bracket notation
 school["name"]="Mount Si High School";
 school["degree"]="High School Diploma";
 school["dates"]="January 1996-June 1999";
 school["location"]="Snoqualmie, WA";
 school["major"]="General Studies";
 
 formattedSchoolName=HTMLschoolName.replace("%data%",school["name"]);
 formattedSchoolDegree=HTMLschoolDegree.replace("%data%",school["degree"]);
 formattedSchoolDates=HTMLschoolDates.replace("%data%",school["dates"]);
 formattedSchoolLocation=HTMLschoolLocation.replace("%data%",school["location"]);
 formattedSchoolMajor=HTMLschoolMajor.replace("%data%",school["major"]);
 
 $("#header").append(formattedSchoolName);
 $("#header").append(formattedSchoolDegree);
 $("#header").append(formattedSchoolDates);
 $("#header").append(formattedSchoolLocation);
 $("#header").append(formattedSchoolMajor);
 

 
 