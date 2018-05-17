function openPhotoSwipe() {
    var stunum=45+parseInt(document.getElementById("stunum").value);
    var pagenum=document.getElementById("pagenum").value;
    var subject=document.getElementById("subject").value;
    var pswpElement = document.querySelectorAll('.pswp')[0];
    // build items array
    var items = [
        {
            src: 'http://gszonline.com:8888/SMS/StuClient/TestImageHelper.aspx?testimagecode=3428180001177203050'+subject+'00010'+pagenum+'&studentcode=121500'+stunum,
            w: 2332,
            h: 1652
        }
    ];
    
    // define options (if needed)
    var options = {
			 // history & focus options are disabled on CodePen        
      	history: false,
      	focus: false,

        showAnimationDuration: 0,
        hideAnimationDuration: 0
        
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
}
