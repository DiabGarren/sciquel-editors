/* eslint-disable react/jsx-key */
export default function TopSection(props: any) {
    const handleDrp = (dropdown: string) => {
        let drp = document.querySelector(dropdown);
        drp?.classList.toggle("hidden");
        drp?.classList.toggle("flex");
    };

    const displayTypes = (typeArray: any[], setType: any, typeDrp: string) => {
        let types = typeArray.map((type: string) => {
            return (
                <button
                    className="text-left hover:bg-blue-light px-[5px] py-[2px]"
                    onClick={() => {
                        setType(type);
                        handleDrp(typeDrp);
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
                    {displayTypes(props.mediaTypes, props.setMediaType, ".MediaType-drp")}
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
                {displayTypes(props.articleTypes, props.setArticleType, ".ArticleType-drp")}
                </div>
            </div>
        </div>
    );
}
