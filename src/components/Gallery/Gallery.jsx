import React from "react";
import Gallery from "react-photo-gallery";
import { photos } from "../../assets/demo";

export default function GalleryComponent() {

  return (
    <div>
      <Gallery photos={photos} />
    </div>
  );
}
