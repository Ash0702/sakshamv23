        //Give 2 numbers and operator and it gives number
        function F2(Num1, Num2, operand){
            if(operand == "+"){
                return Num1 + Num2;
            }
            if(operand == "-"){
                return Num1 - Num2;
            }
            if(operand == "*"){
                return Num1 * Num2;
            }
            if(operand == "/"){
                return Num1 / Num2;
            }
        }

        //Give a string and the operand inside it, it gives the number
        function F1(Str, operand) {
            for(let i =0; ; i++){
                if(Str[i] == operand){
                    let Num1 = Number(Str.slice(0, i));
                    let Num2 = Number(Str.slice(i+1, Str.length));
                    return (F2(Num1, Num2, operand));
                }
            }
        }

        function F3(str){
            let i, j, k, x;
            i = -1;  j = -1; k= -1;
            for( x = 0; x <= str.length ; x++){
                console.log(str);
                if(str[x] == "+" || str[x] == "-" || str[x] == "*" || str[x] == "/" || x == str.length){
                    i = j;
                    j = k;
                    k = x;
                }
                if(str[j] == "+"){
                    str = str.replace(str.slice(i+1, k), F1(str.slice(i+1, k), "+"));
                    j = i;
                    k = i;
                    x = i;
                    console.log(str);
                }
            }
            return str;
        }

        // let calculate = "5+4+3";
        // let newd = F3(calculate);
        // console.log(newd);