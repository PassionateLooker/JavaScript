var budgetController = (function () {
    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage=-1;
    };
    Expense.prototype.calcPercentage=function(totalIncome){
        if(totalIncome>0){
            this.percentage=Math.round((this.value/totalIncome)*100);

        }else{
            this.percentage=-1
        }
        
    }
    Expense.prototype.getPercentage=function(){
        return this.percentage;
    }

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    var calculateTotal = function (type) {
        var sum = 0;
        data.allItems[type].forEach(function (cur) {
            sum += cur.value;
        })
        data.totals[type] = sum;

    }

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0

        },
        budget: 0,
        percentage: -1
    }
    return {
        addItem: function (type, des, val) {
            var newItem, ID;
            //create new ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;

            }
            else {
                ID = 0;
            }

            //create new item based on inc or exp 
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            }
            else if (type === 'inc') {

                newItem = new Income(ID, des, val);
            }
            //psuh newitem into the data structure
            data.allItems[type].push(newItem);
            //return new element
            return newItem
        },

        deleteItem:function(type,id){
            var ids,index;
            
            ids=data.allItems[type].map(function(current){
                return current.id;
            });            
            index=ids.indexOf(id)
            if (index!==-1){
                data.allItems[type].splice(index,1)
                
            }
            
        },
        calculatePercentages:function(){
            data.allItems.exp.forEach(function(cur){
                cur.calcPercentage(data.totals.inc);
            })
        },
        getPercentages:function(){
            var allPerc=data.allItems.exp.map(function(cur){
                return cur.getPercentage();
            })
            return allPerc; 
        },

        calculateBudget: function () {
            //calculate total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');

            //calculate the budget: income-expense
            data.budget = data.totals.inc - data.totals.exp

            //calculate the percentage of income that we spent
            if (data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            }
            else {
                data.percentage = -1;
            }


        },
        getBudget: function () {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage

            }
        },
        testing: function () {
            console.log(data);

        }
    }





})();


var UIController = (function () {

    var DOMStrings = {
        inputType: '.add__type',
        descLocator: '.add__description',
        addValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expenseLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        deleteContainer: '.container',
        expPercLabel:'.item__percentage',
        dateLabel:'.budget__title--month'
    };
    var formatNumber=function(number,type){
        var numSplit,int,dec;
        number=Math.abs(number)
        number=number.toFixed(2);
        numSplit=number.split('.');
        int=numSplit[0];
        if(int.length>3){
             int=int.substr(0,int.length-3)+','+int.substr(int.length-3,3);


        }
        dec=numSplit[1];
        return (type==='exp' ? '-': '+')+ ' '+int+'.'+dec;
        

    };
    var nodeListForEach=function(list,callback){
        for(var i=0;i<list.length;i++){
            callback(list[i],i);
        }                
    };
    


    return {
        getinput: function () {
            return {
                type: document.querySelector(DOMStrings.inputType).value,
                description: document.querySelector(DOMStrings.descLocator).value,
                value: parseFloat(document.querySelector(DOMStrings.addValue).value)

            }
        },
        addListItem: function (obj, type) {
            var html, newHtml, element;
            //create HTML string with placeholder text
            if (type === 'inc') {
                element = DOMStrings.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'


            } else if (type === 'exp') {
                element = DOMStrings.expensesContainer;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'

            }

            //replace the placeholder text with some actual text
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(obj.value,type)); 

            //insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);

        },

        deleteListItem:function(selectorID){

            var el=document.getElementById(selectorID);
            el.parentNode.removeChild(el);              
        },

        clearFields: function () {
            var fields, fieldsArr;
            fields = document.querySelectorAll(DOMStrings.descLocator + ', ' + DOMStrings.addValue);
            fieldsArr = Array.prototype.slice.call(fields);
            fieldsArr.forEach(function (current, index, array) {
                current.value = '';

            });
            fieldsArr[0].focus();


        },
        displayBudget: function (obj) {

            var type;
            obj.budget>0 ? type='inc' : type='exp';
            document.querySelector(DOMStrings.budgetLabel).textContent = formatNumber(obj.budget,type);
            document.querySelector(DOMStrings.incomeLabel).textContent = formatNumber(obj.totalInc,'inc');
            document.querySelector(DOMStrings.expenseLabel).textContent = formatNumber(obj.totalExp,'exp');
            // document.querySelector(DOMStrings.percentageLabel).textContent = obj.percentage;

            if(obj.percentage>0){
                document.querySelector(DOMStrings.percentageLabel).textContent=obj.percentage+'%'
            }
            else{
                document.querySelector(DOMStrings.percentageLabel).textContent='---'
            }   
             
        },
        displayPercentages:function(percentages){
            var fields
            fields=document.querySelectorAll(DOMStrings.expPercLabel);
            nodeListForEach(fields,function(current,index){
                if (percentages[index]>0){
                    current.textContent=percentages[index]+'%';
                }else{
                    current.textContent='---';
                }
                
            })

            
            

        },
        displayMonth:function(){
            var now,year,month,months;
            now=new Date(); 
            months=['January','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec'];

            year=now.getFullYear();
            month=now.getMonth();
            document.querySelector(DOMStrings.dateLabel).textContent=months[month]+' '+year;



        },
        changedType:function(){
            var fields;
            fields=document.querySelectorAll(
                DOMStrings.inputType+','+
                DOMStrings.descLocator+','+
                DOMStrings.addValue);
            nodeListForEach(fields,function(cur){
                cur.classList.toggle('red-focus');
            })

            document.querySelector(DOMStrings.inputBtn).classList.toggle('red')

        },
        

        getDOMStrings: function () {

            return DOMStrings;
        }
    }
})();


var controller = (function (budgetCtrl, UICtrl) {
    var setupEventListeners= function () {
            var DOM = UICtrl.getDOMStrings();
            document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddButton);
            document.addEventListener('keypress', function (event) {
                if (event.keyCode === 13) {
                    ctrlAddButton();
                }
            });

            document.querySelector(DOM.deleteContainer).addEventListener('click',ctrlDeleteItem);
            document.querySelector(DOM.inputType).addEventListener('change',UICtrl.changedType);

        };

        var updateBudget = function () {

            // calculate the budget

            budgetCtrl.calculateBudget();
            // return the budget
            var budget = budgetCtrl.getBudget();

            // display the budget on the UI
            UICtrl.displayBudget(budget);
        };

        var updatePercentages=function(){
            // calcualte the percentages
            budgetCtrl.calculatePercentages();
            // read percentages from budget controller
            var perc=budgetCtrl.getPercentages();
            // update the UI with new percentages
            UICtrl.displayPercentages(perc);
            
        }        

        var ctrlAddButton = function () {
            var input, newItem;
            //get the field input data 
            input = UICtrl.getinput();


            if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
                //add item to the budget controller
                newItem = budgetCtrl.addItem(input.type, input.description, input.value);

                // add item to the UI
                UICtrl.addListItem(newItem, input.type)

                // clear the fields
                UICtrl.clearFields();

                // calculate and update the budget
                updateBudget();

                // calculate and update the percentages
                updatePercentages();

            }
        }

        var ctrlDeleteItem =function(event){
            var itemID,splitID,type,id;
            itemID=event.target.parentNode.parentNode.parentNode.parentNode.id;
            if(itemID){
                splitID=itemID.split('-');
                ID=parseInt(splitID[1]);
                type=splitID[0];

                //1. delete the item from the data structure
                budgetCtrl.deleteItem(type,ID);
                //2. delete the item from the UI
                UICtrl.deleteListItem(itemID);
                //3. update and show new budget
                updateBudget();
                // calculate and update the percentages
                updatePercentages();
            }
        }


        return {
            init: function () {
                UICtrl.displayMonth();
                UICtrl.displayBudget({
                    
                    budget: 0,
                    totalInc: 0,
                    totalExp: 0,
                    percentage: -1
    
                })
                setupEventListeners();
            }
        }
    
})(budgetController, UIController);

controller.init();