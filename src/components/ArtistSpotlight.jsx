function ArtistSpotlight () {
      const artists = [
    {
      name: 'Origin Axie',
      bio: '$10,000',
      img: '../images/axie4.png',
    },
    {
      name: 'Xmas Axie',
      bio: '$5,000',
      img: '../images/axie5.png',
    },
  ];

  return (
    <section id="artist" className="py-10 bg-[#110620]">
      <div className="container mx-auto text-center">
        <h2 className="text-6xl font-bold m-20 text-[#EEE2DE] underline underline-offset-8px">Other Axies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {artists.map((artist, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <img src={artist.img} alt={artist.name} className="w-32 h-32 mx-auto rounded-full object-cover mb-4" />
              <h3 className="text-xl font-bold">{artist.name}</h3>
              <p className="text-gray-600 mt-2">{artist.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtistSpotlight;
