

$(".btn").click(function () {
    var link = $(".link").val();
    var format = $(".format").children("option:selected").val();
    var src = "" + link + "=" + format + "";
    download(link, format);
});

function download(link, format) {
    // using loader.to api
    $('.button-container').html(`<iframe style="height:50px; border:none; overflow:hidden;" src="https://loader.to/api/button?url=` + link + `&f` + format + `&color=ee4b4b&adUrl=https://wilson-vd.netlify.app"></iframe>`);  
}
