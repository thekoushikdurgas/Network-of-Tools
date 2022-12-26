var horizontal = document.querySelector('#horizontal');
var vertical = document.querySelector('#vertical');
var blur = document.querySelector('#blur');
var spread = document.querySelector('#spread');
var shadow = document.querySelector('#shadow-color');
var bgColor = document.querySelector('#bg-color');
var buttonColor = document.querySelector('#button-color');
var textColor = document.querySelector('#text-color');
var opacity = document.querySelector('#opacity');
var inset = document.querySelector('#inset');
var button = document.querySelector('.css-shadow-preview-box');
var boxShadowString = getInset() + getHorizontal() + "px " + getVertical() + "px " + getBlur() + "px " + getSpread() + "px " + getColor(shadow.value, opacity.value);
var horiVal = document.querySelector('#horizontalVal')
;
var veriVal = document.querySelector('#verticalVal');
var blurVal = document.querySelector('#blurRadius');
var spreadVal = document.querySelector('#spreadRadius');
var shadowVal = document.querySelector('#shadowHex');
var codeSnippet = document.querySelector('#css-shadow-code');
var opacVal = document.querySelector('#opacityVal');
var bgVal = document.querySelector("#bgHex");
var txtVal = document.querySelector('#textHex');
var buttVal = document.querySelector('#buttHex');
codeSnippet.innerHTML = "box-shadow: " + boxShadowString + ";";
button.style.boxShadow = boxShadowString;
button.style.backgroundColor = buttonColor.value;
button.style.color = textColor.value;
document.querySelector('#css-shadow-code').style.backgroundColor = bgColor.value;

inset.addEventListener('change', function() {
boxShadowString = getInset() + getHorizontal() + "px " + getVertical() + "px " + getBlur() + "px " + getSpread() + "px " + getColor(shadow.value, opacity.value);
button.style.boxShadow = boxShadowString;
codeSnippet.innerHTML = "box-shadow: " + boxShadowString + ";";
})

opacity.addEventListener('mousemove', function() {
boxShadowString = getInset() + getHorizontal() + "px " + getVertical() + "px " + getBlur() + "px " + getSpread() + "px " + getColor(shadow.value, opacity.value);
opacVal.value = opacity.value;
button.style.boxShadow = boxShadowString;
codeSnippet.innerHTML = "box-shadow: " + boxShadowString + ";";
})

horizontal.addEventListener('mousemove', function() {
boxShadowString = getInset() + getHorizontal() + "px " + getVertical() + "px " + getBlur() + "px " + getSpread() + "px " + getColor(shadow.value, opacity.value);
horiVal.value = getHorizontal();
button.style.boxShadow = boxShadowString;
codeSnippet.innerHTML = "box-shadow: " + boxShadowString + ";";
});

vertical.addEventListener('mousemove', function() {
boxShadowString = getInset() + getHorizontal() + "px " + getVertical() + "px " + getBlur() + "px " + getSpread() + "px " + getColor(shadow.value, opacity.value);
veriVal.value = getVertical();
button.style.boxShadow = boxShadowString;
codeSnippet.innerHTML = "box-shadow: " + boxShadowString + ";";
});

blur.addEventListener('mousemove', function() {
var px = "px";
boxShadowString = getInset() + getHorizontal() + "px " + getVertical() + "px " + getBlur() + "px " + getSpread() + "px " + getColor(shadow.value, opacity.value);
blurVal.value = getBlur();
button.style.boxShadow = boxShadowString;
codeSnippet.innerHTML = "box-shadow: " + boxShadowString + ";";
});

spread.addEventListener('mousemove', function() {
boxShadowString = getInset() + getHorizontal() + "px " + getVertical() + "px " + getBlur() + "px " + getSpread() + "px " + getColor(shadow.value, opacity.value);
spreadVal.value = getSpread();
button.style.boxShadow = boxShadowString;
codeSnippet.innerHTML = "box-shadow: " + boxShadowString + ";";
});

shadow.addEventListener('change', function() {
boxShadowString = getInset() + getHorizontal() + "px " + getVertical() + "px " + getBlur() + "px " + getSpread() + "px " + getColor(shadow.value, opacity.value);
shadowVal.value = shadow.value;
button.style.boxShadow = boxShadowString;
codeSnippet.innerHTML = "box-shadow: " + boxShadowString + ";";
});


function getHorizontal() {
  var valu = "px";
return horizontal.value;
}

function getVertical() {
return vertical.value;
}

function getBlur() {
return blur.value;
}

function getSpread() {
return spread.value;
}

function getInset() {
if (inset.checked) {
return "inset ";
}
return ""; 
}

function getOpacity() {
getColor(shadow.val, opacity.val);
}

function getColor(hex, opacity) {
var rgb = hexToRgb(hex);
var rgbString = "rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + "," + opacity + ")";
return rgbString;
}

function hexToRgb(hex) {
var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
} : null;
}     
function btnCopyShadow() {
      var copyText = document.getElementById("css-shadow-code");
      copyText.select();
      document.execCommand("copy");
    }