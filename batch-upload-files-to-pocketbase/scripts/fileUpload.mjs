import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import PocketBase from 'pocketbase';
import {IMAGE_KEY, PB_COLLECTION, PB_URL, UPLOAD_DIR, IMAGE_KEY2} from '../config.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pb = new PocketBase(PB_URL);
pb.autoCancellation(false);

export async function fileUpload(fileInfo) {
    const UPLOAD_PATH = path.resolve(__dirname, `../${UPLOAD_DIR}`);

    try {
        const formData = new FormData();
        let fileName = '';

		for (const [key, value] of Object.entries(fileInfo)) {
			if (key === IMAGE_KEY || key === IMAGE_KEY2) {
				// value가 배열인지 확인합니다.
				if (Array.isArray(value)) {
					// value가 배열일 경우 각각의 파일 이름에 대해 Blob 객체를 생성하고 formData에 추가합니다.
					for (const fileName of value) {
						formData.append(key, new Blob([fs.readFileSync(path.resolve(UPLOAD_PATH, fileName))]), fileName);
					}
				} else {
					// value가 배열이 아닐 경우 기존 로직대로 처리합니다.
					const fileName = `${value}`;
					formData.append(key, new Blob([fs.readFileSync(path.resolve(UPLOAD_PATH, value))]), fileName);
				}
			} else {
				formData.append(key, value);
			}
		}

		await pb.collection(PB_COLLECTION).create(formData);
		console.log(`-----------------------------------------`);
		console.log(`${fileName} 업로드 완료!`);
		console.log(`-----------------------------------------`);
	} catch (error) {
		console.error(error);
	}
}
