import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAppDispatch } from "@/lib/store"
import { CirclePlus } from "lucide-react"
import { FormEvent } from "react"
import { createBucket } from "../../controller/bucket.controller"

export function DialogCreatBucket() {
    const dispatch = useAppDispatch();
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        try {
            const formData = new FormData(event.currentTarget)
            var req = formData.get("name") as string;
            dispatch(createBucket(req))
        } catch (error) {
            alert(error)
        }
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className='flex flex-row bg-green-500 p-2 rounded-md text-white text-sm items-center hover:bg-green-600'>
                    <CirclePlus className='w-5 mr-1' />
                    <div>
                        ເພີ້ມ
                    </div>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={onSubmit}>
                    <DialogHeader>
                        <DialogTitle>ສ້າງ Bucket ໃໝ່</DialogTitle>
                        <DialogDescription>
                            ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຖືກຕ້ອງ!
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                ຊື່ Bucket
                            </Label>
                            <Input
                                id="name"
                                name="name"
                                placeholder="ກະລຸນາປ້ອນຂໍ້ມູນ"
                                className="col-span-3"
                                required
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button type="submit">ບັນທຶກ</Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
