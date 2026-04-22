document.addEventListener("DOMContentLoaded", () => {
    let imgInput = document.getElementById("imageInput");
    let imgShow = document.getElementById("preview");
    let rUnit = document.getElementById("resizeUnit");
    let rwidth = document.getElementById("resizeWidth");
    let rpercent = document.getElementById("resizePercentage");
    let dimensions = document.getElementById("pixel-dimensions");
    let perdimension = document.getElementById("percentage-dimensions");
    let pxheight = document.getElementById("pixel-height-dimensions");
    let imgQuality = document.getElementById("quality");
    let qualValue = document.getElementById("quality-value");
    let resizeBtn = document.getElementById("resizeButton");
    let downloadBtn = document.getElementById("downloadButton");
    let imgDimensions = document.getElementById("image-dimensions");
    let action = document.getElementById("action-form");
    let imageResized = false;

    let updateQualVal = () => {
        qualValue.innerText = imgQuality.value;
    };
    updateQualVal();
    imgQuality.addEventListener("input", updateQualVal);

    imgInput.addEventListener("change", () => {
        let imgFile = imgInput.files[0];
        let readFile = new FileReader();
        readFile.onload = (e) => {
            imgShow.src = e.target.result;
            showActionForm();
            showImageDim(imgFile);
        };
        readFile.readAsDataURL(imgFile);
    });

    const showActionForm = () => {
        action.style.display = "block";
    };

    const showImageDim = (imgFile) => {
        const image = new Image();
        image.onload = () => {
            const width = image.width;
            const height = image.height;
            imgDimensions.innerText = `Image Dimensions: ${width} x ${height} pixels`;
        };
        image.src = URL.createObjectURL(imgFile);
    };

    const dimFieldsShow = () => {
        if (rUnit.value === "pixels") {
            dimensions.style.display = "block";
            pxheight.style.display = "block";
            perdimension.style.display = "none";
        } else {
            dimensions.style.display = "none";
            pxheight.style.display = "none";
            perdimension.style.display = "block";
        }
    };
    rUnit.addEventListener("change", dimFieldsShow);

    const updateDimensions = () => {
        if (rUnit.value === "pixels") {
            imgDimensions.innerText = `Image Dimensions: ${rwidth.value} x ${resizeHeight.value} pixels`;
        } else {
            const percentage = parseInt(rpercent.value);
            if (!isNaN(percentage)) {
                const width = (imgShow.width * percentage) / 100;
                const height = (imgShow.height * percentage) / 100;
                imgDimensions.innerText = `Image Dimensions: ${Math.round(width)} x ${Math.round(height)} pixels`;
            }
        }
    };

    resizeBtn.addEventListener("click", () => {
        if (imageResized) {
            return;
        }
        let wid;
        let height;

        if (rUnit.value === "percentage") {
            const percentage = parseInt(rpercent.value);
            if (isNaN(percentage) || percentage < 1 || percentage > 100) {
                alert(`Please enter a valid percentage (1-100).`);
                return;
            }
            wid = (imgShow.width * percentage) / 100;
            height = (imgShow.height * percentage) / 100;
            rwidth.value = wid;
            resizeHeight.value = height;
        } else {
            wid = parseInt(rwidth.value);
            height = parseInt(resizeHeight.value);
        }

        let imageQuality = parseInt(imgQuality.value) / 100;
        let canvas = document.createElement("canvas");
        let ctx = canvas.getContext("2d");
        let imageObj = new Image();
        imageObj.onload = () => {
            canvas.width = wid;
            canvas.height = height;
            ctx.drawImage(imageObj, 0, 0, wid, height);
            let resizedDataUrl = canvas.toDataURL("image/jpeg", imageQuality);
            let resizedImage = new Image();
            resizedImage.src = resizedDataUrl;
            imgShow.src = resizedDataUrl;
            downloadBtn.style.display = "inline-block";
            downloadBtn.href = resizedDataUrl;
            downloadBtn.download = "compressed-image.jpg";
            updateDimensions();
            imageResized = true;
        };
        imageObj.src = imgShow.src;
    });
});
