export const checkImage = (file) => {
    let err = "";
    if (!file) {
      return (err = "File does not exist.");
    }
    //?1 mb
    if (file.size > 1024 * 1024) {
      return (err = "File size must be less than 1 Mb.");
    }
  
    if (file.type !== "image/jpeg" && file.type !== "image/png") {
      return (err = "Image must be jpeg or png.");
    }
  
    return err;
  };
  
  export const imageUpload = async (images) => {
    let imgArr = [];
    for (const item of images) {
      const formData = new FormData();
  
      if (item.camera) {
        formData.append("file", item.camera);
      } else {
        formData.append("file", item);
      }
      formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);
      formData.append("cloud_name", process.env.REACT_APP_CLOUD_NAME);
  
      const res = await fetch(process.env.REACT_APP_UPLOAD_URL,
        {
          method: "POST",
          body: formData,
        }
      );
  
      const data = await res.json();
      imgArr.push({ public_id: data.public_id, url: data.secure_url });
    }
    return imgArr;
  };
  