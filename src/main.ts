import { echo_hoge, test_graphlib } from "./sub"

function myFunction() {
  echo_hoge();
  test_graphlib();
}

function noop() {

}

function customDoGet() {
  return HtmlService.createHtmlOutputFromFile('form.html');
}

function writeToSheet(data) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('サンプルシート');
  sheet.getRange('C3').setValue(data);
}

(global as any).myFunction = myFunction;     // エントリポイントとして適切な名前を使う
(global as any).doGet = customDoGet;         // doGetに紐付いていれば良い
(global as any).writeToSheet = writeToSheet; // form.htmlに記載の関数
