
import { Avatar } from "@/components/ui/avatar";
import { bucketSelector } from "@/features/bucket/controller/bucket.controller";
import { useAppDispatch } from "@/lib/store";
import { CloudHail } from "lucide-react";
import { useSelector } from "react-redux";


export default function Page({ params }: { params: { slug: string } }) {
    const dispatch = useAppDispatch();
    const bucketReducer = useSelector(bucketSelector);
    return (
        <div className="h-screen w-full flex flex-col justify-center items-center">
            Buget {params.slug}
            API-Key: {bucketReducer.BucketInfo?.bucket_key}
        </div>
    )
}