import { JsonController, UploadedFile, Post } from 'routing-controllers'

/**
 * 上传文件
 */
@JsonController('/api/files')
export class FileController {
  @Post('/uploadfile')
  saveFile(@UploadedFile('file', { options: { dest: 'public/uploads/' } }) file: any) {
    const { originalname: originalName, size, path } = file
    return { code: 1000, data: { originalName, size, path } }
  }
}
