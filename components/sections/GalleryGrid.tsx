import React from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GalleryImage } from "@/data/types";

interface GalleryGridProps {
  images: GalleryImage[];
  title?: string;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({
  images,
  title = "Gallery",
}) => {
  return (
    <SectionWrapper background="light" id="gallery">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
          {title}
        </h2>
        <p className="text-lg text-text-muted max-w-2xl mx-auto">
          Glimpses of life at our preschool
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-shadow aspect-[4/3] bg-gray-200"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-6">
                <svg
                  className="w-16 h-16 text-gray-400 mx-auto mb-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm text-gray-500">{image.alt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
