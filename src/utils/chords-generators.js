export const chords = ({ hash, flats }, rules = { chordType: "major" }) => {
    const createChords = arr =>
        arr.map((val, key) => {
            let thirdKey = key + 4;
            const fifthKey = key + 7;

            if (rules.chordType === "major") {
                thirdKey = key + 4;
            } else if (rules.chordType === "minor") {
                thirdKey = key + 3;
            }
            const rootNote = arr[key];

            const thirdNote =
                thirdKey > arr.length - 1
                    ? arr[thirdKey - arr.length]
                    : arr[thirdKey];

            const fifthNote =
                fifthKey > arr.length - 1
                    ? arr[fifthKey - arr.length]
                    : arr[fifthKey];

            return [rootNote, thirdNote, fifthNote];
        });
    return [createChords(flats), createChords(hash)];
};
