export const createChords = (arr, rules) =>
    arr.map((val, key) => {
        let thirdKey = key + 4;
        let fifthKey = key + 7;
        let seventhKey = key + 12;

        switch (rules.chordType) {
            case "major":
                thirdKey = key + 4;
                break;
            case "minor":
                thirdKey = key + 3;
                break;
            case "major7":
                thirdKey = key + 4;
                seventhKey = key + 11;
                break;
            case "minor7":
                thirdKey = key + 3;
                seventhKey = key + 10;
                break;
            case "seven":
                thirdKey = key + 4;
                seventhKey = key + 10;
                break;
            default:
                return false;
        }
        let rootNote = arr[key];

        const thirdNote =
            thirdKey > arr.length - 1
                ? arr[thirdKey - arr.length]
                : arr[thirdKey];

        const fifthNote =
            fifthKey > arr.length - 1
                ? arr[fifthKey - arr.length]
                : arr[fifthKey];

        const seventhNote =
            seventhKey > arr.length - 1
                ? arr[seventhKey - arr.length]
                : arr[seventhKey];

        const chord =
            rules.chordType === "minor" || rules.chordType === "major"
                ? [rootNote, thirdNote, fifthNote]
                : [rootNote, thirdNote, fifthNote, seventhNote];

        return rules.chordType === "minor" || rules.chordType === "major"
            ? { name: `${arr[key]} ${rules.chordType}`, notes: chord }
            : {
                  name: `${arr[key]} ${rules.chordType}`,
                  notes: chord
              };
    });
