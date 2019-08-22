var place;
var Window=null;

function update_place(loc) {
   if (loc == "Home") {
     place = "Home";
   }
  if (loc == "School") {
    place = "School";
  }
  if (loc == "Work") {
    place ="Work";
  }
  if (loc == "Public Place") {
      place = "Public Place";
  }
}

function open_tip() {
  var slider = document.getElementById("myRange");
  var stresslevel = slider.value;
  console.log("stresslevel: ", stresslevel);
  console.log("place: ", place);
  if (place == "Home" && (stresslevel == 0 || stresslevel == 1)) {
    popup('file:///C:/Users/GWC/Desktop/all%20html%20files/Tip1.html','tip','640','480','center','front')
  }
  if (place == "Home"&& (stresslevel == 2 || stresslevel == 3)) {
    popup('file:///C:/Users/GWC/Desktop/all%20html%20files/Tip2.html','tip','640','480','center','front')
  }
  if (place == "Home" && (stresslevel == 4 || stresslevel == 5)) {
    popup('file:///C:/Users/GWC/Desktop/all%20html%20files/Tip3.html','tip','640','480','center','front')
  }
  if (place == "School" && (stresslevel == 0 || stresslevel == 1)) {
    popup('file:///C:/Users/GWC/Desktop/all%20html%20files/Tip4.html','tip','640','480','center','front')
  }
  if (place == "School" && (stresslevel == 2 || stresslevel == 3)) {
    popup('file:///C:/Users/GWC/Desktop/all%20html%20files/Tip5.html','tip','640','480','center','front')
  }
  if (place == "School" && (stresslevel == 4 || stresslevel == 5))  {
    popup('file:///C:/Users/GWC/Desktop/all%20html%20files/Tip6.html','tip','640','480','center','front')
  }
  if (place == "Work"  && (stresslevel == 0 || stresslevel == 1)) {
    popup('file:///C:/Users/GWC/Desktop/all%20html%20files/Tip7.html','tip','640','480','center','front')
  }
  if (place == "Work" && (stresslevel == 2 || stresslevel == 3)) {
    popup('file:///C:/Users/GWC/Desktop/all%20html%20files/Tip8.html','tip','640','480','center','front')
  }
  if (place == "Work" && (stresslevel == 4 || stresslevel == 5)) {
    popup('file:///C:/Users/GWC/Desktop/all%20html%20files/Tip9.html','tip','640','480','center','front')
  }
  if (place == "Public Place" && (stresslevel == 0 || stresslevel == 1)) {
    popup('file:///C:/Users/GWC/Desktop/all%20html%20files/Tip10.html','tip','640','480','center','front')
  }
  if (place == "Public Place" && (stresslevel == 2 || stresslevel == 3)) {
    popup('file:///C:/Users/GWC/Desktop/all%20html%20files/Tip11.html','tip','640','480','center','front')
  }
  if (place == "Public Place" && (stresslevel == 4 || stresslevel == 5)) {
    popup('file:///C:/Users/GWC/Desktop/all%20html%20files/Tip12.html','tip','640','480','center','front')
  }
}

function popup(mypage,myname,w,h,pos,infocus){
  if (pos == 'random')
{LeftPosition=(screen.width)?Math.floor(Math.random()*(screen.width-w)):100;TopPosition=(screen.height)?Math.floor(Math.random()*((screen.height-h)-75)):100;}
  else
{LeftPosition=(screen.width)?(screen.width-w)/2:100;TopPosition=(screen.height)?(screen.height-h)/2:100;}
settings='width='+ w + ',height='+ h + ',top=' + TopPosition + ',left=' + LeftPosition + ',scrollbars=no,location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=no';Window=window.open('',myname,settings);
  if(infocus=='front'){Window.focus();Window.location=mypage;}
  if(infocus=='back'){Window.blur();Window.location=mypage;Window.blur();}
}
