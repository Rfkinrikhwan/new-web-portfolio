import { useState } from 'react';

interface ProjectLogoProps {
    src: string;
    title: string;
    className?: string;
}

export default function ProjectLogo({ src, title, className }: ProjectLogoProps) {
    const [isError, setIsError] = useState(false);

    if (isError || !src || src === '') {
        return (
            <div className={`flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 font-bold text-xl rounded-lg border border-gray-200 dark:border-gray-700 ${className}`}>
                {title.charAt(0)}
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={`${title} logo`}
            width="64"
            height="64"
            className={`object-cover ${className}`}
            onError={() => setIsError(true)}
        />
    );
}
