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
                    if (con.checked && !contributors.includes(con.name)) {
                        contributors.push(con.name);
                        let imageSrc = "default_profile.svg";
                        if (con.image !== "") imageSrc = con.image;

                        let message;
                        if (con.message === "" || con.message === "<p><br></p>") {
                            message = `Acknowledgement for ${con.name}`;
                        } else message = parse(con.message);

                        types.push(
                            <div className="border border-grey-light-1 rounded-[15px] p-[20px] mb-[15px]">
                                <div
                                    className="flex mb-[15px] items-center"
                                    style={{
                                        fontFamily: alegreya_sans_sc.style.fontFamily,
                                        fontWeight: "700",
                                    }}>
                                    <h2 className="text-teal-dark text-[35px] font-[600] leading-[35px] mr-[10px]">
                                        {con.name}
                                    </h2>
                                    <Image
                                        src={`/images/${imageSrc}`}
                                        alt={`${con.name} profile picture`}
                                        height={60}
                                        width={60}
                                        className="rounded-[50%]"
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
