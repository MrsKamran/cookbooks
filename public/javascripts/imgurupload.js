$("document").ready(function () {
  $("input[type=file]").on("change", function () {
    var $files = $(this).get(0).files;
    if ($files.length) {
      // Reject big files
      if ($files[0].size > $(this).data("max-size") * 1024) {
        console.log("Please select a smaller file");
        return false;
      }
      var apiUrl = "https://api.imgur.com/3/image";
      var apiKey = "7c37e8d7e101a56"; //This is my API-Key
      var formData = new FormData();
      formData.append("image", $files[0]);
      var settings = {
        async: true,
        crossDomain: true,
        url: apiUrl,
        method: "POST",
        datatype: "json",
        headers: {
          Authorization: "Client-ID " + apiKey,
        },
        processData: false,
        contentType: false,
        data: formData,
        beforeSend: function (xhr) {
          console.log("Uploading");
        },
        success: function (res) {
          console.log(res.data.link);
          $("#ShowImage").append(
            '<img name="coverImageURL" src="' +
              res.data.link +
              '"+" width=250, height=auto" />'
          );
          $("#imgURL").val(res.data.link);
          $("#imgURL").css("color", "grey");
          $("#imgURL").change(function () {
            $(this).css("color", "black");
          });
        },
        error: function () {
          alert("Failed to upload image");
        },
      };
      $.ajax(settings).done(function (response) {
        console.log("Done");
      });
    }
  });
});
