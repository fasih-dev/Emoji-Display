import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmoji } from "../features/emojiSlice";

const EmojiView = () => {
    const emojis = useSelector((state) => state.emoji);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchEmoji());
    }, [dispatch]);

    return (
        <div>
            <div>Emoji View</div>

            {emojis.loading && (
                <div className=" text-primary">
                    Loading...
                </div>
            )}

            <div className="justify-center mx-auto py-10 px-40 text-center	">
                {emojis.emoji.map((getEmoji, index) => (
                    <ul key={index} className="font-semibold">
                        <li>{index + 1}</li>
                        <li className="font-semibold bg-slate-300">Name</li>
                        <li>{getEmoji.name}</li>
                        <li className="bg-slate-300">Category</li>
                        <li>{getEmoji.category}</li>

                    </ul>
                ))}
            </div>
        </div>
    );
};

export default EmojiView;
