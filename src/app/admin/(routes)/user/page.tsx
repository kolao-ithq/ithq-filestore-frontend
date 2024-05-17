"use client"
import { Button } from '@/components/ui/button'
import { uploadFile } from '@/features/bucket/controller/bucket.controller';
import { UploadFilePayload } from '@/features/bucket/model/upload_file';
import { useAppDispatch } from '@/lib/store';
import React, { FormEvent, useState } from 'react'

export default function page() {
    const dispatch = useAppDispatch();

    const [file, setFile] = useState<File>()
    const [files, setFiles] = useState<File[]>([])
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!file) return
        try {
            const data = new FormData()
            files.forEach((file, index) => {
                data.append(`files`, file)
            })
            data.set('file', file)
            data.set('name', "Tia")
            const res = await fetch('http://127.0.0.1:3001/api/v1/file/uploads', {
                method: 'POST',
                body: data
            })
            // handle the error
            if (!res.ok) throw new Error(await res.text())
        } catch (e: any) {
            // Handle errors here
            console.error(e)
        }
    }

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e.target.files
        if (selectedFiles) {
            const filesArray: File[] = Array.from(selectedFiles)
            if (files.length == 0) {
                setFiles(filesArray)
            } else {
                setFiles((prevFiles) => [...prevFiles, ...filesArray]);
            }
        }
    }
    const onDeleteImage = (index: number) => {
        setFiles((prevFiles) => {
            const updatedFiles = [...prevFiles];
            updatedFiles.splice(index, 1);
            return updatedFiles;
        });
    };

    const onSubmitFile = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!file) return
        const data = new FormData()
        const payload = {
            apiKey: ""
        } as UploadFilePayload
        dispatch(uploadFile(payload))
    }
    return (
        
        <div className='p-8 flex flex-col'>
            <form onSubmit={onSubmit}>
                <h1 className='font-bold'>
                    Upload Image
                </h1>
                <div className='flex flex-col p-8'>
                    <div className='p-10'>
                        {file && (
                            <div className='mt-4'>
                                <h2 className='font-bold'>Selected Image:</h2>
                                <img src={URL.createObjectURL(file)} alt="Selected Image" />
                            </div>
                        )}
                        <h1 className='p-4'>
                            One File
                        </h1>
                        <input type="file" name="file" onChange={(e) => setFile(e.target.files?.[0])} />
                        <hr className='p-4' />
                        {files.length > 0 && (
                            <div className='mt-4'>
                                <h2 className='font-bold'>Selected Images:</h2>
                                {files.map((file, index) => (
                                    <div key={index}>
                                        <img src={URL.createObjectURL(file)} alt={`Selected Image ${index + 1}`} />
                                        <Button
                                            className='ml-2 p-1 bg-red-500 text-white rounded'
                                            onClick={() => onDeleteImage(index)}
                                        >
                                            Delete
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        )}
                        <h1 className='p-4'>
                            Multi Files
                        </h1>
                        <input type="file" name="files" onChange={onFileChange} multiple />
                    </div>
                    <Button type={"submit"}>
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    )
}
