export const downloadCanvasToImage = () => {
  const canvas = document.querySelector("canvas");
  const dataURL = canvas.toDataURL(); // Mendapatkan data gambar dari canvas
  
  // Membuat elemen <a> untuk mendownload gambar
  const link = document.createElement("a");
  link.href = dataURL;
  link.download = "canvas.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Mengirim gambar ke WhatsApp
  const message = 'Hallo gan, saya mau request hasil desain customnya nih, berikut saya kirim gambar desainnya. Terimakasih banyak gan';
  const phoneNumber = '6285759328890'; // Ganti dengan nomor tujuan dalam format internasional
  const imageUrl = 'URL_GAMBAR_YANG_SUDAH_TERUNDUH'; // Ganti dengan URL gambar yang valid
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  
  // Membuka WhatsApp
  window.open(whatsappUrl, '_blank');
};

export const jasaDesain = () => {
  // Mengirim gambar ke WhatsApp
  const message = 'Hallo gan, bisa bikin saya desain topi kustom yang menarik?';
  const phoneNumber = '6285759328890'; // Ganti dengan nomor tujuan dalam format internasional
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  
  // Membuka WhatsApp
  window.open(whatsappUrl, '_blank');
};


export const reader = (file) =>
  new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = () => resolve(fileReader.result);
    fileReader.readAsDataURL(file);
  });

export const getContrastingColor = (color) => {
  // Remove the '#' character if it exists
  const hex = color.replace("#", "");

  // Convert the hex string to RGB values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Calculate the brightness of the color
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  // Return black or white depending on the brightness
  return brightness > 128 ? "black" : "white";
};
