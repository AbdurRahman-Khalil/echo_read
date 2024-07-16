
export const Info = ({ infoIcon, infoText }) => {
    return (
        <div className="flex gap-2">
            {infoIcon}
            <p>{infoText}</p>
        </div>
    );
};
