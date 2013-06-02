// --------------------------
// 定数定義
// --------------------------
const OPERATOR_EQUAL = 0;
const OPERATOR_PLUS = 1;
const OPERATOR_MINUS = 2;
const OPERATOR_MULTIPLY = 3;
const OPERATOR_DIVISION = 4;

// --------------------------
// 変数定義
// --------------------------
var log = [];
var temp = "0";

// 最初にボタンを押した時の数字格納用 旧disp
var storeInput = "0";

// dispの数字を表示、計算用 旧disp2
var storeDisplay = "0";

// 履歴機能に表示用 旧disp3
var storeHistory = "0";

// 演算子種別
var operatorType = OPERATOR_EQUAL;

// 二つ以上の演算子の出る計算をする時のフラグ
var oflag = 0;

// 小数点計算で[.]をつけるときのフラグ
var tflag = 0;

/**
 * [C]を押されたときの処理
 * 
 */
function execButtonC()
{
    storeInput = "0";
    storeDisplay = "0";
    storeHistory = "0";
    operatorType = OPERATOR_EQUAL;
    oflag = 0;
    tflag = 0;
    $(".numberKey",".numberKeylight").removeAttr('disabled');
    document.form1.disp.value = storeDisplay;
}

/**
 * [bs]を押されたときの処理
 */
function execButtonBs()
{
    if (storeInput == "0.")
    {
        storeInput  = storeInput.substring(0, storeInput.length - 2);
        storeDisplay = storeInput;
    }
    else if (storeInput.length<=1)
    {
        storeInput = "0";
        storeDisplay = "0";
        operatorType = OPERATOR_EQUAL;
    }
    else
    {
        storeInput = storeInput.substring(0, storeInput.length - 1);
        storeDisplay = storeInput;
    }
    $(".numberKey",".numberKeylight").removeAttr('disabled');
    document.form1.disp.value = storeDisplay;
}

function execButtonPlus()
{
	storeDisplay = storeHistory;
	storeInput = "";
	operatortype = OPERATOR_PLUS;
	tflag = 0;
	oflag = 1;
}

function execButtonMinus()
{
	storeDisplay = storeHistory;
	storeInput = "";
	operatortype = OPERATOR_MINUS;
	tflag = 0;
	oflag = 1;
}

function execButtonMultiply()
{
	storeDisplay = storeHistory;
	storeInput = "";
	operatortype = OPERATOR_MULTIPLY;
	tflag = 0;
	oflag = 1;
}

function execButtonDivsion()
{
	storeDisplay = storeHistory;
	storeInput = "";
	operatortype = OPERATOR_DIVISION;
	tflag = 0;
	oflag = 1;
}

function execButtonPercent()
{
	storeInput = storeInput * 0.01;
	storeDisplay = storeInput;
	document.form1.disp.value = storeDisplay;
}

function execButtonPlusMinus()
{
	storeInput = storeInput * (-1);
	storeDisplay = storeInput;
	document.form1.disp.value = storeDisplay;
	
}

function execButtonEqual()
{
	if(oflag == 1){
		operatorType = OPERATOR_EQUAL;
	}
	else
	{
		if(storeInput)
		{
			switch(operatortype){
				case OPRATOR_PLUS:
					storeDisplay = parseFloat(storeHistory) + parseFloat(storeInput);
                    temp  = storeHistory + " + " + storeInput; 
                    break;
                case OPRATOR_MINUS:
                	case OPERATOR_MINUS:
                    storeDisplay = parseFloat(storeHistory) - parseFloat(storeInput); 
                    temp  = storeHistory + " － " + storeInput;
                    break;
                case OPERATOR_MULTIPLY:
                    storeDisplay = parseFloat(storeHistory) * parseFloat(storeInput); 
                    temp  = storeHistory + " * " + storeInput;
                    break;
                case OPERATOR_DIVISION:
                    storeDisplay = parseFloat(storeHistory) / parseFloat(storeInput);
                    temp  = storeHistory + " / " + storeInput;
                    break;
			}
			storeInput = '0';
		}
	}
	storeInput = '0';
	document.form1.disp.value = storeDisplay;
}

function Numberinput(val)
{
	var digitObj = document.form1.disp.value;
    if(digitObj != 0){
        var digitLength = digitObj.toString().length;   
    }else{
        var digitLength = "0";
    }
    if (val == "0" &&  (storeInput=="0" || storeInput=="0."))
    {
        storeInput = '0';
        operatorType = OPERATOR_EQUAL;
    }
	
	if (val >=0 && val <=9)
	{
		storeInput += val;
	}
	storeDisplay = "0";
	
	if (digitLength <= "9")
	{
		$('.numberKey').removeAttr("disabled");
		if(digitLength == "9"){
			$('.numberKey').attr("disabled", "disabled");
		}
	} else if($('.numberKey').attr("disabled") == "disabled"){
		storeInput = storeInput.slice(0, 1);
	} else {
		$('numberKey').attr("disabled", "disabled");
	}
	document.form1.disp.value = storeInput;
}

function teninput(val)
{
	var digitObj = document.form1.disp.value;
    if (val == "0" &&  (storeInput=="0" || storeInput=="0."))
    {
        storeInput = '0';
        operatorType = OPERATOR_EQUAL;
    }
    else
    {
        if (val == "." && tflag == 0) 
        {
            storeInput += ".";
            tflag = 1;
        }
        else if (val >=0 && val <=9) 
        {
            storeInput += val ;
        } 
    }
    document.form1.disp.value = storeInput;
}

/**
 * 数字キーまたは小数点キーが押されたときの処理
 */
//function setNumber(val)
//{
//    consoleLog('setNumber start');
//    
//    var digitObj = document.form1.disp.value;
//    if(digitObj != 0){
//        var digitLength = digitObj.toString().length;
//    }else{
//        var digitLength = "0";
//    }
//    if (val == "0" &&  (storeInput=="0" || storeInput=="0."))
//    {
//        storeInput = '0';
//        operatorType = OPERATOR_EQUAL;
//    }
//    else if (operatorType == OPERATOR_EQUAL) 
//    {    
//        if(val == ".")
//        {
////            consoleLog('aaa');
//            storeInput = "0.";
//            tflag = 1;
//        }
//        else
//        {
//            storeInput = val;
//        }
//        storeDisplay = "0";
//        operatorType = 1;               
//    }
//    else
//    {
//        if (val == "." && tflag == 0) 
//        {
////            consoleLog('bbb');
//            storeInput += ".";
//            tflag = 1;
//        }
//        else if (val >=0 && val <=9) 
//        {
////            consoleLog('ccc');
//            storeInput += val ;
//        } 
//    }
//    console.log('digitLenght : ' + digitLength);
//    
//    if (digitLength <= "9") {
//        console.log('digitLengh : OK');
////        alert(digitLength);
//        $('.numberKey').removeAttr("disabled");
//        if(digitLength == "9"){
//            $('.numberKey').attr("disabled", "disabled");
//        }
//    }else if($('.numberKey').attr("disabled") == "disabled"){
//        storeInput = storeInput.slice(0, -1);
//        
//    }else  {
//        console.log('digitLengh : NG');
//       $('.numberKey').attr("disabled", "disabled");
//    }
//    document.form1.disp.value = storeInput;
//    consoleLog('setNumber end');
//}
 
//function push(val)
//{
//    consoleLog("push start");
//    
//    if(val == "%")
//    {
//        storeInput = storeInput * 0.01;
//        storeDisplay = storeInput ;
//    } 
//    else if (val == "+/-")
//    {
//        storeInput = storeInput * (-1);
//        storeDisplay = storeInput;
//    }
//    else
//    {
//        if (storeInput)
//        {
//            switch (operatorType)
//            {
//                case OPERATOR_PLUS:
//                    storeDisplay = parseFloat(storeHistory) + parseFloat(storeInput);
//                    temp  = storeHistory + " + " + storeInput; 
//                    break;
//                case OPERATOR_MINUS:
//                    storeDisplay = parseFloat(storeHistory) - parseFloat(storeInput); 
//                    temp  = storeHistory + " － " + storeInput;
//                    break;
//                case OPERATOR_MULTIPLY:
//                    storeDisplay = parseFloat(storeHistory) * parseFloat(storeInput); 
//                    temp  = storeHistory + " * " + storeInput;
//                    break;
//                case OPERATOR_DIVISION:
//                    storeDisplay = parseFloat(storeHistory) / parseFloat(storeInput);
//                    temp  = storeHistory + " / " + storeInput;
//                    break;
//            }
//            storeInput = "0";
//        }
//        if (oflag == 1 && val != "=")
//        {
//            if (log.length > 99) log.length=0; //100件表示したら履歴を削除
//            log.push(temp + " = " + storeDisplay);   //temp:計算式とdisp:答えをlog配列に格納
//            oflag = 0;
//        }
//        
//        if (val == "=")
//        {
//            operatorType = OPERATOR_EQUAL;
//            storeInput = "";
//        }
//        else
//        {
//            if (val == "+")
//            {
//                operatorType = OPERATOR_PLUS;
//            }
//            else if (val == "－")
//            {
//                operatorType = OPERATOR_MINUS;
//            }
//            else if (val == "×")
//            {
//                operatorType = OPERATOR_MULTIPLY;
//            }
//            else if (val == "÷")
//            {
//                operatorType = OPERATOR_DIVISION;
//            }
//            tflag = 0;
//            oflag   = 1;
//            storeInput    = "0";
//            $(".numberKey",".numberKeylight").removeAttr('disabled');
//            storeHistory = storeDisplay;
//        }
//    }
//    
//    if (val >= 0 && val <= 9 || val == ".")
//    {
//        document.form1.disp.value = storeInput;
//        if(val == "=" &&operatorType != OPERATOR_EQUAL)
//        {
//            storeInput = (storeInput * 100);
//            document.form1.disp.value = Math.round(storeInput)/100;
//        }
//    }
//    else
//    {
//        document.form1.disp.value = storeDisplay;
//        if(val == "=" &&operatorType != OPERATOR_EQUAL)
//        {
//            storeDisplay = (storeDisplay*100);
//            document.form1.disp.value = Math.round(storeDisplay)/100;
//        }
//    } 
//    consoleLog("push end");
//}

//function historyOut()
//{
//    document.getElementById("logarea").value =""; //同じ履歴を表示しないようにする。
//    for (var i = 0; i < log.length; i ++)
//    {
//        document.getElementById("logarea").value = document.getElementById("logarea").value + log[i] + "\n";
//        // logareaの持つ要素にいれる                 //もともと入っている要素 + 新しい配列の中身 + 改行
//    }
//}

/**
 * コンソールに変数の状態を出力します。
 * @param str 任意の文字列
 */
function consoleLog(str)
{
    console.log(str);
    console.log("  storeInput : " + storeInput);
    console.log("  storeDisplay : " + storeDisplay);
    console.log("  storeHistory : " + storeHistory);
    console.log("  operatorType : " + operatorType);
    console.log("  oflag : " + oflag);
    console.log("  tflag : " + tflag);
}



