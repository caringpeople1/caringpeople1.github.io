var popupWindow=null;
var loc;
var mypage;

function update_location(location) {
  if (location == "home") {
    mypage = "Tip1.HTML";
  }
  if (location == "At School") {
    mypage = "Tip2.HTML";
  }
  if (location == "At Work") {
      mypage = "Tip3.HTML";
  }
  if (location == "In a Public Place") {
      mypage = "Tip4.HTML";
  }
}

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
