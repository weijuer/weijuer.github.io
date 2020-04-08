import { JsonController, UploadedFile, Post } from 'routing-controllers'

/**
 * 上传文件
 */
@JsonController("files")
export class FileController {

    @Post("/uploadfile")
    saveFile(@UploadedFile("file") file: any) {
        return file.name
    }
}