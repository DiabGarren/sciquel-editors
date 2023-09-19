/* eslint-disable react/jsx-key */
export default function TopSection(props: any) {
    const handleDrp = (dropdown: string) => {
        let drp = document.querySelector(dropdown);
        drp?.classList.toggle("hidden");
        drp?.classList.toggle("flex");
    };

    const displayTypes = (typeArray: any[]) => {
        let types = typeArray.map((type: string) => {
            return (
                <button
                    className="text-left hover:bg-blue-light px-[5px] py-[2px]"
                    onClick={() => {
                        props.setMediaType({type});
                        handleDrp(".MediaType-drp");
                    }}
                >
                    {type}
                </button>
            );
        });
        return types;
    };

    return (
        <div>
            <div className="relative">
                Media Type
                <div>
                    <input
                        className="MediaType inline w-[250px] rounded border-[1px] cursor-pointer px-[5px]"
                        value={props.mediaType}
                        onClick={() => handleDrp(".MediaType-drp")}
                        readOnly
                    />
                </div>
                <div className="MediaType-drp flex-col absolute w-[250px] rounded border-[1px] bg-white z-10 hidden">
                    {displayTypes(props.mediaTypes)}
                </div>
            </div>
            <div className="relative">
                Article Type
                <div>
                    <input
                        className="ArticleType inline w-[250px] rounded border-[1px] cursor-pointer px-[5px]"
                        value={props.articleType}
                        onClick={() => handleDrp(".ArticleType-drp")}
                        readOnly
                    />
                </div>
                <div className="ArticleType-drp flex-col absolute w-[250px] rounded border-[1px] bg-white z-10 hidden">
                {displayTypes(props.articleTypes)}
                </div>
            </div>
        </div>
    );
}
