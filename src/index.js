module.exports = function check(str, bracketsConfig) {
   
    bracketsConfig = bracketsConfig.map(el => el.join(''));
    for (let i = 0; i < bracketsConfig.length;){
        if(str.includes(bracketsConfig[i])){
            str = str.replace(bracketsConfig[i], '');
            i = 0;
            continue;
        }
        i += 1;
    }
    if (str.length === 0){
        return true;
    }else{
        return false;
    }
}
