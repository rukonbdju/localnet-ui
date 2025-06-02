'use client';
import { AlertIcon, EventIcon } from "@/components/icons/Icons";
import Container from "@/components/shared/Container";
import Modal from "@/components/shared/Modal";
import Image from "next/image";
import { useState, ReactNode } from "react";
import FeedForm from "./FeedForm";

const CreateNew = (): ReactNode => {
    const [isOpen, setIsOpen] = useState(false)
    const [content, setContent] = useState('')
    return (
        <Container>
            <section className="flex flex-row gap-2 text-sm">
                <div>
                    <div className="size-10 rounded-full ring">
                        <Image src={"/avater-male.jpg"} width={40} height={40} alt="avatar" className="size-full rounded-full object-cover" />
                    </div>
                </div>
                <span onClick={() => setIsOpen(true)} className="block cursor-pointer font-medium w-full hover:bg-gray-200 rounded border py-2 px-4">Post new feed...</span>
            </section>
            <section className="flex flex-wrap justify-end items-center gap-2 mt-4">
                <div>
                    <button className="flex flex-row items-center gap-1 hover:bg-blue-300 bg-blue-200 rounded px-4 py-1 cursor-pointer">
                        <EventIcon />
                        <span>Event</span>
                    </button>
                </div>
                <div>
                    <button className="flex flex-row items-center gap-1 hover:bg-blue-300 bg-blue-200  rounded px-4 py-1 cursor-pointer">
                        <AlertIcon />
                        <span>Alert</span>
                    </button>
                </div>
            </section>
            <Modal
                isOpen={isOpen}
                title="Create new Feeds"
                body={<FeedForm content={content} setContent={setContent} />}
                footer={<button>Create</button>}
            />

        </Container>
    )
}

export default CreateNew;