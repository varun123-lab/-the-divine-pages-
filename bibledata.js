const randomReferences = [
    "John 3:16", "Psalm 23:1", "Romans 8:28", "Philippians 4:13",
    "Genesis 1:1", "Proverbs 3:5", "Isaiah 41:10", "Matthew 6:33",
    "1 Corinthians 13:4", "Jeremiah 29:11","Mark 1:12","John 1:1" 
  ];

  function getRandomVerse() {
    const randomRef = randomReferences[Math.floor(Math.random() * randomReferences.length)];
    const display = document.getElementById('verse-display');

    fetch(`https://bible-api.com/${encodeURIComponent(randomRef)}`)
      .then(res => res.json())
      .then(data => {
        display.innerHTML = `
          <h2>${data.reference}</h2>
          <p>${data.text}</p>
          <small><em>${data.translation_name}</em></small>
        `;
      })
      .catch(err => {
        display.innerHTML = "wait";
        console.error(err);
      });
  }

