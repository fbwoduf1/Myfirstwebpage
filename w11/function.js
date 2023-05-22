function nightdayHandler(self, num){
    var target = document.querySelector('body');      
    if(self.value == 'day'){
      target.style.backgroundColor = 'white';
      target.style.color = 'black';
      self.value = 'night';
      document.querySelector('#night_day_'+num+'\'').value = 'night';
    } else {
      target.style.backgroundColor = 'black';
      target.style.color = 'white';
      self.value = 'day';
      document.querySelector('#night_day_'+num+'\'').value = 'day';
    }
}