//function WhileYouWait(daysUntilMyBirthday)

// var daysUntilMyBirthday =60;
var msg = " days until my birthday."
var long = " Such a long time!"
var short = " Almost my birthday!!"
var five = " DAYS UNTIL MY BIRTHDAY!"

for(var daysUntilMyBirthday = 60; daysUntilMyBirthday >= 0; daysUntilMyBirthday--)

if(daysUntilMyBirthday > 30)
{
    console.log(daysUntilMyBirthday + msg + long);
}
else if(daysUntilMyBirthday <= 30 && daysUntilMyBirthday !==0 && daysUntilMyBirthday >5)
{
    console.log(daysUntilMyBirthday + msg + short);
}
else if(daysUntilMyBirthday <=5 && daysUntilMyBirthday > 0)
{
    console.log(daysUntilMyBirthday +five);
}
else if(daysUntilMyBirthday == 0);
{
    console.log("Happy birthday!");
}
