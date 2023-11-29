const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id, width, height) =>
  `/img/property/property-${id}.jpg`;

const unsplashPhotos = [
  { id: "1", width: 1080, height: 800 },
  { id: "2", width: 1080, height: 1620 },
  { id: "3", width: 1080, height: 720 },
  { id: "4", width: 1080, height: 721 },
  { id: "5", width: 1080, height: 1620 },
  { id: "6", width: 1080, height: 607 },
  { id: "7", width: 1080, height: 608 },
  { id: "8", width: 1080, height: 720 },
  { id: "9", width: 1080, height: 1549 },
  { id: "10", width: 1080, height: 720 },
  { id: "11", width: 1080, height: 694 },
  { id: "12", width: 1080, height: 1620 },
  { id: "13", width: 1080, height: 720 },
  { id: "14", width: 1080, height: 1440 },
  { id: "15", width: 1080, height: 1620 },
  { id: "16", width: 1080, height: 810 },
  { id: "17", width: 1080, height: 610 },
  { id: "18", width: 1080, height: 160 },
  { id: "19", width: 1080, height: 810 },
  { id: "20", width: 1080, height: 720 },
  { id: "21", width: 1080, height: 1440 },
];

const photos = unsplashPhotos.map((photo) => ({
  src: unsplashLink(photo.id, photo.width, photo.height),
  width: photo.width,
  height: photo.height,
  srcSet: breakpoints.map((breakpoint) => {
    const height = Math.round((photo.height / photo.width) * breakpoint);
    return {
      src: unsplashLink(photo.id, breakpoint, height),
      width: breakpoint,
      height,
    };
  }),
}));

export default photos;
