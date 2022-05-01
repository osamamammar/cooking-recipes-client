import { useEffect } from "react";
import { useState } from "react";

const useSelectedImage = () => {
  const [selectedFile, setSelectedFile] = useState("");
  const [preview, setPreview] = useState();
  const [imageBase64, setImageBase64] = useState();

  const onSelectFile = async (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // select first image
    setSelectedFile(e.target.files[0]);
  };

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const toBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    async function Main() {
      const img = await toBase64(selectedFile);
      setImageBase64(img);
    }
    Main();

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  return { selectedFile, preview, setPreview, onSelectFile, imageBase64 };
};

export default useSelectedImage;
