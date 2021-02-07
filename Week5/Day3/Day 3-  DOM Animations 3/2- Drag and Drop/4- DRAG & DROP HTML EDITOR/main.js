// alert("good!");

// var ArrayOfImages = ['./images/html.png', './images/css.jpg', './images/javascript.png']; //Array of Images



//Array of Images
const _imgs = [
  {
   src: './images/img-1.jpg',
   desc: 'Image 1 description'
  },
  {
    src: './images/css.jpg',
    desc: 'Image 2 description'
  },
  {
    src: './images/javascript.png',
    desc: 'Image 3 description'
  }
];

//Create two global variables that will hold the objct that your dragging and the obj that you are targetting
let _current_drag_obj;
let _current_drag_target;

//Initilize function, that loads the functions of load images and events
function init() {
  // alert('Test');
  document.getElementById('sidebar-content').style.height = screen.height+"px";
  loadImages();
  loadEvents();
}

//Loading Images function
function loadImages() {
  let _ul = document.querySelector('ul#img-list'); //create unorder list
  for(var x in _imgs) {                            //loop the array of images
    var _li = document.createElement('li');        //creat a list
    var _img = document.createElement('img');      //create images
    var _p = document.createElement('p');         //create text

    _li.setAttribute('draggable','true');      //set every list item to be draggable

    _p.innerText = _imgs[x].desc;              //set the text of x(iterating) the description key to _p

     //Setting attributes
    _img.setAttribute('src', _imgs[x].src);
    _img.setAttribute('alt', _imgs[x].desc);
    _img.setAttribute('ondrag','drag(this,event)'); //set attribute of drag function

    //Append tags
    _li.appendChild(_p);
    _li.appendChild(_img);
    _ul.appendChild(_li);
  }
}


//Load Events function
function loadEvents(){
  let _btn = document.getElementById('submit-button');
  let _frm = document.forms['frm'];

 //Event listener when click button
  _btn.addEventListener("click", function(event) {
      // alert(_frm); debug
      if(validate(_frm)){
        // alert(_frm.elements[0].value + " " + _frm.elements[1].value);

        //Assign the values of the input to Parent and child of the form
        document.getElementById('h-title').innerText =  _frm.elements[0].value;
        document.getElementById('p-contnet').innerText =  _frm.elements[1].value;
      }
  });


  //Assign every tag that has the drop target class to variable
  let _drop_targets = document.getElementsByClassName("drop-target");

  //Add event listener dragend to clone object if current dragged target is dropped
  document.addEventListener("dragend", function(event) {
    if(_current_drag_target){
      _current_drag_target.replaceChild(_current_drag_obj.cloneNode(true), _current_drag_target.childNodes[0]); //clone the dragged object
    }
  });


  //Loop trought dragged targets when enter and leave
  for(var i = 0; i < _drop_targets.length; i++){
    let _target =_drop_targets[i];
    _target.addEventListener("dragenter", function(event) {
        _current_drag_target = _target;
    });
    _target.addEventListener("dragleave", function(event) {
      //  _current_drag_target = null;
    });
  }

}


//Validate if input in form is not empty
function validate(_form) {
  let _title = _form.elements[0].value;
  let _content = _form.elements[1].value;
  if( _title.trim() == "" || _content.trim() == ""){
    alert("Title Or Content is empty...");
    return false;
  }
  return true;
}


//Drag function
function drag(obj, event){
  _current_drag_obj = obj;
}


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// ArrayOfImages.forEach(function(image) {    // for each link image in ArrayOfImages
//   var img = document.createElement('img'); // create an img element
//   img.src = image;                         // set its src to the link image
//   img.height = "100";                      //height size of the images
//   img.width = "150";                       //witdh size of the images
//   img.setAttribute("id", "image1");
//
//   img.setAttribute("ondragstart", "drag(this,event)");
//   img.setAttribute("ondragend", "drop(this, event)");
//   img.draggable = "true";
//
//   // img.setAttribute("ondragstart","dragStart(event)";
//   // img.ondrag="dragging(event)";
//
//
//   // document.getElementById("image-container").addEventListener("click", dragStart);
//   // img.setAttribute("ondragstart", "drag(event)");
//   // img.setAttribute("ondrag", "dragging(event)");
//
//
//   document.getElementById("image-container").appendChild(img);
//   // document.body.appendChild(img);          // append it to the body
// });
//
//
// //input Title text
// function displayTitle(){
//   var y = document.getElementById("title-input").value;
//   document.getElementById("title-displayed").innerHTML = y;
//   if (y == '') {
//     alert("Please Enter Valid Text for The Title");
//   }
// }
//
// //input Textarea text
// function displayText(){
//   var x = document.getElementById("myTextarea").value;
//   document.getElementById("text-displayed").innerHTML = x;
//   if (x == '') {
//     alert("Please Enter Valid Text for the Text Area");
//   }
// }
//
//
//
// //drag event For Image
// function dragStart(ev) {
//   ev.dataTransfer.setData("Text", ev.target.id);
//   ev.currentTarget.cloneNode(true);
//   console.log(ev);
// }
//
// function allowDrop(ev) {
//   ev.preventDefault();
// }
//
// function drag(obj, ev) {
//   ev.dataTransfer.setData("text", ev.target.id);
//   console.log(ev);
// }
//
// function drop(obj, ev) {
//   document.getElementById("div1").appendChild(obj);
//
//
//
//   console.log(ev);
// }
//
//
//
// //drag event For text
// function dragStartText(event) {
//   event.dataTransfer.setData("Text", event.target.id);
// }
//
// function dragEnterText(event) {
//   if ( event.target.className == "droptarget" ) {
//     // document.getElementById("demo").innerHTML = "Entered the dropzone";
//     event.target.style.border = "3px dotted red";
//   }
// }
//
// function dragLeaveText(event) {
//   if ( event.target.className == "droptarget" ) {
//     // document.getElementById("demo").innerHTML = "Left the dropzone";
//     event.target.style.border = "";
//   }
// }
//
// function allowDropText(event) {
//   event.preventDefault();
// }
//
// function dropText(event) {
//   event.preventDefault();
//   var data = event.dataTransfer.getData("Text");
//   event.target.appendChild(document.getElementById(data));
// }
