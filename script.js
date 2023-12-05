function filterPlants() {
    const filter = document.getElementById('filter').value;

    let plants = [
        { type: 'flowers', names: ['Rose', 'Tulip', 'Daisy'] },
        { type: 'vegetables', names: ['Tomato', 'Cucumber', 'Pepper'] },
        { type: 'fruits', names: ['Apple', 'Pear', 'Cherry'] }
    ];

    let filteredPlants = plants.find(item => item.type === filter)?.names || [];
    let plantListHTML = '';
    filteredPlants.forEach(function (plant) {
        plantListHTML += '<p>' + plant + '</p>';
    });
    document.getElementById('plantList').innerHTML = plantListHTML;
}

document.getElementById('forumPostForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const postTitle = document.getElementById('postTitle').value;
    const postContent = document.getElementById('postContent').value;

    if (postTitle === '' || postContent === '') {
        alert('Please fill in both title and content for your post.');
    } else {
        alert(`Your post titled "${postTitle}" has been added.`);
    }
});
