function doGet(){
  //return HtmlService.createTemplateFromFile("index").evaluate;
  //return HtmlService.createTemplateFromFile("index").evaluate();
  var output = HtmlService.createTemplateFromFile('index');
  //return output.evaluate();
  var html = output.evaluate();
  html.setTitle('3Dプリンタ使用状況');
  return html;
}
  //return "-";

//ユーザーの名前（loginしたメールアドレス)を取得して返す
function getmyName(e){
   var objUser = Session.getActiveUser();
   var name = objUser.getEmail();
  return name;
}


function getPrinterList(){
  var ssId = '1_sRP542HXwet5wxut1sQ32yZmtq2SEF1gN43A13Neuw';// SSIDからスプレッドシートの取得
  var ss = SpreadsheetApp.openById(ssId);
  var sheet = ss.getSheetByName('シート1');// 指定されたシート名からシートを取得して返却
  
  var printerList = sheet.getDataRange().getValues();//シートの情報を全部読み込み

   return printerList;
}

function getWorkListData(){
  var returnWorkList = [];
  // 指定したシートからデータを取得

  var ssId = '14BUUeK5fuWxJc-s8opJCUxGOEUZvqOZuPaxqg9oqdm4';// SSIDからスプレッドシートの取得
  //var ssId = '1AsX_Ze2uDTnoGRhJH4TD5XvTENCF50ETly_9_sckLJY';// SSIDからスプレッドシートの取得
  var ss = SpreadsheetApp.openById(ssId);
  var sheet = ss.getSheetByName('フォームの回答 1');// 指定されたシート名からシートを取得して返却
 // var values = sheet.getDataRange().getValues();
  
  //console.log("ログ出力です！");
  //console.log(values);

  //var workList = sheet.getDataRange().getValues();//シートの情報を全部読み込み
  var workList = sheet.getDataRange().getDisplayValues();//シートの情報を表示されたままの文字で取得(getDisplayValues)
  console.log(workList);
  for (var i = 1 ; i<workList.length ; i++){
      console.log(workList[i]);
      //0 タイムスタンプ, 1 PrinterID, 2 名前, 3 印刷予定時間, 4 回収予定時刻
      timeStamp = workList[i][0] + " ";//日付に空白を追加して文字列にする
      pickTime = workList[i][4] + " ";//回収時刻に空白を追加して文字列にする


      returnWorkList[i]=[timeStamp, workList[i][1],workList[i][2],workList[i][3],pickTime, workList[i][5]];
  }
  return returnWorkList;
}
