const app = new Vue({
    el: "#app",
    data: {},
    methods: {
        hamburgerMenu() {

            const x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += "responsive";
            } else {
                x.className = "topnav";
            }
        }
    },
});