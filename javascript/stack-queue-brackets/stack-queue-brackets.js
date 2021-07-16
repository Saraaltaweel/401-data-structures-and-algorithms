'use strict';

function peek(node){
    let top=node[node.length-1]
    return top;

}

function validateBrackets(string){
    let CharStack=[];
    let stringSplit=string.split('');
    let leftChar=['{','[','('];
    let rightChar=['}',']',')'];

    for (let x=0;x<stringSplit.length;x++){
        if(leftChar.includes(stringSplit[x])){
            CharStack.push(stringSplit[x]);
        }
        else if(rightChar.includes(stringSplit[x])){
             if(stringSplit[x]==='}'&& peek(CharStack)!='{'|| stringSplit[x]===')'&& peek(CharStack)!='('||stringSplit[x]===']'&& peek(CharStack)!='['){
                return false;
                  
            }
            CharStack.pop();

    }


}
         if (CharStack.length===0){
             return true;
         }
}

module.exports=validateBrackets;