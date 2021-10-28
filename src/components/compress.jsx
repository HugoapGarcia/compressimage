import React, { useEffect, useState, useRef } from 'react';
import Axios from "axios";

import '../App.css';

const ComporessComponent = () => {
    const [useImage, setImage] = useState(null);
    const [useResizedImage, setResizedImage] = useState(null);

    const [useOrinial, setOriginal] = useState(null);
    const [useResized, setRisized] = useState(null);

    const [useSizeWidth, setSizeWidth] = useState(100);
    const [useSizeHeight, setSizeHeight] = useState(100);

    const newSizeWidthText = useRef(null);
    const newSizeHeightText = useRef(null);

    const originalDimText = useRef(null);
    const resizedDimText = useRef(null);

    const url = ' https://hugoapgarcia.github.io/structure/assets/focus.jpeg';


    useEffect(() => {
        getImage(url);
    })



    /**
     * 
     * @param {*} url 
     * @returns Bool 
     * @description Get image from spacific url return true if reques is a success or otherewise if not.
     */
    async function getImage(url) {

        try {
            //console.log("testing: " + url);
            await Axios.get(url, {
                timeout: 1900,
                responseType: "arraybuffer"
            })
                .then((res) => {
                    return res.data;
                })
                .catch((e) => console.log('%c[ERROR]: ', url, 'color:red'))
                .then((buf) => {
                    readImageDataFromURLAndConvertedAsDataURL(buf);
                    resizeImageProportionally(buf);
                })

            console.log("%cpass: " + url, "color: green");
            return true;
        } catch (_exception) {
            console.log("%cfail: " + url, "color: red");
            // console.log(exception);
            return false;
        }
    }

    /**
     * 
     * @param {*} e 
     * @description Set width/height for original & resize image file.
     */
    function compressTonewSizeHandler(e) {
        setSizeWidth(newSizeWidthText.current.value);
        setSizeHeight(newSizeHeightText.current.value);
    }

    /**
     * 
     * @param {*} data arraybuffer
     * @description Convert image to Blob and set state to be render in html.
     */
    function readImageDataFromURLAndConvertedAsDataURL(data) {
        let bytes = new Uint8Array(data);
        let blob = new Blob([bytes.buffer]);

        let reader = new FileReader();
        reader.onload = function (e) {
            setImage(e.target.result)
        };
        //readAsDataURL from blob data.
        reader.readAsDataURL(blob);
    }


    /**
     * 
     * @param {*} data arraybuffer
     * @description Convet image to Blob, calculate compress and resize image base
     * on width/height of user imput.
     */
    function resizeImageProportionally(data) {
        let bytes = new Uint8Array(data);
        let blob = new Blob([bytes.buffer]);

        let originalFile = blob;

        let reader = new FileReader();
        reader.onload = function (e) {
            const img = new Image();
            img.src = e.target.result;
            let [newWidth, newHeight] = calculateSize(img, useSizeWidth, useSizeHeight);

            const canvas = document.createElement("canvas");
            canvas.width = newWidth;
            canvas.height = newHeight;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, newWidth, newHeight);

            canvas.toBlob(
                (blob) => {
                    // Handle the compressed image. es. upload or save in local state
                    setOriginal(readableBytes(originalFile?.size));
                    setRisized(readableBytes(blob?.size));
                },
                'image/jpeg',
                0.7
            );
            setResizedImage(canvas.toDataURL());
        };
        //readAsDataURL from blob data.
        reader.readAsDataURL(blob);
    }

    /**
     * 
     * @param {*} img 
     * @param {*} maxWidth 
     * @param {*} maxHeight 
     * @returns {*} [width, height]
     * @description Return calculated size of width, height base on current image data 
     * and the new width, height from input.
     */
    function calculateSize(img, maxWidth, maxHeight) {
        let width = img.width;
        let height = img.height;

        // calculate the width and height, constraining the proportions
        if (width > height) {
            if (width > maxWidth) {
                height = Math.round((height * maxWidth) / width);
                width = maxWidth;
            }
        } else {
            if (height > maxHeight) {
                width = Math.round((width * maxHeight) / height);
                height = maxHeight;
            }
        }
        return [width, height];
    }

    /**
     * 
     * @param {*} bytes 
     * @returns {*} string size
     * @description Calculate image new size base on modified width, height from input. 
     */
    function readableBytes(bytes) {
        const i = Math.floor(Math.log(bytes) / Math.log(1024)),
            sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

        return (bytes / Math.pow(1024, i)).toFixed(2) + ' ' + sizes[i];
    }


    return (
        <>
            <div className="container">
                <div className="box">
                    <img ref={originalDimText} src={useImage} alt="original" />
                    <div className="label">Reg: {useOrinial} </div>
                    <img ref={resizedDimText} src={useResizedImage} alt="resized" />
                    <div className="label">Reg: {useResized} </div>
                </div>
                <div className="box">
                    <h5>Compressing & Resizing Image</h5>
                    <form>
                        <label htmlFor="fname">width:</label>
                        <input type="text" id="fname" name="width" ref={newSizeWidthText} placeholder="Enter px" />
                        <label htmlFor="lname">height:</label>
                        <input type="text" id="lname" name="height" ref={newSizeHeightText} placeholder="Enter px" />
                        <br />
                        <button
                            type="button" onClick={(e) => compressTonewSizeHandler(e)}>Resize</button>
                    </form>
                    <br />
                    <div className="description">
                        <p>Images Dimensions:</p>
                        <label>Original :  {originalDimText.current?.naturalWidth} X {originalDimText.current?.naturalHeight}</label>
                        <br />
                        <p>Image compressed & resized base on <span>width</span> x <span>height</span></p>
                        <label>Compressed/Resized :  {resizedDimText.current?.naturalWidth} X {resizedDimText.current?.naturalHeight}</label>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ComporessComponent;

