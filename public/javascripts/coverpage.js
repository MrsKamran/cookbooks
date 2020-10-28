

function getBase64ImageFromURL(url){
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
      img.onerror = error => {
        reject(error);
      };
      img.src = url;
    });
}

async function showPdf(){

  const endpoint = 'http://localhost:3000/cookbooks/json';

  try {
       cookbooks = await fetch(endpoint).then(res => res.json())
       var l = Object.keys(cookbooks).length;//length of cookbooks to find the index for last book
       console.log(cookbooks);
       console.log(l);
      let docDefinition = {
      content: [
        {
          text: cookbooks[l-1].title,
          style: 'header',
        },
        {
          image: await this.getBase64ImageFromURL(
              cookbooks[l-1].coverImageURL),
          fit: [500, 900],
          pageBreak: 'after'
      },{
        text: "Foreword",
        style: 'header',
      },  
      {
        text: cookbooks[l-1].foreword,
        style: 'normal',
      },    
      ],styles: {
		  header: {
			  fontSize: 30,
			  bold: true,
      alignment: 'center',
      italic: true
    },
    normal:{
      ontSize: 15,
			  bold: true,
      alignment: 'left',

    }
	}
    };
    pdfMake.createPdf(docDefinition).open();//execute this line or the three lines below
    // pdfMake.createPdf(docDefinition).getDataUrl(function (outDoc) {
    //     document.getElementById('pdfV').src = outDoc;
    //     });//these lines draw pdf preview on the same page, were working before
    // //but not working now probably because of fetch promise
        } catch(err) {
        console.log(err);
      } 
  }
showPdf();

// // var dd = {content:val};
// // pdfMake.createPdf(dd).download();