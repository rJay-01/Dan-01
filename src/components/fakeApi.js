// src/fakeApi.js
export const getGalleryItems = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
        { id: 1, title: 'Delkevic', img: '../images/del.jpg' },
        { id: 2, title: 'Kingu', img: '../images/kingu.jpg' },
        { id: 3, title: 'Kzr', img: '../images/kzr.jpg' },
        ]);
      }, 1000); // Simulates a 1-second delay
    });
  };
  