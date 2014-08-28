var key = document.keys;
var FlagNewNum = false;
var answer = 0;
var operators = ['+', '-', '*', '/'];
var decimalAdded=false;

///////////////////////
function displaynum(Num) 
{
 
if(key.screen.value == "0")
{
key.screen.value = Num;
}
else
{
key.screen.value += Num;
}
}
//////////////////////////

function operation (Op) {
  
  if(Op != '=' && Op !='!' && Op!='@' && Op!='.' && Op!='%')
  {      
   
  
  var inputVal = key.screen.value;  
  var lastChar = inputVal[inputVal.length - 1];
  if(lastChar !='*' && lastChar !='/' && lastChar !='-' && lastChar !='+')
  {
    key.screen.value += Op;
    decimalAdded =false;
  }
    
    
  } 
  else if(Op ==='%')
  {
     var tem =  key.screen.value;
     var pos=0;
    var ans;
    if(key.screen.value===''||key.screen.value==='0')
  {  }
   else
   {
     for(var i=0;i<tem.length;i++)
     {
       if(tem[i]==='+'||tem[i]==='-')
       {pos=i;
                              
       }
       
     }
     ans=eval(tem.substring(0,pos));
     var ansa;
     if(tem[pos]=='+')
     {
       
        ansa = ans *(1 + parseInt(tem.substring(pos+1,tem.length))/100);
            
     key.screen.value=ansa.toFixed(3);
     }
     
     else if(tem[pos]=='-')
     {
        ansa = ans *(1 -  parseInt(tem.substring(pos+1,tem.length))/100);
     key.screen.value=ansa.toFixed(3);
     }
     else
     {
       key.screen.value='';
     }
     
     
   }
  
   decimalAdded=false;
  }
  else if(Op =='!')
  {
    key.screen.value = key.screen.value*-1;
    decimalAdded =false;
  }
  else if(Op =='@')
  {
    var ans2 = Math.sqrt(key.screen.value);
    key.screen.value = ans2.toFixed(3);
    decimalAdded =false;
  }
   else if(Op =='.' && decimalAdded===false)
   {
     key.screen.value += Op;
     decimalAdded =true;
   }
 
  
  if(Op==='=')
  {  
   var inputVal1 = key.screen.value;  
  var lastChar1 = inputVal1[inputVal1.length - 1];

  if(key.screen.value===''||key.screen.value==='0')
  {  }
   
    else
    {
    if(lastChar1 =='*' || lastChar1 =='/' || lastChar1 =='-' || lastChar1 =='+')
  {
    lastChar1='';
   inputVal1=inputVal1.substring(0,inputVal1.length-1);
    answer = eval(inputVal1);
   if(decimalAdded)
      {
        key.screen.value=answer.toFixed(2);}
      else
      {key.screen.value=answer; }
  }
 
    else
    {
      answer = eval(inputVal1);
      if(decimalAdded)
      {
        key.screen.value=answer.toFixed(2);}
      else
      {key.screen.value=answer; }
    }
    
   }
  }  

   }  
//////////////////////////////////
function reset() {
answer = 0;
key.screen.value ="";
}
