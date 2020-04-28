var budgetController=(function(){
    var x=23;
    var add=function(a){
        return x+a;

    }
    return function(b){
        console.log(add(b));
        
    }
})
