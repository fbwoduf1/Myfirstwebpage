var Body = {
    setColor: function(color){
        $('body').css('color', color);  
    },
    setBackgroundColor: function(color){
        $('body').css('background-color', color);  
    }
  }
  
var Links = {
setColor: function(color){
//   var alist = document.querySelectorAll('a');
//   var i = 0;
//   while (i < alist.length) {
//     alist[i].style.color = color;
//     i = i + 1;
//   }
$('a').css('color',color);
}
}

function nightDayHandler(self){
if(self.value == 'night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');   
    Links.setColor('powderblue')   
    self.value = 'day';
} else {
    Body.setBackgroundColor('white')
    Body.setColor('black');   
    Links.setColor('blue');
    self.value = 'night';  
} 
}
function next(self){
    if(window.location.href == "https://fbwoduf1.github.io/Myfirstwebpage/w14/html/index.html"){
        window.location.href = "https://fbwoduf1.github.io/Myfirstwebpage/w14/html/1.html";
    }
    else if(window.location.href == "https://fbwoduf1.github.io/Myfirstwebpage/w14/html/1.html"){
        window.location.href = "https://fbwoduf1.github.io/Myfirstwebpage/w14/html/2.html";
    }
    else if(window.location.href == "https://fbwoduf1.github.io/Myfirstwebpage/w14/html/2.html"){
        window.location.href = "https://fbwoduf1.github.io/Myfirstwebpage/w14/html/3.html";
    }
    else if(window.location.href == "https://fbwoduf1.github.io/Myfirstwebpage/w14/html/3.html"){
        window.location.href = "https://fbwoduf1.github.io/Myfirstwebpage/w14/html/index.html";
    }
    
}
  