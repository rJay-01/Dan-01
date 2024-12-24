import React, { useEffect, useState } from "react";

// Simulate fetching data from a fake API
const getGalleryItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: 'Delkevic', img: '../images/del.jpg' },
        { id: 2, title: 'Kingu', img: '../images/kingu.jpg' },
        { id: 3, title: 'Kzr', img: '../images/kzr.jpg' },
      ]);
    }, 1000); // Simulate an API call delay
  });
};

function Gallery() {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch gallery items from the fake API
    getGalleryItems()
      .then((data) => {
        setArtworks(data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to load artworks");
        setLoading(false);
        console.error("Error fetching artworks:", error);
      });
  }, []);

  if (loading) {
    return (
      <section id="gallery" className="py-10 bg-[#110620] text-center">
        <h2 className="text-6xl font-bold m-20 text-[#EEE2DE] underline underline-offset-8">
          Loading Top Rated Mags...
        </h2>
        <div className="spinner">Loading...</div> {/* Optional loading spinner */}
      </section>
    );
  }

  if (error) {
    return (
      <section id="gallery" className="py-10 bg-[#110620] text-center">
        <h2 className="text-6xl font-bold m-20 text-[#EEE2DE]">
          {error}
        </h2>
      </section>
    );
  }

  return (
    <section id="gallery" className="relative py-10 bg-[#110620]">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-[url('/images/image.jpeg')] bg-cover bg-center opacity-50"></div>

      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-6xl font-bold m-20 text-[#EEE2DE] underline underline-offset-8">
          Top Rated Mags
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artworks.map((art) => (
            <div key={art.id}>
              <img
                src={art.img}
                alt={art.title}
                className="w-full h-[300px] object-cover p-8"
              />
              <div className="p-4">
                <h2 className="font-bold text-white text-xl">{art.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
