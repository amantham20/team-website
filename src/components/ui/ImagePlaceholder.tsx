import React from 'react';

interface ImagePlaceholderProps {
  className?: string;
  text?: string;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ className, text = "Image Placeholder" }) => {
  return (
    <div className={`aspect-[16/9] bg-gray-800/50 rounded-xl border border-white/10 flex items-center justify-center text-gray-400 font-medium ${className}`}>
      {text}
    </div>
  );
};

export default ImagePlaceholder;
