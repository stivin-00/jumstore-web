import React, { useEffect, useState } from "react";
import Resizer from "react-image-file-resizer";
import Alert from "../components/Alert";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import axios from "axios";

import { detailsProduct, updateProduct } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import { Avatar, Badge } from "antd";
import MessageBox from "../components/MessageBox";
import { PRODUCT_UPDATE_RESET } from "../constants/productConstants";

export default function ProducCreateScreen(props) {
  const productId = props.match.params.id;
  const [name, setName] = useState("");
  const [load, setLoad] = useState(false);
  const [price, setPrice] = useState("");
  const [image, setImage] = useState({});
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [description, setDescription] = useState("");
  const [data, setData] = useState({});
  const [loadi, setLoadi] = useState(false);
  const [imag, setImag] = useState({});

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successUpdate) {
      props.history.push("/productlist");
    }
    if (!product || product._id !== productId || successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      dispatch(detailsProduct(productId));
    } else {
      setName(product.name);
      setPrice(product.price);
      setImage(product.image);
      setCategory(product.category);
      setCountInStock(product.countInStock);
      setBrand(product.brand);
      setSize(product.size);
      setDescription(product.description);
    }
  }, [product, dispatch, productId, successUpdate, props.history]);
  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: dispatch update product
    dispatch(
      updateProduct({
        _id: productId,
        name,
        price,
        image,
        category,
        brand,
        size,
        countInStock,
        description,
      })
    );
  };
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState("");

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  // const uploadFileHandler = async (e) => {
  //   const file = e.target.files[0];
  //   const bodyFormData = new FormData();
  //   bodyFormData.append("image", file);
  //   setLoadingUpload(true);
  //   console.log("formdata", bodyFormData);
  //   try {
  //     const { data } = await Axios.post("/api/uploads", file, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //         Authorization: `Bearer ${userInfo.token}`,
  //       },
  //     });
  //     console.log("data", data);
  //     setImage(data);
  //     setLoadingUpload(false);
  //   } catch (error) {
  //     setErrorUpload(error.message);
  //     console.log("error", error);
  //     setLoadingUpload(false);
  //   }
  // };
  // file upload to cloudinary function
  const fileUploadAndResize = (e) => {
    console.log(e.target.files);
    // resize
    let file = e.target.files; // 3

    if (file) {
      setLoadi(true);
      for (let i = 0; i < file.length; i++) {
        Resizer.imageFileResizer(
          file[i],
          720,
          720,
          "JPEG",
          1000,
          0,
          (uri) => {
            console.log(uri);
            axios
              .post(`https://jumstore-store.herokuapp.com/api/uploads`, { image: uri })
              .then((res) => {
                console.log("IMAGE UPLOAD RES DATA", res);
                setLoadi(false);
                setImage(res.data);
              })
              .catch((err) => {
                setLoadi(false);
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
    setLoadi(true);
    console.log("remove image", public_id);
    axios
      .post(`https://jumstore-store.herokuapp.com/api/uploads/removeimage`, {
        public_id,
      })
      .then((res) => {
        console.log("u didid it", res);
        setLoadi(false);
        setImage({});
      });
    console.log("removed", data);
    // setData({});
    // setImage({}).catch((err) => {
    //   console.log(err);
    //   setLoad(false);
    // });
  };

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Create Product {productId}</h1>
        </div>
        {loadingUpdate && <LoadingBox></LoadingBox>}
        {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <input
                id="price"
                type="text"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></input>
            </div>
            {/* <div>
              <label htmlFor="image">Image</label>
              <input
                id="image"
                type="text"
                disabled={true}
                placeholder="Enter image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></input>
            </div> */}
            <div className="p-3">
              {/* file upload to cloudinary is here */}

              <div className="row">
              {loadi && <LoadingBox></LoadingBox>}
                {image && (
                  <Badge
                    count="X"
                    key={imag.public_id}
                    onClick={() => handleImageRemove(imag.public_id)}
                    style={{ cursor: "pointer"}}
                  >
                    <Avatar
                      
                      src={image.url}
                      size={50}
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

              {/* file upload to cloudinary ends here */}
            </div>
            <div>
              <label>select category</label>
              <select onChange={(e) => setCategory(e.target.value)}>
                <option value={category}>{category}</option>
                <option value="fruits">fruits</option>
                <option value="vegetables">vegetables</option>
                <option value="snacks">snacks</option>
                <option value="alcohol">alcohol</option>
                <option value="provisions">provisions</option>
                <option value="beverages">beverages</option>
                <option value="baking">baking</option>
                <option value="dairy">dairy</option>
                <option value="condiments'">condiments'</option>
                <option value="cans-&-jars">cans & jars</option>
                <option value="back-to-school">back-to-school</option>
                <option value="cleaning">cleaning</option>
                <option value="cleaning">cleaning</option>
                <option value="personal-care">personal care</option>
              </select>
            </div>
 
            <div>
              <label htmlFor="brand">Brand</label>
              <input
                id="brand"
                type="text"
                placeholder="Enter brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="size">Size</label>
              <input
                id="size"
                type="text"
                placeholder="Enter size e.g 1kg, 2litres, 4meters"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="countInStock">Count In Stock</label>
              <input
                id="countInStock"
                type="text"
                placeholder="Enter countInStock"
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                rows="3"
                type="text"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div>
              <label></label>
              <button className="primary" type="submit">
                Create
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
