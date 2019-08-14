var popupWindow=null;
var loc;
var mypage;

function popup(myname,w,h,pos,infocus){

  if (pos == 'random')
  {LeftPosition=(screen.width)?Math.floor(Math.random()*(screen.width-w)):100;TopPosition=(screen.height)?Math.floor(Math.random()*((screen.height-h)-75)):100;}
  else
  {LeftPosition=(screen.width)?(screen.width-w)/2:100;TopPosition=(screen.height)?(screen.height-h)/2:100;}
  settings='width='+ w + ',height='+ h + ',top=' + TopPosition + ',left=' + LeftPosition + ',scrollbars=no,location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=no';popupWindow=window.open('',myname,settings);
  if(infocus=='front'){popupWindow.focus();popupWindow.location=mypage;}
  if(infocus=='back'){popupWindow.blur();popupWindow.location=mypage;popupWindow.blur();}
}

loc = "at home"


var At_Home ="At Home"
function update_location(loc) {
  if (loc == "at home") {
    mypage = "Tip1.html"
  }
}

}



//if user_input == button5 {
  //show(file:///C:/Users/GWC/Desktop/Tip1.html')}
