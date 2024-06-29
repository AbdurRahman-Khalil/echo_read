import { Chats } from "./chats/Chats";
import { Books } from "./books/Books";


export const Appt = () => {

    return (
        <section className="relative min-h-[100svh] pt-[4.26rem]">
            <div className="ml-[14.2rem]">
                <Books />
            </div>
            <Chats />
        </section>
    );
};
