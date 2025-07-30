import axios from "axios";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "fiverr");

  try {
    const res = await axios.post("https://api.cloudinary.com/v1_1/dc3ytk5jo/upload", data);

    const { url } = res.data;
    
    console.log(url);
    return url;
  } catch (err) {
    console.log("error in upload");
    console.log(err);
  }
};

export default upload;