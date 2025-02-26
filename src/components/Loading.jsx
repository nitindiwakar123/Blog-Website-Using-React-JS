import {Logo} from "./index";

function Loading() {
    return (
        <div className="w-full h-screen flex justify-center items-center bg-custom-white-2 overflow-hidden">
            <div className="w-full h-full pt-20 pb-12 grid grid-rows-2 justify-items-center">
                <div className="w-2/6 flex justify-center items-end">
                    <div className="w-full flex justify-center items-center">
                        <div className="w-28 h-28 rounded-full relative animate-rotate">
                            <div
                                className="absolute inset-0 border-[10px] border-custom-purple rounded-full animate-prixClipFix"
                            ></div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-end">
                    <Logo className="text-black"/>
                </div>
            </div>
        </div>
    );
}

export default Loading;