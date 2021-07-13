export const imageShow = (src, theme) => {
  return (
    <img
      src={src}
      className="img-thumbnail"
      alt="uploaded pics"
      style={{ filter: theme ? "invert(1)" : "invert(0)" }}
    />
  );
};

export const videoShow = (src, theme) => {
  return (
    <video
      controls
      src={src}
      className="img-thumbnail"
      alt="uploaded pics"
      style={{ filter: theme ? "invert(1)" : "invert(0)" }}
    />
  );
};
