const WindowCard = ({ title, children, className, width, height }) => {
    return (
        <div
            className={`max-w-${width} max-h-${height} bg-white rounded-lg border-black border-[3px] custom-box-shadow`}
        >
            <div className="flex items-center justify-between px-4 py-2 bg-gray-300p border-b-[3px] border-black rounded-t-lg">
                <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-white border-black border-[3px] rounded-full"></div>
                    <div className="w-4 h-4 bg-white border-black border-[3px] rounded-full"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
                <div></div>
            </div>
            <div className={className}>{children}</div>
        </div>
    );
};

export default WindowCard;
