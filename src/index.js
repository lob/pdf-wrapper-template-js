/**
 * 
 * @param {string} pathToPDFFile - The path to a pdf file
 * @param {number} fileInfo - A binary represenation of the attributes required to render the PDF.
 * You can choose which LSB represents which characteristic (annotation, encryption, search)
 * @returns {PDFWrapper} - A PDFWrapper that wraps a selected PDF rendering engine
 */
 export function renderPDF(pathToPDFFile, fileInfo) {
  // Implementation goes here. You can leave it in this file or move it elsewhere
  const pdfWrapper = {
    engineName: 'SoSoPDFEngine'
  };
  return pdfWrapper;
}

// Feel free to use or remove this run function
function run() {
  console.info('Hello from the index file')
}

run();