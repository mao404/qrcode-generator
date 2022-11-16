const QRCode = require("qrcode");
const { createCanvas, loadImage } = require("canvas");
async function create(dataForQRcode, center_image, width, cwidth) {
  const canvas = createCanvas(width, width);
  QRCode.toCanvas(
    canvas,
    dataForQRcode,
    {
      errorCorrectionLevel: "H",
      margin: 1,
      color: {
        dark: "#000",
        light: "#FFF",
      },
    }
  );

  const ctx = canvas.getContext("2d");
  const img = await loadImage(center_image);
  const center = (width - cwidth) / 2;
  ctx.drawImage(img, center, center, cwidth, cwidth);
  return canvas.toDataURL('image/png');
}

// IMG TO BASE 64
// https://codebeautify.org/image-to-base64-converter

async function main() {
  const url = 'linkedin url here'
  const base64 = 'iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAPzAAAD8wF1XGupAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAANJQTFRF////AG22AIC/AHW1AHq4AH27AHq5AHq5AHq6AHq5AHq5AHq5AHq5AHq5AHq5AHq5AHq5AHq5BHy6CH67CX+7C4C8DIC8DYG8D4K9E4O9Goe/HonAIYrBIovBLJDENZTGPJjHP5rIR53KTKDLUaLMWabOYKrQa6/SbbDTcLLTdrXVd7XVhr3ZiL7Zib7Zl8XdmMbdmcbdo8vfpczgps3grtHisdLjs9Pjt9XkuNblvdjmw9vn1OPr1eTr2Obs3Ojt4uru5uzv6e7w7PDx8PLy8fLygYYNQgAAABF0Uk5TAAcIGBktSYSXmMHI2uPy8/XVqDFbAAABIUlEQVQ4y4VT6ULCMAzuBvQYY1sU8Va8L2Qq3k48+/6vZGy7iWSj348czdc2TRPGKgRcRXGaxpHiAaNoywQqJLI9Fw5FBv+QiXA23uoCQbf1F+/0oAa9TrW/No4Md0Zoz19ZorfYPIRxxp9vR4QhzPtM/lvfWr8SQvb7WmnMwYfWDzQNifVz9dm7GW9TQhIwDgvBmbJGP8/zc1hHeTo4nrxc7ziCYpE11rTWz7CJ8vEJhf46tOsRi+cJDtO+WY9ZSgi3w7N3VPtmPaWE6TLACPWJI5Ar7tE7QD1yV5Ak79Abor50SarFBFUWqonAy1I3ELDU7rMaCLL67tWiKCawgfIKvV3UF+V3u4aphZhtuRq4lvM2rb/t/YPjHz3/8DaP/w/O0lQZAu+37AAAAABJRU5ErkJggg=='
  const qrCode = await create(
    `${url}`,
    `data:image/png;base64,${base64}`,
    150,
    40
  );

  console.log(qrCode);
}

main();

