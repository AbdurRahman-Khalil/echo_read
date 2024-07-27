
export const ContactInfo = ({ contactInfoIcon, href, contactInfoText }) => {
    return (
        <p className="flex items-center gap-1.5">
            {contactInfoIcon}
            <a href={href} target="_blank" className="hover:text-sky-500 hover:dark:text-sky-300 duration-200 ease-linear">
                {contactInfoText}
            </a>
        </p>
    );
};
