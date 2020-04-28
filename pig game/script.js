// console.log('hello world?asas?')

// var firstname='Daya';
// var age=28;
// var fullage=true;
// var job;
// console.log(firstname);
// console.log(age);
// console.log(fullage);
// console.log(job);
// job='teacher';
// alert(job);
// var last='what is his last name';
// console.log('last name is '+last)
// console.log(typeof(last))
/*sddsad
sdasd
asd
as
das
d*/

// var johnMass,johnHeight,markMass,markHeight;
// johnMass=60;
// johnHeight=140;
// markMass=46;
// markHeight=123;
// var bmiMark=markMass/(markHeight*markHeight);
// var bmiJohn=johnMass/(johnHeight*johnHeight);
// var checkHighBMI=bmiJohn>bmiMark
// console.log('is johns bmi greater than marks'+checkHighBMI+bmiJohn+' '+bmiMark)
// married='no';
// if (married==='yes'){

// 	console.log('hey married')
// }
// else {
// 	console.log('very soon')
// 	console.
	
// }


// var job='doctor';
// job=prompt('what does you do')

// switch (job){
// 	case 'teacher':
// 		console.log('its teacher');
// 		break;
// 	case 'doctor':
// 		console.log('doctor he is');
// 		break;

	

// }

// var johnStatus,markStatus,markHeight=150,markAge=41,johnHeight=160,johnAge=23
// johnStatus=johnHeight+(johnAge*5)
// markStatus=markHeight+(markAge*5)
// dayaAge=25
// dayaHeight=165
// var dayaStatus=dayaHeight+(dayaAge*5),r

// if (johnStatus>markStatus && johnStatus>dayaStatus){
// 	console.log('john wins '+johnStatus)
// }
		
// else if (markStatus>johnStatus && markStatus>dayaStatus){
// 	console.log('mark wins '+markStatus)
// }
// else if (dayaStatus>markStatus && dayaStatus>johnStatus){
// 	console.log('daya wins '+dayaStatus)
// }

// function calcage(year){
// 	var age=2020-year;
// 	return age;
// }
// // var myAge=calcage(1995)
// // console.log(myAge)

// function retirement(name,yearOf){
// 	var age=calcage(yearOf);
// 	var retired=60-age
// if (retired>0){
// 	console.log(name+' will retire in '+retired+' years')
// }
// else{
// 	console.log(name+' is already retired')
// }
// }
		
// retirement('shonno',1950)
// retirement('daya',2016)
		
// var age=8;
// age>=18?console.log('drinks beer'):console.log('drinks juice')

// var names=new Array('sdsada',20,30,10,20)
// console.log(names)
// names.push('ggg')
// names.unshift(00)
// names.pop()
// names.shift()
// var a=names.indexOf(20)
// console.log(a)

// var john=((50+65+89)/3)
// var mark=((50+65+89)/3)
// if (john>mark){
// 	console.log('John\'s team wins with score '+john);

// }
// else if(john===mark){
// 	console.log('Its a draw '+john+'---'+mark)
// }
// else{
// 	console.log('Mark\'s team wins with score '+mark);
// }	

// var dict={
// name:'daya',
// id:1264037
// };
	
// console.log(dict.id);
// var daya=new Object()
// daya.name='daysagar'
// daya.id=1264037
// daya.lastname='salian'
// daya.job='TCS'
// console.log(daya)

// console.log(25+22,33)

// var daya={
//     name:'dayasagar',
//     lastname:'salian',
//     dob:1995,
//     job:'QA',
//     ismarried:false,
//     family:['ramesh','deepa','girija','chidvila'],
//     calculateAge:function(){
//         this.age=2020-this.dob
//     }
// };

// console.log(a=daya.calculateAge())

// var whatYouDo=function(name,job){
//     switch(job){
//         case 'teacher':
//             return name+' teaches to code';
//         case 'musician':
//             return name+' teaches music';
//         default:
//             return name+ ' does something else';

//     }

// }
// console.log(whatYouDo('daya','musician'))


// for (var i=0;i<10;i++){
//     console.log(i)
// }

// var persons=[1919,2020,2019,1995]
// var empty=[]
// var fullAges=[]

// function printFullAge(year)
// {
//     for (var i =0;i<year.length;i++){
//         empty[i]=2020-year[i]
//     }
//     for (var i =0;i<year.length;i++)
//     {
//         if (empty[i]<18)
//         {
//             console.log(year[i],'is teen',empty[i]);
//             fullAges.push(false)
//         }
//         else
//         {
//             console.log(year[i],'is older',empty[i]);
//             fullAges.push(true)
//         }
//     }
//     return fullAges  
// }

// var full1=printFullAge(persons)
// var full2=printFullAge([1582,2011,1995,2000])
// console.log(full1,full2);

// var tip={
//     actualBill:[124,26,99,150,205],
//     calTip:function() {
//         this.tipBill=[];
//         this.finalValues=[];
//         for (var i=0;i<this.actualBill.length;i++){
//             var percentage;
//             var bill=this.actualBill[i];
//             if (bill<50){
//                 percentage=.2;
//                 // var b =this.actualBill[i]*20/100
//                 // tipBill.push(this.actualBill[i]+b)
//             }
//             else if (bill>=50 && bill<=200){
//                 percentage=.15;
//                 // var b = this.actualBill[i]*15/100
//                 // tipBill.push(this.actualBill[i]+b)
//             }
//             else{
//                 percentage=.1;
//                 // var b =this.actualBill[i]*10/100
//                 // tipBill.push(this.actualBill[i]+b)
//             }
//             this.tipBill[i]=bill*percentage;
//             this.finalValues[i]=bill+bill*percentage;
//         }
//     }
// }
// tip.calTip();
// console.log(tip.finalValues);
// console.log('After tip',tipBill);

// var actualBill=[124,26,99,150,205]
// var tipBill=[]
// function tipCalculator(bill){
//     for (var i=0;i<actualBill.length;i++){
//         if (actualBill[i]<50){
//             var b =actualBill[i]*20/100
//             tipBill.push(actualBill[i]+b)
//         }
//         else if (actualBill[i]>=50 && actualBill[i]<=200){
            
//             var b =actualBill[i]*15/100
//             tipBill.push(actualBill[i]+b)
//         }
//         else{
//             var b =actualBill[i]*10/100
//             tipBill.push(actualBill[i]+b)
//         }
//     }
//     console.log('Actual',actualBill);
//     console.log('Tipped',tipBill);
// }
// tipCalculator(actualBill)

    
// var john={
//     name:'john',
//     mass:92,
//     height:1.95,
//     bmi:function(){
//         return this.mass/(this.height*this.height)
//     }
// };

// var mark={
//     name:'mark',
//     mass:93,
//     height:1.95,
//     bmi:function(){
//         return this.mass/(this.height*this.height)
//     }
// };
// if (john.bmi()>mark.bmi()){
//     console.log('john wins',john.bmi());
// }
// else if (john.bmi()<mark.bmi()){
//     console.log('mark wins',mark.bmi());

// }
// else{
//     console.log('its a draw','MARK:',mark.bmi(),'JOHN:',john.bmi());
// }


// var mark={
//     name:'mark',
//     mass:93,
//     height:1.95,
//     bmi:function(){
//         return this.mass/(this.height*this.height)
//     }
// };
// if (john.bmi()>mark.bmi()){
//     console.log('john wins',john.bmi());
// }
// else if (john.bmi()<mark.bmi()){
//     console.log('mark wins',mark.bmi());

// }
// else{
//     console.log('its a draw','MARK:',mark.bmi(),'JOHN:',john.bmi());
// }

// if john.bmi()

// var actualBill=[12,301,898,245,1]
// function tipCalculator(bill){
//     for(var i=0;i<bill.length;i++){
//         var percentage,tippedBill=[],avg;
        
//         if (bill[i]<100){
//             percentage=.2;
//         }
//         else if(bill[i]>100 && bill[i]<300){
//             percentage=.1;
//         }
//         else{
//             percentage=.25;
//         }
//         tippedBill[i]=actualBill[i]+actualBill[i]*percentage;

    
        

    
//     }
//     console.log(tippedBill);
    
    
// }


// tipCalculator(actualBill)

// var john={
//     name:'john mathews',
//     bill:[49,58,152,600],
//     caltip:function(){
//         this.tip=[];
//         this.finalValues=[];
//         for(var i=0;i<this.bill.length;i++){
//             var percentage;
//             var bill=this.bill[i];
//             if(bill<50){
//                 percentage=.10;
//             }
//             else if(bill>100 && bill<300){
//                 percentage=.15;
//             }
//             else{
//                 percentage=.1
//             }
//             this.tip[i]=bill*percentage;
//             this.finalValues[i]=bill+bill*percentage;
//         }
//     }
// }

// var mark={
//     name:'mark dathews',
//     bill:[49,58,142,900],
//     caltip:function(){
//         this.tip=[];
//         this.finalValues=[];
//         for(var i=0;i<this.bill.length;i++){
//             var percentage;
//             var bill=this.bill[i];
//             if(bill<50){
//                 percentage=.10;
//             }
//             else if(bill>100 && bill<300){
//                 percentage=.15;
//             }
//             else{
//                 percentage=.1
//             }
//             this.tip[i]=bill*percentage;
//             this.finalValues[i]=bill+bill*percentage;
//         }
//     }
// }

// john.caltip()
// mark.caltip()
// // console.log(john.finalValues);
// function tipSum(tipValues){
//     var sum=0;
//     for (var i =0;i<tipValues.length;i++){
//         sum=sum+tipValues[i]

//     }
//     return sum/tipValues.length
// }
// // console.log(tipSum(john.fi));
// // console.log(john);
// john.avg=tipSum(john.tip)
// mark.avg=tipSum(mark.tip)
// // console.log(john,mark);
// if (john.avg>mark.avg){
//     console.log(john.name,'payed higher tip with',john.avg);
    
// }
// else{
//     console.log(mark.name,'payed higher tip with',mark.avg);
// }
console.log(typeof(c));
var c=5.0
console.log(typeof(c));






















    
