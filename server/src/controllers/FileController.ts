import { JsonController, UploadedFile, Post } from 'routing-controllers'

/**
 * 上传文件
 */
@JsonController()
export class FileController {

    @Post("/uploadfile")
    saveFile(@UploadedFile("file", { required: true }) file: File) {

    }
}