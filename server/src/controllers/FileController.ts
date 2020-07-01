import { JsonController, UploadedFile, Post } from 'routing-controllers'

/**
 * 上传文件
 */
@JsonController("/files")
export class FileController {

    @Post("/uploadfile")
    saveFile(@UploadedFile("file", { options: { dest: '/uploads/' } }) file: any) {
        const { originalname, size } = file
        return { code: 1000, data: { originalname, size } }
    }
}