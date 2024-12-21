import React, { useRef } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const PdfGenerator = () => {
    const printRef = useRef();

    const generatePDF = async () => {
        const element = printRef.current;
        const canvas = await html2canvas(element);
        const data = canvas.toDataURL('image/png');

        const pdf = new jsPDF();
        const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

        pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('document.pdf');
    };

    return (
        <div>
            <div ref={printRef} style={{ width: '210mm', height: '297mm', padding: '20mm' }}>
                <h1>Hello World</h1>
                <p>This is a PDF document generated from React.</p>
            </div>
            <button onClick={generatePDF}>Generate PDF</button>
        </div>
    );
};

export default PdfGenerator;
