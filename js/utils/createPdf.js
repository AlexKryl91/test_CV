export default function createPdf(targetNode) {
  const opt = {
    margin: 0,
    filename: 'test_CV.pdf',
    image: { type: 'jpeg', quality: 1 },
    html2canvas: {
      scale: 2,
      width: targetNode.clientWidth,
      height: targetNode.clientHeight,
      x: (window.innerWidth - targetNode.clientWidth) / 2,
    },
    jsPDF: {
      unit: 'px',
      hotfixes: ['px_scaling'],
      format: [targetNode.clientWidth, targetNode.clientHeight],
      orientation: 'portrait',
      putOnlyUsedFonts: true,
    },
  };

  html2pdf().set(opt).from(targetNode).save();
}
