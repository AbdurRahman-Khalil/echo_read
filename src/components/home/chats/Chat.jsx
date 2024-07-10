import { useRef } from "react";
import { Formik, Form, Field } from "formik";

import { Contact } from "./Contact";
import { Button } from "../../custom_components/Button";

import megan_hanson from "../../../assets/megan_hanson.jpg";

import { IoClose } from "react-icons/io5";
import { BsFileEarmarkText } from "react-icons/bs";
import { TbSend2 } from "react-icons/tb";
import { Message } from "../../custom_components/Message";



const initialValues = {
    file: "",
    message: "",
};

const onSubmit = values => {
    console.log("Following Data has been submitted successfully ", values);
};


export const Chat = () => {
    const fileRef = useRef();

    return (
        <div id="chat" className="fixed top-0 left-0 w-full min-h-dvh bg-slate-50 dark:bg-slate-950 p-0.5 pl-1 max-[785px]:pl-0 text-slate-800 dark:text-slate-100 font-semibold dark:font-medium z-40">
            <div className="ml-[13.22rem] dark:ml-[13.05rem] max-[785px]:ml-0 max-[785px]:dark:ml-0 -mt-[0.1rem] -mr-0.5 pt-[4.16rem] min-h-dvh flex flex-col bg-slate-200 dark:bg-slate-800">
                <div className="border-b-2 border-b-slate-900/20 py-[0.1rem] dark:border-b-slate-50/20 bg-slate-50 dark:bg-slate-950 flex justify-between items-center">
                    <Contact
                        addStyles={"pl-3 dark:pl-3.5 max-[785px]:pl-3 pt-2 pb-2.5"}
                        peopleImg={megan_hanson}
                        peopleName={"Megan Hanson"}
                        addPeopleImgStyles={"max-w-12"}
                        addPeopleNameStyles={"text-[1.05rem] max-[456px]:text-[1.02rem]"}
                    />

                    <IoClose
                        className="text-[1.9rem] mb-1 mr-2 cursor-pointer"
                    />
                </div>

                <div id="messages" className="flex-1 mb-4 px-5 max-[456px]:px-3.5 overflow-y-auto max-h-[68%]">
                    <div className="space-y-5">
                        <div id="sender" className="mt-3">
                            <Message styles={"rounded-ss-none"} messageText={"Hello! how are you doing?"} />
                        </div>
                        <div id="receiver" className="mt-3.5 mb-0.5">
                            <Message styles={"rounded-ee-none ml-auto"} messageText={"Oohhh, Hi! i'm fine, what about you?"} />
                        </div>
                    </div>
                </div>

                <div id="send-msg" className="min-h-14 w-full fixed bottom-1 left-0">
<Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
>
    {(formik) => (
        <Form className="flex items-center">
            <div className="flex items-center w-full ml-[14.28rem] dark:ml-[14.08rem] max-[785px]:ml-[0.85rem] max-[785px]:dark:ml-[0.8rem] dark:pl-[0.1rem] py-0.5 bg-slate-50 dark:bg-slate-950 ring-2 ring-slate-400/60 dark:ring-slate-700/70 rounded-lg">
                <BsFileEarmarkText
                    className="text-[1.95rem] mr-2 ml-[0.33rem] cursor-pointer"
                    onClick={() => fileRef.current.click()}
                />
                <input
                    ref={fileRef}
                    className="hidden"
                    type="file"
                    id="file"
                    onChange={e => {
                        formik.setFieldValue("file", e.target.files[0]);
                    }}
                />
                <Field
                    className="py-3 pr-3 bg-transparent flex-1 font-semibold dark:font-medium placeholder:font-medium rounded-lg outline-none"
                    type="text"
                    name="message"
                    id="message"
                    placeholder="Type message..."
                />
            </div>
            <Button
                btnType={"submit"}
                addStyles={"mr-2.5 ml-[0.8rem] dark:mr-3 dark:ml-[0.85rem] max-[785px]:mr-[0.73rem]"}
                btnText={<TbSend2 className="text-[3.1rem] pr-[0.55rem] p-[0.5rem]" />}
            />
        </Form>
    )}
</Formik>
</div>
            </div>
        </div>
    );
};
































