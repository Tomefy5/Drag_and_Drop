const draggableItems = document.querySelectorAll(".draggable-item");
const dropZone = document.querySelector(".box-right")

for (let draggableItem of draggableItems) {
    draggableItem.addEventListener("dragstart", (e) => {
        let selected = e.target
        console.log(selected)

        dropZone.addEventListener("dragover", (e) => {
            e.preventDefault()
        })

        dropZone.addEventListener("drop", (e) => {
            dropZone.appendChild(selected)
            selected = null
        })
    })
}
