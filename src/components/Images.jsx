import React, { useState } from 'react';

const Images = () => {
    const initialImages = [
        { id: 1, url: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/20/1960272/1.jpg?6211" },
        { id: 2, url: "https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/20/1960272/2.jpg?6211" },
        { id: 3, url: "https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/20/1960272/3.jpg?6211" },
        { id: 4, url: "https://ng.jumia.is/cms/external/pet/RE584MP3N3KCBNAFAMZ/325aa6e55c843614b96a492da7f44061.jpg" },
        { id: 5, url: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/20/1960272/1.jpg?6211" },
    ];

    const [selectedImageUrl, setSelectedImageUrl] = useState(
        "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/20/1960272/1.jpg?6211"
    );

    const handleUrl = (id) => {
        const newImage = initialImages.find((image) => image.id === id);
        setSelectedImageUrl(newImage.url);
    };

    const Styles = {
        container: {
            display: "flex",
            justifyContent: "space-evenly",
        },
        img: {
            cursor: "pointer",
            width: "50px", // Set the width according to your needs
            height: "50px", // Set the height according to your needs
        },
    };

    return (
        <>
            <div>
                <h1>Image gallery</h1>
                <img src={selectedImageUrl} alt="" />
            </div>

            <div style={Styles.container}>
                {initialImages.map((image) => (
                    <img
                        onMouseOver={() => handleUrl(image.id)}
                        style={Styles.img}
                        key={image.id}
                        src={image.url}
                        alt=""
                    />
                ))}
            </div>
        </>
    );
};

export default Images;
