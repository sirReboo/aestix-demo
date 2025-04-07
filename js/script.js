document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("operation-type").addEventListener("change", function() {

        var operationType = this.value;

        document.getElementById("hair-options").classList.add("hidden");
        document.getElementById("nose-skin-options").classList.add("hidden");

        if (operationType === "sac") {
            document.getElementById("hair-options").classList.remove("hidden");
        } else if (operationType === "burun" || operationType === "cilt") {
            document.getElementById("nose-skin-options").classList.remove("hidden");
        }
    });
});