import { uploadDataList } from '../config.mjs';
import { fileUpload } from './fileUpload.mjs';

async function batchUploadFiles() {
  for (const data of uploadDataList) {
    await fileUpload(data);
  }
}

batchUploadFiles();
