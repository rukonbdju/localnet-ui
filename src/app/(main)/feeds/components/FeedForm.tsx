import { Dispatch, ReactNode, SetStateAction } from "react";

type FeedFormProps = {
    content: string, setContent: Dispatch<SetStateAction<string>>
}

const FeedForm = ({ content, setContent }: FeedFormProps): ReactNode => {
    console.log(content)
    return (
        <div>
            <textarea
                placeholder="Write your thoughts..."
                onChange={(e) => setContent(e.target.value)}
                name="content"
                value={content}
                autoFocus={true}
                rows={5}
                className="w-full bg-gray-100 p-2 outline-0" />
        </div>
    )
}

export default FeedForm;