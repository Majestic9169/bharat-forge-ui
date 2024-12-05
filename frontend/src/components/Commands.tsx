import { DataStructure } from "@/types";
import { useEffect, useState } from "react";

interface CommandsProps {
    data: DataStructure;
    setInputText: React.Dispatch<React.SetStateAction<string>>;
}

export default function Commands({ data, setInputText}: CommandsProps) {
    const [display, setDisplay] = useState<string[]>([]);

    useEffect(() => {
        if (!data) return;
        const keys = Object.keys(data);
        const updated_keys = keys.map((key) => {
            const new_key = key.split('_').join(' ');
            return new_key;
        });
        setDisplay(updated_keys);
    }, [data]);

    return (
        <div className="overflow-x-hidden overflow-y-scroll modern-scrollbar relative">
            <h1 className="pt-4 pb-2 px-3 sticky top-0 bg-white z-10">
                Nearby Objects
            </h1>
            <div className="pt-4 px-3 pb-3">
                {display.map((key, index) => {
                    return (
                        <div
                            onClick={() => setInputText("Go to "+key)}
                            key={index}
                            className="flex justify-between items-center bg-gray-200 p-2 mb-2 hover:bg-gray-300 cursor-pointer"
                        >
                            <span>{key}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
