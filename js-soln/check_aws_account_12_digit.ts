function isNaN2(accountId){
    if(accountId.length !=12)
        {
            return false
        }
        
    let strArray =[0,1,2,3,4,5,6,7,8,9];
    let account_id = accountId.split('');
    for(let i=0; i< account_id.length; i++){
        let index = strArray.indexOf(parseInt(account_id[i]));
        if(index ===-1)
            {
                return false;
            }
    }

    return true;
}

function checkAWSAccount(accountId:string)
{
    return isNaN2(accountId);

}

console.log(checkAWSAccount("213456252212"))