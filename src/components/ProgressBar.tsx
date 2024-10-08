'use client';

export type ProgressBarProps = {
    progress: number;
    progressText?: string;
};

const ProgressBar = ({progress, progressText}: ProgressBarProps) => {
    return (
        <div className="flex flex-col items-center justify-center w-full px-4 md:w-1/3">
            <h1 className="text-2xl lg:text-3xl">{progressText}</h1>
            <div className="mt-6 w-full border-2 border-indigo-700 h-6 rounded-md">
                <div
                    className="bg-indigo-500 h-full transition-all duration-250"
                    style={{width: `${progress}%`}}
                ></div>
            </div>
            <p>{progress.toFixed(2)}%</p>
        </div>
    );
};

export default ProgressBar;
