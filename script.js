document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");

    document.getElementById("open").addEventListener("click", function (e) {
        modal.style.display = "grid";
        history.pushState({ modalOpen: true }, "", "?modal=true");
        var fields = ["name", "email", "phone", "org", "mess"];
        fields.forEach(function (field) {
            const value = localStorage.getItem(field);
            if (value) {
                document.getElementById(field).value = value;
            }
        });
    });

    addEventListener("popstate", function (e) {
        modal.style.display = "none";
        history.pushState(null, "", window.location.pathname);
    });

    document.getElementById("close").addEventListener("click", function () {
        modal.style.display = "none";
        history.pushState(null, "", window.location.pathname);
    });

    document.getElementById("form").addEventListener("input", function () {
        var fields = ["name", "email", "phone", "org", "mess"];
        fields.forEach(function (field) {
            localStorage.setItem(field, document.getElementById(field).value);
        });
    });

    formcarry({
        form: "bPVbAl8kg4f",
        element: "#form",
        onSuccess: function(response){
            alert("Форма отправлена успешно!");
            modal.style.display = "none";
            history.pushState(null, "", window.location.pathname);
            var fields = ["name", "email", "phone", "org", "mess"];
            fields.forEach(function (field) {
                localStorage.removeItem(field);
            });
        },
        onError: function(error){
            alert("Произошла какая-то ошибка при отправке формы, попробуйте позже")
        }
      });
});