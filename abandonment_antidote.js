TRIGGER_TIME = "00:25" // 2020-11-28, LiChess turns the clock red around 37 seconds

// If the board is flipped, reverse the order of these two variables
var [opponent_clock, player_clock] = document.querySelectorAll(".time")

console.log("opponent_clock says: " + get_clock_text(opponent_clock))

opponent_clock.addEventListener("DOMSubtreeModified", (event) => {
    if (get_clock_text(opponent_clock) === TRIGGER_TIME) {
        document.querySelector(".moretime").click()
    }
})

function get_clock_text(clock) {
    return clock.innerText.replace(/(\r\n|\n|\r)/gm, "")
}