/* eslint-disable react/jsx-key */
import { alegreya_sans_sc } from "@/utils/fonts";
import Image from "next/image";
import parse from "html-react-parser";

export default function AcknowledgementsPreview(props: any) {
    const displayContributors = () => {
        const types: any[] = [];
        const contributors: any[] = [];
        props.contributors.forEach((type: any) => {
            if (type.checked) {
                type.contributors.forEach((con: any) => {
                    if (!contributors.some((e: any) => e.id === con.id)) {
                        contributors.push(con);
                        let imageSrc = "default_profile.svg";
                        if (con.image !== "") imageSrc = con.image;

                        let message;
                        if (con.message === "" || con.message === "<p><br></p>") {
                            message = `Acknowledgement for ${con.name}`;
                        } else message = parse(con.message);

                        types.push(
                            <div className="border border-grey-light-1 rounded-[15px] p-[10px] md:p-[20px] mb-[7px] md:mb-[15px] lr:w-[405px] xl:w-[650px] mx-auto">
                                <div
                                    className="flex mb-[7px] md:mb-[15px] items-center"
                                    style={{
                                        fontFamily: alegreya_sans_sc.style.fontFamily,
                                        fontWeight: "700",
                                    }}>
                                    <h2 className="text-teal-dark text-[1.5rem] md:text-[2rem] font-[600] mr-[10px]">
                                        {con.name}
                                    </h2>
                                    <Image
                                        src={`/images/${imageSrc}`}
                                        alt={`${con.name} profile picture`}
                                        height={60}
                                        width={60}
                                        className="rounded-[50%] w-[45px] md:w-[60px]"
                                    />
                                </div>
                                <div>
                                    <p>{message}</p>
                                </div>
                            </div>
                        );
                    }
                });
            }
        });
        return types;
    };
    return displayContributors();
}
