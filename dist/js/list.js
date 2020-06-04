//Book Constructor
class Video {
    constructor(name, vurl, comment) {
        this.name = name;
        this.vurl = vurl;
        this.comment = comment;
    }
}

//UI constructor
class UI {
    //add book list method
    addVideoToList(video) {
        const list = document.getElementById('video-list');
        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${video.name}</td>
        <td>${video.vurl}</td>
        <td>${video.comment}</td>
        <td><a href="#" class="delete" >X</td>
    `;

        // append books to list
        list.appendChild(row);


        // Add to local storage

    }
    showAlart(message, className) {
        //creating a div
        const div = document.createElement('div');

        div.appendChild(document.createTextNode(message));

        //give the div a class name
        div.className = `alert ${className}`;

        //get parent
        const container = document.querySelector('.pta'),
            form = document.querySelector('#video-form');

        container.insertBefore(div, form);

        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    deleteVideo(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }

    }
    clearInput() {
        document.getElementById('name').value = '';
        document.getElementById('url').value = '';
        document.getElementById('v-dis').value = '';


    }
}


//load dom content
// document.addEventListener('DOMContentLoaded', storeToLocalStorage.displayVideos);
//create eventListers
document.getElementById('video-form').addEventListener('submit', function (e) {

    //get the form values
    const name = document.getElementById('name').value,
    url = document.getElementById('url').value,
   comment = document.getElementById('v-dis').value ;

    //instantiation videos
    const video = new Video(name, url, comment);

    const ui = new UI();

    //checking for errors
    if (name === '' || url === '' || comment === '') {

        ui.showAlart(`Plase check your input fields`, 'error');
    } else {
        //ui object

        //Add book to list
        ui.addVideoToList(video);
        //show alart
        ui.showAlart('Video Successfully Added from playList  ', 'success');
        //clear user input
        ui.clearInput();


    }
    e.preventDefault();

});

//create delete listener

document.querySelector('#video-list').addEventListener('click', function (e) {

    const ui = new UI();
    ui.deleteVideo(e.target);
    ui.showAlart('Video Successfully Deleted from playList ', 'error')
    e.preventDefault();
});


