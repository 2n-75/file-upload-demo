import { ChangeEvent, useState, VFC } from "react";
import styled from "styled-components";

export type Props = {};

export const FileUpload: VFC<Props> = () => {
  const [imageFilePath, setImageFilePath] = useState<string>();
  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.currentTarget.files;
    if (!fileList) {
      return;
    }
    setImageFilePath(URL.createObjectURL(fileList[0]));
  };

  return (
    <FileUploadWrapper>
      <div>
        <UploadButtonLabel>
          <UploadInput
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleFileSelect}
          />
          ファイルを選択
        </UploadButtonLabel>
      </div>

      {imageFilePath ? (
        <ImagePreview src={imageFilePath} alt="" />
      ) : (
        <NoImage />
      )}
    </FileUploadWrapper>
  );
};

const FileUploadWrapper = styled.div``;

const UploadInput = styled.input`
  opacity: 0;
  visibility: hidden;
  position: absolute;
`;

const UploadButtonLabel = styled.label`
  padding: 10px 25px;
  margin-bottom: 20px;
  background: #aaa;
  color: #fff;
  display: inline-block;
  cursor: pointer;
  border-radius: 2px;
`;

const ImagePreview = styled.img`
  margin: 0 auto;
  width: 80vw;
  height: 80vw;
  max-width: 400px;
  max-height: 400px;
  object-fit: contain;
`;

const NoImage = styled.div`
  margin: 0 auto;
  width: 80vw;
  height: 80vw;
  max-width: 400px;
  max-height: 400px;
  border: 1px dashed #aaa;
`;
