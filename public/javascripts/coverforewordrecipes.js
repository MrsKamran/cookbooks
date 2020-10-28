function getBase64ImageFromURL(url) {
  return new Promise((resolve, reject) => {
    var img = new Image();
    img.setAttribute("crossOrigin", "anonymous");
    img.onload = () => {
      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      var dataURL = canvas.toDataURL("image/png");
      resolve(dataURL);
    };
    img.onerror = (error) => {
      reject(error);
    };
    img.src = url;
  });
}

async function showPdf() {
  const endpoint = "http://localhost:3000/api/cookbooks/";
  try {
    cookbookwithrecipes = await fetch(endpoint).then((res) => res.json());
    const cookbook = cookbookwithrecipes[0]; //This is cookbook object
    var l = Object.keys(cookbookwithrecipes).length; //length of cookbookswith recipes, book index is 0 and recipes are from index 1 to l-1
    //start working on recipes from here
    var recipecontent = "";
    // for (let i = 1; i < l; i++) {
    //   recipecontent =
    //     recipecontent +
    //     "{ text:" +
    //     cookbookwithrecipes[i].name +
    //     ',style: "header"},{ image: await this.getBase64ImageFromURL(' +
    //     cookbookwithrecipes[i].imageURL +
    //     "),fit: [500, 900]},{ text: " +
    //     cookbookwithrecipes[i].ingredients +
    //     ',style: "normal"},{ text: ' +
    //     cookbookwithrecipes[i].instructions +
    //     ',style: "normal", pageBreak: "after"}';
    // }
    // console.log(recipecontent);
    console.log("length is : ", l);
    let docDefinition = {
      content: [
        {
          text: cookbook.title,
          style: "header",
        },
        {
          image: await this.getBase64ImageFromURL(cookbook.coverImageURL),
          fit: [500, 900],
          pageBreak: "after",
        },
        {
          text: "Foreword",
          style: "header",
        },
        {
          text: cookbook.foreword,
          style: "normal",
          pageBreak: "after",
        },
        {
          text: cookbookwithrecipes[l - 1].name,
          style: "header",
        },
        {
          image: await this.getBase64ImageFromURL(
            cookbookwithrecipes[l - 1].imageURL
          ),
          fit: [500, 900],
        },
        { text: cookbookwithrecipes[l - 1].ingredients, style: "normal" },
        {
          text: cookbookwithrecipes[l - 1].instructions,
          style: "normal",
          // pageBreak: "after",
        },
      ],
      styles: {
        header: {
          fontSize: 30,
          bold: true,
          alignment: "center",
          italic: true,
        },
        normal: {
          ontSize: 15,
          bold: true,
          alignment: "justify",
        },
      },
    };
    pdfMake.createPdf(docDefinition).open(); //execute this line or the three lines below
    // pdfMake.createPdf(docDefinition).getDataUrl(function (outDoc) {
    //     document.getElementById('pdfV').src = outDoc;
    //     });//these lines draw pdf preview on the same page, were working before
    // //but not working now probably because of fetch promise
  } catch (err) {
    console.log(err);
  }
}
showPdf();

// // var dd = {content:val};
// // pdfMake.createPdf(dd).download();
