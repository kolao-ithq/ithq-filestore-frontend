import { Avatar } from "@/components/ui/avatar";
import { CloudHail } from "lucide-react";


export default function Page({ params }: { params: { slug: string } }) {
    return (
        <div className="h-screen w-full flex flex-col justify-center items-center">
            Buget {params.slug}
        </div>
    )
}