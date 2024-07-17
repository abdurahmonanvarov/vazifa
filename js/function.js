function validate(fild, time) {
    if (fild.value.lenght < 5) {
        alert('Koproq malumat kiriting')
        fild.focus();

        return false;
    }

    if (!time.value) {
        alert('Toliq malumot kititing')
        time.focus();

        return false;
    }
    return true;
}

function getData() {
    let data = [];
    if (localStorage.getItem("todos")) {
        data = JSON.parse(localStorage.getItem("todos"));
    }
    return data;
}

function createItm(todo) {
    let isChek = todo.status == 'active' ? false : true;
    return `
     <div class="cover__icons__info">
                <div class="infos__chek">
                    <input id="chek" type="checkbox" ${isChek ? 'checked' : ''}>
                    <div class="infos">
                        <p style = "text-decoration: ${isChek ? "line-through" : "none"}">${todo.name[0].toUpperCase() + todo.name.slice(1)}</p>
                        <p>${todo.time}</p>
                    </div>
                </div>


                <div class="icons">
                    <span class = "delit" data-id"${todo.id}"><i class="fa-solid fa-trash"></i></span>
                    <span class = "delit"><i class="fa-solid fa-pen"></i></span>
                </div>
            </div>
 `;
}

function inactive(){
    if(isChek){

    }
}

export {validate, getData, createItm}