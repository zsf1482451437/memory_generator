import React, { useRef } from 'react';
import { createCn } from '@utils/cn';
import { useImages } from '@contexts/ImageContext';
import styles from './index.module.scss';

const cn = createCn(styles);

const TimelineInput: React.FC = () => {
  const { addImage, images } = useImages();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    // 清空现有图片，重新开始动画
    const startTime = new Date();

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = (e) => {
        const imageDataUrl = e.target?.result as string;
        const imageTime = new Date(startTime.getTime() + i * 1000); // 每张图片间隔1秒

        addImage({
          id: `img-${Date.now()}-${i}`,
          url: imageDataUrl,
          time: imageTime.toISOString()
        });
      };

      reader.readAsDataURL(file);
    }

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className={cn('container')}>
      <form className={cn('form')}>
        <div className={cn('input-group')}>
          <label htmlFor="image" className={cn('label')}>上传图片</label>
          <input
            ref={fileInputRef}
            type="file"
            id="image"
            accept="image/*"
            multiple
            className={cn('input')}
            onChange={handleFileChange}
          />
        </div>
      </form>
      <div className={cn('image-count')}>{images.length}</div>
    </div>
  );
};

export default TimelineInput;
