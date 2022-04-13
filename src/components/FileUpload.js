import React, { useState, useEffect } from "react";
import Resizer from "react-image-file-resizer";
import axios from "axios";
import { useSelector } from "react-redux";
import { Avatar, Badge } from "antd";

const FileUpload = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState({});
  const { user } = useSelector((state) => ({ ...state }));

  const fileUploadAndResize = (e) => {
    console.log(e.target.files);
    // resize
    let file = e.target.files; // 3

    if (file) {
      setLoading(true);
      for (let i = 0; i < file.length; i++) {
        Resizer.imageFileResizer(
          file[i],
          720,
          720,
          "JPEG",
          100,
          0,
          (uri) => {
            console.log(uri);
            console.log(user);
            axios
              .post(
                `https://jumstore-store.herokuapp.com/api/uploads`,
                { image: uri },
                {
                  headers: {
                    authtoken: user ? user.token : "",
                  },
                }
              )
              .then((res) => {
                console.log("IMAGE UPLOAD RES DATA", res);
                setLoading(false);
                setImage(res.data);
                console.log(res.data.url);
              })
              .catch((err) => {
                setLoading(false);
                console.log("CLOUDINARY UPLOAD ERR", err.response);
              });
          },
          "base64"
        );
      }
    }
    // send back to server to upload to cloudinary
    // set url to images[] in the parent component state - ProductCreate
  };

  const handleImageRemove = (public_id) => {
    setLoading(true);
    // console.log("remove image", public_id);
    axios
      .post(
        `https://jumstore-store.herokuapp.com/api/uploads/removeimage`,
        { public_id },
        {
          headers: {
            authtoken: user ? user.token : "",
          },
        }
      )
     setData({})
     setImage({})
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="row">
        {image && (
          <Badge
            count="X"
            key={image.public_id}
            onClick={() => handleImageRemove(image.public_id)}
            style={{ cursor: "pointer" }}
          >
            <Avatar
              src={image.url}
              size={100}
              shape="square"
              className="ml-3"
            />
          </Badge>
        )}
      </div>
      <div className="row">
        <label className="btn btn-primary">
          Choose File
          <input
            type="file"
            multiple
            hidden
            accept="images/*"
            onChange={fileUploadAndResize}
          />
        </label>
      </div>
    </>
  );
};

export default FileUpload;
