import { convertToBase64 } from "./convertToBase64";

export const handleFileUpload = async (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  if (e.target.files !== null) {
    const file = e.target.files[0];
    const base = await convertToBase64(file);
    return base;
  }
};
