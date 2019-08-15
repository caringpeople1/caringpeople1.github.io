var popupWindow=null;
var mypage=tips.HTML
var new_tip;
var randomNumber = Math.floor(Math.random() * tips.length);
var randomTip = tips [randomNumber]

var tips = [
  'I really love apples',
  'I really hate oranges',
  'I think this is amazing',
  'Hello World'
];
console.log() 
/*function new_tip(){
  var random_tip = Math.floor (Math.random() * (list.length));
  document.getElementById("list").innerHTML.tip.content
   list[1]*/


function popup(w,h,pos,infocus){
  if (pos == 'random') {
    LeftPosition=(screen.width)?Math.floor(Math.random()*(screen.width-w)):100;TopPosition=(screen.height)?Math.floor(Math.random()*((screen.height-h)-75)):100;
  }
  else {
    LeftPosition=(screen.width)?(screen.width-w)/2:100;TopPosition=(screen.height)?(screen.height-h)/2:100;
  }
  settings = 'width='+ w + ',height='+ h + ',top=' + TopPosition + ',left=' + LeftPosition + ',scrollbars=no,location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=no';
  popupWindow = window.open(mypage,'',settings);
  if (infocus=='front') {
    popupWindow.focus();
    popupWindow.location=mypage;
  }
  if (infocus=='back') {
    popupWindow.blur();
    popupWindow.location = mypage;
    popupWindow.blur();
  }
}

//if user_input == button5 {
  //show(file:///C:/Users/GWC/Desktop/Tip1.html')}
