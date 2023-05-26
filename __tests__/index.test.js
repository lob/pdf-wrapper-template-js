import { renderPDF } from '../src/index';

/**
 * Add additional unit tests here to ensure your code works properly for all use cases.
 * Adjust the structure of tests as suites your needs.
 * 
 * You do NOT need to test actually opening or manipulating a PDF document. Testing mock responses is perfect
 */
describe('renderPDF', () => {
  
  it('chooses BestPDFEngine if the file requires Annotation, Encryption and Search', () => {
    const fileInfoByte = 0b111;
    const pathToPDFFile = './example.pdf';
    const pdfWrapper = renderPDF(pathToPDFFile, fileInfoByte);
    expect(pdfWrapper.engineName).toEqual('BestPDFEngine');
    // Expect pdfWrapper.annotate() to work
    // Expect pdfWrapper.encrypt() to work
    // Expect pdfWrapper.search() to work
  });
});