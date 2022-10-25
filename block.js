document.addEventListener('DOMContentLoaded', function () {

  let fullMessage = document.getElementById('How-can-I-help-2');
  let submitButton = document.getElementById('contactsubmitbutton');
  
  fullMessage.addEventListener('input', validate);
      
  function validate() {
      var companyNameValue = fullMessage.value;
      
      if(!companyNameValue.match( /link build|guest post|quality links|DA [0-9]|DA[0-9]|https:|http:/g )) // amend this regex as you like :) 
      {
          submitButton.disabled = false;
      } else {
          submitButton.disabled = true;
      }
  };

  return false;

});