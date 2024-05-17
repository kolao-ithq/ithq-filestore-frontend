"use client"
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { bucketSelector, getBucketInfo, uploadFile } from "@/features/bucket/controller/bucket.controller";
import { UploadFilePayload } from "@/features/bucket/model/upload_file";
import { useAppDispatch } from "@/lib/store";
import { CloudHail } from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


export default function Page({ params }: { params: { slug: string } }) {
    const dispatch = useAppDispatch();
    const bucketReducer = useSelector(bucketSelector);
    const [file, setFile] = useState<File>()
    useEffect(() => {
        dispatch(getBucketInfo(params.slug))
    }, [dispatch]);

    const onSubmitFile = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!file) return
        const data = new FormData()
        data.set('FILES', file)
        data.set('BUCKET', params.slug)
        const payload = {
            formData: data,
            apiKey: bucketReducer.BucketInfo?.bucket_key
        } as UploadFilePayload
        dispatch(uploadFile(payload))
    }
    return (
        <div className="h-screen w-full flex flex-col justify-center items-center">
            Buget {params.slug}
            API-Key: {bucketReducer.BucketInfo?.bucket_key}
            <div className='p-8 flex flex-col'>
                <form onSubmit={onSubmitFile}>
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
                            <h1 className='p-4'>
                                Multi Files
                            </h1>
                        </div>
                        <Button type={"submit"}>
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}