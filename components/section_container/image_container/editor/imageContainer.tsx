import { UploadButton } from "@/utils/uploadthing";
import { TrashIcon } from "@heroicons/react/20/solid";

export default function ImageContainerEditor(props: any) {
    return (
        <div className="border border-grey-light-1 rounded-md p-[10px]">
            <div className="flex">
                <h3>Image</h3>
                <TrashIcon
                    className="trash-icon ml-[10px]"
                    onClick={() => {
                        const sections: any[] = [];
                        props.section.forEach((section: any, index: number) => {
                            if (index !== props.index) sections.push(section);
                        });
                        props.setSection(sections);
                    }}
                />
            </div>
            <UploadButton
                appearance={{
                    button: "border-2 border-teal bg-teal rounded-[10px] hover:bg-white hover:text-teal",
                    container: "block w-fit mt-[7px]",
                    allowedContent: "text-center",
                }}
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                    console.log("Files: ", res);
                    if (res) {
                        props.setSection(
                            props.section.map((section: any, index: number) => {
                                if (index === props.index) {
                                    section.imageUrl = res[0].url;
                                }
                                return section;
                            })
                        );
                    }
                    alert("Upload Completed");
                }}
                onUploadError={(error: Error) => {
                    alert(`Error: ${error.message}`);
                }}
            />
            <h4>Size</h4>
            <div className="flex">
                <h5>Width:</h5>
                <input
                    className="border border-grey-light rounded w-[80px] ml-[5px] mr-[15px] pl-[2px]"
                    type="number"
                    value={
                        props.section[props.index].width === 0
                            ? ""
                            : props.section[props.index].width
                    }
                    onChange={(event) => {
                        props.setSection(
                            props.section.map((section: any, index: number) => {
                                if (index === props.index) {
                                    section.width =
                                        event.target.value === "" ? 0 : event.target.value;
                                }
                                return section;
                            })
                        );
                    }}
                />
            </div>
            <h4>Alt text</h4>
            <input
                className="border border-grey-light rounded"
                value={props.section[props.index].altText}
                onChange={(event) => {
                    props.setSection(
                        props.section.map((section: any, index: number) => {
                            if (index === props.index) {
                                section.altText = event.target.value;
                            }
                            return section;
                        })
                    );
                }}
            />
            <h4>Caption</h4>
            <input
                className="border border-grey-light rounded"
                value={props.section[props.index].caption}
                onChange={(event) => {
                    props.setSection(
                        props.section.map((section: any, index: number) => {
                            if (index === props.index) {
                                section.caption = event.target.value;
                            }
                            return section;
                        })
                    );
                }}
            />
            <h4>Credit</h4>
            <input
                className="border border-grey-light rounded"
                value={props.section[props.index].crefit}
                onChange={(event) => {
                    props.setSection(
                        props.section.map((section: any, index: number) => {
                            if (index === props.index) {
                                section.credit = event.target.value;
                            }
                            return section;
                        })
                    );
                }}
            />
            {/* <h4>URL Keywords</h4>
            <input
                className="border border-grey-light rounded"
                value={props.section[props.index].caption}
                onChange={(event) => {
                    props.setSection(
                        props.section.map((section: any, index: number) => {
                            if (index === props.index) {
                                section.caption = event.target.value;
                            }
                            return section;
                        })
                    );
                }}
            /> */}
        </div>
    );
}
