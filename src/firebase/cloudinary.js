export const uploadImageToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "ana-shop"); // tu preset
  const cloudName = "de8yhiqrq"; // tu Cloud name de Cloudinary

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await response.json();

   console.log("Respuesta Cloudinary:", data);

  if (!data.secure_url) throw new Error("No se recibió URL de Cloudinary");
  return data.secure_url;
};
