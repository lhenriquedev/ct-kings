import SectionTitle from "@/components/SectionTitle";

import { galleryList, slidesList } from "@/constants";
import { useState } from "react";
import { PhotoAlbum } from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <section className="max-w-screen-xl px-4 py-16 mx-auto text-center">
      <div className="mb-12">
        <SectionTitle title="Galeria" />
      </div>

      <PhotoAlbum
        layout="rows"
        photos={galleryList}
        onClick={({ index }) => setIndex(index)}
        componentsProps={{
          imageProps: {
            className: "hover:grayscale transition-all object-cover",
          },
          containerProps: {
            className: "overflow-hidden",
          },
        }}
      />
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slidesList}
        plugins={[Slideshow, Thumbnails]}
      />
    </section>
  );
}
