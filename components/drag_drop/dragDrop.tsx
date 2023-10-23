export const getItemStyle = (isDragging: any, draggableStyle: any, isCorrect: boolean) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: 0,
    margin: 5,
    borderRadius: 5,

    // change background colour if dragging
    background: isDragging ? "lightgreen" : "white",
    color: "black",
    // background: isDragging ? "lightgreen" : isCorrect ? "var(--sciquel-primary)" : "white",
    // color: isDragging ? "black" : isCorrect ? "white" : "black",

    // styles we need to apply on draggables
    ...draggableStyle,
});
export const getListStyle = (isDraggingOver: any) => ({
    background: "var(--teal-light)",
    padding: 2,
    borderRadius: 5,
});

export const reorderList = (array: any, event: any) => {
    const new_index = event.destination.index;
    const old_index = event.source.index;
    if (event.destination) {
        if (new_index >= array.length) {
            var k = new_index - array.length + 1;
            while (k--) {
                array.push(undefined);
            }
        }
        array.splice(new_index, 0, array.splice(old_index, 1)[0]);
    }
};
