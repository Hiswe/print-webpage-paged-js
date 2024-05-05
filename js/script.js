// import { Previewer } from 'https://unpkg.com/pagedjs@0.1.38/dist/paged.esm.js';
import { Previewer, Handler } from '../js/paged.esm.js';

let iconScreen = '<svg width="100%" height="100%" viewBox="0 0 478 478" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g transform="matrix(1,0,0,1,-1354.1,0)"><g transform="matrix(1,0,0,1,1354.1,0)"><rect x="0" y="0" width="477.867" height="477.867" style="fill:none;"/></g><g transform="matrix(1,0,0,1.07337,0,-33.9207)"><path d="M1831.97,109.874C1831.97,92.35 1816.72,78.144 1797.91,78.144L1388.16,78.144C1369.35,78.144 1354.1,92.35 1354.1,109.874L1354.1,335.203C1354.1,352.727 1369.35,366.933 1388.16,366.933L1797.91,366.933C1816.72,366.933 1831.97,352.727 1831.97,335.203L1831.97,109.874ZM1798.97,109.874C1798.97,109.33 1798.5,108.889 1797.91,108.889L1388.16,108.889C1387.58,108.889 1387.1,109.33 1387.1,109.874L1387.1,335.203C1387.1,335.747 1387.58,336.189 1388.16,336.189L1797.91,336.189C1798.5,336.189 1798.97,335.747 1798.97,335.203L1798.97,109.874Z"/></g><g transform="matrix(1,0,0,1,8.36,-15)"><path d="M1473.79,454.14L1695.55,454.14C1704.66,454.14 1712.05,446.747 1712.05,437.64C1712.05,428.533 1704.66,421.14 1695.55,421.14L1473.79,421.14C1464.68,421.14 1457.29,428.533 1457.29,437.64C1457.29,446.747 1464.68,454.14 1473.79,454.14Z"/></g><g transform="matrix(2.2952e-17,0.374835,-1,6.12323e-17,1985.13,-209.918)"><path d="M1473.79,454.14L1695.55,454.14C1704.66,454.14 1712.05,446.747 1712.05,437.64C1712.05,428.533 1704.66,421.14 1695.55,421.14L1473.79,421.14C1464.68,421.14 1457.29,428.533 1457.29,437.64C1457.29,446.747 1464.68,454.14 1473.79,454.14Z"/></g><g transform="matrix(2.2952e-17,0.374835,-1,6.12323e-17,2076.04,-209.918)"><path d="M1473.79,454.14L1695.55,454.14C1704.66,454.14 1712.05,446.747 1712.05,437.64C1712.05,428.533 1704.66,421.14 1695.55,421.14L1473.79,421.14C1464.68,421.14 1457.29,428.533 1457.29,437.64C1457.29,446.747 1464.68,454.14 1473.79,454.14Z"/></g><g transform="matrix(1,0,0,1,0,-7)"><path d="M1375.99,306.195L1812.22,306.195C1821.33,306.195 1828.72,298.802 1828.72,289.695C1828.72,280.588 1821.33,273.195 1812.22,273.195L1375.99,273.195C1366.88,273.195 1359.49,280.588 1359.49,289.695C1359.49,298.802 1366.88,306.195 1375.99,306.195Z"/></g></g></svg>';
let iconBook = '<svg class="icon-book" width="100%" height="100%" viewBox="0 0 478 478" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g transform="matrix(1,0,0,1,-746.27,0)"><g transform="matrix(1,0,0,1,746.27,0)"><rect x="0" y="0" width="477.867" height="477.867" style="fill:none;"/><clipPath id="_clip1"><rect x="0" y="0" width="477.867" height="477.867"/></clipPath><g clip-path="url(#_clip1)"><g transform="matrix(1.07692,0,0,0.885123,1.88354e-05,39.9185)"><path d="M436.139,54.036C371.791,11.007 288.455,8.744 221.867,48.216C155.278,8.744 71.942,11.007 7.595,54.036C2.849,57.202 -0.001,62.531 0,68.236L0,406.446C-0.009,412.748 3.456,418.541 9.011,421.516C14.563,424.487 21.301,424.159 26.538,420.663C82.776,383.032 156.156,383.032 212.394,420.663C212.616,420.817 212.872,420.851 213.094,420.987C213.316,421.124 213.555,421.362 213.811,421.516C214.407,421.771 215.017,421.993 215.637,422.182C216.257,422.464 216.896,422.703 217.548,422.899C218.491,423.117 219.45,423.26 220.415,423.326C220.91,423.326 221.371,423.531 221.866,423.531L222.293,423.531C222.866,423.489 223.435,423.415 224,423.309C224.864,423.222 225.72,423.068 226.56,422.848C227.141,422.658 227.711,422.436 228.267,422.182C228.796,421.96 229.359,421.841 229.871,421.568C230.11,421.431 230.298,421.227 230.537,421.073C230.776,420.919 231.049,420.868 231.288,420.715C287.526,383.084 360.906,383.084 417.144,420.715C424.966,425.975 435.57,423.898 440.83,416.076C442.743,413.231 443.755,409.876 443.734,406.447L443.734,68.236C443.734,62.531 440.884,57.202 436.139,54.036ZM204.8,377.279C150.735,351.93 88.198,351.93 34.133,377.279L34.133,77.656C86.731,46.406 152.202,46.406 204.8,77.656L204.8,377.279ZM409.6,377.279C355.535,351.93 292.998,351.93 238.933,377.279L238.933,77.656C291.53,46.406 357.002,46.406 409.6,77.656L409.6,377.279Z" style="fill-rule:nonzero;"/></g></g></g></g></svg>';
let iconPrinter = '<svg class="icon-printer" width="100%" height="100%" viewBox="0 0 478 478" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><path d="M460.8,119.467L375.467,119.467L375.467,17.067C375.467,7.641 367.826,0 358.4,0L119.467,0C110.041,0 102.4,7.641 102.4,17.067L102.4,119.467L17.067,119.467C7.641,119.467 0,127.108 0,136.533L0,358.4C0,367.826 7.641,375.467 17.067,375.467L102.4,375.467L102.4,460.8C102.4,470.226 110.041,477.867 119.467,477.867L358.4,477.867C367.826,477.867 375.467,470.226 375.467,460.8L375.467,375.467L460.8,375.467C470.226,375.467 477.867,367.826 477.867,358.4L477.867,136.533C477.867,127.108 470.226,119.467 460.8,119.467ZM136.533,34.133L341.333,34.133L341.333,119.466L136.533,119.466L136.533,34.133ZM341.333,443.733L136.533,443.733L136.533,290.133L341.333,290.133L341.333,443.733ZM443.733,341.333L375.466,341.333L375.466,290.133L392.533,290.133C401.959,290.133 409.6,282.492 409.6,273.066C409.6,263.64 401.959,256 392.533,256L85.333,256C75.907,256 68.266,263.641 68.266,273.067C68.266,282.493 75.907,290.134 85.333,290.134L102.4,290.134L102.4,341.334L34.133,341.334L34.133,153.6L443.733,153.6L443.733,341.333Z" style="fill-rule:nonzero;"/><path d="M409.6,187.733L392.533,187.733C383.107,187.733 375.466,195.374 375.466,204.8C375.466,214.226 383.107,221.867 392.533,221.867L409.6,221.867C419.026,221.867 426.667,214.226 426.667,204.8C426.667,195.374 419.026,187.733 409.6,187.733Z" style="fill-rule:nonzero;"/><path d="M290.133,324.267L187.733,324.267C178.307,324.267 170.666,331.908 170.666,341.334C170.666,350.76 178.307,358.401 187.733,358.401L290.133,358.401C299.559,358.401 307.2,350.76 307.2,341.334C307.2,331.908 299.559,324.267 290.133,324.267Z" style="fill-rule:nonzero;"/><path d="M290.133,375.467L187.733,375.467C178.307,375.467 170.666,383.108 170.666,392.534C170.666,401.96 178.307,409.601 187.733,409.601L290.133,409.601C299.559,409.601 307.2,401.96 307.2,392.534C307.2,383.108 299.559,375.467 290.133,375.467Z" style="fill-rule:nonzero;"/></svg>'


async function load_home(){
    let allContent = document.querySelectorAll(".added-content");

    for (let content of allContent) {
      let name = content.id;
      let path = 'src/' + name + '/content.html'
      content.innerHTML = await (await fetch(path)).text();
    }
}


window.addEventListener('load', async() => {

 await load_home();
   
  // 1. Get content 
  let content = document.body.innerHTML;
  document.body.innerHTML = "";

  // 2. Move content into #content + build header
  document.body.innerHTML = '\
  <header id="header-pagedjs">\
    <div id="header-container">\
        <input type="radio" id="input-screen" name="toggle-input" value="screen" hidden checked/>\
        <input type="radio" id="input-print" name="toggle-input" value="print" hidden/>\
        <button id="button-screen" data-text="Version numérique">' + iconScreen + '</button>\
        <button id="button-print-preview" data-text="Aperçu impression">' + iconBook + '</button>\
        <button id="button-print" data-text="Imprimer">' + iconPrinter + '</button>\
    </div>\
    </header>\
    <div id="renderbook"></div>\
    <div id="content">\
    ' + content + '</div>';


  // 3. Add onclick event
  document.querySelector('#button-print-preview').addEventListener('click', printPreview);
  document.querySelector('#button-screen').addEventListener('click', screenReload);
  document.querySelector('#button-print').addEventListener('click', printPdf);

  // 4. Display the correct view
  let view = localStorage.getItem('view');
  if(view == "print"){
    printPreview();
  }

});


/* PREVIEW ----------------------------------------------------------- */

function printPreview() {

  localStorage.setItem('view', 'print');

  let inputPrint = document.getElementById("input-print");
  document.getElementById("button-print").disabled = true;

  if(inputPrint.checked){
    document.getElementById("button-print").disabled = false;
  }else{
    document.getElementById("style-screen").remove();
    let bookcontent = document.querySelector("#content");
    let content = bookcontent.innerHTML;
    bookcontent.innerHTML = "";

    // 1. Create Previewer
    let previewer = new Previewer();

    // 2. Register Handlers
    previewer.registerHandlers(
      class PreviewHandler extends Handler {
        afterPreview() {
          document.getElementById("button-print").disabled = false;
        }
      }
    );

    // 3. Render
    previewer.preview(
      content,
      ["css/style-print.css"],
      document.querySelector("#renderbook")
    );

    inputPrint.checked = "true";

  }
};



/* SCREEN ----------------------------------------------------------- */

function screenReload() {
  localStorage.setItem('view', 'screen');
  window.location.reload(false);
};


/* PRINT ----------------------------------------------------------- */

function printPdf() {
  let inputPrint = document.getElementById("input-print");
  if(inputPrint.checked){
    window.print();
  }else{
    document.getElementById("style-screen").remove();
    let bookcontent = document.querySelector("#content");
    let content = bookcontent.innerHTML;
    bookcontent.innerHTML = "";

    // 1. Create Previewer
    let previewer = new Previewer();

    // 2. Register Handlers
    previewer.registerHandlers(
      class PrintHandler extends Handler {
        afterPreview () {
          window.print();
        }
      }
    );

    // 3. Render
    previewer.preview(
      content,
      ["css/print.css"],
      document.querySelector("#renderbook")
    );
    document.getElementById("input-print").checked = "true";
  }
};
