var collection = {
  2548: {
    album: "Slippery when wet",
    artist: "Bon Jovi",
    tracks: ["Let it rock", "You give love a bad name"],
  },
  2839: {
    album: "Lateralus",
    artist: "Tool",
    tracks: ["Lateralus", "The Grudge"],
  },
  2145: {
    album: "Art Angels",
    artist: "Grimes",
    tracks: ["California", "Belly of the beat"],
  },
  2266: {
    album: "",
    artist: "Best of",
    tracks: ["Eat, Sleep, Wake", "Creature comforts"],
  },
};

function updateRecords(id, prop, value) {
  if (value === "") {
    delete collection[(id, prop)];
  } else if (prop === "tracks") {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }

  return collection;
}

console.log(updateRecords(2266, "tracks", "Chicago"));
