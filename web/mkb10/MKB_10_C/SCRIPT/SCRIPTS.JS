  function scrollToElement(theElement) {
    if (typeof theElement === "string") theElement = document.getElementById(theElement);
    var selectedPosX = 0;
    var selectedPosY = 0;
    while (theElement != null) {
        selectedPosX += theElement.offsetLeft;
        selectedPosY += theElement.offsetTop;
        theElement = theElement.offsetParent;
    }
    window.scrollTo(selectedPosX, selectedPosY);
  }

  function seachb() {
    JsHttpRequest.query(
      'SCRIPT/MKB_SEACH.HTM',
      {
        f: document.getElementById("seachm") 
      },
      function(result, errors) {
        document.getElementById("debug").innerHTML = errors; 
        if (result) {
            document.getElementById("cnt").style.display='none';
            document.getElementById("rslt").style.display='block';
            document.getElementById("rslt").innerHTML = result["str"];
            scrollToElement('rslt');
        }
      },
      true
    );
  }

  function seachcode() {
    JsHttpRequest.query(
      'SCRIPT/MKB_SEACHC.HTM',
      {
        f: document.getElementById("code") 
      },
      function(result, errors) {
        document.getElementById("debug").innerHTML = errors; 
        if (result) {
            document.getElementById("cnt").style.display='none';
            document.getElementById("rslt").style.display='block';
            document.getElementById("rslt").innerHTML = result["str"];
            scrollToElement('rslt');
        }
      },
      true
    );
  }