// const Cookbook = require('./models/cookbook');
// require('./config/database');
// require('mongoose-type-url');

// Cookbook.find({}, function(err, c) {
//   if (err) throw err;
//   console.log(c);
// });

// function getBase64ImageFromURL(url){
//   return new Promise((resolve, reject) => {
//     var img = new Image();
//     img.setAttribute("crossOrigin", "anonymous");
//     img.onload = () => {
//       var canvas = document.createElement("canvas");
//       canvas.width = img.width;
//       canvas.height = img.height;
//       var ctx = canvas.getContext("2d");
//       ctx.drawImage(img, 0, 0);
//       var dataURL = canvas.toDataURL("image/png");
//       resolve(dataURL);
//     };
//     img.onerror = error => {
//       reject(error);
//     };
//     img.src = url;
//   });
// }

// async function showPdf(){
//   Cookbook.findById(req.params.id, function(err, cb){
//   let docDefinition = {
//     content: [
//       {
//         text: 'PDF Generated with Image from Imgur URL',
//         // text: mongoimport.cookbook,
//         // text: cb.title,
//         fontSize : 20,
//         style: 'header',
//         alignment: 'center',
//       },
//       {
//           image: await this.getBase64ImageFromURL(
//               "https://i.imgur.com/g6yI7Kg.jpg"),
//           fit: [500, 300]
//       }        
//     ],styles: {
//   header: {
//     fontSize: 50,
//     bold: true,
//           alignment: 'justify',
//           italic: true
//   }
// }
//   };
//   // pdfMake.createPdf(docDefinition).open();
//   pdfMake.createPdf(docDefinition).getDataUrl(function (outDoc) {
//       alert('inside create pdf javascript')
//       document.getElementById('pdfV').src = outDoc;
//       });
//   // })
    
// });
// }

// showPdf();
