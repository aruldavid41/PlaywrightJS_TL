
function launchBrowser(browsername) {
    if (browsername === "Chrome") {
        console.log("Launching chrome browser")
    } else if (browsername === "Firefox") {
        console.log("launching firfox browser")

    } else if (browsername === "edge") {
        console.log("launching the edge browser")
    } else {
        console.log(" - nothing launched")

    }
}

function runTests(testtype) {
    switch (testtype) {
        case "Smoke":
            console.log("Running Smoke")
            break;

        case "Sanity":
            console.log("Running Sanity")
            break;

        case "Regression":
            console.log("Running Regression")
            break;

        default:
            console.log("Test run not working")
    }



}

launchBrowser("edge")
runTests("Smoke")