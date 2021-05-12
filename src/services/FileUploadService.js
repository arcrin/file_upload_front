import http from '../http-common'

const upload = (file, onUploadProgress) => {
    const formData = new FormData()

    formData.append('file', file)

    return http.post('/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        onUploadProgress
    })
}

const getFiles = () => {
    return http.get('/files')
}

const getMACFile =  () => {
    http.get('/files/address.csv', {responseType: 'blob'})
        .then((res) => {
            const url = window.URL.createObjectURL(new Blob([res.data]))
            const link = document.createElement('a')
            link.href = url
            link.setAttribute('download', 'address.csv')
            document.body.appendChild(link)
            link.click()
        })


}

export default {
    upload,
    getFiles,
    getMACFile
}