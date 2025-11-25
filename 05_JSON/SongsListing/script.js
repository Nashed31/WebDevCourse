

// Get HTML DOM Element References
const form = document.getElementById('songForm');
const list = document.getElementById('songList');
const submitBtn = document.getElementById('submitBtn');

// if not exisit in localStorage getempty list
// get json text and convert it to object json
let songs = JSON.parse(localStorage.getItem('songsList')) || [];

// User click the add button
form.addEventListener('submit', (e) => {
    // don't submit the form to the server yet let me handle it here
    e.preventDefault();

    // read forms data
    const title = document.getElementById('title').value;
    const url = document.getElementById('url').value;

    //TODO validate fields <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  
    // create json base on url and title
    const song = {
        id: Date.now(),  // Unique ID
        title: title,
        url: url,
        dateAdded: Date.now()
    };

   
    songs.push(song);

    saveAndRender();

    form.reset();
});

/////////////////////////////////////////////////////////////
function saveAndRender() {
 
    localStorage.setItem('songsList', JSON.stringify(songs));


    renderSongs();
}
/////////////////////////////////////////////////////////////

function renderSongs() {
    list.innerHTML = ''; // Clear current list

    songs.forEach(song => {
        // Create table row
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${song.title}</td>
            <td><a href="${song.url}" target="_blank" class="text-info">Watch</a></td>
            <td class="text-end">
                <button class="btn btn-sm btn-warning me-2" onclick="editSong(${song.id})">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn btn-sm btn-danger" onclick="deleteSong(${song.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        `;
        list.appendChild(row);
    });
}

/////////////////////////////////////////////////////////////
function deleteSong(id) {
    if(confirm('Are you sure?')) {
        // Filter out the song with the matching ID
        songs = songs.filter(song => song.id !== id);
        saveAndRender();
    }
}

// /////////////////////////////////////////////////////////////
// function editSong(id) {
    
//     const songToEdit = songs.find(song => song.id === id);


//     document.getElementById('title').value = songToEdit.title;
//     document.getElementById('url').value = songToEdit.url;
//     document.getElementById('songId').value = songToEdit.id; // Set Hidden ID

//     submitBtn.innerHTML = '<i class="fas fa-save"></i> Update';
//     submitBtn.classList.replace('btn-success', 'btn-warning');
// }

// /////////////////////////////////////////////////////////////
// function updateSong(id, title, url) {

//     const index = songs.findIndex(song => song.id == id);
    

//     songs[index].title = title;
//     songs[index].url = url;

   
//     document.getElementById('songId').value = '';
//     submitBtn.innerHTML = '<i class="fas fa-plus"></i> Add';
//     submitBtn.classList.replace('btn-warning', 'btn-success');
// }

// /////////////////////////////////////////////////////////////
// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const title = document.getElementById('title').value;
//     const url = document.getElementById('url').value;
//     const id = document.getElementById('songId').value; // Check hidden ID

//     if (id) {
//         // --- UPDATE MODE ---
//         const index = songs.findIndex(s => s.id == id);
//         songs[index].title = title;
//         songs[index].url = url;

//         // Reset Button
//         submitBtn.innerHTML = '<i class="fas fa-plus"></i> Add';
//         submitBtn.classList.replace('btn-warning', 'btn-success');
//         document.getElementById('songId').value = ''; 
//     } else {
//         // --- ADD MODE ---
//         const song = {
//             id: Date.now(),
//             title: title,
//             url: url,
//             dateAdded: Date.now()
//         };
//         songs.push(song);
//     }

//     saveAndRender();
//     form.reset();
// });

// /////////////////////////////////////////////////////////////



// document.getElementById('search').addEventListener('input', (e) => {
//     const searchTerm = e.target.value.toLowerCase();
    
//     // Create a temporary array of matches
//     const filteredSongs = songs.filter(song => 
//         song.title.toLowerCase().includes(searchTerm)
//     );
    
//     renderSongs(filteredSongs); // Render only matches
// });
// /////////////////////////////////////////////////////////////


// // Sort Event
// document.getElementById('sort').addEventListener('change', (e) => {
//     const sortBy = e.target.value;

//     if (sortBy === 'az') {
//         songs.sort((a, b) => a.title.localeCompare(b.title));
//     } else if (sortBy === 'newest') {
//         songs.sort((a, b) => b.dateAdded - a.dateAdded);
//     }

//     saveAndRender();
// });
/////////////////////////////////////////////////////////////
 
// // GLOBAL VARIABLES and load 
// const form = document.getElementById('songForm');
// const list = document.getElementById('songList');
// const submitBtn = document.getElementById('submitBtn');


// let songs = []; 


// // This runs automatically when the page finishes loading
// document.addEventListener('DOMContentLoaded', () => {
    
//     const storedData = localStorage.getItem('playlist');
//     if (storedData) {
//         // If yes, turn the JSON string back into an Array
//         songs = JSON.parse(storedData);
//     } else {
//         // If no, start with an empty array
//         songs = [];
//     }

//     // SHOW the data
//     renderSongs(songs);
// });

// ----------------------------------------------------------------------------------------
// in MIDDLE COLUMN INSTED WATCH LINK:

// <td class="align-middle">
//    <button class="btn btn-sm btn-outline-info" onclick="playVideo('${videoId}')">
//        <i class="fas fa-play"></i> Watch
//    </button>
// </td>

// -----------
// <div class="modal fade" id="videoModal" tabindex="-1" aria-hidden="true">
//   <div class="modal-dialog modal-lg modal-dialog-centered">
//     <div class="modal-content bg-black">
//       <div class="modal-header border-0">
//         <h5 class="modal-title text-white">Now Playing</h5>
//         <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body p-0">
//         <div class="ratio ratio-16x9">
//             <iframe id="videoFrame" src="" title="YouTube video" allowfullscreen></iframe>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

// -----------

// function playVideo(videoId) {
//     if(!videoId) {
//         alert("Invalid YouTube URL");
//         return;
//     }

//     const frame = document.getElementById('videoFrame');
//     const modalElement = document.getElementById('videoModal');
    
//     // Set the source to the YouTube Embed URL (autoplay=1 makes it start immediately)
//     frame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

//     // Initialize and Show Bootstrap Modal
//     // (We use 'window.bootstrap' because we loaded the CDN)
//     const myModal = new bootstrap.Modal(modalElement);
//     myModal.show();
// }


// // We listen for the Bootstrap specific event 'hidden.bs.modal'
// const videoModal = document.getElementById('videoModal');
// videoModal.addEventListener('hidden.bs.modal', () => {
//     const frame = document.getElementById('videoFrame');
//     frame.src = ''; // Wipes the source, stopping the audio
// });




// ----------------------------------------------------------------------------------------

// const API_KEY = 'YOUR_GOOGLE_API_KEY_HERE'; 

// async function fetchVideoTitle(videoId) {
//     // 1. Construct the API URL
//     const endpoint = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${API_KEY}&part=snippet`;

//     try {
//         // 2. Ask Google (Wait for reply)
//         const response = await fetch(endpoint);
//         const data = await response.json();

//         // 3. Check if video exists
//         if (data.items.length === 0) return null;

//         // 4. Return the Title
//         return data.items[0].snippet.title;

//     } catch (error) {
//         console.error("API Error:", error);
//         return null;
//     }
// }

// --------------------------------------------------------

// form.addEventListener('submit', async (e) => {
//     e.preventDefault();


//     let title = document.getElementById('title').value; // 'let' because we might change it
//     const url = document.getElementById('url').value;
//     const id = document.getElementById('songId').value;

   
//     const videoId = getYouTubeID(url);
//     if (!videoId) {
//         alert("Please enter a valid YouTube URL");
//         return;
//     }

   
//     // Only fetch if we are Adding (no ID) AND the user didn't type a title
//     if (!id && !title) {
//         // UX: Show the user we are working
//         submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Fetching...';
        
//         // PAUSE HERE while we talk to Google
//         const apiTitle = await fetchVideoTitle(videoId);
        
//         // If API works, use that title. If not, use a fallback.
//         title = apiTitle || "Unknown Video";
        
//         // UX: Reset button
//         submitBtn.innerHTML = '<i class="fas fa-plus"></i> Add';
//     }
    
//     // Fallback if title is still empty
//     if (!title) title = "Untitled Track";

//     // 4. SAVE (The Standard Logic)
//     if (id) {
//         // --- UPDATE MODE ---
//         const index = songs.findIndex(s => s.id == id);
//         songs[index].title = title;
//         songs[index].url = url;
        
//         // Reset Button UI
//         submitBtn.innerHTML = '<i class="fas fa-plus"></i> Add';
//         submitBtn.classList.replace('btn-warning', 'btn-success');
//         document.getElementById('songId').value = '';
//     } else {
      
//         const song = {
//             id: Date.now(),
//             title: title, // We used the API title!
//             url: url,
//             dateAdded: Date.now()
//         };
//         songs.push(song);
//     }

//     saveAndRender();
//     form.reset();
// });

// ----------------
// delete Require:
// <input type="text" id="title" class="form-control" placeholder="Song Title (Auto-fills if empty)">
// ------------------

